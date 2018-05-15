var CACHE_NAME = 'my-site-cache-v3';
var urlsToCache = [
  '/',
  '/index.html',
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
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});




// this.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open('static-v2').then((cache) => {
//       return cache.add(
//         '/mws-restaurant-stage-1/',
//         '/mws-restaurant-stage-1/index.html',
//         '/mws-restaurant-stage-1/restaurant.html',
//         '/mws-restaurant-stage-1/css/styles.css',
//         '/mws-restaurant-stage-1/data/restaurant.json',
//         '/mws-restaurant-stage-1/img/*',
//         '/mws-restaurant-stage-1/js/dbhelper.js',
//         '/mws-restaurant-stage-1/js/main.js',
//         '/mws-restaurant-stage-1/js/restaurant_info.js',
//       );
//     }).catch(error => console.log('Error fetching', error))
//   );
// });

// this.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//   )
// });