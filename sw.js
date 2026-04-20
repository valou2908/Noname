// Force la mise à jour immédiate
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Prend le contrôle des pages dès l'activation
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Gestion du clic sur la notification
self.addEventListener('notificationclick', (event) => {
    const notification = event.notification;
    const urlToOpen = notification.data?.url || 'Actualité.html';

    notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                // Si un onglet est déjà ouvert, on le focus
                for (let client of windowClients) {
                    if (client.url.includes(urlToOpen) && 'focus' in client) {
                        return client.focus();
                    }
                }
                // Sinon on ouvre une nouvelle fenêtre
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});
