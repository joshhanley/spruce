!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.spruce=e()}(this,function(){var t=function(t){return null==t},e=function(n,o){return Object.keys(n).forEach(function(s){t(n[s])||Object.getPrototypeOf(n[s])!==Object.prototype||(n[s]=e(n[s],o))}),new Proxy(n,{get:function(t,e){return o.hasOwnProperty("get")&&o.get(e),t[e]},set:function(n,s,r){return t(r)||"object"!=typeof r||(r=e(r,o)),o.set(s,n[s]=r),!0}})},n={options:{globalStoreVariable:!1},events:{events:{},on:function(t,e){this.events.hasOwnProperty(t)||(this.events[t]=[]),this.events[t].push(e)},emit:function(t,e){void 0===e&&(e={}),this.events.hasOwnProperty(t)&&this.events[t].forEach(function(t){t(e)})}},stores:{},subscribers:[],start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){document.querySelectorAll("[x-subscribe]").forEach(function(t){t.setAttribute("x-init",function(t){var e="$store = Spruce.subscribe($el)";return t.hasAttribute("x-init")&&(e=e+"; "+t.getAttribute("x-init")),e}(t)),t.removeAttribute("x-subscribe")}),t.stores=e(t.stores,{set:function(e,n){t.updateSubscribers(e,n)}}),t.options.globalStoreVariable&&(document.querySelectorAll("[x-data]").forEach(function(e){t.subscribers.includes(e)||t.subscribers.push(e)}),window.$store=t.stores)})}catch(t){return Promise.reject(t)}},store:function(t,e){void 0===e&&(e={}),this.stores[t]||(this.stores[t]=e)},subscribe:function(t){return this.subscribers.push(t),this.stores},updateSubscribers:function(t,e){this.subscribers.forEach(function(t){void 0!==t.__x&&(t.__x.$data.spruce=e)})},config:function(t){void 0===t&&(t={}),this.options=Object.assign(this.options,t)},on:function(t,e){this.events.on(t,e)}},o=window.deferLoadingAlpine||function(t){t()};return window.deferLoadingAlpine=function(t){window.Spruce=n,window.Spruce.start(),o(t)},n});
//# sourceMappingURL=spruce.umd.js.map
