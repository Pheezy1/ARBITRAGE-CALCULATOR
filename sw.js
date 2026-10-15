const CACHE_NAME = 'arb-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installs the app files into the smartphone storage cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetches the files instantly even if you do not have cellular data or WiFi
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
