# 🇧🇷 Açaí Tropical — Setup Guide

## 1. Criar novo projeto no Supabase
1. Acesse [supabase.com](https://supabase.com) → **New Project**
2. Nome: `acai-tropical`
3. Após criar, vá em **Settings → API** e copie:
   - **Project URL** 
   - **anon/public key**

## 2. Preencher supabaseClient.js
Abra o arquivo e substitua:
```js
const _SUPABASE_URL = 'COLE_AQUI_A_URL_DO_PROJETO';
const _SUPABASE_KEY = 'COLE_AQUI_A_ANON_KEY';
```

## 3. Executar as migrations no SQL Editor do Supabase
Execute na ordem:
1. O schema completo (tabelas: pedidos, produtos, categorias, etc.)  
2. `migration_categorias_horario.sql` → colunas hora_inicio/hora_fim
3. `migration_horario_semanal.sql` → coluna horarios_semanais

## 4. Subir para o GitHub
```bash
git clone https://github.com/maycomorais/tropica-_acai.git
cd acai-tropical
# copiar todos os arquivos para dentro da pasta
git add .
git commit -m "🚀 Açaí Tropical — versão inicial"
git push
```

## 5. CNAME
O arquivo CNAME está com `acaitropical.online`.  
Altere se o domínio for diferente, ou delete o arquivo para usar o GitHub Pages padrão.

## Cores do tema
- **Primary:** `#58134d` (Roxo)
- **Logo URL:** `https://i.ibb.co/9m1Nb8MC/449324518-1004305660829216-5306299976994169445-n.jpg`
- **Telefone:** 
