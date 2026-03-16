// supabase/functions/validar-pedido/index.ts
// Edge Function — White Label
//
// Responsabilidade:
//   1. Recebe o payload do pedido vindo do app
//   2. Se for delivery com coordenadas, recalcula o frete no servidor
//      usando OSRM (fallback: Haversine) + tabela_frete do banco
//   3. Verifica limite_distancia_km — rejeita se ultrapassado
//   4. Corrige silenciosamente se o cliente enviou frete menor que o real
//   5. Insere o pedido com os valores corretos e retorna { id }
//
// Deploy:
//   supabase functions deploy validar-pedido --project-ref <REF>

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── Faixas de km (espelha app.js) ────────────────────────────────────────
const LIMITES_KM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// ── CORS ──────────────────────────────────────────────────────────────────
const CORS = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ── Haversine ─────────────────────────────────────────────────────────────
function distanciaReta(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ── OSRM ──────────────────────────────────────────────────────────────────
async function distanciaPelaRota(
  lat1: number, lon1: number, lat2: number, lon2: number
): Promise<number | null> {
  const url = `https://router.project-osrm.org/route/v1/driving/${lon1},${lat1};${lon2},${lat2}?overview=false`;
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(6000) });
    const d = await r.json();
    if (d.code === "Ok") return d.routes[0].distance / 1000;
    return null;
  } catch {
    return null;
  }
}

// ── Calcula frete esperado ────────────────────────────────────────────────
function calcularFreteEsperado(
  dist: number,
  tabelaFrete: Array<{ loja: number; motoboy: number; acombinar?: boolean }> | null
): { loja: number; motoboy: number; acombinar: boolean } {
  let freteIndex = -1;
  for (let i = 0; i < LIMITES_KM.length; i++) {
    if (dist <= LIMITES_KM[i]) { freteIndex = i; break; }
  }

  if (freteIndex === -1) return { loja: 0, motoboy: 0, acombinar: true };
  if (tabelaFrete?.[freteIndex]?.acombinar) return { loja: 0, motoboy: 0, acombinar: true };

  if (tabelaFrete?.[freteIndex]) {
    return {
      loja:    tabelaFrete[freteIndex].loja    || 0,
      motoboy: tabelaFrete[freteIndex].motoboy || 0,
      acombinar: false,
    };
  }

  // Fallback sem tabela
  let loja = 0;
  if      (dist <= 3) loja = 6000;
  else if (dist <= 5) loja = 12000;
  else if (dist <= 8) loja = 18000;
  else                loja = 24000 + Math.ceil(dist - 8) * 3000;
  return { loja, motoboy: loja, acombinar: false };
}

// ── Handler ───────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });

  try {
    const payload = await req.json();

    const supa = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // ── Carrega configurações: coordenadas, tabela de frete e limite ──────
    const { data: cfg } = await supa
      .from("configuracoes")
      .select("tabela_frete, coord_lat, coord_lng, limite_distancia_km")
      .single();

    const tabelaFrete    = cfg?.tabela_frete       ?? null;
    const limiteDistKm   = cfg?.limite_distancia_km ?? null;
    const coordLoja = {
      lat: parseFloat(cfg?.coord_lat ?? "0") || 0,
      lng: parseFloat(cfg?.coord_lng ?? "0") || 0,
    };

    // ── Validação de frete ────────────────────────────────────────────────
    let freteFinal     = payload.frete_cobrado_cliente ?? 0;
    let freteMotoboy   = payload.frete_motoboy         ?? 0;
    let freteACombinar = false;

    if (payload.tipo_entrega === "delivery" && payload.geo_lat && payload.geo_lng) {
      const lat = parseFloat(payload.geo_lat);
      const lng = parseFloat(payload.geo_lng);

      let dist = await distanciaPelaRota(coordLoja.lat, coordLoja.lng, lat, lng);
      if (dist === null) dist = distanciaReta(coordLoja.lat, coordLoja.lng, lat, lng);

      // Rejeita se além do limite configurado
      if (limiteDistKm && dist > limiteDistKm) {
        return new Response(
          JSON.stringify({ error: `Distância (${dist.toFixed(1)}km) excede o limite de entrega (${limiteDistKm}km).` }),
          { status: 422, headers: { ...CORS, "Content-Type": "application/json" } }
        );
      }

      const esperado = calcularFreteEsperado(dist, tabelaFrete);

      if (esperado.acombinar) {
        freteFinal     = 0;
        freteMotoboy   = 0;
        freteACombinar = true;
      } else if (payload.frete_cobrado_cliente < esperado.loja) {
        console.warn(`[validar-pedido] Frete corrigido: enviado=${payload.frete_cobrado_cliente} esperado=${esperado.loja} dist=${dist.toFixed(2)}km`);
        freteFinal   = esperado.loja;
        freteMotoboy = esperado.motoboy;
      }
    }

    // ── Monta pedido ──────────────────────────────────────────────────────
    const pedido = {
      ...payload,
      frete_cobrado_cliente: freteFinal,
      frete_motoboy:         freteMotoboy,
      frete_a_combinar:      freteACombinar,
      total_geral:
        (payload.subtotal ?? 0) -
        (payload.desconto_cupom ?? 0) +
        (payload.tipo_entrega === "delivery" ? freteFinal : 0),
    };

    const { data: salvo, error } = await supa
      .from("pedidos")
      .insert([pedido])
      .select()
      .single();

    if (error) {
      console.error("[validar-pedido] Erro:", error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...CORS, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ id: salvo.id, frete_cobrado_cliente: freteFinal, frete_a_combinar: freteACombinar }),
      { status: 200, headers: { ...CORS, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("[validar-pedido] Erro inesperado:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno" }),
      { status: 500, headers: { ...CORS, "Content-Type": "application/json" } }
    );
  }
});

