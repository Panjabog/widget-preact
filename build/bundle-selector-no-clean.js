!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=(0,a.default)(s.default);e.render({selector:".widget-container",inline:!1,clean:!1})}var i=n(6),a=o(i),l=n(3),s=o(l);r()},function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var o,r,i,a,l;for(l=arguments.length;l-- >2;)J.push(arguments[l]);for(n&&n.children&&(J.length||J.push(n.children),delete n.children);J.length;)if((i=J.pop())instanceof Array)for(l=i.length;l--;)J.push(i[l]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),a="string"==typeof i,a&&r?o[o.length-1]+=i:((o||(o=[])).push(i),r=a));var s=new t(e,n||void 0,o||B);return P.vnode&&P.vnode(s),s}function o(e,t){if(t)for(var n in t)e[n]=t[n];return e}function r(e){return o({},e)}function i(e,t){for(var n=t.split("."),o=0;o<n.length&&e;o++)e=e[n[o]];return e}function a(e){return"function"==typeof e}function l(e){return"string"==typeof e}function s(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function u(e,t){return n(e.nodeName,o(r(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var o=t.split(".");return function(t){for(var r=t&&t.target||this,a={},s=a,u=l(n)?i(t,n):r.nodeName?r.type.match(/^che|rad/)?r.checked:r.value:t,c=0;c<o.length-1;c++)s=s[o[c]]||(s[o[c]]=!c&&e.state[o[c]]||{});s[o[c]]=u,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==V.push(e)&&(P.debounceRendering||I)(p)}function p(){var e,t=V;for(V=[];e=t.pop();)e._dirty&&M(e)}function d(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function h(e,t){return e.nodeName(b(e),t||K)}function m(e,t){return l(t)?e instanceof Text:l(t.nodeName)?!e._componentConstructor&&v(e,t.nodeName):a(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||d(t):void 0}function v(e,t){return e.normalizedNodeName===t||W(e.nodeName)===W(t)}function b(e){var t=r(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function y(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,o,r){if("className"===t&&(t="class"),"class"===t&&o&&"object"==typeof o&&(o=s(o)),"key"===t);else if("class"!==t||r)if("style"===t){if((!o||l(o)||l(n))&&(e.style.cssText=o||""),o&&"object"==typeof o){if(!l(n))for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"!=typeof o[i]||D[i]?o[i]:o[i]+"px"}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=e._listeners||(e._listeners={});t=W(t.substring(2)),o?u[t]||e.addEventListener(t,_,!!H[t]):u[t]&&e.removeEventListener(t,_,!!H[t]),u[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)x(e,t,null==o?"":o),null!=o&&o!==!1||e.removeAttribute(t);else{var c=r&&t.match(/^xlink\:?(.+)/);null==o||o===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",W(c[1])):e.removeAttribute(t):"object"==typeof o||a(o)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",W(c[1]),o):e.setAttribute(t,o))}else e.className=o||""}function x(e,t,n){try{e[t]=n}catch(e){}}function _(e){return this._listeners[e.type](P.event&&P.event(e)||e)}function C(e){if(y(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||W(e.nodeName);(Q[t]||(Q[t]=[])).push(e)}}function w(e,t){var n=W(e),o=Q[n]&&Q[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return o.normalizedNodeName=n,o}function N(){for(var e;e=Y.pop();)P.afterMount&&P.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,o,r,i){Z++||($=r&&void 0!==r.ownerSVGElement,ee=e&&!(X in e));var a=E(e,t,n,o);return r&&a.parentNode!==r&&r.appendChild(a),--Z||(ee=!1,i||N()),a}function E(e,t,n,o){for(var r=t&&t.attributes&&t.attributes.ref;d(t);)t=h(t,n);if(null==t&&(t=""),l(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&O(e),e=document.createTextNode(t)),e;if(a(t.nodeName))return U(e,t,n,o);var i=e,s=String(t.nodeName),u=$,c=t.children;if($="svg"===s||"foreignObject"!==s&&$,e){if(!v(e,s)){for(i=w(s,$);e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e)}}else i=w(s,$);var f=i.firstChild,p=i[X];if(!p){i[X]=p={};for(var m=i.attributes,b=m.length;b--;)p[m[b].name]=m[b].value}return!ee&&c&&1===c.length&&"string"==typeof c[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=c[0]&&(f.nodeValue=c[0]):(c&&c.length||f)&&L(i,c,n,o,!!p.dangerouslySetInnerHTML),S(i,t.attributes,p),r&&(p.ref=r)(i),$=u,i}function L(e,t,n,o,r){var i,a,l,s,u=e.childNodes,c=[],f={},p=0,d=0,h=u.length,v=0,b=t&&t.length;if(h)for(var g=0;g<h;g++){var x=u[g],_=x[X],C=b?(a=x._component)?a.__key:_?_.key:null:null;null!=C?(p++,f[C]=x):(ee||r||_||x instanceof Text)&&(c[v++]=x)}if(b)for(var g=0;g<b;g++){l=t[g],s=null;var C=l.key;if(null!=C)p&&C in f&&(s=f[C],f[C]=void 0,p--);else if(!s&&d<v)for(i=d;i<v;i++)if(a=c[i],a&&m(a,l)){s=a,c[i]=void 0,i===v-1&&v--,i===d&&d++;break}s=E(s,l,n,o),s&&s!==e&&(g>=h?e.appendChild(s):s!==u[g]&&(s===u[g+1]&&y(u[g]),e.insertBefore(s,u[g]||null)))}if(p)for(var g in f)f[g]&&O(f[g]);for(;d<=v;)s=c[v--],s&&O(s)}function O(e,t){var n=e._component;if(n)T(n,!t);else{e[X]&&e[X].ref&&e[X].ref(null),t||C(e);for(var o;o=e.lastChild;)O(o,t)}}function S(e,t,n){var o;for(o in n)t&&o in t||null==n[o]||g(e,o,n[o],n[o]=void 0,$);if(t)for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||g(e,o,n[o],n[o]=t[o],$)}function A(e){var t=e.constructor.name,n=te[t];n?n.push(e):te[t]=[e]}function G(e,t,n){var o=new e(t,n),r=te[e.name];if(j.call(o,t,n),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function R(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&P.syncComponentUpdates===!1&&e.base?f(e):M(e,1,r)),e.__ref&&e.__ref(e))}function M(e,t,n,i){if(!e._disable){var l,s,u,c,f=e.props,p=e.state,m=e.context,v=e.prevProps||f,y=e.prevState||p,g=e.prevContext||m,x=e.base,_=e.nextBase,C=x||_,w=e._component;if(x&&(e.props=v,e.state=y,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,m)===!1?l=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,m),e.props=f,e.state=p,e.context=m),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!l){for(e.render&&(s=e.render(f,p,m)),e.getChildContext&&(m=o(r(m),e.getChildContext()));d(s);)s=h(s,m);var E,L,S=s&&s.nodeName;if(a(S)){var A=b(s);u=w,u&&u.constructor===S&&A.key==u.__key?R(u,A,1,m):(E=u,u=G(S,A,m),u.nextBase=u.nextBase||_,u._parentComponent=e,e._component=u,R(u,A,0,m),M(u,1,n,!0)),L=u.base}else c=C,E=w,E&&(c=e._component=null),(C||1===t)&&(c&&(c._component=null),L=k(c,s,m,n||!x,C&&C.parentNode,!0));if(C&&L!==C&&u!==w){var U=C.parentNode;U&&L!==U&&(U.replaceChild(L,C),E||(C._component=null,O(C)))}if(E&&T(E,L!==C),e.base=L,L&&!i){for(var j=e,q=e;q=q._parentComponent;)(j=q).base=L;L._component=j,L._componentConstructor=j.constructor}}!x||n?Y.unshift(e):l||(e.componentDidUpdate&&e.componentDidUpdate(v,y,g),P.afterUpdate&&P.afterUpdate(e));var J,B=e._renderCallbacks;if(B)for(;J=B.pop();)J.call(e);Z||i||N()}}function U(e,t,n,o){for(var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,u=b(t);r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;return r&&s&&(!o||r._component)?(R(r,u,3,n,o),e=r.base):(i&&!l&&(T(i,!0),e=a=null),r=G(t.nodeName,u,n),e&&!r.nextBase&&(r.nextBase=e,a=null),R(r,u,1,n,o),e=r.base,a&&e!==a&&(a._component=null,O(a))),e}function T(e,t){P.beforeUnmount&&P.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var o=e._component;if(o)T(o,t);else if(n){n[X]&&n[X].ref&&n[X].ref(null),e.nextBase=n,t&&(y(n),A(e));for(var r;r=n.lastChild;)O(r,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function j(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function q(e,t,n){return k(n,e,{},!1,t)}var P={},J=[],B=[],z={},W=function(e){return z[e]||(z[e]=e.toLowerCase())},F="undefined"!=typeof Promise&&Promise.resolve(),I=F?function(e){F.then(e)}:setTimeout,K={},X="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",D={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},H={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},V=[],Q={},Y=[],Z=0,$=!1,ee=!1,te={};o(j.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r(n)),o(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){M(this,2)},render:function(){}}),e.h=n,e.cloneElement=u,e.Component=j,e.render=q,e.rerender=p,e.options=P})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){}function i(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}t.__esModule=!0,t.default=void 0;var l=n(1),s=n(8),u=o(s),c=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return(0,l.h)("div",{class:u.default.signinWidget},(0,l.h)("h3",null,this.props.title),(0,l.h)("a",{class:u.default.basebtn+" "+u.default.google},"Continue using Google"),(0,l.h)("a",{class:u.default.basebtn+" "+u.default.facebook},"Continue using Facebook"),(0,l.h)("hr",null),(0,l.h)("input",{type:"text",placeholder:"Email address"}),(0,l.h)("input",{type:"password",placeholder:"Password"}),(0,l.h)("div",{class:u.default.wrapper},(0,l.h)("a",{class:u.default.basebtn+" "+u.default.default,onClick:this.props.handleAuth,style:{backgroundColor:this.props.btnAccentColor}},this.props.btnText),(0,l.h)("a",{class:u.default.formFooter},"Forgot your password"),(0,l.h)("a",{class:u.default.formFooter},"I don't have an account")))},t}(l.Component);t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){}function i(e,t){if(e)return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){"function"!=typeof t&&null!==t||(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t))}t.__esModule=!0,t.default=void 0;var l,s,u=n(1),c=n(2),f=o(c),p=(s=l=function(e){function t(){var n,o,a;r(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=o=i(this,e.call.apply(e,[this].concat(s))),o.state={isAauthenticated:!1},o.handleAuth=function(){o.setState({isAauthenticated:!0})},a=n,i(o,a)}return a(t,e),t.prototype.render=function(){var e=this.state.isAauthenticated;return(0,u.h)("div",{id:"signin-widget"},e?(0,u.h)(Welcome,null):(0,u.h)(f.default,{title:this.props.title,btnAccentColor:this.props.btnAccentColor,btnText:this.props.btnText,mesage:this.props.message,handleAuth:this.handleAuth}))},t}(u.Component),l.defaultProps={title:"no-title!",message:"default prop"},s);t.default=p},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,'.RnJ_iyqEGl4chGLpwcaE1{position:relative;border-radius:6px;background:#fff;box-shadow:0 10px 20px 0 rgba(0,0,0,.1);width:100%;max-width:500px;margin:30px auto;padding:15px;font-family:sans-serif}.RnJ_iyqEGl4chGLpwcaE1 *{box-sizing:border-box}.RnJ_iyqEGl4chGLpwcaE1 hr{opacity:.2;margin:40px auto;position:relative}.RnJ_iyqEGl4chGLpwcaE1 hr:before{content:"OR";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;padding:0 10px}.RnJ_iyqEGl4chGLpwcaE1 h3{font-family:sans-serif;color:#37394c;font-size:18px;margin-bottom:30px}.RnJ_iyqEGl4chGLpwcaE1 p{font-size:14px;margin-bottom:15px;line-height:18px}.RnJ_iyqEGl4chGLpwcaE1 .gHNFNt3X5myibg6_C0sC7{width:40%;padding-right:20px}.RnJ_iyqEGl4chGLpwcaE1 .QCR2fTml77NkLIdJzCDb0{width:60%}.RnJ_iyqEGl4chGLpwcaE1 input[type=password],.RnJ_iyqEGl4chGLpwcaE1 input[type=text]{height:40px;line-height:38px;width:100%;background:#faf8f5;border:none;border-radius:4px;margin-bottom:20px;margin:15px auto;display:block;font-size:13px;font-weight:100;padding:0 12px}._31kL40q5tiK8-sXMGAKLOS{height:40px;width:100%;max-width:230px;font-family:sans-serif;text-transform:uppercase;font-size:12px;text-align:center;line-height:40px;text-decoration:none;border-radius:3px;color:#fff}._31kL40q5tiK8-sXMGAKLOS.MvZgAwAT-QbYZ9IM8AnoZ{background:#ea4335;margin:15px auto;display:block}._31kL40q5tiK8-sXMGAKLOS._2eHu6-UQYmtWxi32WoTzEo{background:#3b5998;margin:15px auto;display:block}._31kL40q5tiK8-sXMGAKLOS._1noNNiRFe4jFq6wqCOyaNi{margin:0 0 15px;display:block}.G0eeI6yqG143iv82DRkr{width:100%;max-width:500px;margin:10px auto;overflow:hidden}.G0eeI6yqG143iv82DRkr:last-child{margin-bottom:0}.JlgiXmndmAOUOKulpCuEX{font-family:sans-serif;color:#37394c;font-size:13px}.JlgiXmndmAOUOKulpCuEX a{color:#ffbb41;opacity:1}._211hPfJostjYoPWThRc423{font-family:sans-serif;color:#37394c;opacity:1;font-size:13px;display:block;width:100%;margin-bottom:15px;color:#ffbb41}',""]),t.locals={signinWidget:"RnJ_iyqEGl4chGLpwcaE1",colOne:"gHNFNt3X5myibg6_C0sC7",colTwo:"QCR2fTml77NkLIdJzCDb0",basebtn:"_31kL40q5tiK8-sXMGAKLOS",google:"MvZgAwAT-QbYZ9IM8AnoZ",facebook:"_2eHu6-UQYmtWxi32WoTzEo",default:"_1noNNiRFe4jFq6wqCOyaNi",wrapper:"G0eeI6yqG143iv82DRkr",note:"JlgiXmndmAOUOKulpCuEX",formFooter:"_211hPfJostjYoPWThRc423"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=o(n(1)),i=function(e){return e.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()})},a=function(){return document.currentScript||function(){var e=document.getElementsByTagName("script");return e[e.length-1]}()},l=function(e){var t=e.attributes,n={};return Object.keys(t).forEach(function(e){if(t.hasOwnProperty(e)){var o=t[e].name;if(!o||"string"!=typeof o)return!1;var r=o.split(/(data-props?-)/).pop();if(r=i(r),o!==r){var a=t[e].nodeValue;n[r]=a}}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}Object.assign(n,t)}}),n},s=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){t.hasOwnProperty(e)&&"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}),n},u=function(e){var t=e.selector,n=e.inline,o=e.clientSpecified,r=e.clean,i=[],l=a();if(!0===n){var u=l.parentNode;r&&(node.innerHTML=""),i.push(u)}return!0!==o||t||(t="[data-widget='"+s(l)+"']"),t&&[].forEach.call(document.querySelectorAll(t),function(e){r&&(e.innerHTML=""),i.push(e)}),i},c=function(e,t,n){t.forEach(function(t){var o=t,i=l(t)||{};return r.render(r.h(e,i),o,n)})},f=function(e){var t=e,n=!1;return{render:function(e){void 0===e&&(e={});var o=e.selector;void 0===o&&(o=null);var r=e.inline;void 0===r&&(r=!1);var i=e.clean;void 0===i&&(i=!1);var a=e.clientSpecified;void 0===a&&(a=!1);var l=u({selector:o,inline:r,clean:i,clientSpecified:a});return!n&&l.length>0?(n=!0,c(t,l,null)):void document.addEventListener("DOMContentLoaded",function(e){if(!n&&l.length>0){var s=u({selector:o,inline:r,clean:i,clientSpecified:a});return n=!0,c(t,s,null)}})}}};e.exports=f},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],l=r[2],s=r[3],u={css:a,media:l,sourceMap:s};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=v(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,o,r;if(t.singleton){var i=y++;n=b||(b=l(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var l=n[a],s=d[l.id];s.refs--,i.push(s)}if(e){var u=r(e);o(u,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.id,o,""]]);n(7)(o,{singleton:!0});o.locals&&(e.exports=o.locals)}])});
//# sourceMappingURL=bundle.js.map