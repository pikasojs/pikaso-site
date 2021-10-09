(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[16],{248:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(37),o=r(100),i=r(858),a=r(857),c=r(2),s=["children"];function l(e){var t=e.children,r=Object(o.a)(e,s);return Object(c.jsx)(i.a,Object(n.a)(Object(n.a)({style:a.a,showLineNumbers:!0,wrapLongLines:!0},r),{},{children:t}))}},249:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(37),o=r(100),i=r(0),a=r(254),c=r(255),s=r(48),l=r(248),u=r(2),p=["node","inline","className","children"];function f(e){var t=e.children,r="string"===typeof t?t:t(),f=Object(i.useMemo)((function(){return function(e){for(var t=[],r=e.split("\n"),n=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},i=0;i<r.length;i++){var a=r[i];o(a)&&(n=!0),t.push(n?a:a.trim()),n&&o(r[i+1])&&(n=!1)}return t.join("\n")}(r)}),[r]);return Object(u.jsx)(a.a,{skipHtml:!0,remarkPlugins:[c.a],children:f,components:{a:function(e){var t=e.href,r=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(u.jsx)("a",{href:t,target:"_blank",children:r}):Object(u.jsx)(s.b,{to:t,children:r})},code:function(e){e.node;var t=e.inline,r=e.className,i=e.children,a=Object(o.a)(e,p),c=/language-(\w+)/.exec(r||"");return!t&&c?Object(u.jsx)(l.a,Object(n.a)({children:String(i).replace(/\n$/,""),language:c[1],PreTag:"div"},a)):Object(u.jsx)("code",Object(n.a)(Object(n.a)({className:r},a),{},{children:i}))}}})}},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(37),o=r(14),i=r(0),a=r(256);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Object(i.useState)(null),c=Object(o.a)(r,2),s=c[0],l=c[1],u=Object(i.useRef)(null);return Object(i.useEffect)((function(){var r=new a.b(Object(n.a)({container:u.current},e),t);l(r)}),[]),Object(i.useEffect)((function(){s&&window.addEventListener("resize",(function(){s.board.rescale()}))}),[s]),[u,s]}},251:function(e,t,r){"use strict";function n(){var e=Math.round,t=Math.random;return"rgb("+e(255*t())+","+e(255*t())+","+e(255*t())+")"}r.d(t,"a",(function(){return n}))},260:function(e,t,r){"use strict";var n=r(0),o={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var r=Object(n.useRef)(document.title);document.title!==e&&(document.title=e),Object(n.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=r.current}:void 0}),[])}:function(e){}},265:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(14),o=r(0),i=r(268),a=r(471),c=r(2);function s(e){var t=e.buttonRenderer,r=e.children,s=Object(o.useState)(null),l=Object(n.a)(s,2),u=l[0],p=l[1],f=function(){p(null)},d=Boolean(u),m=d?"base-popover":void 0;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a,{disableRipple:!0,"aria-describedby":m,style:{background:"none",cursor:"pointer"},onClick:function(e){p(e.currentTarget)},children:t({id:m,isOpen:d})}),Object(c.jsx)(a.a,{id:m,open:d,anchorEl:u,onClose:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"function"===typeof r?r({close:f}):r})]})}},481:function(e,t,r){"use strict";var n=r(14),o=r(3),i=r(1),a=r(0),c=(r(7),r(5)),s=r(223),l=r(8),u=r(9),p=r(62),f=r(2),d=Object(p.a)(Object(f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(166),h=r(224);function b(e){return Object(m.a)("MuiAvatar",e)}Object(h.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(l.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return Object(i.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:t.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),O=Object(l.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=Object(l.a)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var y=a.forwardRef((function(e,t){var r=Object(u.a)({props:e,name:"MuiAvatar"}),l=r.alt,p=r.children,d=r.className,m=r.component,h=void 0===m?"div":m,y=r.imgProps,w=r.sizes,x=r.src,T=r.srcSet,k=r.variant,R=void 0===k?"circular":k,S=Object(o.a)(r,v),D=null,E=function(e){var t=e.crossOrigin,r=e.referrerPolicy,o=e.src,i=e.srcSet,c=a.useState(!1),s=Object(n.a)(c,2),l=s[0],u=s[1];return a.useEffect((function(){if(o||i){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=o,i&&(n.srcset=i),function(){e=!1}}}),[t,r,o,i]),l}(Object(i.a)({},y,{src:x,srcSet:T})),M=x||T,P=M&&"error"!==E,L=Object(i.a)({},r,{colorDefault:!P,component:h,variant:R}),C=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(s.a)(r,b,t)}(L);return D=P?Object(f.jsx)(O,Object(i.a)({alt:l,src:x,srcSet:T,sizes:w,ownerState:L,className:C.img},y)):null!=p?p:M&&l?l[0]:Object(f.jsx)(j,{className:C.fallback}),Object(f.jsx)(g,Object(i.a)({as:h,ownerState:L,className:Object(c.a)(C.root,d),ref:t},S,{children:D}))}));t.a=y},91:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ut}));var n=r(14),o=r(0),i=r(239),a=r(480),c=r(481),s=r(245),l=r(10),u=r(3),p=r(1),f=(r(7),r(5)),d=r(223),m=r(221),h=r(8),b=r(33),v=r(9),g=r(11),O=r(356);function j(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect();return{width:r.width/1,height:r.height/1,top:r.top/1,right:r.right/1,bottom:r.bottom/1,left:r.left/1,x:r.left/1,y:r.top/1}}function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function w(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e instanceof y(e).Element||e instanceof Element}function T(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function k(e){return"undefined"!==typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}function R(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return j(S(e)).left+w(e).scrollLeft}function E(e){return y(e).getComputedStyle(e)}function M(e){var t=E(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function P(e,t,r){void 0===r&&(r=!1);var n=T(t),o=T(t)&&function(e){var t=e.getBoundingClientRect(),r=t.width/e.offsetWidth||1,n=t.height/e.offsetHeight||1;return 1!==r||1!==n}(t),i=S(t),a=j(e,o),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&(("body"!==R(t)||M(i))&&(c=function(e){return e!==y(e)&&T(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:w(e);var t}(t)),T(t)?((s=j(t,!0)).x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=D(i))),{x:a.left+c.scrollLeft-s.x,y:a.top+c.scrollTop-s.y,width:a.width,height:a.height}}function L(e){var t=j(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function C(e){return"html"===R(e)?e:e.assignedSlot||e.parentNode||(k(e)?e.host:null)||S(e)}function W(e){return["html","body","#document"].indexOf(R(e))>=0?e.ownerDocument.body:T(e)&&M(e)?e:W(C(e))}function A(e,t){var r;void 0===t&&(t=[]);var n=W(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=y(n),a=o?[i].concat(i.visualViewport||[],M(n)?n:[]):n,c=t.concat(a);return o?c:c.concat(A(C(a)))}function B(e){return["table","td","th"].indexOf(R(e))>=0}function N(e){return T(e)&&"fixed"!==E(e).position?e.offsetParent:null}function F(e){for(var t=y(e),r=N(e);r&&B(r)&&"static"===E(r).position;)r=N(r);return r&&("html"===R(r)||"body"===R(r)&&"static"===E(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&T(e)&&"fixed"===E(e).position)return null;for(var r=C(e);T(r)&&["html","body"].indexOf(R(r))<0;){var n=E(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var H="top",I="bottom",z="right",q="left",U="auto",V=[H,I,z,q],_="start",X="end",Y="viewport",J="popper",$=V.reduce((function(e,t){return e.concat([t+"-"+_,t+"-"+X])}),[]),G=[].concat(V,[U]).reduce((function(e,t){return e.concat([t,t+"-"+_,t+"-"+X])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Q(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function Z(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var ee={placement:"bottom",modifiers:[],strategy:"absolute"};function te(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function re(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?ee:o;return function(e,t,r){void 0===r&&(r=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ee,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],c=!1,s={state:o,setOptions:function(r){var c="function"===typeof r?r(o.options):r;l(),o.options=Object.assign({},i,o.options,c),o.scrollParents={reference:x(e)?A(e):e.contextElement?A(e.contextElement):[],popper:A(t)};var u=function(e){var t=Q(e);return K.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var c=i({state:o,name:t,instance:s,options:n}),l=function(){};a.push(c||l)}})),s.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,r=e.popper;if(te(t,r)){o.rects={reference:P(t,F(r),"fixed"===o.options.strategy),popper:L(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,l=i.options,u=void 0===l?{}:l,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:s})||o)}else o.reset=!1,n=-1}}},update:Z((function(){return new Promise((function(e){s.forceUpdate(),e(o)}))})),destroy:function(){l(),c=!0}};if(!te(e,t))return s;function l(){a.forEach((function(e){return e()})),a=[]}return s.setOptions(r).then((function(e){!c&&r.onFirstUpdate&&r.onFirstUpdate(e)})),s}}var ne={passive:!0};var oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,c=void 0===a||a,s=y(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,ne)})),c&&s.addEventListener("resize",r.update,ne),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,ne)})),c&&s.removeEventListener("resize",r.update,ne)}},data:{}};function ie(e){return e.split("-")[0]}function ae(e){return e.split("-")[1]}function ce(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?ie(o):null,a=o?ae(o):null,c=r.x+r.width/2-n.width/2,s=r.y+r.height/2-n.height/2;switch(i){case H:t={x:c,y:r.y-n.height};break;case I:t={x:c,y:r.y+r.height};break;case z:t={x:r.x+r.width,y:s};break;case q:t={x:r.x-n.width,y:s};break;default:t={x:r.x,y:r.y}}var l=i?ce(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case _:t[l]=t[l]-(r[u]/2-n[u]/2);break;case X:t[l]=t[l]+(r[u]/2-n[u]/2)}}return t}var le={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=se({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ue=Math.max,pe=Math.min,fe=Math.round,de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,c=e.position,s=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:fe(fe(t*n)/n)||0,y:fe(fe(r*n)/n)||0}}(a):"function"===typeof u?u(a):a,f=p.x,d=void 0===f?0:f,m=p.y,h=void 0===m?0:m,b=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),g=q,O=H,j=window;if(l){var w=F(r),x="clientHeight",T="clientWidth";w===y(r)&&"static"!==E(w=S(r)).position&&"absolute"===c&&(x="scrollHeight",T="scrollWidth"),w=w,o!==H&&(o!==q&&o!==z||i!==X)||(O=I,h-=w[x]-n.height,h*=s?1:-1),o!==q&&(o!==H&&o!==I||i!==X)||(g=z,d-=w[T]-n.width,d*=s?1:-1)}var k,R=Object.assign({position:c},l&&de);return s?Object.assign({},R,((k={})[O]=v?"0":"",k[g]=b?"0":"",k.transform=(j.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",k)):Object.assign({},R,((t={})[O]=v?h+"px":"",t[g]=b?d+"px":"",t.transform="",t))}var he={left:"right",right:"left",bottom:"top",top:"bottom"};function be(e){return e.replace(/left|right|bottom|top/g,(function(e){return he[e]}))}var ve={start:"end",end:"start"};function ge(e){return e.replace(/start|end/g,(function(e){return ve[e]}))}function Oe(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&k(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t){return t===Y?je(function(e){var t=y(e),r=S(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,c=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,c=n.offsetTop)),{width:o,height:i,x:a+D(e),y:c}}(e)):T(t)?function(e){var t=j(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):je(function(e){var t,r=S(e),n=w(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=ue(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ue(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+D(e),s=-n.scrollTop;return"rtl"===E(o||r).direction&&(c+=ue(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:s}}(S(e)))}function we(e,t,r){var n="clippingParents"===t?function(e){var t=A(C(e)),r=["absolute","fixed"].indexOf(E(e).position)>=0&&T(e)?F(e):e;return x(r)?t.filter((function(e){return x(e)&&Oe(e,r)&&"body"!==R(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ye(e,r);return t.top=ue(n.top,t.top),t.right=pe(n.right,t.right),t.bottom=pe(n.bottom,t.bottom),t.left=ue(n.left,t.left),t}),ye(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function xe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Te(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function ke(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?"clippingParents":i,c=r.rootBoundary,s=void 0===c?Y:c,l=r.elementContext,u=void 0===l?J:l,p=r.altBoundary,f=void 0!==p&&p,d=r.padding,m=void 0===d?0:d,h=xe("number"!==typeof m?m:Te(m,V)),b=u===J?"reference":J,v=e.rects.popper,g=e.elements[f?b:u],O=we(x(g)?g:g.contextElement||S(e.elements.popper),a,s),y=j(e.elements.reference),w=se({reference:y,element:v,strategy:"absolute",placement:o}),T=je(Object.assign({},v,w)),k=u===J?T:y,R={top:O.top-k.top+h.top,bottom:k.bottom-O.bottom+h.bottom,left:O.left-k.left+h.left,right:k.right-O.right+h.right},D=e.modifiersData.offset;if(u===J&&D){var E=D[o];Object.keys(R).forEach((function(e){var t=[z,I].indexOf(e)>=0?1:-1,r=[H,I].indexOf(e)>=0?"y":"x";R[e]+=E[r]*t}))}return R}function Re(e,t,r){return ue(e,pe(t,r))}function Se(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function De(e){return[H,z,I,q].some((function(t){return e[t]>=0}))}var Ee=re({defaultModifiers:[oe,le,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,c=r.roundOffsets,s=void 0===c||c,l={placement:ie(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];T(o)&&R(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});T(n)&&R(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=G.reduce((function(e,r){return e[r]=function(e,t,r){var n=ie(e),o=[q,H].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],c=i[1];return a=a||0,c=(c||0)*o,[q,z].indexOf(n)>=0?{x:c,y:a}:{x:a,y:c}}(r,t.rects,i),e}),{}),c=a[t.placement],s=c.x,l=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0===a||a,s=r.fallbackPlacements,l=r.padding,u=r.boundary,p=r.rootBoundary,f=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,b=t.options.placement,v=ie(b),g=s||(v===b||!m?[be(b)]:function(e){if(ie(e)===U)return[];var t=be(e);return[ge(e),t,ge(t)]}(b)),O=[b].concat(g).reduce((function(e,r){return e.concat(ie(r)===U?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,c=r.flipVariations,s=r.allowedAutoPlacements,l=void 0===s?G:s,u=ae(n),p=u?c?$:$.filter((function(e){return ae(e)===u})):V,f=p.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=p);var d=f.reduce((function(t,r){return t[r]=ke(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[ie(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:p,padding:l,flipVariations:m,allowedAutoPlacements:h}):r)}),[]),j=t.rects.reference,y=t.rects.popper,w=new Map,x=!0,T=O[0],k=0;k<O.length;k++){var R=O[k],S=ie(R),D=ae(R)===_,E=[H,I].indexOf(S)>=0,M=E?"width":"height",P=ke(t,{placement:R,boundary:u,rootBoundary:p,altBoundary:f,padding:l}),L=E?D?z:q:D?I:H;j[M]>y[M]&&(L=be(L));var C=be(L),W=[];if(i&&W.push(P[S]<=0),c&&W.push(P[L]<=0,P[C]<=0),W.every((function(e){return e}))){T=R,x=!1;break}w.set(R,W)}if(x)for(var A=function(e){var t=O.find((function(t){var r=w.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},B=m?3:1;B>0;B--){if("break"===A(B))break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,c=void 0!==a&&a,s=r.boundary,l=r.rootBoundary,u=r.altBoundary,p=r.padding,f=r.tether,d=void 0===f||f,m=r.tetherOffset,h=void 0===m?0:m,b=ke(t,{boundary:s,rootBoundary:l,padding:p,altBoundary:u}),v=ie(t.placement),g=ae(t.placement),O=!g,j=ce(v),y="x"===j?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,T=t.rects.popper,k="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R={x:0,y:0};if(w){if(i||c){var S="y"===j?H:q,D="y"===j?I:z,E="y"===j?"height":"width",M=w[j],P=w[j]+b[S],C=w[j]-b[D],W=d?-T[E]/2:0,A=g===_?x[E]:T[E],B=g===_?-T[E]:-x[E],N=t.elements.arrow,U=d&&N?L(N):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=V[S],Y=V[D],J=Re(0,x[E],U[E]),$=O?x[E]/2-W-J-X-k:A-J-X-k,G=O?-x[E]/2+W+J+Y+k:B+J+Y+k,K=t.elements.arrow&&F(t.elements.arrow),Q=K?"y"===j?K.clientTop||0:K.clientLeft||0:0,Z=t.modifiersData.offset?t.modifiersData.offset[t.placement][j]:0,ee=w[j]+$-Z-Q,te=w[j]+G-Z;if(i){var re=Re(d?pe(P,ee):P,M,d?ue(C,te):C);w[j]=re,R[j]=re-M}if(c){var ne="x"===j?H:q,oe="x"===j?I:z,se=w[y],le=se+b[ne],fe=se-b[oe],de=Re(d?pe(le,ee):le,se,d?ue(fe,te):fe);w[y]=de,R[y]=de-se}}t.modifiersData[n]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,c=ie(r.placement),s=ce(c),l=[q,z].indexOf(c)>=0?"height":"width";if(i&&a){var u=function(e,t){return xe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Te(e,V))}(o.padding,r),p=L(i),f="y"===s?H:q,d="y"===s?I:z,m=r.rects.reference[l]+r.rects.reference[s]-a[s]-r.rects.popper[l],h=a[s]-r.rects.reference[s],b=F(i),v=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,g=m/2-h/2,O=u[f],j=v-p[l]-u[d],y=v/2-p[l]/2+g,w=Re(O,y,j),x=s;r.modifiersData[n]=((t={})[x]=w,t.centerOffset=w-y,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&Oe(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ke(t,{elementContext:"reference"}),c=ke(t,{altBoundary:!0}),s=Se(a,n),l=Se(c,o,i),u=De(s),p=De(l);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),Me=r(119),Pe=r(231),Le=r(101),Ce=r(20),We=r(49),Ae=r(2),Be=["anchorEl","children","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],Ne=["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Fe(e){return"function"===typeof e?e():e}var He={},Ie=o.forwardRef((function(e,t){var r=e.anchorEl,i=e.children,a=e.disablePortal,c=e.modifiers,s=e.open,l=e.placement,f=e.popperOptions,d=e.popperRef,m=e.TransitionProps,h=Object(u.a)(e,Be),b=o.useRef(null),v=Object(Ce.a)(b,t),g=o.useRef(null),O=Object(Ce.a)(g,d),j=o.useRef(O);Object(We.a)((function(){j.current=O}),[O]),o.useImperativeHandle(d,(function(){return g.current}),[]);var y=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,Object(Me.a)()),w=o.useState(y),x=Object(n.a)(w,2),T=x[0],k=x[1];o.useEffect((function(){g.current&&g.current.forceUpdate()})),Object(We.a)((function(){if(r&&s){Fe(r);var e=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;k(t.placement)}}];null!=c&&(e=e.concat(c)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));var t=Ee(Fe(r),b.current,Object(p.a)({placement:y},f,{modifiers:e}));return j.current(t),function(){t.destroy(),j.current(null)}}}),[r,a,c,s,f,y]);var R={placement:T};return null!==m&&(R.TransitionProps=m),Object(Ae.jsx)("div",Object(p.a)({ref:v,role:"tooltip"},h,{children:"function"===typeof i?i(R):i}))})),ze=o.forwardRef((function(e,t){var r=e.anchorEl,i=e.children,a=e.container,c=e.disablePortal,s=void 0!==c&&c,l=e.keepMounted,f=void 0!==l&&l,d=e.modifiers,m=e.open,h=e.placement,b=void 0===h?"bottom":h,v=e.popperOptions,g=void 0===v?He:v,O=e.popperRef,j=e.style,y=e.transition,w=void 0!==y&&y,x=Object(u.a)(e,Ne),T=o.useState(!0),k=Object(n.a)(T,2),R=k[0],S=k[1];if(!f&&!m&&(!w||R))return null;var D=a||(r?Object(Le.a)(Fe(r)).body:void 0);return Object(Ae.jsx)(Pe.a,{disablePortal:s,container:D,children:Object(Ae.jsx)(Ie,Object(p.a)({anchorEl:r,disablePortal:s,modifiers:d,ref:t,open:w?!R:m,placement:b,popperOptions:g,popperRef:O},x,{style:Object(p.a)({position:"fixed",top:0,left:0,display:m||!f||w?null:"none"},j),TransitionProps:w?{in:m,onEnter:function(){S(!1)},onExited:function(){S(!0)}}:null,children:i}))})})),qe=r(34),Ue=r(114),Ve=r(56),_e=r(106),Xe=r(166),Ye=r(224);function Je(e){return Object(Xe.a)("MuiTooltip",e)}var $e=Object(Ye.a)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Ge=["arrow","children","classes","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var Ke=Object(h.a)(ze,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var r=e.ownerState;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})((function(e){var t,r=e.theme,n=e.ownerState,o=e.open;return Object(p.a)({zIndex:r.zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},n.arrow&&(t={},Object(l.a)(t,'&[data-popper-placement*="bottom"] .'.concat($e.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),Object(l.a)(t,'&[data-popper-placement*="top"] .'.concat($e.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),Object(l.a)(t,'&[data-popper-placement*="right"] .'.concat($e.arrow),Object(p.a)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),Object(l.a)(t,'&[data-popper-placement*="left"] .'.concat($e.arrow),Object(p.a)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),Qe=Object(h.a)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var r=e.ownerState;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t["tooltipPlacement".concat(Object(g.a)(r.placement.split("-")[0]))]]}})((function(e){var t,r,n=e.theme,o=e.ownerState;return Object(p.a)({backgroundColor:Object(m.a)(n.palette.grey[700],.92),borderRadius:n.shape.borderRadius,color:n.palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((r=16/14,Math.round(1e5*r)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},Object(l.a)(t,".".concat($e.popper,'[data-popper-placement*="left"] &'),Object(p.a)({transformOrigin:"right center"},o.isRtl?Object(p.a)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):Object(p.a)({marginRight:"14px"},o.touch&&{marginRight:"24px"}))),Object(l.a)(t,".".concat($e.popper,'[data-popper-placement*="right"] &'),Object(p.a)({transformOrigin:"left center"},o.isRtl?Object(p.a)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):Object(p.a)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}))),Object(l.a)(t,".".concat($e.popper,'[data-popper-placement*="top"] &'),Object(p.a)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"})),Object(l.a)(t,".".concat($e.popper,'[data-popper-placement*="bottom"] &'),Object(p.a)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})),t))})),Ze=Object(h.a)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(m.a)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),et=!1,tt=null;function rt(e,t){return function(r){t&&t(r),e(r)}}var nt=o.forwardRef((function(e,t){var r=Object(v.a)({props:e,name:"MuiTooltip"}),i=r.arrow,a=void 0!==i&&i,c=r.children,s=r.describeChild,l=void 0!==s&&s,m=r.disableFocusListener,h=void 0!==m&&m,j=r.disableHoverListener,y=void 0!==j&&j,w=r.disableInteractive,x=void 0!==w&&w,T=r.disableTouchListener,k=void 0!==T&&T,R=r.enterDelay,S=void 0===R?100:R,D=r.enterNextDelay,E=void 0===D?0:D,M=r.enterTouchDelay,P=void 0===M?700:M,L=r.followCursor,C=void 0!==L&&L,W=r.id,A=r.leaveDelay,B=void 0===A?0:A,N=r.leaveTouchDelay,F=void 0===N?1500:N,H=r.onClose,I=r.onOpen,z=r.open,q=r.placement,U=void 0===q?"bottom":q,V=r.PopperComponent,_=void 0===V?ze:V,X=r.PopperProps,Y=void 0===X?{}:X,J=r.title,$=r.TransitionComponent,G=void 0===$?O.a:$,K=r.TransitionProps,Q=Object(u.a)(r,Ge),Z=Object(b.a)(),ee="rtl"===Z.direction,te=o.useState(),re=Object(n.a)(te,2),ne=re[0],oe=re[1],ie=o.useState(null),ae=Object(n.a)(ie,2),ce=ae[0],se=ae[1],le=o.useRef(!1),ue=x||C,pe=o.useRef(),fe=o.useRef(),de=o.useRef(),me=o.useRef(),he=Object(_e.a)({controlled:z,default:!1,name:"Tooltip",state:"open"}),be=Object(n.a)(he,2),ve=be[0],ge=be[1],Oe=ve,je=Object(Ue.a)(W),ye=o.useRef(),we=o.useCallback((function(){void 0!==ye.current&&(document.body.style.WebkitUserSelect=ye.current,ye.current=void 0),clearTimeout(me.current)}),[]);o.useEffect((function(){return function(){clearTimeout(pe.current),clearTimeout(fe.current),clearTimeout(de.current),we()}}),[we]);var xe=function(e){clearTimeout(tt),et=!0,ge(!0),I&&!Oe&&I(e)},Te=Object(qe.a)((function(e){clearTimeout(tt),tt=setTimeout((function(){et=!1}),800+B),ge(!1),H&&Oe&&H(e),clearTimeout(pe.current),pe.current=setTimeout((function(){le.current=!1}),Z.transitions.duration.shortest)})),ke=function(e){le.current&&"touchstart"!==e.type||(ne&&ne.removeAttribute("title"),clearTimeout(fe.current),clearTimeout(de.current),S||et&&E?fe.current=setTimeout((function(){xe(e)}),et?E:S):xe(e))},Re=function(e){clearTimeout(fe.current),clearTimeout(de.current),de.current=setTimeout((function(){Te(e)}),B)},Se=Object(Ve.a)(),De=Se.isFocusVisibleRef,Ee=Se.onBlur,Me=Se.onFocus,Pe=Se.ref,Le=o.useState(!1),We=Object(n.a)(Le,2)[1],Be=function(e){Ee(e),!1===De.current&&(We(!1),Re(e))},Ne=function(e){ne||oe(e.currentTarget),Me(e),!0===De.current&&(We(!0),ke(e))},Fe=function(e){le.current=!0;var t=c.props;t.onTouchStart&&t.onTouchStart(e)},He=ke,Ie=Re;o.useEffect((function(){if(Oe)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Te(e)}}),[Te,Oe]);var Xe=Object(Ce.a)(oe,t),Ye=Object(Ce.a)(Pe,Xe),$e=Object(Ce.a)(c.ref,Ye);""===J&&(Oe=!1);var nt=o.useRef({x:0,y:0}),ot=o.useRef(),it={},at="string"===typeof J;l?(it.title=Oe||!at||y?null:J,it["aria-describedby"]=Oe?je:null):(it["aria-label"]=at?J:null,it["aria-labelledby"]=Oe&&!at?je:null);var ct=Object(p.a)({},it,Q,c.props,{className:Object(f.a)(Q.className,c.props.className),onTouchStart:Fe,ref:$e},C?{onMouseMove:function(e){var t=c.props;t.onMouseMove&&t.onMouseMove(e),nt.current={x:e.clientX,y:e.clientY},ot.current&&ot.current.update()}}:{});var st={};k||(ct.onTouchStart=function(e){Fe(e),clearTimeout(de.current),clearTimeout(pe.current),we(),ye.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",me.current=setTimeout((function(){document.body.style.WebkitUserSelect=ye.current,ke(e)}),P)},ct.onTouchEnd=function(e){c.props.onTouchEnd&&c.props.onTouchEnd(e),we(),clearTimeout(de.current),de.current=setTimeout((function(){Te(e)}),F)}),y||(ct.onMouseOver=rt(He,ct.onMouseOver),ct.onMouseLeave=rt(Ie,ct.onMouseLeave),ue||(st.onMouseOver=He,st.onMouseLeave=Ie)),h||(ct.onFocus=rt(Ne,ct.onFocus),ct.onBlur=rt(Be,ct.onBlur),ue||(st.onFocus=Ne,st.onBlur=Be));var lt=o.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ce),options:{element:ce,padding:4}}];return null!=(e=Y.popperOptions)&&e.modifiers&&(t=t.concat(Y.popperOptions.modifiers)),Object(p.a)({},Y.popperOptions,{modifiers:t})}),[ce,Y]),ut=Object(p.a)({},r,{isRtl:ee,arrow:a,disableInteractive:ue,placement:U,PopperComponent:_,touch:le.current}),pt=function(e){var t=e.classes,r=e.disableInteractive,n=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!r&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",o&&"touch","tooltipPlacement".concat(Object(g.a)(i.split("-")[0]))],arrow:["arrow"]};return Object(d.a)(a,Je,t)}(ut);return Object(Ae.jsxs)(o.Fragment,{children:[o.cloneElement(c,ct),Object(Ae.jsx)(Ke,Object(p.a)({as:_,className:pt.popper,placement:U,anchorEl:C?{getBoundingClientRect:function(){return{top:nt.current.y,left:nt.current.x,right:nt.current.x,bottom:nt.current.y,width:0,height:0}}}:ne,popperRef:ot,open:!!ne&&Oe,id:je,transition:!0},st,Y,{popperOptions:lt,ownerState:ut,children:function(e){var t=e.TransitionProps;return Object(Ae.jsx)(G,Object(p.a)({timeout:Z.transitions.duration.shorter},t,K,{children:Object(Ae.jsxs)(Qe,{className:pt.tooltip,ownerState:ut,children:[J,a?Object(Ae.jsx)(Ze,{className:pt.arrow,ref:se,ownerState:ut}):null]})}))}}))]})})),ot=r(260),it=r(250),at=r(249),ct=r(265),st=r(251),lt={circle:{title:"Circle",image:"/shapes/circle.svg",config:{fill:Object(st.a)(),stroke:Object(st.a)()}},ellipse:{title:"Ellipse",image:"/shapes/ellipse.svg",config:{fill:Object(st.a)(),stroke:Object(st.a)()}},rect:{title:"Rectangle",image:"/shapes/rectangle.svg",config:{fill:Object(st.a)(),stroke:Object(st.a)()}},polygon:{title:"Polygon",image:"/shapes/polygon.svg",config:{sides:5,fill:Object(st.a)(),stroke:Object(st.a)()}},triangle:{title:"Triangle",image:"/shapes/triangle.svg",config:{fill:Object(st.a)(),stroke:Object(st.a)()}},arrow:{title:"Arrow",image:"/shapes/arrow.svg",config:{stroke:Object(st.a)(),strokeWidth:15}},line:{title:"Line",image:"/shapes/line.svg",config:{stroke:Object(st.a)(),strokeWidth:15}},pencil:{title:"Free Style",image:"/shapes/pen.svg",config:{stroke:Object(st.a)(),strokeWidth:15}}};function ut(){Object(ot.a)("Pikaso | Core Components | Drawing");var e=Object(o.useState)("pencil"),t=Object(n.a)(e,2),r=t[0],l=t[1],u=Object(it.a)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),p=Object(n.a)(u,2),f=p[0],d=p[1];Object(o.useEffect)((function(){d&&d.shapes.pencil.draw({stroke:"blue",strokeWidth:15})}),[d]);return Object(Ae.jsxs)("div",{children:[Object(Ae.jsx)(at.a,{children:"# [Drawing](/api/classes/ShapeDrawer.html)\n\n[Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) are the fundamental components of Pikaso shapes.\n\n[Shape Drawer](/api/classes/ShapeDrawer.html) represents how a Shape behaves when it is being created, while the [Shape Model](/api/classes/ShapeModel.html) represents how it behaves after it has been created.\n\n[insert](/api/classes/ShapeDrawer.html#insert), [draw](/api/classes/ShapeDrawer.html#draw) and [stopDrawing](/api/classes/ShapeDrawer.html#stopDrawing) are the most important methods of [Shape Drawer](/api/classes/ShapeDrawer.html)\n\n### Create custom shapes\n\nFor more information on extending the [Shape Model](/api/classes/ShapeModel.html) and [Shape Drawer](/api/classes/ShapeDrawer.html) classes, check out [tutorials/create-custom-shapes](/tutorials/create-custom-shapes).\n\n```ts\n// insert a circle\neditor.shapes.circle.insert({\n  /* config */\n})\n\n// start drawing a circle\neditor.shapes.circle.draw({\n  fill: 'blue'\n})\n\n// stop drawing circle\neditor.shapes.circle.stopDrawing()\n\n// start drawing a polygon\neditor.shapes.polygon.draw({\n  fill: 'red',\n  sides: 5\n})\n```"}),Object(Ae.jsx)(i.a,{mb:3,children:Object(Ae.jsx)("div",{ref:f,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"350px"}})}),Object(Ae.jsx)(ct.a,{buttonRenderer:function(e){var t=e.id,n=e.isOpen;return Object(Ae.jsx)(a.a,{"aria-describedby":t,size:"medium",label:Object(Ae.jsxs)("span",{children:["Drawing ",Object(Ae.jsx)("strong",{children:lt[r].title})]}),variant:"outlined",color:"info",avatar:Object(Ae.jsx)(c.a,{variant:"square",src:lt[r].image,sx:{width:32,height:32}}),sx:{cursor:"pointer",borderColor:n?"primary.main":"info",color:n?"primary.main":"info"}})},children:function(e){var t=e.close;return Object(Ae.jsx)(Ae.Fragment,{children:Object.entries(lt).map((function(e){var o=Object(n.a)(e,2),i=o[0],a=o[1];return Object(Ae.jsx)(s.a,{sx:{mr:.5},onClick:function(){!function(e){d&&(d.shapes[r].stopDrawing(),d.shapes[e].draw(lt[e].config),l(e))}(i),t()},children:Object(Ae.jsx)(nt,{title:a.title,children:Object(Ae.jsx)(c.a,{variant:"square",src:a.image,sx:{width:32,height:32}})})},a.title)}))})}})]})}}}]);
//# sourceMappingURL=16.486015f3.chunk.js.map