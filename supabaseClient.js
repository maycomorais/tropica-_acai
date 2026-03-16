// supabaseClient.js
// ─────────────────────────────────────────────────────────────
// Preencha com os dados do seu projeto no Supabase:
//   supabase.com → Settings → API
// ─────────────────────────────────────────────────────────────

const _SUPABASE_URL = 'COLE_AQUI_A_URL_DO_PROJETO';
const _SUPABASE_KEY = 'COLE_AQUI_A_ANON_KEY';

if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error('ERRO CRÍTICO: Biblioteca Supabase não carregou.');
    alert('Erro de conexão. Por favor, recarregue a página.');
} else {
    window.supa = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
    console.log('Banco iniciado.');
}

async function checkUser() {
    const { data: { session } } = await window.supa.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
    return session;
}
