"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[8274],{90183:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87462),o=n(20627);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return(0,o.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},93044:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(29439),o=n(63366),i=n(87462),a=n(72791),s=n(28182),c=n(90767),u=n(47630),p=n(61046),l=n(76189),f=n(80184),d=(0,l.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=n(95159);function h(e){return(0,m.Z)("MuiAvatar",e)}(0,n(30208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:t.shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),y=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,u.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var w=a.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiAvatar"}),u=n.alt,l=n.children,d=n.className,m=n.component,w=void 0===m?"div":m,x=n.imgProps,O=n.sizes,Z=n.src,T=n.srcSet,R=n.variant,P=void 0===R?"circular":R,E=(0,o.Z)(n,v),k=null,j=function(e){var t=e.crossOrigin,n=e.referrerPolicy,o=e.src,i=e.srcSet,s=a.useState(!1),c=(0,r.Z)(s,2),u=c[0],p=c[1];return a.useEffect((function(){if(o||i){p(!1);var e=!0,r=new Image;return r.onload=function(){e&&p("loaded")},r.onerror=function(){e&&p("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=o,i&&(r.srcset=i),function(){e=!1}}}),[t,n,o,i]),u}((0,i.Z)({},x,{src:Z,srcSet:T})),M=Z||T,S=M&&"error"!==j,D=(0,i.Z)({},n,{colorDefault:!S,component:w,variant:P}),A=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(n,h,t)}(D);return k=S?(0,f.jsx)(y,(0,i.Z)({alt:u,src:Z,srcSet:T,sizes:O,ownerState:D,className:A.img},x)):null!=l?l:M&&u?u[0]:(0,f.jsx)(b,{className:A.fallback}),(0,f.jsx)(g,(0,i.Z)({as:w,ownerState:D,className:(0,s.Z)(A.root,d),ref:t},E,{children:k}))}))},82477:function(e,t,n){n.d(t,{Z:function(){return rt}});var r=n(29439),o=n(4942),i=n(63366),a=n(87462),s=n(72791),c=n(28182),u=n(90767),p=n(90183),l=n(12065),f=n(47630),d=n(13967),m=n(61046),h=n(14036),v=n(13208),g=n(47563),y=n(75721),b=n(99723);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){return e instanceof w(e).Element||e instanceof Element}function O(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function Z(e){return"undefined"!==typeof ShadowRoot&&(e instanceof w(e).ShadowRoot||e instanceof ShadowRoot)}var T=Math.max,R=Math.min,P=Math.round;function E(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(O(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=P(n.width)/a||1),i>0&&(o=P(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function k(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return E(M(e)).left+k(e).scrollLeft}function D(e){return w(e).getComputedStyle(e)}function A(e){var t=D(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function L(e,t,n){void 0===n&&(n=!1);var r=O(t),o=O(t)&&function(e){var t=e.getBoundingClientRect(),n=P(t.width)/e.offsetWidth||1,r=P(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=M(t),a=E(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==j(t)||A(i))&&(s=function(e){return e!==w(e)&&O(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:k(e);var t}(t)),O(t)?((c=E(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=S(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function C(e){var t=E(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function W(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(Z(e)?e.host:null)||M(e)}function B(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:O(e)&&A(e)?e:B(W(e))}function N(e,t){var n;void 0===t&&(t=[]);var r=B(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=w(r),a=o?[i].concat(i.visualViewport||[],A(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(N(W(a)))}function H(e){return["table","td","th"].indexOf(j(e))>=0}function I(e){return O(e)&&"fixed"!==D(e).position?e.offsetParent:null}function F(e){for(var t=w(e),n=I(e);n&&H(n)&&"static"===D(n).position;)n=I(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===D(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&O(e)&&"fixed"===D(e).position)return null;var n=W(e);for(Z(n)&&(n=n.host);O(n)&&["html","body"].indexOf(j(n))<0;){var r=D(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var q="top",z="bottom",U="right",V="left",_="auto",X=[q,z,U,V],Y="start",G="end",J="viewport",K="popper",Q=X.reduce((function(e,t){return e.concat([t+"-"+Y,t+"-"+G])}),[]),$=[].concat(X,[_]).reduce((function(e,t){return e.concat([t,t+"-"+Y,t+"-"+G])}),[]),ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function te(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ne(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ie(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?re:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:x(e)?N(e):e.contextElement?N(e.contextElement):[],popper:N(t)};var p=function(e){var t=te(e);return ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(oe(t,n)){o.rects={reference:L(t,F(n),"fixed"===o.options.strategy),popper:C(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,p=void 0===u?{}:u,l=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:ne((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!oe(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ae={passive:!0};function se(e){return e.split("-")[0]}function ce(e){return e.split("-")[1]}function ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?se(o):null,a=o?ce(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case q:t={x:s,y:n.y-r.height};break;case z:t={x:s,y:n.y+n.height};break;case U:t={x:n.x+n.width,y:c};break;case V:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?ue(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case Y:t[u]=t[u]-(n[p]/2-r[p]/2);break;case G:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}var le={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,l=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof p?p({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=V,x=q,O=window;if(u){var Z=F(n),T="clientHeight",R="clientWidth";if(Z===w(n)&&"static"!==D(Z=M(n)).position&&"absolute"===s&&(T="scrollHeight",R="scrollWidth"),Z=Z,o===q||(o===V||o===U)&&i===G)x=z,h-=(l&&Z===O&&O.visualViewport?O.visualViewport.height:Z[T])-r.height,h*=c?1:-1;if(o===V||(o===q||o===z)&&i===G)b=U,d-=(l&&Z===O&&O.visualViewport?O.visualViewport.width:Z[R])-r.width,d*=c?1:-1}var E,k=Object.assign({position:s},u&&le),j=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:P(t*r)/r||0,y:P(n*r)/r||0}}({x:d,y:h}):{x:d,y:h};return d=j.x,h=j.y,c?Object.assign({},k,((E={})[x]=y?"0":"",E[b]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},k,((t={})[x]=y?h+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var de={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=$.reduce((function(e,n){return e[n]=function(e,t,n){var r=se(e),o=[V,q].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[V,U].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},me={left:"right",right:"left",bottom:"top",top:"bottom"};function he(e){return e.replace(/left|right|bottom|top/g,(function(e){return me[e]}))}var ve={start:"end",end:"start"};function ge(e){return e.replace(/start|end/g,(function(e){return ve[e]}))}function ye(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Z(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function we(e,t){return t===J?be(function(e){var t=w(e),n=M(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+S(e),y:s}}(e)):x(t)?function(e){var t=E(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):be(function(e){var t,n=M(e),r=k(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=T(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=T(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+S(e),c=-r.scrollTop;return"rtl"===D(o||n).direction&&(s+=T(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(M(e)))}function xe(e,t,n){var r="clippingParents"===t?function(e){var t=N(W(e)),n=["absolute","fixed"].indexOf(D(e).position)>=0&&O(e)?F(e):e;return x(n)?t.filter((function(e){return x(e)&&ye(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=we(e,n);return t.top=T(r.top,t.top),t.right=R(r.right,t.right),t.bottom=R(r.bottom,t.bottom),t.left=T(r.left,t.left),t}),we(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Oe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ze(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Te(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?J:s,u=n.elementContext,p=void 0===u?K:u,l=n.altBoundary,f=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=Oe("number"!==typeof m?m:Ze(m,X)),v=p===K?"reference":K,g=e.rects.popper,y=e.elements[f?v:p],b=xe(x(y)?y:y.contextElement||M(e.elements.popper),a,c),w=E(e.elements.reference),O=pe({reference:w,element:g,strategy:"absolute",placement:o}),Z=be(Object.assign({},g,O)),T=p===K?Z:w,R={top:b.top-T.top+h.top,bottom:T.bottom-b.bottom+h.bottom,left:b.left-T.left+h.left,right:T.right-b.right+h.right},P=e.modifiersData.offset;if(p===K&&P){var k=P[o];Object.keys(R).forEach((function(e){var t=[U,z].indexOf(e)>=0?1:-1,n=[q,z].indexOf(e)>=0?"y":"x";R[e]+=k[n]*t}))}return R}function Re(e,t,n){return T(e,R(t,n))}var Pe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=Te(t,{boundary:c,rootBoundary:u,padding:l,altBoundary:p}),g=se(t.placement),y=ce(t.placement),b=!y,w=ue(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,P=t.rects.popper,E="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,k="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(O){if(i){var S,D="y"===w?q:V,A="y"===w?z:U,L="y"===w?"height":"width",W=O[w],B=W+v[D],N=W-v[A],H=d?-P[L]/2:0,I=y===Y?Z[L]:P[L],_=y===Y?-P[L]:-Z[L],X=t.elements.arrow,G=d&&X?C(X):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[D],Q=J[A],$=Re(0,Z[L],G[L]),ee=b?Z[L]/2-H-$-K-k.mainAxis:I-$-K-k.mainAxis,te=b?-Z[L]/2+H+$+Q+k.mainAxis:_+$+Q+k.mainAxis,ne=t.elements.arrow&&F(t.elements.arrow),re=ne?"y"===w?ne.clientTop||0:ne.clientLeft||0:0,oe=null!=(S=null==j?void 0:j[w])?S:0,ie=W+te-oe,ae=Re(d?R(B,W+ee-oe-re):B,W,d?T(N,ie):N);O[w]=ae,M[w]=ae-W}if(s){var pe,le="x"===w?q:V,fe="x"===w?z:U,de=O[x],me="y"===x?"height":"width",he=de+v[le],ve=de-v[fe],ge=-1!==[q,V].indexOf(g),ye=null!=(pe=null==j?void 0:j[x])?pe:0,be=ge?he:de-Z[me]-P[me]-ye+k.altAxis,we=ge?de+Z[me]+P[me]-ye-k.altAxis:ve,xe=d&&ge?function(e,t,n){var r=Re(e,t,n);return r>n?n:r}(be,de,we):Re(d?be:he,de,d?we:ve);O[x]=xe,M[x]=xe-de}t.modifiersData[r]=M}},requiresIfExists:["offset"]};var Ee={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=se(n.placement),c=ue(s),u=[V,U].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Oe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ze(e,X))}(o.padding,n),l=C(i),f="y"===c?q:V,d="y"===c?z:U,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],v=F(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=p[f],w=g-l[u]-p[d],x=g/2-l[u]/2+y,O=Re(b,x,w),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ye(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function je(e){return[q,U,z,V].some((function(t){return e[t]>=0}))}var Me=ie({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=w(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,ae)})),s&&c.addEventListener("resize",n.update,ae),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ae)})),s&&c.removeEventListener("resize",n.update,ae)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=pe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:se(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,fe(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,fe(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];O(o)&&j(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});O(r)&&j(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},de,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=se(v),y=c||(g===v||!m?[he(v)]:function(e){if(se(e)===_)return[];var t=he(e);return[ge(e),t,ge(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(se(n)===_?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?$:c,p=ce(r),l=p?s?Q:Q.filter((function(e){return ce(e)===p})):X,f=l.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,n){return t[n]=Te(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[se(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:u,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=b[0],R=0;R<b.length;R++){var P=b[R],E=se(P),k=ce(P)===Y,j=[q,z].indexOf(E)>=0,M=j?"width":"height",S=Te(t,{placement:P,boundary:p,rootBoundary:l,altBoundary:f,padding:u}),D=j?k?U:V:k?z:q;w[M]>x[M]&&(D=he(D));var A=he(D),L=[];if(i&&L.push(S[E]<=0),s&&L.push(S[D]<=0,S[A]<=0),L.every((function(e){return e}))){T=P,Z=!1;break}O.set(P,L)}if(Z)for(var C=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===C(W))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Pe,Ee,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Te(t,{elementContext:"reference"}),s=Te(t,{altBoundary:!0}),c=ke(a,r),u=ke(s,o,i),p=je(c),l=je(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]}),Se=n(96174),De=n(80184),Ae=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Le=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ce(e){return"function"===typeof e?e():e}var We={},Be=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,c=e.direction,u=e.disablePortal,p=e.modifiers,l=e.open,f=e.placement,d=e.popperOptions,m=e.popperRef,h=e.TransitionProps,v=(0,i.Z)(e,Ae),b=s.useRef(null),w=(0,g.Z)(b,t),x=s.useRef(null),O=(0,g.Z)(x,m),Z=s.useRef(O);(0,y.Z)((function(){Z.current=O}),[O]),s.useImperativeHandle(m,(function(){return x.current}),[]);var T=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(f,c),R=s.useState(T),P=(0,r.Z)(R,2),E=P[0],k=P[1];s.useEffect((function(){x.current&&x.current.forceUpdate()})),(0,y.Z)((function(){if(n&&l){Ce(n);var e=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;k(t.placement)}}];null!=p&&(e=e.concat(p)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));var t=Me(Ce(n),b.current,(0,a.Z)({placement:T},d,{modifiers:e}));return Z.current(t),function(){t.destroy(),Z.current(null)}}}),[n,u,p,l,d,T]);var j={placement:E};return null!==h&&(j.TransitionProps=h),(0,De.jsx)("div",(0,a.Z)({ref:w,role:"tooltip"},v,{children:"function"===typeof o?o(j):o}))})),Ne=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,c=e.container,u=e.direction,p=void 0===u?"ltr":u,l=e.disablePortal,f=void 0!==l&&l,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,g=e.placement,y=void 0===g?"bottom":g,w=e.popperOptions,x=void 0===w?We:w,O=e.popperRef,Z=e.style,T=e.transition,R=void 0!==T&&T,P=(0,i.Z)(e,Le),E=s.useState(!0),k=(0,r.Z)(E,2),j=k[0],M=k[1];if(!m&&!v&&(!R||j))return null;var S=c||(n?(0,b.Z)(Ce(n)).body:void 0);return(0,De.jsx)(Se.Z,{disablePortal:f,container:S,children:(0,De.jsx)(Be,(0,a.Z)({anchorEl:n,direction:p,disablePortal:f,modifiers:h,ref:t,open:R?!j:v,placement:y,popperOptions:x,popperRef:O},P,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:v||!m||R&&!j?null:"none"},Z),TransitionProps:R?{in:v,onEnter:function(){M(!1)},onExited:function(){M(!0)}}:null,children:o}))})})),He=n(69120),Ie=s.forwardRef((function(e,t){var n=(0,He.Z)(),r=(0,m.Z)({props:e,name:"MuiPopper"});return(0,De.jsx)(Ne,(0,a.Z)({direction:null==n?void 0:n.direction},r,{ref:t}))})),Fe=n(89683),qe=n(42071),ze=n(67384),Ue=n(68221),Ve=n(98278),_e=n(95159);function Xe(e){return(0,_e.Z)("MuiTooltip",e)}var Ye=(0,n(30208).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),Ge=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var Je=(0,f.ZP)(Ie,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,r=e.ownerState,i=e.open;return(0,a.Z)({zIndex:n.zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},r.arrow&&(t={},(0,o.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(Ye.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,o.Z)(t,'&[data-popper-placement*="top"] .'.concat(Ye.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,o.Z)(t,'&[data-popper-placement*="right"] .'.concat(Ye.arrow),(0,a.Z)({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,o.Z)(t,'&[data-popper-placement*="left"] .'.concat(Ye.arrow),(0,a.Z)({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),Ke=(0,f.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,r=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:(0,l.Fq)(r.palette.grey[700],.92),borderRadius:r.shape.borderRadius,color:r.palette.common.white,fontFamily:r.typography.fontFamily,padding:"4px 8px",fontSize:r.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:r.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:r.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:r.typography.fontWeightRegular},(t={},(0,o.Z)(t,".".concat(Ye.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,o.Z)(t,".".concat(Ye.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,o.Z)(t,".".concat(Ye.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,o.Z)(t,".".concat(Ye.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),Qe=(0,f.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,l.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),$e=!1,et=null;function tt(e,t){return function(n){t&&t(n),e(n)}}var nt=s.forwardRef((function(e,t){var n,o,l,f,g,y,b=(0,m.Z)({props:e,name:"MuiTooltip"}),w=b.arrow,x=void 0!==w&&w,O=b.children,Z=b.components,T=void 0===Z?{}:Z,R=b.componentsProps,P=void 0===R?{}:R,E=b.describeChild,k=void 0!==E&&E,j=b.disableFocusListener,M=void 0!==j&&j,S=b.disableHoverListener,D=void 0!==S&&S,A=b.disableInteractive,L=void 0!==A&&A,C=b.disableTouchListener,W=void 0!==C&&C,B=b.enterDelay,N=void 0===B?100:B,H=b.enterNextDelay,I=void 0===H?0:H,F=b.enterTouchDelay,q=void 0===F?700:F,z=b.followCursor,U=void 0!==z&&z,V=b.id,_=b.leaveDelay,X=void 0===_?0:_,Y=b.leaveTouchDelay,G=void 0===Y?1500:Y,J=b.onClose,K=b.onOpen,Q=b.open,$=b.placement,ee=void 0===$?"bottom":$,te=b.PopperComponent,ne=b.PopperProps,re=void 0===ne?{}:ne,oe=b.title,ie=b.TransitionComponent,ae=void 0===ie?v.Z:ie,se=b.TransitionProps,ce=(0,i.Z)(b,Ge),ue=(0,d.Z)(),pe="rtl"===ue.direction,le=s.useState(),fe=(0,r.Z)(le,2),de=fe[0],me=fe[1],he=s.useState(null),ve=(0,r.Z)(he,2),ge=ve[0],ye=ve[1],be=s.useRef(!1),we=L||U,xe=s.useRef(),Oe=s.useRef(),Ze=s.useRef(),Te=s.useRef(),Re=(0,Ve.Z)({controlled:Q,default:!1,name:"Tooltip",state:"open"}),Pe=(0,r.Z)(Re,2),Ee=Pe[0],ke=Pe[1],je=Ee,Me=(0,ze.Z)(V),Se=s.useRef(),Ae=s.useCallback((function(){void 0!==Se.current&&(document.body.style.WebkitUserSelect=Se.current,Se.current=void 0),clearTimeout(Te.current)}),[]);s.useEffect((function(){return function(){clearTimeout(xe.current),clearTimeout(Oe.current),clearTimeout(Ze.current),Ae()}}),[Ae]);var Le=function(e){clearTimeout(et),$e=!0,ke(!0),K&&!je&&K(e)},Ce=(0,Fe.Z)((function(e){clearTimeout(et),et=setTimeout((function(){$e=!1}),800+X),ke(!1),J&&je&&J(e),clearTimeout(xe.current),xe.current=setTimeout((function(){be.current=!1}),ue.transitions.duration.shortest)})),We=function(e){be.current&&"touchstart"!==e.type||(de&&de.removeAttribute("title"),clearTimeout(Oe.current),clearTimeout(Ze.current),N||$e&&I?Oe.current=setTimeout((function(){Le(e)}),$e?I:N):Le(e))},Be=function(e){clearTimeout(Oe.current),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Ce(e)}),X)},Ne=(0,Ue.Z)(),He=Ne.isFocusVisibleRef,_e=Ne.onBlur,Ye=Ne.onFocus,nt=Ne.ref,rt=s.useState(!1),ot=(0,r.Z)(rt,2)[1],it=function(e){_e(e),!1===He.current&&(ot(!1),Be(e))},at=function(e){de||me(e.currentTarget),Ye(e),!0===He.current&&(ot(!0),We(e))},st=function(e){be.current=!0;var t=O.props;t.onTouchStart&&t.onTouchStart(e)},ct=We,ut=Be;s.useEffect((function(){if(je)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ce(e)}}),[Ce,je]);var pt=(0,qe.Z)(me,t),lt=(0,qe.Z)(nt,pt),ft=(0,qe.Z)(O.ref,lt);""===oe&&(je=!1);var dt=s.useRef({x:0,y:0}),mt=s.useRef(),ht={},vt="string"===typeof oe;k?(ht.title=je||!vt||D?null:oe,ht["aria-describedby"]=je?Me:null):(ht["aria-label"]=vt?oe:null,ht["aria-labelledby"]=je&&!vt?Me:null);var gt=(0,a.Z)({},ht,ce,O.props,{className:(0,c.Z)(ce.className,O.props.className),onTouchStart:st,ref:ft},U?{onMouseMove:function(e){var t=O.props;t.onMouseMove&&t.onMouseMove(e),dt.current={x:e.clientX,y:e.clientY},mt.current&&mt.current.update()}}:{});var yt={};W||(gt.onTouchStart=function(e){st(e),clearTimeout(Ze.current),clearTimeout(xe.current),Ae(),Se.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Te.current=setTimeout((function(){document.body.style.WebkitUserSelect=Se.current,We(e)}),q)},gt.onTouchEnd=function(e){O.props.onTouchEnd&&O.props.onTouchEnd(e),Ae(),clearTimeout(Ze.current),Ze.current=setTimeout((function(){Ce(e)}),G)}),D||(gt.onMouseOver=tt(ct,gt.onMouseOver),gt.onMouseLeave=tt(ut,gt.onMouseLeave),we||(yt.onMouseOver=ct,yt.onMouseLeave=ut)),M||(gt.onFocus=tt(at,gt.onFocus),gt.onBlur=tt(it,gt.onBlur),we||(yt.onFocus=at,yt.onBlur=it));var bt=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(ge),options:{element:ge,padding:4}}];return null!=(e=re.popperOptions)&&e.modifiers&&(t=t.concat(re.popperOptions.modifiers)),(0,a.Z)({},re.popperOptions,{modifiers:t})}),[ge,re]),wt=(0,a.Z)({},b,{isRtl:pe,arrow:x,disableInteractive:we,placement:ee,PopperComponentProp:te,touch:be.current}),xt=function(e){var t=e.classes,n=e.disableInteractive,r=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,u.Z)(a,Xe,t)}(wt),Ot=null!=(n=T.Popper)?n:Je,Zt=null!=(o=null!=(l=T.Transition)?l:ae)?o:v.Z,Tt=null!=(f=T.Tooltip)?f:Ke,Rt=null!=(g=T.Arrow)?g:Qe,Pt=(0,p.Z)(Ot,(0,a.Z)({},re,P.popper),wt),Et=(0,p.Z)(Zt,(0,a.Z)({},se,P.transition),wt),kt=(0,p.Z)(Tt,(0,a.Z)({},P.tooltip),wt),jt=(0,p.Z)(Rt,(0,a.Z)({},P.arrow),wt);return(0,De.jsxs)(s.Fragment,{children:[s.cloneElement(O,gt),(0,De.jsx)(Ot,(0,a.Z)({as:null!=te?te:Ie,placement:ee,anchorEl:U?{getBoundingClientRect:function(){return{top:dt.current.y,left:dt.current.x,right:dt.current.x,bottom:dt.current.y,width:0,height:0}}}:de,popperRef:mt,open:!!de&&je,id:Me,transition:!0},yt,Pt,{className:(0,c.Z)(xt.popper,null==re?void 0:re.className,null==(y=P.popper)?void 0:y.className),popperOptions:bt,children:function(e){var t,n,r=e.TransitionProps;return(0,De.jsx)(Zt,(0,a.Z)({timeout:ue.transitions.duration.shorter},r,Et,{children:(0,De.jsxs)(Tt,(0,a.Z)({},kt,{className:(0,c.Z)(xt.tooltip,null==(t=P.tooltip)?void 0:t.className),children:[oe,x?(0,De.jsx)(Rt,(0,a.Z)({},jt,{className:(0,c.Z)(xt.arrow,null==(n=P.arrow)?void 0:n.className),ref:ye})):null]}))}))}}))]})})),rt=nt},66509:function(e,t,n){var r=n(72791),o={restoreOnUnmount:!1};t.Z="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var n=(0,r.useRef)(document.title);document.title!==e&&(document.title=e),(0,r.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=n.current}:void 0}),[])}:function(e){}}}]);
//# sourceMappingURL=8274.ba8dc88a.chunk.js.map