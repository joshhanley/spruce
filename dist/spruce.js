"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var e=function(e,t){return function(e,t){e.exports=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,r=e.replace(/^v/,"").replace(/\+.*$/,""),n=-1===(t=r).indexOf("-")?t.length:t.indexOf("-"),i=r.substring(0,n).split(".");return i.push(r.substring(n+1)),i}function r(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!=typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function i(e,i){[e,i].forEach(n);for(var s=t(e),o=t(i),u=0;u<Math.max(s.length-1,o.length-1);u++){var a=parseInt(s[u]||0,10),c=parseInt(o[u]||0,10);if(a>c)return 1;if(c>a)return-1}var f=s[s.length-1],p=o[o.length-1];if(f&&p){var d=f.split(".").map(r),h=p.split(".").map(r);for(u=0;u<Math.max(d.length,h.length);u++){if(void 0===d[u]||"string"==typeof h[u]&&"number"==typeof d[u])return-1;if(void 0===h[u]||"string"==typeof d[u]&&"number"==typeof h[u])return 1;if(d[u]>h[u])return 1;if(h[u]>d[u])return-1}}else if(f||p)return f?-1:1;return 0}var s=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return i.validate=function(t){return"string"==typeof t&&e.test(t)},i.compare=function(e,t,r){!function(e){if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===s.indexOf(e))throw new TypeError("Invalid operator, expected one of "+s.join("|"))}(r);var n=i(e,t);return o[r].indexOf(n)>-1},i}()}(t={exports:{}}),t.exports}(),t=function(e){return null==e},r=function(e){return Object.getPrototypeOf(e)===Object.prototype},n=function(e,i){return Object.entries(e).forEach(function(s){var o=s[0],u=s[1];t(u)||!r(u)&&!Array.isArray(u)||(e[o]=n(u,i))}),new Proxy(e,{set:function(e,s,o){return!t(o)&&r(o)&&(o=n(o,i)),i.set(e,s,e[s]=o),!0}})},i={stores:{},persistenceDriver:window.localStorage,persisted:[],subscribers:[],watchers:{},disableReactivity:!1,start:function(){var e=this;this.attach(),this.stores=n(this.stores,{set:function(t,r,n){if(!e.disableReactivity){e.updateSubscribers(),e.runWatchers(e.stores,t,r,n),e.disableReactivity=!0;try{e.persisted.forEach(e.updateLocalStorage.bind(e))}catch(e){}e.disableReactivity=!1}}})},attach:function(){if(!(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")||window.Alpine&&e.compare(window.Alpine.version,"2.7.0",">=")))throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var t=this;window.Alpine.addMagicProperty("store",function(e){return t.subscribe(e),t.stores})},store:function(e,t,r){if(void 0===r&&(r=!1),"function"==typeof t&&(t=t()),r)try{this.stores[e]=this.retrieveFromLocalStorage(e,(n={},Object.entries(t).filter(function(e){return"function"==typeof e[1]}).forEach(function(e){return n[e[0]]=e[1]}),n)),this.persisted.includes(e)||this.persisted.push(e)}catch(e){}var n;return this.stores[e]||(this.stores[e]=t),this.stores[e]},reset:function(e,t){this.stores[e]=t},subscribe:function(e){return this.subscribers.includes(e)||this.subscribers.push(e),this.stores},updateSubscribers:function(){this.subscribers.filter(function(e){return!!e.__x}).forEach(function(e){e.__x.updateElements(e)})},retrieveFromLocalStorage:function(e,t){void 0===t&&(t={});var r=JSON.parse(this.persistenceDriver.getItem("__spruce:"+e));return r?Object.assign(t,r):null},updateLocalStorage:function(e){this.persistenceDriver.setItem("__spruce:"+e,JSON.stringify(this.store(e)))},watch:function(e,t){this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t)},runWatchers:function(e,t,r,n){var i=this;if(i.watchers[r])return i.watchers[r].forEach(function(e){return e(n)});Object.keys(i.watchers).filter(function(e){return e.includes(".")}).forEach(function(s){var o=s.split(".");r===o[o.length-1]&&o.reduce(function(e,o){return(e[r]===t[r]||Object.is(t,e))&&i.watchers[s].forEach(function(e){return e(n)}),e[o]},e)})},persistUsing:function(e){if(this.persisted.length>0&&console.warn("[Spruce] You have already initialised a persisted store. Changing the driver may cause issues."),"function"!=typeof e.getItem)throw new Error("[Spruce] The persistence driver must have a `getItem(key)` method.");if("function"!=typeof e.setItem)throw new Error("[Spruce] The persistence driver must have a `setItem(key, value)` method.");this.persistenceDriver=e}};window.Spruce=i;var s=window.deferLoadingAlpine||function(e){e()};window.deferLoadingAlpine=function(e){window.Spruce.start(),s(e)},module.exports=i;
//# sourceMappingURL=spruce.js.map
