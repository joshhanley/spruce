function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var r=function(e,t){return function(e,t){e.exports=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,r=e.replace(/^v/,"").replace(/\+.*$/,""),n=-1===(t=r).indexOf("-")?t.length:t.indexOf("-"),i=r.substring(0,n).split(".");return i.push(r.substring(n+1)),i}function r(e){return isNaN(Number(e))?e:Number(e)}function n(t){if("string"!=typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function i(e,i){[e,i].forEach(n);for(var s=t(e),o=t(i),c=0;c<Math.max(s.length-1,o.length-1);c++){var a=parseInt(s[c]||0,10),u=parseInt(o[c]||0,10);if(a>u)return 1;if(u>a)return-1}var f=s[s.length-1],h=o[o.length-1];if(f&&h){var l=f.split(".").map(r),p=h.split(".").map(r);for(c=0;c<Math.max(l.length,p.length);c++){if(void 0===l[c]||"string"==typeof p[c]&&"number"==typeof l[c])return-1;if(void 0===p[c]||"string"==typeof l[c]&&"number"==typeof p[c])return 1;if(l[c]>p[c])return 1;if(p[c]>l[c])return-1}}else if(f||h)return f?-1:1;return 0}var s=[">",">=","=","<","<="],o={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return i.validate=function(t){return"string"==typeof t&&e.test(t)},i.compare=function(e,t,r){!function(e){if("string"!=typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===s.indexOf(e))throw new TypeError("Invalid operator, expected one of "+s.join("|"))}(r);var n=i(e,t);return o[r].indexOf(n)>-1},i}()}(t={exports:{}}),t.exports}(),n=function(e){return null==e},i=function(e){return Object.getPrototypeOf(e)===Object.prototype},s=function(e){return Array.isArray(e)},o=function(e,t){return Object.entries(e).forEach(function(r){var c=r[0],a=r[1];n(a)||!i(a)&&!s(a)||(e[c]=o(a,t))}),new Proxy(e,{get:function(e,r,n){return t.get(e,r,n)},set:function(e,r,s,c){return!n(s)&&i(s)&&(s=o(s,t)),t.set(e,r,e[r]=s,c),!0}})},c={stores:{},persistenceDriver:window.localStorage,persisted:[],subscribers:[],watchers:{},disableReactivity:!1,startingCallbacks:[],startedCallbacks:[],hasStarted:!1,start:function(){var e=this;this.startingCallbacks.forEach(function(e){return e()}),this.attach(),this.stores=o(this.stores,{get:function(t,r,n){return Object.is(n,e.stores)&&["get","set","toggle","clear"].includes(r)?e[r].bind(e):Reflect.get(t,r,n)},set:function(t,r,n,i){if(!e.disableReactivity){e.updateSubscribers(),e.runWatchers(t,r,n,i),e.disableReactivity=!0;try{e.persisted.forEach(e.updateLocalStorage.bind(e))}catch(e){}e.disableReactivity=!1}}}),this.hasStarted=!0,this.disableReactivity=!0,Object.entries(this.watchers).forEach(function(t){var r=t[0];t[1].forEach(function(t){return e.watch(r,t)})}),this.disableReactivity=!1,this.startedCallbacks.forEach(function(e){return e()})},starting:function(e){this.startingCallbacks.push(e)},started:function(e){this.startedCallbacks.push(e)},attach:function(){if(!(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")||window.Alpine&&r.compare(window.Alpine.version,"2.7.0",">=")))throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var e=this;window.Alpine.addMagicProperty("store",function(t){return e.subscribe(t),e.stores})},store:function(e,t,r){if(void 0===r&&(r=!1),"function"==typeof t&&(t=t()),r)try{this.stores[e]=this.retrieveFromLocalStorage(e,(n={},Object.entries(t).filter(function(e){return"function"==typeof e[1]}).forEach(function(e){return n[e[0]]=e[1]}),n)),this.persisted.includes(e)||this.persisted.push(e)}catch(e){}var n;return this.stores[e]||(this.stores[e]=t),this.stores[e]},reset:function(e,t){void 0!==this.stores[e]&&(this.stores[e]=t)},subscribe:function(e){return this.subscribers.includes(e)||this.subscribers.push(e),this.stores},updateSubscribers:function(){this.subscribers.filter(function(e){return!!e.__x}).forEach(function(e){e.__x.updateElements(e)})},retrieveFromLocalStorage:function(e,t){void 0===t&&(t={});var r=this.persistenceDriver.getItem("__spruce:"+e);if(!r)return null;var n=JSON.parse(r);return"object"==typeof n&&(delete(n=Object.assign(t,n)).__watchers,delete n.__key_name),n},updateLocalStorage:function(r){var n=function(r){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach(function(t){e(r,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}({},this.store(r));delete n.__watchers,delete n.__key_name,this.persistenceDriver.setItem("__spruce:"+r,JSON.stringify(this.store(r)))},get:function(e,t){return void 0===t&&(t=this.stores),e.split(".").reduce(function(e,t){return e[t]},t)},set:function(e,t,r){return void 0===r&&(r=this.stores),s(e)||(e=e.split(".")),1===e.length?r[e[0]]=t:r[e[0]]?this.set(e.slice(1),t,r[e[0]]):(r[e[0]]={},this.set(e.slice(1),t,r[e[0]]))},toggle:function(e){return this.set(e,!this.get(e))},clear:function(e){return this.persistenceDriver.removeItem("__spruce:"+e)},watch:function(e,t){var r=this;if(!this.hasStarted)return this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t),[function(){return r.unwatch(e,t)}];var o=e.split("."),c=o.reduce(function(e,t){var r=e[t];return n(r)||!i(r)&&!s(r)?e:r},this.stores),a=Object.is(c,this.get(e))?"__self":o[o.length-1];return c.__watchers||(c.__watchers=new Map),c.__watchers.has(a)||c.__watchers.set(a,new Set),c.__watchers.get(a).add(t),[function(){return r.unwatch(e,t)}]},unwatch:function(e,t){var r=e.split("."),o=r.reduce(function(e,t){var r=e[t];return n(r)||!i(r)&&!s(r)?e:r},this.stores),c=Object.is(o,this.get(e))?"__self":r[r.length-1],a=o.__watchers;a.has(c)&&a.get(c).delete(t)},watchers:function(e){var t=e.split("."),r=t.reduce(function(e,t){var r=e[t];return n(r)||!i(r)&&!s(r)?e:r},this.stores),o=Object.is(r,this.get(e))?"__self":t[t.length-1];return r.__watchers?r.__watchers.get(o):{}},runWatchers:function(e,t,r){e.__watchers&&(e.__watchers.has(t)&&e.__watchers.get(t).forEach(function(e){return e(r)}),e.__watchers.has("__self")&&e.__watchers.get("__self").forEach(function(e){return e(r,t)}))},persistUsing:function(e){if(this.persisted.length>0&&console.warn("[Spruce] You have already initialised a persisted store. Changing the driver may cause issues."),"function"!=typeof e.getItem)throw new Error("[Spruce] The persistence driver must have a `getItem(key)` method.");if("function"!=typeof e.setItem)throw new Error("[Spruce] The persistence driver must have a `setItem(key, value)` method.");if("function"!=typeof e.removeItem)throw new Error("[Spruce] The persistence driver must have a `removeItem(name)` method.");this.persistenceDriver=e}};window.Spruce=c;var a=window.deferLoadingAlpine||function(e){e()};window.deferLoadingAlpine=function(e){window.Spruce.start(),a(e)},module.exports=c;
//# sourceMappingURL=spruce.js.map
