const CACHE_NAME = 'v1';

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/vendor.js',
				'/bundle.js'
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				if(response) {
					return response;
				}

				const fetchRequest = event.request.clone();

				return fetch(fetchRequest).then(
					function (response) {
						if(!response || response.status !== 200 || response.type !== 'basic') {
							return response;
						}

						const responseToCache = response.clone();

						caches.open(CACHE_NAME)
							.then(function (cache) {
								cache.put(event.request, responseToCache);
							});

						return response;
					}
			)
		})
	)
});