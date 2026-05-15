// sw.js

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Écoute les notifications envoyées par un serveur (Push)
self.addEventListener('push', (event) => {
    let data = { title: "Éco-Délégués", body: "Nouvel article disponible !" };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'Picture/icone.png',
        badge: 'Picture/icone.png',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || 'actualite.html'
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Gère le clic sur la notification
self.addEventListener('notificationclick', (event) => {
    const notification = event.notification;
    const urlToOpen = new URL(notification.data?.url || 'actualite.html', self.location.origin).href;

    notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                for (let client of windowClients) {
                    if (client.url === urlToOpen && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});