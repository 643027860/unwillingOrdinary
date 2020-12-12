/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf711f92ed484cdafc16fc57a68884b7"
  },
  {
    "url": "assets/css/0.styles.72bea029.css",
    "revision": "8cc08bf7ce3b1f995f280a80c9eae98a"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.73ec8b2b.js",
    "revision": "1860a031dd8ebc21c7c878b465d09e3f"
  },
  {
    "url": "assets/js/10.44898b50.js",
    "revision": "dd9878da813072bf5596406a4dcc726c"
  },
  {
    "url": "assets/js/11.57c19027.js",
    "revision": "faf8bf2e12be456fb86b530324e884e7"
  },
  {
    "url": "assets/js/12.5197bd63.js",
    "revision": "6dcbe8f0b165a601415f60549baa5b9c"
  },
  {
    "url": "assets/js/13.3f1e76b7.js",
    "revision": "6bdbb62e6d05cdc6fba1ead22d6b3e8c"
  },
  {
    "url": "assets/js/14.878aa8f0.js",
    "revision": "7c6e58662f7a06d4b4a0058438273541"
  },
  {
    "url": "assets/js/15.f0c0f7db.js",
    "revision": "9732c55879092fa087b9b95d94807f55"
  },
  {
    "url": "assets/js/3.ea7ec04c.js",
    "revision": "06ff96bd05889ae50cd48b35e2e87410"
  },
  {
    "url": "assets/js/4.f80f2e99.js",
    "revision": "d2f6db1becf6a65b3d3a09aab7e6fdcf"
  },
  {
    "url": "assets/js/5.0e2b19d6.js",
    "revision": "34c7e1b261634e239dfd8d2bb3e2c302"
  },
  {
    "url": "assets/js/6.eed67556.js",
    "revision": "f5e0fb7d8f253020f9f576a063252340"
  },
  {
    "url": "assets/js/7.f2b860fc.js",
    "revision": "02a22d5420b45389df96ed9e202a4986"
  },
  {
    "url": "assets/js/8.392c79e6.js",
    "revision": "f2f009c52136f0d769524ac8eacdcc8d"
  },
  {
    "url": "assets/js/9.53d2caf9.js",
    "revision": "0ec0c4ee4fc111b62b11a20c10032ecd"
  },
  {
    "url": "assets/js/app.a69de92e.js",
    "revision": "6c92a3973c31e0d9fb4570252bce219d"
  },
  {
    "url": "categories/index.html",
    "revision": "6a1e75f2fdd42786eef2a3b91ee83547"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "070e40f8cf816e6688d3537d8d35d9d0"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "6f54d8442929d3759cbc01689f82e441"
  },
  {
    "url": "css/base.css",
    "revision": "889df21193562b7aec2631df62d5d845"
  },
  {
    "url": "frontEnd/vue/vue-cli/index.html",
    "revision": "b3e489c1ec4708342c542bb4e5e105c6"
  },
  {
    "url": "frontEnd/vue/vue-router/index.html",
    "revision": "dabc7527c0ff18d3515cc247574348e1"
  },
  {
    "url": "frontEnd/vuepress/index.html",
    "revision": "cc43ac6e6edeb582b6d166d1222042b5"
  },
  {
    "url": "img/background.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/logo.jpg",
    "revision": "5312cd68f2456fa5a2ae53247386ce7b"
  },
  {
    "url": "index.html",
    "revision": "e3e4f25225f84a362039deb7d5350613"
  },
  {
    "url": "js/console.js",
    "revision": "c80387a86b7c605c4c1abd7fa6740026"
  },
  {
    "url": "tag/index.html",
    "revision": "e0b4b83ecae1333abb862ee391888bac"
  },
  {
    "url": "tag/router/index.html",
    "revision": "a2cc9844a9b9188657d9bb75fe6d4b40"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cf65bfa74895834165f684b76f430c58"
  },
  {
    "url": "tag/脚手架/index.html",
    "revision": "fbd5854371925b9e73f7401ec6232a3d"
  },
  {
    "url": "timeline/index.html",
    "revision": "f90e82004d5121c69d7b248ad6f81b9f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
