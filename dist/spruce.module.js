var t=function(e,r){return Object.keys(e).forEach(function(n){Object.getPrototypeOf(e[n])===Object.prototype&&(e[n]=t(e[n],r))}),new Proxy(e,{set:function(e,n,i){return"object"==typeof i&&(i=t(i,r)),r(n,e[n]=i),!0}})},e={stores:{},subscribers:[],start:function(){try{var e=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){document.querySelectorAll("[x-subscribe]").forEach(function(t){t.setAttribute("x-init",function(t){var e="$store = Spruce.subscribe($el)";return t.hasAttribute("x-init")&&(e=e+"; "+t.getAttribute("x-init")),e}(t)),t.removeAttribute("x-subscribe")}),e.stores=t(e.stores,function(t,r){e.updateSubscribers(t,r)})})}catch(t){return Promise.reject(t)}},store:function(t,e){void 0===e&&(e={}),this.stores[t]||(this.stores[t]=e)},subscribe:function(t){return this.subscribers.push(t),this.stores},updateSubscribers:function(t,e){this.subscribers.forEach(function(r){"undefined"!==r.__x&&(r.__x.$data.spruce=[t,e])})}},r=window.deferLoadingAlpine||function(t){t()};window.deferLoadingAlpine=function(t){window.Spruce=e,window.Spruce.start(),r(t)};export default e;
//# sourceMappingURL=spruce.module.js.map
