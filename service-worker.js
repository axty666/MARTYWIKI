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
    "revision": "96abd9c9249fb859fefebb1ece57b0d3"
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
    "url": "assets/js/10.4f227b1b.js",
    "revision": "4d6eb5a7b403f19591d0cd1dceb08ef4"
  },
  {
    "url": "assets/js/11.86018326.js",
    "revision": "210e0e87280d42236e66fde96c6e1c07"
  },
  {
    "url": "assets/js/12.3c3235fa.js",
    "revision": "1f93f393319fd6fd7e8ffb6b931412dd"
  },
  {
    "url": "assets/js/13.7c439a49.js",
    "revision": "4edd8e939981fb5ea427db2bad156907"
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
    "url": "assets/js/7.f24c9127.js",
    "revision": "0c4ba80b5a98d1c20ba49ca77a5c07a7"
  },
  {
    "url": "assets/js/8.127053db.js",
    "revision": "cea43ba78a3512a9750cfc4c5c3893df"
  },
  {
    "url": "assets/js/9.a590ac4d.js",
    "revision": "accbd8c0f0d4f07874d024781b241096"
  },
  {
    "url": "assets/js/app.7a11cd38.js",
    "revision": "1d2add6476d8fd99a6ed6c896ce17d56"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "3ea95dab42a22fb61bb352d3a5a6de4e"
  },
  {
    "url": "example.html",
    "revision": "8129468a7d7e45ae8404f3e2fdf6d91a"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "5b04906c2a001ea07d3191d4ef36a8ac"
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
    "revision": "10fa52d76c2bc7774c005e9d116579cb"
  },
  {
    "url": "organize/index.html",
    "revision": "65e9bf436e0c840a641e4e45026fb17d"
  },
  {
    "url": "playerin/index.html",
    "revision": "20b15b0f2d402ce562e0ac32a7f0b117"
  },
  {
    "url": "server/index.html",
    "revision": "f78974fa7f1a6c6c547ff010a25af90e"
  },
  {
    "url": "start.html",
    "revision": "56833fdc4d0c0cb862a8360d809eaefd"
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
