parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"rFDk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=void 0;var e=r(require("./update.pug"));function r(e){return e&&e.__esModule?e:{default:e}}function n(e,r,n,t,u,o,s){try{var a=e[o](s),c=a.value}catch(i){return void n(i)}a.done?r(c):Promise.resolve(c).then(t,u)}function t(e){return function(){var r=this,t=arguments;return new Promise(function(u,o){var s=e.apply(r,t);function a(e){n(s,u,o,a,c,"next",e)}function c(e){n(s,u,o,a,c,"throw",e)}a(void 0)})}}require("./update.scss"),require("./blue.scss");var u,o,s=function(){return i(),e.default};function a(e){u=e,console.log("Blue screen when progress reach ".concat(e,"%"))}function c(e){o=e,console.log("Add progress every ".concat(o," milliseconds"))}function i(){return p.apply(this,arguments)}function p(){return(p=t(regeneratorRuntime.mark(function e(){var r,n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(Math.floor(40*Math.random())+61),c(1e3),e.next=4,l();case 4:r=e.sent,n=1;case 6:if(!(n<=u)){e.next=12;break}return e.next=9,f(1e3*Math.random()+o);case 9:r.innerText=n++,e.next=6;break;case 12:return e.next=14,require("_bundle_loader")(require.resolve("./blue.pug"));case 14:t=e.sent,document.querySelector(".app-wrapper").innerHTML=t;case 16:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(e){return new Promise(function(r){return setTimeout(r,e)})}function l(){return d.apply(this,arguments)}function d(){return(d=t(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=null;case 1:if(r){e.next=7;break}return e.next=4,v();case 4:r=e.sent,e.next=1;break;case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function v(){return new Promise(function(e){setTimeout(function(){var r=document.querySelector("#progress");e(r)})})}exports.render=s;
},{"./update.pug":"AOSf","./update.scss":"4d99","./blue.scss":"BL0c","_bundle_loader":"z1Am","./blue.pug":[["blue.d656c588.html","H+Oz"],"H+Oz"]}],"Bh1I":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"z1Am":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new u(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(s))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function s(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),s=n[i];return s?o[e]=s(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}):void 0}function u(r){this.executor=r,this.promise=null}u.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},u.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Bh1I"}],"cUwr":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("html",require("cUwr"));b.load([["update.7cb51e72.html","AOSf"]]).then(function(){require("rFDk");});
},{}]},{},[0], null)
//# sourceMappingURL=/fake-screen/win10.f97216f8.map