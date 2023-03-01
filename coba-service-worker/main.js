const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung service worker');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.js');
    navigator.serviceWorker.ready.then((registration) => {
      // postMessage() dapat dimanfaatkan untuk menerima informasi dari client ke Service Worker
      registration.active.postMessage('Hi Service Worker!');
    });

    // bg sync dengan nama foo
    navigator.serviceWorker.ready.then((registration) => {
      return registration.sync.register('foo');
    });

    console.log('Service worker registered!');
  } catch (err) {
    console.log('Failed to register service worker', err);
  };
};

swRegister();