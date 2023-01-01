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
    "revision": "1f2dc67952068e6c84bea0d94466c8c3"
  },
  {
    "url": "assets/css/0.styles.f72906e9.css",
    "revision": "d41e31bd5842a7e5326fc8836fee8fef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6bc4fb1a.js",
    "revision": "b1bfb46e829e2dda7f10d143330664b8"
  },
  {
    "url": "assets/js/11.25af197a.js",
    "revision": "8cea563988a3774657424ca926252ad0"
  },
  {
    "url": "assets/js/12.bd3d0979.js",
    "revision": "a036f914665ed5eaadd668cadc8a413b"
  },
  {
    "url": "assets/js/13.2e8d7aac.js",
    "revision": "0ce20bd7f05ec9ea50464946546e8f8e"
  },
  {
    "url": "assets/js/14.5274f083.js",
    "revision": "da6642c101f1ad9ffe3c96017c759d28"
  },
  {
    "url": "assets/js/2.7b8c6095.js",
    "revision": "8ce1648a11abc87ad410b56d3ff01e54"
  },
  {
    "url": "assets/js/3.a92f4e5f.js",
    "revision": "1a35ae497c915b015d3ff9f25194da50"
  },
  {
    "url": "assets/js/4.f6e750c0.js",
    "revision": "f9493214d2e2f4d0231a49fa05d4eed6"
  },
  {
    "url": "assets/js/5.1e3618f4.js",
    "revision": "598560d3daf7a74c8064fbbd0756b044"
  },
  {
    "url": "assets/js/6.4e584f87.js",
    "revision": "43e5899d0093b7e85d13f5dad0e1b57b"
  },
  {
    "url": "assets/js/7.be167751.js",
    "revision": "b5de2bca08e4775b64ffd3df170a7edb"
  },
  {
    "url": "assets/js/8.c6f8972c.js",
    "revision": "a5d01171784dfa91a34336b275f08f5c"
  },
  {
    "url": "assets/js/9.b9c4aff1.js",
    "revision": "b66bb045449c2792098d524b05af38c1"
  },
  {
    "url": "assets/js/app.7c23fc9f.js",
    "revision": "3d2631d78fde854dfb3a4fa8557736d2"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "3ea95dab42a22fb61bb352d3a5a6de4e"
  },
  {
    "url": "example.html",
    "revision": "92da4e0d90a59fdb294d73980b72c634"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "ac040dd5aeed16cf274b68e99b49bab1"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "054cdcb38fb5785df0139b73d1a3bcf2"
  },
  {
    "url": "icons/logo.png",
    "revision": "29742dfda52887bdde221babe66556d9"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "18db672a6ec0bd6f913c824deaa60a65"
  },
  {
    "url": "icons/photo.png",
    "revision": "29742dfda52887bdde221babe66556d9"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "c86c03e60c362770d521f4e4890ee964"
  },
  {
    "url": "index.html",
    "revision": "4ba839c0655705f8296518adbc648efe"
  },
  {
    "url": "organize/index.html",
    "revision": "40a23cd0cbb4c922fad02c0e8e0a9b0a"
  },
  {
    "url": "playerin/index.html",
    "revision": "cac6472932988af74c3aa71eac271f65"
  },
  {
    "url": "server/index.html",
    "revision": "bf39b8a4b8b42f1ed5e5008d23d01ff1"
  },
  {
    "url": "start.html",
    "revision": "635bac45301c4cd267a114b8fcfbb8ae"
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
