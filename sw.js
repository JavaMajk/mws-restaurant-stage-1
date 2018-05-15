this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.create('static-v1').then((cache) => {
      return cache.add(
        '/mws-restaurant-stage-1/',
        '/mws-restaurant-stage-1/index.html',
        '/mws-restaurant-stage-1/restaurant.html',
        '/mws-restaurant-stage-1/css/styles.css',
        '/mws-restaurant-stage-1/data/restaurant.json',
        '/mws-restaurant-stage-1/img/*',
        '/mws-restaurant-stage-1/js/dbhelper.js',
        '/mws-restaurant-stage-1/js/main.js',
        '/mws-restaurant-stage-1/js/restaurant_info.js',
      );
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
    .then(function (response) {
      return response || fetch(event.request);
    }));
});