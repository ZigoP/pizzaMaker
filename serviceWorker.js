const cache_container = "static_v2";
const files = [
    "./",
    "./index.html",
    "./style.css",
    "./tasks.json",
    "./images"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cache_container).then(cache => {
            cache.addAll(files)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})