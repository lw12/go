webpackJsonp([0],{"+E39":function(t,e,n){t.exports=!n("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,e,n){var r=n("lOnJ");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"3Eo+":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"6b1l":function(t,e){},"77Pl":function(t,e,n){var r=n("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),i=n("21It"),o=n("p1b6"),s=n("DQCr"),a=n("Oi+a"),c=n("oJlt"),u=n("GHBc"),f=n("FtD3");t.exports=function(t){return new Promise(function(e,n){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+v)}var m=a(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),s(m,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};i(e,n,o),d=null}},d.onabort=function(){d&&(n(f("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=(t.withCredentials||u(m))&&t.xsrfCookieName?o.read(t.xsrfCookieName):void 0;y&&(p[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),r.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),n(t),d=null)}),l||(l=null),d.send(l)})}},"7KvD":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"9K/l":function(t,e,n){"use strict";var r=n("mtWM"),i=n.n(r);e.b=function(t){return e={url:t},i.a.create({timeout:5e3})(e);var e},e.a=function(t){return i.a.get(t)}},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(i(e)+"="+i(t))}))}),o=s.join("&")}if(o){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}},DUeU:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){e=e||{};var n={},i=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function u(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=c(void 0,t[i])):n[i]=c(t[i],e[i])}r.forEach(i,function(t){r.isUndefined(e[t])||(n[t]=c(void 0,e[t]))}),r.forEach(o,u),r.forEach(s,function(i){r.isUndefined(e[i])?r.isUndefined(t[i])||(n[i]=c(void 0,t[i])):n[i]=c(void 0,e[i])}),r.forEach(a,function(r){r in e?n[r]=c(t[r],e[r]):r in t&&(n[r]=c(void 0,t[r]))});var f=i.concat(o).concat(s).concat(a),l=Object.keys(t).concat(Object.keys(e)).filter(function(t){return-1===f.indexOf(t)});return r.forEach(l,u),n}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var r,i=n("woOf"),o=(r=i)&&r.__esModule?r:{default:r};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},EqjI:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,i,o){var s=new Error(t);return r(s,e,n,i,o)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},I7QO:function(t,e){},Ibhu:function(t,e,n){var r=n("D2L2"),i=n("TcQ7"),o=n("vFc/")(!1),s=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,a=i(t),c=0,u=[];for(n in a)n!=s&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},JqCZ:function(t,e){},K0e8:function(t,e){},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),i=n("5VQ+"),o={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(a=n("7GwW")),a),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(o)}),t.exports=c}).call(e,n("W2nU"))},KYzi:function(t,e){},MU5D:function(t,e,n){var r=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,e,n){var r=n("EqjI");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},O4g8:function(t,e){t.exports=!0},ON07:function(t,e,n){var r=n("EqjI"),i=n("7KvD").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"Oi+a":function(t,e,n){"use strict";var r=n("dIwP"),i=n("qRfI");t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},QRG4:function(t,e,n){var r=n("UuGF"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},S82l:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SLDG:function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},SfB7:function(t,e,n){t.exports=!n("+E39")&&!n("S82l")(function(){return 7!=Object.defineProperty(n("ON07")("div"),"a",{get:function(){return 7}}).a})},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},TcQ7:function(t,e,n){var r=n("MU5D"),i=n("52gC");t.exports=function(t){return r(i(t))}},To3L:function(t,e,n){"use strict";var r=n("+E39"),i=n("lktj"),o=n("1kS7"),s=n("NpIQ"),a=n("sB3e"),c=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,f=1,l=o.f,p=s.f;u>f;)for(var d,h=c(arguments[f++]),v=l?i(h).concat(l(h)):i(h),m=v.length,y=0;m>y;)d=v[y++],r&&!p.call(h,d)||(n[d]=h[d]);return n}:u},UJ5v:function(t,e){},UuGF:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},W2nU:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,u=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&d())}function d(){if(!f){var t=a(p);f=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},X8DO:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},XmWM:function(t,e,n){"use strict";var r=n("cGG2"),i=n("DQCr"),o=n("fuGk"),s=n("xLtR"),a=n("DUeU");function c(t){this.defaults=t,this.interceptors={request:new o,response:new o}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},c.prototype.getUri=function(t){return t=a(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(t){c.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}}),r.forEach(["post","put","patch"],function(t){c.prototype[t]=function(e,n,r){return this.request(a(r||{},{method:t,url:e,data:n}))}}),t.exports=c},XwkR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),o=n("NYxO"),s={name:"Header",methods:{toCity:function(){this.$router.push("/city")}},computed:i()({},Object(o.c)(["city"]))},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"header-right",on:{click:t.toCity}},[t._v("\n  "+t._s(t.city)+"\n    "),t._v(" "),n("span",{staticClass:"iconfont"},[t._v("  ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont"},[this._v("  ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-search"},[e("span",{staticClass:"iconfont"},[this._v("  ")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var c=n("VU/8")(s,a,!1,function(t){n("sSgs")},"data-v-36bc00f0",null).exports,u={name:"HomeSwiper",props:{banners:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"},loop:!0}}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-swiper"},[e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOptions}},[this._l(this.banners,function(t,n){return e("swiper-slide",{key:n},[e("img",{attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var l=n("VU/8")(u,f,!1,function(t){n("K0e8")},"data-v-ad94a6bc",null).exports,p={name:"HomeIcon",data:function(){return{swiperOptions:{}}},props:{iconsList:{type:Array,default:function(){return[]}}},computed:{page:function(){var t=[];return this.iconsList.forEach(function(e,n){var r=Math.floor(n/8);t[r]||(t[r]=[]),t[r].push(e)}),t}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.page,function(e){return n("swiper-slide",{key:e.id},t._l(e,function(e){return n("div",{key:e.id,staticClass:"icons-item"},[n("img",{attrs:{src:e.imgUrl,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.title))])])}),0)}),1)],1)},staticRenderFns:[]};var h=n("VU/8")(p,d,!1,function(t){n("UJ5v")},"data-v-8ad96538",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"location border-top"},[e("div",{staticClass:"location-item border-right"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    定位失败\n  ")]),this._v(" "),e("div",{staticClass:"location-item"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    玩水季\n  ")])])}]};var m=n("VU/8")({name:"HomeLocation"},v,!1,function(t){n("JqCZ")},"data-v-fa54ed08",null).exports,y={name:"Activity",props:{activity:{type:Array,default:function(){return[]}}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activity border-top"},[e("div",{staticClass:"activity-item border-right"},[e("img",{attrs:{src:this.activity[0],alt:""}})]),this._v(" "),e("div",{staticClass:"activity-item"},[e("img",{attrs:{src:this.activity[1],alt:""}})])])},staticRenderFns:[]};var _=n("VU/8")(y,g,!1,function(t){n("I7QO")},"data-v-1d496544",null).exports,b={name:"Hot",props:{hotList:{type:Array,default:function(){return[]}}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot"},[t._m(0),t._v(" "),n("ul",{staticClass:"hot-list"},t._l(t.hotList,function(e,r){return n("li",{key:r,staticClass:"hot-item"},[n("img",{attrs:{src:e.img,alt:""}}),t._v(" "),n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[n("span",{staticClass:"hot-mark"},[t._v("￥"+t._s(e.mark))]),t._v("起")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hot-top"},[e("img",{attrs:{src:"https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png",alt:""}}),this._v(" "),e("span",[this._v("本周热门榜单")]),this._v(" "),e("span",{staticClass:"iconfont hot-title"},[this._v("全部榜单 ")])])}]};var w=n("VU/8")(b,x,!1,function(t){n("6b1l")},"data-v-4b522a4e",null).exports,C={name:"Like",props:{likeList:{type:Array,default:function(){return[]}}},methods:{toDetail:function(){this.$router.push("/detail")}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"like"},[t._m(0),t._v(" "),n("ul",t._l(t.likeList,function(e,r){return n("li",{key:r,staticClass:"like-item border-bottom",on:{click:t.toDetail}},[n("div",{staticClass:"like-img"},[n("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),n("div",{staticClass:"like-text"},[n("div",{staticClass:"like-title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"like-message"},[t._v(t._s(e.message)+"条评论")]),t._v(" "),n("div",{staticClass:"like-map"},[n("span",{staticClass:"like-mark"},[n("b",[t._v("￥"+t._s(e.price))])]),t._v("起\n          "),n("span",{staticClass:"like-right"},[t._v(t._s(e.address))])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"like-top"},[e("img",{attrs:{src:"https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png",alt:""}}),this._v("\n    猜你喜欢\n  ")])}]};var O=n("VU/8")(C,E,!1,function(t){n("rVeM")},"data-v-36a5c77a",null).exports,j={name:"Vacation",props:{vacation:{type:Array,default:function(){return[]}}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vacation"},[n("div",{staticClass:"vacation-title"},[t._v("周末去哪儿")]),t._v(" "),n("ul",t._l(t.vacation,function(e,r){return n("li",{key:r,staticClass:"vacation-item"},[n("div",{staticClass:"vacation-img"},[n("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),n("div",{staticClass:"vacation-msg"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.message))])])])}),0)])},staticRenderFns:[]};var L=n("VU/8")(j,k,!1,function(t){n("b+L3")},"data-v-5fc0039e",null).exports,S=n("9K/l"),R={name:"Home",data:function(){return{banners:[],iconsList:[],activity:[],hotList:[],likeList:[],vacation:[],changeCity:""}},components:{HomeHeader:c,HomeSwiper:l,HomeIcon:h,HomeLocation:m,HomeActivity:_,HomeHot:w,HomeLike:O,HomeVacation:L},computed:i()({},Object(o.c)(["city"])),methods:{getHttp:function(){var t=this;Object(S.b)("/static/api/db.json").then(function(e){e.data.data.forEach(function(e,n){e.city==t.city&&(t.banners=e.banner,t.iconsList=e.iconsList,t.activity=e.activity,t.hotList=e.hotList,t.likeList=e.likeList,t.vacation=e.vacation)})})}},mounted:function(){this.changeCity=this.city,this.getHttp()},activated:function(){this.city!=this.changeCity&&(this.getHttp(),this.changeCity=this.city)}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomeHeader"),t._v(" "),n("home-swiper",{attrs:{banners:t.banners}}),t._v(" "),n("home-icon",{attrs:{iconsList:t.iconsList}}),t._v(" "),n("home-location"),t._v(" "),n("home-activity",{attrs:{activity:t.activity}}),t._v(" "),n("home-hot",{attrs:{hotList:t.hotList}}),t._v(" "),n("home-like",{attrs:{likeList:t.likeList}}),t._v(" "),n("home-vacation",{attrs:{vacation:t.vacation}})],1)},staticRenderFns:[]};var U=n("VU/8")(R,T,!1,function(t){n("KYzi")},"data-v-2d75e474",null);e.default=U.exports},ax3d:function(t,e,n){var r=n("e8AB")("keys"),i=n("3Eo+");t.exports=function(t){return r[t]||(r[t]=i(t))}},"b+L3":function(t,e){},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),i=Object.prototype.toString;function o(t){return"[object Array]"===i.call(t)}function s(t){return void 0===t}function a(t){return null!==t&&"object"==typeof t}function c(t){if("[object Object]"!==i.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function u(t){return"[object Function]"===i.call(t)}function f(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),o(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:o,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:function(t){return null!==t&&!s(t)&&null!==t.constructor&&!s(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isPlainObject:c,isUndefined:s,isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function t(){var e={};function n(n,r){c(e[r])&&c(n)?e[r]=t(e[r],n):c(n)?e[r]=t({},n):o(n)?e[r]=n.slice():e[r]=n}for(var r=0,i=arguments.length;r<i;r++)f(arguments[r],n);return e},extend:function(t,e,n){return f(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},e8AB:function(t,e,n){var r=n("FeBl"),i=n("7KvD"),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("O4g8")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,e,n){var r=n("77Pl"),i=n("SfB7"),o=n("MmMw"),s=Object.defineProperty;e.f=n("+E39")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},fkB2:function(t,e,n){var r=n("UuGF"),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},hJx8:function(t,e,n){var r=n("evD5"),i=n("X8DO");t.exports=n("+E39")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},kM2E:function(t,e,n){var r=n("7KvD"),i=n("FeBl"),o=n("+ZMJ"),s=n("hJx8"),a=n("D2L2"),c=function(t,e,n){var u,f,l,p=t&c.F,d=t&c.G,h=t&c.S,v=t&c.P,m=t&c.B,y=t&c.W,g=d?i:i[e]||(i[e]={}),_=g.prototype,b=d?r:h?r[e]:(r[e]||{}).prototype;for(u in d&&(n=e),n)(f=!p&&b&&void 0!==b[u])&&a(g,u)||(l=f?b[u]:n[u],g[u]=d&&"function"!=typeof b[u]?n[u]:m&&f?o(l,r):y&&b[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[u]=l,t&c.R&&_&&!_[u]&&s(_,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},lOnJ:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,e,n){var r=n("Ibhu"),i=n("xnc9");t.exports=Object.keys||function(t){return r(t,i)}},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,s={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(s[e]&&i.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},rVeM:function(t,e){},sB3e:function(t,e,n){var r=n("52gC");t.exports=function(t){return Object(r(t))}},sSgs:function(t,e){},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),i=n("JP+z"),o=n("XmWM"),s=n("DUeU");function a(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var c=a(n("KCLY"));c.Axios=o,c.create=function(t){return a(s(c.defaults,t))},c.Cancel=n("dVOP"),c.CancelToken=n("cWxy"),c.isCancel=n("pBtG"),c.all=function(t){return Promise.all(t)},c.spread=n("pxG4"),c.isAxiosError=n("SLDG"),t.exports=c,t.exports.default=c},"vFc/":function(t,e,n){var r=n("TcQ7"),i=n("QRG4"),o=n("fkB2");t.exports=function(t){return function(e,n,s){var a,c=r(e),u=i(c.length),f=o(s,u);if(t&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),i=n("TNV1"),o=n("pBtG"),s=n("KCLY");function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return a(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(a(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});
//# sourceMappingURL=0.cbe6931ac93a253fecec.js.map