let cacheName = 'cache3';
const cacheFiles = [
  './',
  'https://javamajk.github.io/mws-restaurant-stage-1/',
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