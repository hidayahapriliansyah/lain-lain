const version = '1.0.0';
const CACHE_NAME = `mypwa-${version}`;
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/main.js',
];

// siklus hidup service worker
// 1. Installation
self.addEventListener('install', (e) => {
  console.log('Installing service worker ...');

  // menyimpan appshell ke caches API
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(assetsToCache))
  );
});

// Activation
self.addEventListener('activate', (e) => {
  // self.skipWaiting();
  // untuk skip berhenti menunggu service worker lama nonaktif
  console.log('Activating service worker ...');

  // menghapus cache lama
  e.waitUntil(
    caches.keys()
    .then((cacheName) => Promise.all(
      cacheName.filter((name) => name !== CACHE_NAME)
        .map((filteredName) => caches.delete(filteredName))
    ))
  );
});

// 
self.addEventListener('fetch', (e) => {
  // service worker bisa menampilkan, bahkan memanipulasi request yang dilakuakn oelh klient
  console.log(e.request);

  // sebelum akhirnya mengirim ke server
  e.respondWith(
    fetc(e.request)
  );
});

// menerima pesan yang dikirim client
self.addEventListener('message', (e) => {
  console.log(`Client mengirim pesan: ${e.data}`);
});

// listening bg sync by name tag
self.addEventListener('sync', (e) => {
  if (e.tag === 'foo') {
    e.waitUntil(dosomethingapalah());
  }
});

const options = {
// ini digunakan untuk customize tampilan notifikasi
}

self.addEventListener('push', (e) => {
  e.waitUntil(
    self.registration.showNotification('Hello Coder!', options)
  );
});