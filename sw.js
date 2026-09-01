const CACHE='iol-formula-v8';
const STATIC=['./manifest.webmanifest','./eom_logo.png','./yes_logo.png','./icon-192.png','./icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE).then(cache=>cache.addAll(STATIC)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;

  const url=new URL(req.url);
  const isHTML=req.mode==='navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');

  if(isHTML){
    event.respondWith(
      fetch(req,{cache:'no-store'})
        .then(resp=>{
          const copy=resp.clone();
          caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});
          return resp;
        })
        .catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached=>{
      const network=fetch(req).then(resp=>{
        if(resp && resp.ok){
          const copy=resp.clone();
          caches.open(CACHE).then(c=>c.put(req,copy)).catch(()=>{});
        }
        return resp;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
