!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.spruce=e()}(this,function(){var t=function(t){return null==t},e=function(n,r){return Object.keys(n).forEach(function(o){t(n[o])||Object.getPrototypeOf(n[o])!==Object.prototype||(n[o]=e(n[o],r))}),new Proxy(n,{set:function(n,o,i){return t(i)||"object"!=typeof i||(i=e(i,r)),r(o,n[o]=i),!0}})},n={stores:{},subscribers:[],start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){document.querySelectorAll("[x-subscribe]").forEach(function(t){t.setAttribute("x-init",function(t){var e="$store = Spruce.subscribe($el)";return t.hasAttribute("x-init")&&(e=e+"; "+t.getAttribute("x-init")),e}(t)),t.removeAttribute("x-subscribe")}),t.stores=e(t.stores,function(e,n){t.updateSubscribers(e,n)})})}catch(t){return Promise.reject(t)}},store:function(t,e){void 0===e&&(e={}),this.stores[t]||(this.stores[t]=e)},subscribe:function(t){return this.subscribers.push(t),this.stores},updateSubscribers:function(t,e){this.subscribers.forEach(function(n){void 0!==n.__x&&(n.__x.$data.spruce=[t,e])})}},r=window.deferLoadingAlpine||function(t){t()};return window.deferLoadingAlpine=function(t){window.Spruce=n,window.Spruce.start(),r(t)},n});
//# sourceMappingURL=spruce.umd.js.map
