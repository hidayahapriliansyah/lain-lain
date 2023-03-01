const cacheAvailable = 'caches' in self;

console.log(cacheAvailable);

// membuka cache
caches.open('my-cache')
  .then((cache) => {
    console.log(typeof cache);
  });