const CACHE_NAME = 'liquid-launch-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/liquid-launch-rotating-hero.html',
  '/liquid-launch-packages-main.html',
  '/liquid-launch-manager-portal.html',
  '/liquid-launch-influencer-portal.html',
  '/liquid-launch-signup.html',
  '/comparison-5col-all-packages.html',
  '/comparison-2col-twitch-vs-liquid.html',
  'https://unpkg.com/lucide@latest',
  'https://cdn.prod.website-files.com/64bf6e8cda9043babe7ca006/65f44cd149e66e386d8d3da7_Crest-on-light.svg'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache.map(url => {
          // For external URLs, try to cache but don't fail if they're not available
          return cache.add(url).catch(err => {
            console.warn('Failed to cache:', url);
          });
        }));
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(error => {
          console.log('Fetch failed; returning offline page instead.', error);

          // Return a custom offline page if available
          return caches.match('/index.html');
        });
      })
  );
});

// Handle messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
