if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
    )
    workbox.routing.registerRoute(
        ({ request }) => request.destination === 'image',
        new workbox.strategies.CacheFirst()
    )
    workbox.routing.registerRoute(
        ({ url }) =>
            url.origin === 'https://fonts.googleapis.com' ||
            url.origin === 'https://use.fontawesome.com/' ||
            url.origin === 'https://cdn2.iconfinder.com/data/icons/',
        new workbox.strategies.StaleWhileRevalidate()
    )

    // Cache the underlying font files with a cache-first strategy for 1 year.
    workbox.routing.registerRoute(
        ({ url }) => url.origin === 'https://fonts.gstatic.com',
        new workbox.strategies.CacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30,
                }),
            ],
        })
    )

    // Cache JS and CSS files
    workbox.routing.registerRoute(
        ({ request }) =>
            request.destination === 'script' || request.destination === 'style',
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources',
        })
    )

    // Offline fallback
    const strategy = new workbox.strategies.CacheFirst()
    const urls = ['/index.html', '/']

    self.addEventListener('install', (event) => {
        // handleAll returns two promises, the second resolves after all items have been added to cache.
        const done = urls.map(
            (path) =>
                strategy.handleAll({
                    event,
                    request: new Request(path),
                })[1]
        )

        event.waitUntil(Promise.all(done))
    })
}
