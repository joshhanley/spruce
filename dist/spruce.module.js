function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}var r=function(t){return null==t},n=function(t,e){return Object.keys(t).forEach(function(s){r(t[s])||Object.getPrototypeOf(t[s])!==Object.prototype||(t[s]=n(t[s],e))}),new Proxy(t,{get:function(t,r){return e.hasOwnProperty("get")&&e.get(r),t[r]},set:function(t,s,i){var o=t[s];return r(i)||"object"!=typeof i||(i=n(i,e)),e.set(t,s,t[s]=i,o),!0}})},s={options:{globalStoreVariable:!1},events:{watchers:{},events:{},on:function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e)},emit:function(t,e){void 0===e&&(e={}),this.events[t]&&this.events[t].forEach(function(t){t(e)}),window.dispatchEvent(new CustomEvent("spruce:"+t,{detail:e,bubbles:!0}))},watch:function(t,e){this.watchers[t]||(this.watchers[t]=[]),this.watchers[t].push(e)},runWatchers:function(t,e,r,n){var s=this;if(s.watchers[r])return s.watchers[r].forEach(function(t){return t(n,e[r])});Object.keys(s.watchers).filter(function(t){return t.includes(".")}).forEach(function(i){var o=i.split(".");r===o[o.length-1]&&o.reduce(function(t,o){return(t[r]===e[r]||Object.is(e,t))&&s.watchers[i].forEach(function(t){return t(n,e[r])}),t[o]},t)})}},stores:{},subscribers:[],start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){document.querySelectorAll("[x-subscribe]").forEach(function(t){t.setAttribute("x-init",function(t){var e="$store = Spruce.subscribe($el)";return t.hasAttribute("x-init")&&(e=e+"; "+t.getAttribute("x-init")),e}(t)),t.removeAttribute("x-subscribe")}),t.stores=n(t.stores,{set:function(e,r,n,s){t.events.runWatchers(t.stores,e,r,s),t.updateSubscribers(r,n)}}),t.options.globalStoreVariable&&(document.querySelectorAll("[x-data]").forEach(function(e){t.subscribers.includes(e)||t.subscribers.push(e)}),window.$store=t.stores)})}catch(t){return Promise.reject(t)}},store:function(t,e){void 0===e&&(e={}),this.stores[t]||(this.stores[t]=e)},subscribe:function(t){return this.subscribers.push(t),this.stores},updateSubscribers:function(t,e){this.subscribers.forEach(function(t){void 0!==t.__x&&(t.__x.$data.spruce=e)})},config:function(t){void 0===t&&(t={}),this.options=Object.assign(this.options,t)},on:function(t,e){this.events.on(t,e)},emit:function(r,n){void 0===n&&(n={}),this.events.emit(r,function(r){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?e(Object(s),!0).forEach(function(e){t(r,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(s,t))})}return r}({},n,{store:this.stores}))},watch:function(t,e){this.events.watch(t,e)}},i=window.deferLoadingAlpine||function(t){t()};window.deferLoadingAlpine=function(t){window.Spruce=s,window.Spruce.start(),i(t)};export default s;
//# sourceMappingURL=spruce.module.js.map
