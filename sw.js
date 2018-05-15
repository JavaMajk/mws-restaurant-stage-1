let cacheName = 'cache1';
const cacheFiles = [
  './',
  './index.html',
  './restaurant.html',
  './data/restaurants.json',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './css/styles.css',
  './img/low-1.jpg',
  './img/low-2.jpg',
  './img/low-3.jpg',
  './img/low-4.jpg',
  './img/low-5.jpg',
  './img/low-6.jpg',
  './img/low-7.jpg',
  './img/low-8.jpg',
  './img/low-9.jpg',
  './img/low-10.jpg'
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