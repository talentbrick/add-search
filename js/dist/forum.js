module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=flarum.extensions["acpl-mobile-tab"]},function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),u=n(0),c=n(2);function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var i=n(3),f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n);var r=o.prototype;return r.className=function(){return"searchmodal"},r.title=function(){return m("p",null,"What is your question?")},r.content=function(){return[items.add("search",Search.component({state:app.search}),-100)]},o}(n.n(i).a);f.isDismissible=!0;var p=u.components.MobileTab;u.components.MobileTabItem;r.a.initializers.add("talentbrick-forum-search-for-mobile-devices",(function(){Object(c.extend)(p.prototype,"items",(function(t){t.add("logIn",m(Button,{icon:"fas fa-search",className:"Button Button--link SearchMenu",onclick:function(){return app.modal.show(f,{})}},'"Search"'),89)}))}))}]);
//# sourceMappingURL=forum.js.map