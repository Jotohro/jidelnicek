/* Jídelníček — service worker.
 *
 * Strategie: síť napřed, cache jako záloha.
 * Když je signál, appka vždycky dostane aktuální soubory a rovnou si je
 * uloží. Když signál není, jede z uložené kopie. Verzi tady zvyšovat
 * nemusíš — dělá se to samo. Zvyš ji jen když změníš tenhle soubor.
 */
const VERSION = "v18";
const CACHE = "jidelnicek-" + VERSION;
const ASSETS = ["./", "./index.html", "./manifest.webmanifest",
                "./icon-192.png", "./icon-512.png", "./verze.json"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const jeDomaci = url.origin === self.location.origin;

  /* Data z GitHub API se nikdy nekešují — potřebujeme čerstvý stav. */
  if (url.hostname === "api.github.com") return;

  if (jeDomaci) {
    /* Síť napřed: online je vždycky aktuální verze, offline se sáhne do cache. */
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const kopie = res.clone();
            caches.open(CACHE).then(c => c.put(req, kopie));
          }
          return res;
        })
        .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  /* Cizí zdroje (písma) — cache napřed, ty se nemění. */
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.status === 200 && (res.type === "basic" || res.type === "cors")) {
        const kopie = res.clone();
        caches.open(CACHE).then(c => c.put(req, kopie));
      }
      return res;
    }).catch(() => hit))
  );
});
