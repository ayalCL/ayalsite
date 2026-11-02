// Offline support for the home-screen app.
// The page itself is fetched network-first, so a new version shows up on the next open;
// the cached copy is only used when there is no connection.
const CACHE_NAME = 'life-coach-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // The sign-in library is a pinned version that never changes: keep it on the phone.
  // Pinned libraries and the pose model never change: keep them on the phone.
  const pinned = (url.hostname === 'cdn.jsdelivr.net' && /@supabase\/supabase-js@|@mediapipe\/tasks-vision@/.test(url.pathname))
    || (url.hostname === 'storage.googleapis.com' && url.pathname.startsWith('/mediapipe-models/'));
  if (pinned) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }
  // Everything else from other sites (Supabase, AI, fonts) always goes to the network.
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
});
