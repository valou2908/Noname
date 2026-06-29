self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// ÉCOUTE DES NOTIFICATIONS EN ARRIÈRE-PLAN
self.addEventListener('push', (event) => {
    let data = { title: "Éco-Délégués H.R.", body: "Il y a du nouveau sur le blog !" };
    
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'icone.png', // Assurez-vous que le chemin est correct
        badge: 'icone.png',
        vibrate: [100, 50, 100],
        data: {
            url: data.url || 'actualite.html'
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// CLIC SUR LA NOTIFICATION
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