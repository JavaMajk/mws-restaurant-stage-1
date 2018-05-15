let cacheName = 'cache2';
const cacheFiles = [
  './mws-restaurant-stage-1/',
  './mws-restaurant-stage-1/index.html',
  './mws-restaurant-stage-1/restaurant.html',
  './mws-restaurant-stage-1/data/restaurants.json',
  './mws-restaurant-stage-1/js/dbhelper.js',
  './mws-restaurant-stage-1/js/main.js',
  './mws-restaurant-stage-1/js/restaurant_info.js',
  './mws-restaurant-stage-1/css/styles.css',
  './mws-restaurant-stage-1/img/low-1.jpg',
  './mws-restaurant-stage-1/img/low-2.jpg',
  './mws-restaurant-stage-1/img/low-3.jpg',
  './mws-restaurant-stage-1/img/low-4.jpg',
  './mws-restaurant-stage-1/img/low-5.jpg',
  './mws-restaurant-stage-1/img/low-6.jpg',
  './mws-restaurant-stage-1/img/low-7.jpg',
  './mws-restaurant-stage-1/img/low-8.jpg',
  './mws-restaurant-stage-1/img/low-9.jpg',
  './mws-restaurant-stage-1/img/low-10.jpg'
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