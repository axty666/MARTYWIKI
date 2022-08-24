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
    "revision": "7097c026c40baaf3ddd70baaf361e8a7"
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
    "url": "assets/js/10.1180f0f8.js",
    "revision": "f1d1051d5ba01171bf2b16e6459d6573"
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
    "url": "assets/js/8.eabc7f81.js",
    "revision": "16a99e3f04b583fe58f4d1da7300162b"
  },
  {
    "url": "assets/js/9.b9c4aff1.js",
    "revision": "b66bb045449c2792098d524b05af38c1"
  },
  {
    "url": "assets/js/app.1ee4f358.js",
    "revision": "14bd0216f8139d3b7f4505629cb76829"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "3ea95dab42a22fb61bb352d3a5a6de4e"
  },
  {
    "url": "example.html",
    "revision": "68fe88ffe1b2828f1dc7cffefcd93d20"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "a4aff089aeea44941f113cd85453384b"
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
    "revision": "038f675355b6fdc6506d42af76f2ca99"
  },
  {
    "url": "organize/index.html",
    "revision": "ce5e199e763aca7bafcf99a0f03f020b"
  },
  {
    "url": "playerin/index.html",
    "revision": "5436114de6e4078646fdd26e8bfa2bd7"
  },
  {
    "url": "server/index.html",
    "revision": "59b7357a6d6f1dbc79e4b0b2a4f411b9"
  },
  {
    "url": "start.html",
    "revision": "a2bf7b76eb35c930f8281bbd94af43c8"
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
