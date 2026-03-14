// supabaseClient.js — Açaí Tropical

const _SUPABASE_URL = 'https://sutehzylyxfauylrwgat.supabase.co';
const _SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1dGVoenlseXhmYXV5bHJ3Z2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NTQyNTgsImV4cCI6MjA4OTAzMDI1OH0.9cv4_r_eU-k4jhuqouhKiSpfqPthgILWg7LZ1q3ik-E';

if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.error("ERRO CRÍTICO: A biblioteca do Supabase não carregou. Verifique o HTML.");
    alert("Erro de conexão. Por favor, recarregue a página.");
} else {
    window.supa = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
    console.log("Açaí Tropical — Banco iniciado com sucesso");
}

async function checkUser() {
    const { data: { session } } = await window.supa.auth.getSession();
    if (!session) {
        window.location.href = 'login.html';
    }
    return session;
}
