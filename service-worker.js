// Service Worker para notificaciones
const CACHE_NAME = 'tratamiento-ocular-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // Ignorar errores si los archivos no están en caché
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  // Para archivos importantes, siempre buscar en red primero
  if (event.request.url.includes('index.html') || event.request.url.includes('service-worker.js')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            // Cachear la respuesta nueva
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Para otros archivos, usar caché primero
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }).catch(() => {
        return caches.match('./index.html');
      })
    );
  }
});

// Manejar mensajes desde la página
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = event.data;
    self.registration.showNotification(title, options);
  }
});

// Manejar clics en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('./');
      }
    })
  );
});
