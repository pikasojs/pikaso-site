(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[24],{250:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(248);function o(e,t,r){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}},o(e,t,r||e)}},251:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(48);function o(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(n.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw a}}}}},260:function(e,t,r){"use strict";var n=r(0),o={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var r=Object(n.useRef)(document.title);document.title!==e&&(document.title=e),Object(n.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=r.current}:void 0}),[])}:function(e){}},475:function(e,t,r){"use strict";var n=r(14),o=r(3),i=r(1),a=r(0),c=(r(7),r(5)),s=r(220),u=r(8),p=r(9),l=r(102),f=r(2),d=Object(l.a)(Object(f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(165),h=r(221);function v(e){return Object(m.a)("MuiAvatar",e)}Object(h.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(u.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return Object(i.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:t.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),y=Object(u.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),O=Object(u.a)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var w=a.forwardRef((function(e,t){var r=Object(p.a)({props:e,name:"MuiAvatar"}),u=r.alt,l=r.children,d=r.className,m=r.component,h=void 0===m?"div":m,w=r.imgProps,j=r.sizes,x=r.src,T=r.srcSet,R=r.variant,E=void 0===R?"circular":R,P=Object(o.a)(r,b),S=null,k=function(e){var t=e.crossOrigin,r=e.referrerPolicy,o=e.src,i=e.srcSet,c=a.useState(!1),s=Object(n.a)(c,2),u=s[0],p=s[1];return a.useEffect((function(){if(o||i){p(!1);var e=!0,n=new Image;return n.onload=function(){e&&p("loaded")},n.onerror=function(){e&&p("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=o,i&&(n.srcset=i),function(){e=!1}}}),[t,r,o,i]),u}(Object(i.a)({},w,{src:x,srcSet:T})),M=x||T,D=M&&"error"!==k,L=Object(i.a)({},r,{colorDefault:!D,component:h,variant:E}),A=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(s.a)(r,v,t)}(L);return S=D?Object(f.jsx)(y,Object(i.a)({alt:u,src:x,srcSet:T,sizes:j,ownerState:L,className:A.img},w)):null!=l?l:M&&u?u[0]:Object(f.jsx)(O,{className:A.fallback}),Object(f.jsx)(g,Object(i.a)({as:h,ownerState:L,className:Object(c.a)(A.root,d),ref:t},P,{children:S}))}));t.a=w},854:function(e,t,r){"use strict";var n=r(14),o=r(10),i=r(3),a=r(1),c=r(0),s=(r(7),r(5)),u=r(220),p=r(218),l=r(8),f=r(33),d=r(9),m=r(12),h=r(523);function v(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect();return{width:r.width/1,height:r.height/1,top:r.top/1,right:r.right/1,bottom:r.bottom/1,left:r.left/1,x:r.left/1,y:r.top/1}}function b(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function g(e){var t=b(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e instanceof b(e).Element||e instanceof Element}function O(e){return e instanceof b(e).HTMLElement||e instanceof HTMLElement}function w(e){return"undefined"!==typeof ShadowRoot&&(e instanceof b(e).ShadowRoot||e instanceof ShadowRoot)}function j(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return((y(e)?e.ownerDocument:e.document)||window.document).documentElement}function T(e){return v(x(e)).left+g(e).scrollLeft}function R(e){return b(e).getComputedStyle(e)}function E(e){var t=R(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function P(e,t,r){void 0===r&&(r=!1);var n=O(t),o=O(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1;return 1!==r||1!==n}(t),i=x(t),a=v(e,o),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&(("body"!==j(t)||E(i))&&(c=function(e){return e!==b(e)&&O(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:g(e);var t}(t)),O(t)?((s=v(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=T(i))),{x:a.left+c.scrollLeft-s.x,y:a.top+c.scrollTop-s.y,width:a.width,height:a.height}}function S(e){var t=v(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function k(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(w(e)?e.host:null)||x(e)}function M(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:O(e)&&E(e)?e:M(k(e))}function D(e,t){var r;void 0===t&&(t=[]);var n=M(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=b(n),a=o?[i].concat(i.visualViewport||[],E(n)?n:[]):n,c=t.concat(a);return o?c:c.concat(D(k(a)))}function L(e){return["table","td","th"].indexOf(j(e))>=0}function A(e){return O(e)&&"fixed"!==R(e).position?e.offsetParent:null}function C(e){for(var t=b(e),r=A(e);r&&L(r)&&"static"===R(r).position;)r=A(r);return r&&("html"===j(r)||"body"===j(r)&&"static"===R(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&O(e)&&"fixed"===R(e).position)return null;for(var r=k(e);O(r)&&["html","body"].indexOf(j(r))<0;){var n=R(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var B="top",W="bottom",I="right",H="left",N="auto",F=[B,W,I,H],z="start",q="end",U="viewport",V="popper",X=F.reduce((function(e,t){return e.concat([t+"-"+z,t+"-"+q])}),[]),Y=[].concat(F,[N]).reduce((function(e,t){return e.concat([t,t+"-"+z,t+"-"+q])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function G(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?K:o;return function(e,t,r){void 0===r&&(r=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],c=!1,s={state:o,setOptions:function(r){var c="function"===typeof r?r(o.options):r;u(),o.options=Object.assign({},i,o.options,c),o.scrollParents={reference:y(e)?D(e):e.contextElement?D(e.contextElement):[],popper:D(t)};var p=function(e){var t=J(e);return _.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var c=i({state:o,name:t,instance:s,options:n}),u=function(){};a.push(c||u)}})),s.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,r=e.popper;if(Q(t,r)){o.rects={reference:P(t,C(r),"fixed"===o.options.strategy),popper:S(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,u=i.options,p=void 0===u?{}:u,l=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:l,instance:s})||o)}else o.reset=!1,n=-1}}},update:G((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){u(),c=!0}};if(!Q(e,t))return s;function u(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),s}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,c=void 0===a||a,s=b(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",r.update,$)})),c&&s.addEventListener("resize",r.update,$),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),c&&s.removeEventListener("resize",r.update,$)}},data:{}};function te(e){return e.split("-")[0]}function re(e){return e.split("-")[1]}function ne(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?te(o):null,a=o?re(o):null,c=r.x+r.width/2-n.width/2,s=r.y+r.height/2-n.height/2;switch(i){case B:t={x:c,y:r.y-n.height};break;case W:t={x:c,y:r.y+r.height};break;case I:t={x:r.x+r.width,y:s};break;case H:t={x:r.x-n.width,y:s};break;default:t={x:r.x,y:r.y}}var u=i?ne(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case z:t[u]=t[u]-(r[p]/2-n[p]/2);break;case q:t[u]=t[u]+(r[p]/2-n[p]/2)}}return t}var ie={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ae=Math.max,ce=Math.min,se=Math.round,ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pe(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,c=e.position,s=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,l=!0===p?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:se(se(t*n)/n)||0,y:se(se(r*n)/n)||0}}(a):"function"===typeof p?p(a):a,f=l.x,d=void 0===f?0:f,m=l.y,h=void 0===m?0:m,v=a.hasOwnProperty("x"),g=a.hasOwnProperty("y"),y=H,O=B,w=window;if(u){var j=C(r),T="clientHeight",E="clientWidth";j===b(r)&&"static"!==R(j=x(r)).position&&"absolute"===c&&(T="scrollHeight",E="scrollWidth"),j=j,o!==B&&(o!==H&&o!==I||i!==q)||(O=W,h-=j[T]-n.height,h*=s?1:-1),o!==H&&(o!==B&&o!==W||i!==q)||(y=I,d-=j[E]-n.width,d*=s?1:-1)}var P,S=Object.assign({position:c},u&&ue);return s?Object.assign({},S,((P={})[O]=g?"0":"",P[y]=v?"0":"",P.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",P)):Object.assign({},S,((t={})[O]=g?h+"px":"",t[y]=v?d+"px":"",t.transform="",t))}var le={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return le[e]}))}var de={start:"end",end:"start"};function me(e){return e.replace(/start|end/g,(function(e){return de[e]}))}function he(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&w(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function be(e,t){return t===U?ve(function(e){var t=b(e),r=x(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,c=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,c=n.offsetTop)),{width:o,height:i,x:a+T(e),y:c}}(e)):O(t)?function(e){var t=v(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ve(function(e){var t,r=x(e),n=g(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=ae(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ae(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+T(e),s=-n.scrollTop;return"rtl"===R(o||r).direction&&(c+=ae(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:s}}(x(e)))}function ge(e,t,r){var n="clippingParents"===t?function(e){var t=D(k(e)),r=["absolute","fixed"].indexOf(R(e).position)>=0&&O(e)?C(e):e;return y(r)?t.filter((function(e){return y(e)&&he(e,r)&&"body"!==j(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=be(e,r);return t.top=ae(n.top,t.top),t.right=ce(n.right,t.right),t.bottom=ce(n.bottom,t.bottom),t.left=ae(n.left,t.left),t}),be(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ye(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Oe(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function we(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,c=r.rootBoundary,s=void 0===c?U:c,u=r.elementContext,p=void 0===u?V:u,l=r.altBoundary,f=void 0!==l&&l,d=r.padding,m=void 0===d?0:d,h=ye("number"!==typeof m?m:Oe(m,F)),b=p===V?"reference":V,g=e.rects.popper,O=e.elements[f?b:p],w=ge(y(O)?O:O.contextElement||x(e.elements.popper),a,s),j=v(e.elements.reference),T=oe({reference:j,element:g,strategy:"absolute",placement:o}),R=ve(Object.assign({},g,T)),E=p===V?R:j,P={top:w.top-E.top+h.top,bottom:E.bottom-w.bottom+h.bottom,left:w.left-E.left+h.left,right:E.right-w.right+h.right},S=e.modifiersData.offset;if(p===V&&S){var k=S[o];Object.keys(P).forEach((function(e){var t=[I,W].indexOf(e)>=0?1:-1,r=[B,W].indexOf(e)>=0?"y":"x";P[e]+=k[r]*t}))}return P}function je(e,t,r){return ae(e,ce(t,r))}function xe(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Te(e){return[B,I,W,H].some((function(t){return e[t]>=0}))}var Re=Z({defaultModifiers:[ee,ie,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,c=r.roundOffsets,s=void 0===c||c,u={placement:te(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,pe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,pe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];O(o)&&j(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});O(n)&&j(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=Y.reduce((function(e,r){return e[r]=function(e,t,r){var n=te(e),o=[H,B].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],c=i[1];return a=a||0,c=(c||0)*o,[H,I].indexOf(n)>=0?{x:c,y:a}:{x:a,y:c}}(r,t.rects,i),e}),{}),c=a[t.placement],s=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0===a||a,s=r.fallbackPlacements,u=r.padding,p=r.boundary,l=r.rootBoundary,f=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,b=te(v),g=s||(b===v||!m?[fe(v)]:function(e){if(te(e)===N)return[];var t=fe(e);return[me(e),t,me(t)]}(v)),y=[v].concat(g).reduce((function(e,r){return e.concat(te(r)===N?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,c=r.flipVariations,s=r.allowedAutoPlacements,u=void 0===s?Y:s,p=re(n),l=p?c?X:X.filter((function(e){return re(e)===p})):F,f=l.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,r){return t[r]=we(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[te(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:p,rootBoundary:l,padding:u,flipVariations:m,allowedAutoPlacements:h}):r)}),[]),O=t.rects.reference,w=t.rects.popper,j=new Map,x=!0,T=y[0],R=0;R<y.length;R++){var E=y[R],P=te(E),S=re(E)===z,k=[B,W].indexOf(P)>=0,M=k?"width":"height",D=we(t,{placement:E,boundary:p,rootBoundary:l,altBoundary:f,padding:u}),L=k?S?I:H:S?W:B;O[M]>w[M]&&(L=fe(L));var A=fe(L),C=[];if(i&&C.push(D[P]<=0),c&&C.push(D[L]<=0,D[A]<=0),C.every((function(e){return e}))){T=E,x=!1;break}j.set(E,C)}if(x)for(var q=function(e){var t=y.find((function(t){var r=j.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},U=m?3:1;U>0;U--){if("break"===q(U))break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0!==a&&a,s=r.boundary,u=r.rootBoundary,p=r.altBoundary,l=r.padding,f=r.tether,d=void 0===f||f,m=r.tetherOffset,h=void 0===m?0:m,v=we(t,{boundary:s,rootBoundary:u,padding:l,altBoundary:p}),b=te(t.placement),g=re(t.placement),y=!g,O=ne(b),w="x"===O?"y":"x",j=t.modifiersData.popperOffsets,x=t.rects.reference,T=t.rects.popper,R="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,E={x:0,y:0};if(j){if(i||c){var P="y"===O?B:H,k="y"===O?W:I,M="y"===O?"height":"width",D=j[O],L=j[O]+v[P],A=j[O]-v[k],N=d?-T[M]/2:0,F=g===z?x[M]:T[M],q=g===z?-T[M]:-x[M],U=t.elements.arrow,V=d&&U?S(U):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[P],_=X[k],J=je(0,x[M],V[M]),G=y?x[M]/2-N-J-Y-R:F-J-Y-R,K=y?-x[M]/2+N+J+_+R:q+J+_+R,Q=t.elements.arrow&&C(t.elements.arrow),Z=Q?"y"===O?Q.clientTop||0:Q.clientLeft||0:0,$=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,ee=j[O]+G-$-Z,oe=j[O]+K-$;if(i){var ie=je(d?ce(L,ee):L,D,d?ae(A,oe):A);j[O]=ie,E[O]=ie-D}if(c){var se="x"===O?B:H,ue="x"===O?W:I,pe=j[w],le=pe+v[se],fe=pe-v[ue],de=je(d?ce(le,ee):le,pe,d?ae(fe,oe):fe);j[w]=de,E[w]=de-pe}}t.modifiersData[n]=E}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,c=te(r.placement),s=ne(c),u=[H,I].indexOf(c)>=0?"height":"width";if(i&&a){var p=function(e,t){return ye("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Oe(e,F))}(o.padding,r),l=S(i),f="y"===s?B:H,d="y"===s?W:I,m=r.rects.reference[u]+r.rects.reference[s]-a[s]-r.rects.popper[u],h=a[s]-r.rects.reference[s],v=C(i),b=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,y=p[f],O=b-l[u]-p[d],w=b/2-l[u]/2+g,j=je(y,w,O),x=s;r.modifiersData[n]=((t={})[x]=j,t.centerOffset=j-w,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&he(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=we(t,{elementContext:"reference"}),c=we(t,{altBoundary:!0}),s=xe(a,n),u=xe(c,o,i),p=Te(s),l=Te(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),Ee=r(118),Pe=r(227),Se=r(103),ke=r(21),Me=r(49),De=r(2),Le=["anchorEl","children","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],Ae=["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ce(e){return"function"===typeof e?e():e}var Be={},We=c.forwardRef((function(e,t){var r=e.anchorEl,o=e.children,s=e.disablePortal,u=e.modifiers,p=e.open,l=e.placement,f=e.popperOptions,d=e.popperRef,m=e.TransitionProps,h=Object(i.a)(e,Le),v=c.useRef(null),b=Object(ke.a)(v,t),g=c.useRef(null),y=Object(ke.a)(g,d),O=c.useRef(y);Object(Me.a)((function(){O.current=y}),[y]),c.useImperativeHandle(d,(function(){return g.current}),[]);var w=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,Object(Ee.a)()),j=c.useState(w),x=Object(n.a)(j,2),T=x[0],R=x[1];c.useEffect((function(){g.current&&g.current.forceUpdate()})),Object(Me.a)((function(){if(r&&p){Ce(r);var e=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;R(t.placement)}}];null!=u&&(e=e.concat(u)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));var t=Re(Ce(r),v.current,Object(a.a)({placement:w},f,{modifiers:e}));return O.current(t),function(){t.destroy(),O.current(null)}}}),[r,s,u,p,f,w]);var E={placement:T};return null!==m&&(E.TransitionProps=m),Object(De.jsx)("div",Object(a.a)({ref:b,role:"tooltip"},h,{children:"function"===typeof o?o(E):o}))})),Ie=c.forwardRef((function(e,t){var r=e.anchorEl,o=e.children,s=e.container,u=e.disablePortal,p=void 0!==u&&u,l=e.keepMounted,f=void 0!==l&&l,d=e.modifiers,m=e.open,h=e.placement,v=void 0===h?"bottom":h,b=e.popperOptions,g=void 0===b?Be:b,y=e.popperRef,O=e.style,w=e.transition,j=void 0!==w&&w,x=Object(i.a)(e,Ae),T=c.useState(!0),R=Object(n.a)(T,2),E=R[0],P=R[1];if(!f&&!m&&(!j||E))return null;var S=s||(r?Object(Se.a)(Ce(r)).body:void 0);return Object(De.jsx)(Pe.a,{disablePortal:p,container:S,children:Object(De.jsx)(We,Object(a.a)({anchorEl:r,disablePortal:p,modifiers:d,ref:t,open:j?!E:m,placement:v,popperOptions:g,popperRef:y},x,{style:Object(a.a)({position:"fixed",top:0,left:0,display:m||!f||j?null:"none"},O),TransitionProps:j?{in:m,onEnter:function(){P(!1)},onExited:function(){P(!0)}}:null,children:o}))})})),He=r(34),Ne=r(114),Fe=r(54),ze=r(104),qe=r(165),Ue=r(221);function Ve(e){return Object(qe.a)("MuiTooltip",e)}var Xe=Object(Ue.a)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Ye=["arrow","children","classes","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var _e=Object(l.a)(Ie,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var r=e.ownerState;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})((function(e){var t,r=e.theme,n=e.ownerState,i=e.open;return Object(a.a)({zIndex:r.zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},n.arrow&&(t={},Object(o.a)(t,'&[data-popper-placement*="bottom"] .'.concat(Xe.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),Object(o.a)(t,'&[data-popper-placement*="top"] .'.concat(Xe.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),Object(o.a)(t,'&[data-popper-placement*="right"] .'.concat(Xe.arrow),Object(a.a)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),Object(o.a)(t,'&[data-popper-placement*="left"] .'.concat(Xe.arrow),Object(a.a)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),Je=Object(l.a)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var r=e.ownerState;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t["tooltipPlacement".concat(Object(m.a)(r.placement.split("-")[0]))]]}})((function(e){var t,r,n=e.theme,i=e.ownerState;return Object(a.a)({backgroundColor:Object(p.a)(n.palette.grey[700],.92),borderRadius:n.shape.borderRadius,color:n.palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},Object(o.a)(t,".".concat(Xe.popper,'[data-popper-placement*="left"] &'),Object(a.a)({transformOrigin:"right center"},i.isRtl?Object(a.a)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):Object(a.a)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),Object(o.a)(t,".".concat(Xe.popper,'[data-popper-placement*="right"] &'),Object(a.a)({transformOrigin:"left center"},i.isRtl?Object(a.a)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):Object(a.a)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),Object(o.a)(t,".".concat(Xe.popper,'[data-popper-placement*="top"] &'),Object(a.a)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),Object(o.a)(t,".".concat(Xe.popper,'[data-popper-placement*="bottom"] &'),Object(a.a)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),Ge=Object(l.a)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(p.a)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),Ke=!1,Qe=null;function Ze(e,t){return function(r){t&&t(r),e(r)}}var $e=c.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiTooltip"}),o=r.arrow,p=void 0!==o&&o,l=r.children,v=r.describeChild,b=void 0!==v&&v,g=r.disableFocusListener,y=void 0!==g&&g,O=r.disableHoverListener,w=void 0!==O&&O,j=r.disableInteractive,x=void 0!==j&&j,T=r.disableTouchListener,R=void 0!==T&&T,E=r.enterDelay,P=void 0===E?100:E,S=r.enterNextDelay,k=void 0===S?0:S,M=r.enterTouchDelay,D=void 0===M?700:M,L=r.followCursor,A=void 0!==L&&L,C=r.id,B=r.leaveDelay,W=void 0===B?0:B,I=r.leaveTouchDelay,H=void 0===I?1500:I,N=r.onClose,F=r.onOpen,z=r.open,q=r.placement,U=void 0===q?"bottom":q,V=r.PopperComponent,X=void 0===V?Ie:V,Y=r.PopperProps,_=void 0===Y?{}:Y,J=r.title,G=r.TransitionComponent,K=void 0===G?h.a:G,Q=r.TransitionProps,Z=Object(i.a)(r,Ye),$=Object(f.a)(),ee="rtl"===$.direction,te=c.useState(),re=Object(n.a)(te,2),ne=re[0],oe=re[1],ie=c.useState(null),ae=Object(n.a)(ie,2),ce=ae[0],se=ae[1],ue=c.useRef(!1),pe=x||A,le=c.useRef(),fe=c.useRef(),de=c.useRef(),me=c.useRef(),he=Object(ze.a)({controlled:z,default:!1,name:"Tooltip",state:"open"}),ve=Object(n.a)(he,2),be=ve[0],ge=ve[1],ye=be,Oe=Object(Ne.a)(C),we=c.useRef(),je=c.useCallback((function(){void 0!==we.current&&(document.body.style.WebkitUserSelect=we.current,we.current=void 0),clearTimeout(me.current)}),[]);c.useEffect((function(){return function(){clearTimeout(le.current),clearTimeout(fe.current),clearTimeout(de.current),je()}}),[je]);var xe=function(e){clearTimeout(Qe),Ke=!0,ge(!0),F&&!ye&&F(e)},Te=Object(He.a)((function(e){clearTimeout(Qe),Qe=setTimeout((function(){Ke=!1}),800+W),ge(!1),N&&ye&&N(e),clearTimeout(le.current),le.current=setTimeout((function(){ue.current=!1}),$.transitions.duration.shortest)})),Re=function(e){ue.current&&"touchstart"!==e.type||(ne&&ne.removeAttribute("title"),clearTimeout(fe.current),clearTimeout(de.current),P||Ke&&k?fe.current=setTimeout((function(){xe(e)}),Ke?k:P):xe(e))},Ee=function(e){clearTimeout(fe.current),clearTimeout(de.current),de.current=setTimeout((function(){Te(e)}),W)},Pe=Object(Fe.a)(),Se=Pe.isFocusVisibleRef,Me=Pe.onBlur,Le=Pe.onFocus,Ae=Pe.ref,Ce=c.useState(!1),Be=Object(n.a)(Ce,2)[1],We=function(e){Me(e),!1===Se.current&&(Be(!1),Ee(e))},qe=function(e){ne||oe(e.currentTarget),Le(e),!0===Se.current&&(Be(!0),Re(e))},Ue=function(e){ue.current=!0;var t=l.props;t.onTouchStart&&t.onTouchStart(e)},Xe=Re,$e=Ee;c.useEffect((function(){if(ye)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Te(e)}}),[Te,ye]);var et=Object(ke.a)(oe,t),tt=Object(ke.a)(Ae,et),rt=Object(ke.a)(l.ref,tt);""===J&&(ye=!1);var nt=c.useRef({x:0,y:0}),ot=c.useRef(),it={},at="string"===typeof J;b?(it.title=ye||!at||w?null:J,it["aria-describedby"]=ye?Oe:null):(it["aria-label"]=at?J:null,it["aria-labelledby"]=ye&&!at?Oe:null);var ct=Object(a.a)({},it,Z,l.props,{className:Object(s.a)(Z.className,l.props.className),onTouchStart:Ue,ref:rt},A?{onMouseMove:function(e){var t=l.props;t.onMouseMove&&t.onMouseMove(e),nt.current={x:e.clientX,y:e.clientY},ot.current&&ot.current.update()}}:{});var st={};R||(ct.onTouchStart=function(e){Ue(e),clearTimeout(de.current),clearTimeout(le.current),je(),we.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",me.current=setTimeout((function(){document.body.style.WebkitUserSelect=we.current,Re(e)}),D)},ct.onTouchEnd=function(e){l.props.onTouchEnd&&l.props.onTouchEnd(e),je(),clearTimeout(de.current),de.current=setTimeout((function(){Te(e)}),H)}),w||(ct.onMouseOver=Ze(Xe,ct.onMouseOver),ct.onMouseLeave=Ze($e,ct.onMouseLeave),pe||(st.onMouseOver=Xe,st.onMouseLeave=$e)),y||(ct.onFocus=Ze(qe,ct.onFocus),ct.onBlur=Ze(We,ct.onBlur),pe||(st.onFocus=qe,st.onBlur=We));var ut=c.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ce),options:{element:ce,padding:4}}];return null!=(e=_.popperOptions)&&e.modifiers&&(t=t.concat(_.popperOptions.modifiers)),Object(a.a)({},_.popperOptions,{modifiers:t})}),[ce,_]),pt=Object(a.a)({},r,{isRtl:ee,arrow:p,disableInteractive:pe,placement:U,PopperComponent:X,touch:ue.current}),lt=function(e){var t=e.classes,r=e.disableInteractive,n=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",o&&"touch","tooltipPlacement".concat(Object(m.a)(i.split("-")[0]))],arrow:["arrow"]};return Object(u.a)(a,Ve,t)}(pt);return Object(De.jsxs)(c.Fragment,{children:[c.cloneElement(l,ct),Object(De.jsx)(_e,Object(a.a)({as:X,className:lt.popper,placement:U,anchorEl:A?{getBoundingClientRect:function(){return{top:nt.current.y,left:nt.current.x,right:nt.current.x,bottom:nt.current.y,width:0,height:0}}}:ne,popperRef:ot,open:!!ne&&ye,id:Oe,transition:!0},st,_,{popperOptions:ut,ownerState:pt,children:function(e){var t=e.TransitionProps;return Object(De.jsx)(K,Object(a.a)({timeout:$.transitions.duration.shorter},t,Q,{children:Object(De.jsxs)(Je,{className:lt.tooltip,ownerState:pt,children:[J,p?Object(De.jsx)(Ge,{className:lt.arrow,ref:se,ownerState:pt}):null]})}))}}))]})}));t.a=$e}}]);
//# sourceMappingURL=24.a8f81ec3.chunk.js.map