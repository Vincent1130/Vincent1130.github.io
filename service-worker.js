if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let n={};const r=e=>s(e,l),p={module:{uri:l},exports:n,require:r};i[l]=Promise.all(a.map((e=>p[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/index.css",revision:"1d392808154347bddf084a13c9280542"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"404.html",revision:"4db97c64eed4ee2eced1006e05bfb102"},{url:"js/main.js",revision:"e530dfa5834afd77b8dcbb07c38bc45e"},{url:"js/search/algolia.js",revision:"dff0d830ab1d005f1eda1ea299c724cc"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"bd9f7c3f385d1a9a448243c0bf966625"},{url:"js/utils.js",revision:"1f9cb97213595fe0527ad0ac2cc28c3c"},{url:"anzhiyu/random.js",revision:"ed0810b413e131fc8eb503a99958a8a8"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"6fa9d4f5a5bec7ca4f9ba01260445cfc"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/apple-splash-1125-2436.jpg",revision:"20ccc4b2655c31ced99616fb89083b5b"},{url:"img/siteicon/apple-splash-1136-640.jpg",revision:"97d9eedda90e198bf2f9050e67232dfd"},{url:"img/siteicon/apple-splash-1170-2532.jpg",revision:"90540abb1361a1ce4c6e52abf7615e98"},{url:"img/siteicon/apple-splash-1179-2556.jpg",revision:"0e53ff785be622e59456940e2d8cee54"},{url:"img/siteicon/apple-splash-1242-2208.jpg",revision:"2580380fd081b1197b16a7a98c1000a0"},{url:"img/siteicon/apple-splash-1242-2688.jpg",revision:"5fd00b3c5a467cadd7f966409cba28e1"},{url:"img/siteicon/apple-splash-1284-2778.jpg",revision:"7e23a37bae0b1e790a72826887745633"},{url:"img/siteicon/apple-splash-1290-2796.jpg",revision:"8f2f9c769b227093b3c793c7cd4b369c"},{url:"img/siteicon/apple-splash-1334-750.jpg",revision:"1460e10508447d1b0330ffd1cb167df8"},{url:"img/siteicon/apple-splash-1536-2048.jpg",revision:"d5cfedd94ba8b0f2f406e999344a817f"},{url:"img/siteicon/apple-splash-1620-2160.jpg",revision:"de5e47321b1bfd25df41046aa20bb976"},{url:"img/siteicon/apple-splash-1668-2224.jpg",revision:"7ad96a557b37b3267d44995098a349e8"},{url:"img/siteicon/apple-splash-1668-2388.jpg",revision:"ca9d786423577999a2e1230a8c02a224"},{url:"img/siteicon/apple-splash-1792-828.jpg",revision:"f8baf3bd4af23a022060a49adfa66f41"},{url:"img/siteicon/apple-splash-2048-1536.jpg",revision:"e3005aab973eb61b61ab46603e339f2e"},{url:"img/siteicon/apple-splash-2048-2732.jpg",revision:"d6d4c30a4df8fe4a24a19b9a6cc960a5"},{url:"img/siteicon/apple-splash-2160-1620.jpg",revision:"1f780e869c77847872959602165ea35b"},{url:"img/siteicon/apple-splash-2208-1242.jpg",revision:"8e3b8a60b10fb432bf1b41ced395db95"},{url:"img/siteicon/apple-splash-2224-1668.jpg",revision:"77b51bfa6e5ee8eb1c6db6b7221268f1"},{url:"img/siteicon/apple-splash-2388-1668.jpg",revision:"2f2fa15665baffd6a2f373f7a9366116"},{url:"img/siteicon/apple-splash-2436-1125.jpg",revision:"7160caf9ce67239b8763afd16bde7394"},{url:"img/siteicon/apple-splash-2532-1170.jpg",revision:"4d6b730ed67e8fcb35ca3650842d4c0b"},{url:"img/siteicon/apple-splash-2556-1179.jpg",revision:"d320872d7cc36fa9fd01abe20447d3f1"},{url:"img/siteicon/apple-splash-2688-1242.jpg",revision:"e1a98e03ccf491c59851113748dffac4"},{url:"img/siteicon/apple-splash-2732-2048.jpg",revision:"3d240189fe715e0343f4308b77d93348"},{url:"img/siteicon/apple-splash-2778-1284.jpg",revision:"d2bed13f39980cf94c510c2374b4402e"},{url:"img/siteicon/apple-splash-2796-1290.jpg",revision:"fe22396b3be732549811961a2f940a57"},{url:"img/siteicon/apple-splash-640-1136.jpg",revision:"4a858ef19ad8694697320adce6aabb46"},{url:"img/siteicon/apple-splash-750-1334.jpg",revision:"77ac8f425a1a02c67f75202272bad88e"},{url:"img/siteicon/apple-splash-828-1792.jpg",revision:"6f68beea66cffae2cde5b4f5b4f7be38"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"manifest.json",revision:"7390f8f2ef43dc5e09f5db5354e712db"},{url:"/",revision:"index-20240121145927464"},{url:"music/",revision:"music-20240121145927464"},{url:"about/",revision:"about-20240121145927464"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
