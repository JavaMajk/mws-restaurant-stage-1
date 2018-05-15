let cacheName = 'cache1';
const cacheFiles = [
  './',
];

self.addEventListener('install', event => {
  console.log('SW Installed');

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('SW Caching files');
      return cache.addAll(cacheFiles);
    })
  )

});

self.addEventListener('activate', event => console.log('SW Activated'));

self.addEventListener('fetch', event => console.log('SW Fetched', event.request.url));