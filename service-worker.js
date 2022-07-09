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
    "revision": "4463ac539ed33c6a4fd2432e97ec01c4"
  },
  {
    "url": "assets/css/0.styles.05debbe5.css",
    "revision": "434e247dbcd28b5d37325e9d3bff3d42"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9abb9929.js",
    "revision": "6f8cb22a45d9294eb741969ae586e3be"
  },
  {
    "url": "assets/js/11.5e4a1ac0.js",
    "revision": "b7738cf8a3d90a725ad1a24ffe26db73"
  },
  {
    "url": "assets/js/12.3507ba8e.js",
    "revision": "13564017e8c691737b03bfe574ab6248"
  },
  {
    "url": "assets/js/13.9d2bca77.js",
    "revision": "4ab4a288c8d25757f850cd94e208ea51"
  },
  {
    "url": "assets/js/2.0c6a0924.js",
    "revision": "2bac7a810c4c68f122a778780d4a983f"
  },
  {
    "url": "assets/js/3.5ef26341.js",
    "revision": "77a720ae130cd2479da44c419b55dc72"
  },
  {
    "url": "assets/js/4.775b7482.js",
    "revision": "c83412336bf8d9ec7479eb78fdac4512"
  },
  {
    "url": "assets/js/5.e1a87544.js",
    "revision": "61b5b22fae459b1a107cc911a82c4a2e"
  },
  {
    "url": "assets/js/6.f38644c4.js",
    "revision": "31cac1ac84411392191dfa89cb7cea88"
  },
  {
    "url": "assets/js/7.5f511c31.js",
    "revision": "c567197c16b751e788e63510ce72bf32"
  },
  {
    "url": "assets/js/8.5850cc65.js",
    "revision": "800756b3835f61483abe6e59df6a807f"
  },
  {
    "url": "assets/js/9.ff1b3224.js",
    "revision": "e5fe1a58c4e9d9c013fc7f72d1bc8e2b"
  },
  {
    "url": "assets/js/app.3f23cd06.js",
    "revision": "f55b051d13bcd1a082e76e083e1c95fa"
  },
  {
    "url": "CCopyBoard.js",
    "revision": "3ea95dab42a22fb61bb352d3a5a6de4e"
  },
  {
    "url": "example.html",
    "revision": "02993d1fa723e81d610c9c69f47049f7"
  },
  {
    "url": "gengwiki/index.html",
    "revision": "b6b4b22aab99ee2612fc6ccb4be464e9"
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
    "revision": "9f9a87250172310cb020c14fa272e819"
  },
  {
    "url": "organize/index.html",
    "revision": "cbcfe6e58f022e5e7841e32925c3ae9f"
  },
  {
    "url": "playerin/index.html",
    "revision": "a0aefba464e064dd14842b64e57b6db1"
  },
  {
    "url": "start.html",
    "revision": "0f7a0b21c88fa35cb4aa9049e5e12bda"
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
