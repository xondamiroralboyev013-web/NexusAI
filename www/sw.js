const CACHE_NAME = 'nexusai-pro-v2';
const urlsToCache = [
  '/app.html',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/marked@4.3.0/marked.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap'
];

// Install event - cache qilish
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch(err => console.log('Cache failed:', err))
  );
  self.skipWaiting();
});

// Fetch event - network-first strategiya
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Agar response bo'lsa, cache'ga saqlash
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Agar network ishlamasa, cache'dan qaytarish
        return caches.match(event.request);
      })
  );
});

// Activate event - eski cache'larni tozalash
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Push notification qabul qilish
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Yangi xabar!',
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Ko\'rish', icon: 'icon-192.png'},
      {action: 'close', title: 'Yopish', icon: 'icon-192.png'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification('NexusAI', options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
