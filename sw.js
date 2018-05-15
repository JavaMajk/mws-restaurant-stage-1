/* =============================================================== */
/* EXAMPLE FROM: https://developers.google.com/web/fundamentals/codelabs/offline/ */
/* =============================================================== */

const CACHE_NAME = 'my-site-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=9',
  '/restaurant.html?id=10',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
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