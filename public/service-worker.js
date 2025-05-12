const CACHE_NAME = 'moikas-blog-cache-v1';
const urls_to_cache = [
  '/',
  '/favicon.ico',
  '/manifest.json',
  // Add more static assets as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urls_to_cache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cache_names =>
      Promise.all(
        cache_names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
}); 