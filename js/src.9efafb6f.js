parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof g?r:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return T()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function g(){}function d(){}function m(){}var w={};u(w,i,function(){return this});var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,a,function(){return this}),t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),u(b,i,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}
},{}],"D9Nj":[function(require,module,exports) {

},{}],"K0yk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.clearList=exports.setLoader=exports.generateMap=exports.buildList=exports.getData=void 0;var e=require("./index");function t(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(d){return void r(d)}s.done?t(c):Promise.resolve(c).then(n,a)}function r(e){return function(){var r=this,n=arguments;return new Promise(function(a,o){var i=e.apply(r,n);function s(e){t(i,a,o,s,c,"next",e)}function c(e){t(i,a,o,s,c,"throw",e)}s(void 0)})}}var n="https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",a=function(){var e=r(regeneratorRuntime.mark(function e(){var t,r,a,o,i,s=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:null,r=s.length>1&&void 0!==s[1]?s[1]:null,e.prev=2,a={resource_id:"3c972b8e-9340-4b6d-8c7b-2ed988aa3343",limit:t,q:r},e.next=6,fetch(n,{body:JSON.stringify(a),method:"POST",mode:"cors",headers:{"content-type":"application/json"}});case 6:return o=e.sent,e.next=9,o.json();case 9:return i=e.sent,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(2),console.log("Error: ".concat(e.t0)),e.abrupt("return",null);case 17:case"end":return e.stop()}},e,null,[[2,13]])}));return function(){return e.apply(this,arguments)}}();exports.getData=a;var o=new Map,i=function(e,t){t.forEach(function(t){var r=document.createElement("button");r.innerHTML="".concat(t.Item_title," - ").concat(t.Artist),r.setAttribute("id","item-".concat(t._id)),r.setAttribute("value",JSON.stringify({Latitude:t.Latitude,Longitude:t.Longitude,Description:t.Description})),r.classList.add("list-group-item"),r.classList.add("list-group-item-action"),r.classList.add("listItem"),r.addEventListener("click",function(e){var t=e.target;if(o.has(t.id))console.log("remove"),document.getElementById(t.id).classList.remove("active"),d(t,"remove"),o.delete(t.id);else{console.log("add"),document.getElementById(t.id).classList.add("active");var r=d(t,"add");r?o.set(t.id,r):console.log("ERROR: Invalid Marker")}}),document.getElementById(e).appendChild(r)})};exports.buildList=i;var s=function(e,t,r,n){var a=L.map(e).setView([t,r],n);return L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(a),a};exports.generateMap=s;var c=function(e,t){var r=t.getLatLng();e.setView([r.lat,r.lng],15)},d=function(t,r){if(console.log(t),"add"===r){var n=JSON.parse(t.value),a=n.Latitude,i=n.Longitude,s=new L.Marker([a,i],{draggable:!1});return e.myMap.addLayer(s),s.bindPopup("<b>".concat(t.innerHTML,"</b><br />").concat(n.Description)).openPopup(),c(e.myMap,s),s}s=o.get(t.id);return e.myMap.removeLayer(s),null},u=function(e){var t=document.getElementById("loader");"show"===e?t.style.display="block":"hide"===e&&(t.style.display="none")};exports.setLoader=u;var l=function(e){for(var t=document.getElementById(e);t.firstChild;)t.removeChild(t.lastChild)};exports.clearList=l;
},{"./index":"H99C"}],"H99C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myMap=void 0,require("regenerator-runtime/runtime"),require("./styles.css");var e,t=require("./utils");function r(e,t,r,n,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void r(c)}i.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise(function(o,a){var s=e.apply(t,n);function i(e){r(s,o,a,i,u,"next",e)}function u(e){r(s,o,a,i,u,"throw",e)}i(void 0)})}}exports.myMap=e;var o=function(){var r=n(regeneratorRuntime.mark(function r(){var o,a,s,i,u;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=document.getElementById("searchButton"),r.next=3,(0,t.getData)(200);case 3:(a=r.sent)&&a.result?(s=a.result.records,(0,t.buildList)("itemList",s),(0,t.setLoader)("hide")):console.log("Error: Invalid Response Format"),o.addEventListener("click",function(){var e=n(regeneratorRuntime.mark(function e(r){var n,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof(n=document.getElementById("searchInput")).value){e.next=8;break}return console.log("new search: ".concat(n.value)),(0,t.setLoader)("show"),e.next=6,(0,t.getData)(200,n.value);case 6:(o=e.sent)&&o.result?(a=o.result.records,(0,t.clearList)("itemList"),(0,t.buildList)("itemList",a),(0,t.setLoader)("hide")):console.log("Error: Invalid Response Format");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),i=s[0].Latitude,u=s[0].Longitude,exports.myMap=e=(0,t.generateMap)("map",i,u,15),L.control.scale().addTo(e);case 10:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}();o();
},{"regenerator-runtime/runtime":"KA2S","./styles.css":"D9Nj","./utils":"K0yk"}]},{},["H99C"], null)
//# sourceMappingURL=/src.9efafb6f.js.map