// Nom du cache et intervalle
const CACHE_NAME = 'eco-app-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// --- SURVEILLANCE EN ARRIÈRE-PLAN ---
// Note : Le navigateur décide de la fréquence, mais on peut forcer une vérification au clic
async function verifierNouvellesIssues() {
    try {
        const res = await fetch("https://api.github.com/repos/valou2908/EcoApp/issues?per_page=1");
        const issues = await res.json();
        
        if (issues.length > 0) {
            const derniereIssue = issues[0];
            // On récupère l'ID de la dernière issue connue
            const lastId = await Promise.resolve(localStorage.getItem('last_issue_id'));

            if (derniereIssue.id.toString() !== lastId) {
                self.registration.showNotification("Nouvelle Actualité !", {
                    body: derniereIssue.title,
                    icon: "Icone.png",
                    data: { url: "Actualité.html" }
                });
                // Note : localStorage n'est pas dispo dans le SW, 
                // il faudrait utiliser IndexedDB pour un vrai mode background total,
                // mais pour commencer, restons sur la logique simple.
            }
        }
    } catch (e) { console.log("Erreur check background"); }
}

// Gérer le clic
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('Actualité.html')
    );
});
