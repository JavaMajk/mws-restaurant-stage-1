/* =============================================================== */
/* EXAMPLE FROM: https://developers.google.com/web/fundamentals/codelabs/offline/ */
/* =============================================================== */

const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [
  '/mws-restaurant-stage-1/',
  '/mws-restaurant-stage-1/index.html',
  '/mws-restaurant-stage-1/restaurant.html?id=1',
  '/mws-restaurant-stage-1/restaurant.html?id=2',
  '/mws-restaurant-stage-1/restaurant.html?id=3',
  '/mws-restaurant-stage-1/restaurant.html?id=4',
  '/mws-restaurant-stage-1/restaurant.html?id=5',
  '/mws-restaurant-stage-1/restaurant.html?id=6',
  '/mws-restaurant-stage-1/restaurant.html?id=7',
  '/mws-restaurant-stage-1/restaurant.html?id=8',
  '/mws-restaurant-stage-1/restaurant.html?id=9',
  '/mws-restaurant-stage-1/restaurant.html?id=10',
  '/mws-restaurant-stage-1/js/main.js',
  '/mws-restaurant-stage-1/js/dbhelper.js',
  '/mws-restaurant-stage-1/js/restaurant_info.js',
  '/mws-restaurant-stage-1/css/styles.css',
  '/mws-restaurant-stage-1/data/restaurants.json',
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }).catch((error) => console.log('Caching error: ', error))
  );
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});