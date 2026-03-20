const CACHE_NAME = 'app-v2';

const BLOCKED_ORIGINS = [
  'instagram.', 'fbcdn.net', 'facebook.com',
  'chrome-extension://', 'accounts.google.',
];

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/admin.html',
  '/admin.css',
  '/admin.js',
  '/app.js',
  '/style.css',
  '/supabaseClient.js',
  '/turnos.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(ASSETS_TO_CACHE.map(url => cache.add(url).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Arquivos JS/HTML principais: sempre Network-First (nunca ficam presos em cache)
const NETWORK_FIRST = ['/app.js', '/admin.js', '/admin.html', '/index.html', '/atend.html', '/turnos.html'];

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  const shouldSkip = BLOCKED_ORIGINS.some(d => url.includes(d));
  if (shouldSkip) return;
  if (event.request.method !== 'GET') return;
  if (url.includes('supabase.co') || url.includes('supabase.io')) return;

  const path = new URL(url).pathname;
  const isNetworkFirst = NETWORK_FIRST.some(f => path.endsWith(f));

  if (isNetworkFirst) {
    // Network-First: tenta rede, só usa cache se offline
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const toCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then(c => c || new Response('Offline', { status: 503 })))
    );
    return;
  }

  // Cache-First para assets estáticos (CSS, imagens, fontes)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === 'opaque') return response;
          const toCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, toCache));
          return response;
        })
        .catch(() => new Response('Offline', { status: 503 }));
    })
  );
});
