"use strict";var precacheConfig=[["/index.html","ca257c5159cea59739030519f1fd5ee8"],["/static/css/touch.css","8c10518828fca13094e60cd7c5597b1d"],["/static/js/touch.js","cf884e37b49588a2c4c289b70c15ecb0"],["/static/media/YS Text-Bold Italic.0b6a8294.eot","0b6a82940adb213d428e5c8b629063a7"],["/static/media/YS Text-Bold Italic.2d7af0bb.ttf","2d7af0bb7dc4b8595bba19268b31303f"],["/static/media/YS Text-Bold Italic.5d680645.woff","5d680645e31ac06ccd3b45d1ec83f0bc"],["/static/media/YS Text-Bold Italic.9c11af11.woff2","9c11af114bd925915660e134aa421d69"],["/static/media/YS Text-Bold Italic.ff86765e.svg","ff86765e8b60fed5091b1cac2bd7c8a9"],["/static/media/YS Text-Bold.4a38e4aa.ttf","4a38e4aae17e0dde12aded5a6d4d3656"],["/static/media/YS Text-Bold.a1a31d78.svg","a1a31d78c65fcf1edd7d35b984d82315"],["/static/media/YS Text-Bold.e1048c67.eot","e1048c6794d6c6f04ebeedf2d4ca6785"],["/static/media/YS Text-Bold.e199e5b5.woff","e199e5b56a6575ef46e399512e1666f6"],["/static/media/YS Text-Bold.e783c489.woff2","e783c489351712fa80a7cb4206cffd02"],["/static/media/YS Text-Light Italic.21ba88b6.ttf","21ba88b6702d875e76429515e04ed98f"],["/static/media/YS Text-Light Italic.21f77a19.eot","21f77a19e9a08a8e7d252af53213ebd2"],["/static/media/YS Text-Light Italic.5b18891b.woff2","5b18891b361cc1c3235fbc74f1cbc060"],["/static/media/YS Text-Light Italic.8e4b4011.svg","8e4b4011cca0d3b6ed2be51f752ef77e"],["/static/media/YS Text-Light Italic.f9452fd4.woff","f9452fd4f0fbfad45b2a6ca503eb199a"],["/static/media/YS Text-Light.41586fa0.eot","41586fa0298ff7112dfffb6ff73e7da3"],["/static/media/YS Text-Light.9e626b12.ttf","9e626b12cf353c0d19cd7689c79cca0e"],["/static/media/YS Text-Light.cd766844.woff2","cd7668442dd75256d0333466992b0885"],["/static/media/YS Text-Light.e153401b.svg","e153401b0ad6618dc39c1428e1f8b65d"],["/static/media/YS Text-Light.fe95ed78.woff","fe95ed78d9ea0199fbf94de0eb9a9629"],["/static/media/YS Text-Medium Italic.1cd34f2a.woff","1cd34f2ace03768ca1ba73b550ceb462"],["/static/media/YS Text-Medium Italic.3b125580.svg","3b125580891a55def67f6cb014f6eaf1"],["/static/media/YS Text-Medium Italic.ab03ff85.eot","ab03ff85533306138d2c1a357ea392ba"],["/static/media/YS Text-Medium Italic.ce67597f.woff2","ce67597fb69fbec295a0a3631ffba5a5"],["/static/media/YS Text-Medium Italic.d2eec7cd.ttf","d2eec7cd214d7480b6d2d4955ffa43b1"],["/static/media/YS Text-Medium.35dcebdb.eot","35dcebdbec2e8d191be6d36d68dff8b8"],["/static/media/YS Text-Medium.4cf967da.woff","4cf967da363adfdd893c9edf455b3925"],["/static/media/YS Text-Medium.4d9a5f63.svg","4d9a5f6305b1bb2ae63914386e2653a7"],["/static/media/YS Text-Medium.5e725876.woff2","5e725876afc3f9b5eb47fd7577948ed0"],["/static/media/YS Text-Medium.627b71ec.ttf","627b71ec848321b4b5f0dba207714ca8"],["/static/media/YS Text-Regular Italic.11d9a641.woff2","11d9a641b804956de187ee06b3d2ea3c"],["/static/media/YS Text-Regular Italic.4d81550e.eot","4d81550ee35a8dfd8f8e6d6126bd7ce3"],["/static/media/YS Text-Regular Italic.51cc7b61.ttf","51cc7b611a36354f6f7ce22fde8525b5"],["/static/media/YS Text-Regular Italic.53fe2306.svg","53fe2306c474e9ebd1a990a86ee5c9d3"],["/static/media/YS Text-Regular Italic.5e71e73c.woff","5e71e73ca62b6b158cda5ec38d57b7ee"],["/static/media/YS Text-Regular.40f4030e.eot","40f4030ec15fb0a45a9b06d0c43d59ed"],["/static/media/YS Text-Regular.bd0d0add.ttf","bd0d0addb9e0fc17b1ad87b6207ab99a"],["/static/media/YS Text-Regular.e759fb47.woff","e759fb47a2a9c31c8e94a666a9b742e6"],["/static/media/YS Text-Regular.ef6e15d0.svg","ef6e15d04049be74f3657d0ad2692a2c"],["/static/media/YS Text-Regular.f8883ab9.woff2","f8883ab9c4a452a0bfe3c5cf9619db86"],["/static/media/icon_details.0ccd7d9d.svg","0ccd7d9d07e5c08349d5c88cbb415028"],["/static/media/icon_like.cba8c483.svg","cba8c48345588de32e3f14754e1661bd"],["/touch.html","896ddee2c1f5e647ba21fb492e73cad1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var i="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});))}});