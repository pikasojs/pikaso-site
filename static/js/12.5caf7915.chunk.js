(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[12,50,52,53],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"FillBackground",(function(){return x}));var a=n(14),o=n(0),r=n(851),i=n(852),c=n(232),l=n(853),d=n(281),s=n(231),u=n(282),b=n(267),j=n(283),h=n(256),p=n.n(h),f=n(239),m=n(240),v=n(242),g=n(243),O=n(2);function x(){var e=Object(v.a)(),t=Object(a.a)(e,2),n=t[0],h=t[1];Object(o.useEffect)((function(){null===h||void 0===h||h.board.background.fill(Object(g.a)())}),[h]);return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(i.a,{expandIcon:Object(O.jsx)(p.a,{}),children:Object(O.jsx)(c.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"fill"})}),Object(O.jsx)(l.a,{children:Object(O.jsxs)(d.a,{sx:{mb:4},children:[Object(O.jsx)(s.a,{my:1,children:Object(O.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(O.jsx)(u.a,{sx:{justifyContent:"flex-end"},children:Object(O.jsx)(b.a,{variant:"contained",onClick:function(){null===h||void 0===h||h.board.background.fill(Object(g.a)())},children:"Change Background Color"})}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(c.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(O.jsx)(m.a,{children:function(){return"[fill](/api/classes/Background.html#fill) "}})}),Object(O.jsx)(f.a,{language:"typescript",children:"// change background color\neditor.board.background.fill('#262626')"})]})]})})]})}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromFile",(function(){return g}));var a=n(14),o=n(851),r=n(852),i=n(232),c=n(853),l=n(281),d=n(231),s=n(282),u=n(267),b=n(283),j=n(256),h=n.n(j),p=n(239),f=n(240),m=n(242),v=n(2);function g(){var e=Object(m.a)(),t=Object(a.a)(e,2),n=t[0],j=t[1];return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(r.a,{expandIcon:Object(v.jsx)(h.a,{}),children:Object(v.jsx)(i.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromFile"})}),Object(v.jsx)(c.a,{children:Object(v.jsxs)(l.a,{sx:{mb:4},children:[Object(v.jsx)(d.a,{my:1,children:Object(v.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(v.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(v.jsxs)(u.a,{variant:"contained",component:"label",children:["Select Image From Computer",Object(v.jsx)("input",{accept:"image/*",type:"file",hidden:!0,onChange:function(e){var t,n,a=null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];a&&(null===j||void 0===j||j.loadFromFile(a))}})]})}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(i.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(v.jsx)(f.a,{children:function(){return"[setImageFromFile](/api/classes/Background.html#setImageFromFile)"}})}),Object(v.jsx)(p.a,{language:"typescript",children:"// load image file\neditor.board.background.setImageFromFile('<ImageFile>')\n\n// Alternatively, you may use\neditor.loadFromFile('<ImageFile>')"})]})]})})]})}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromUrl",(function(){return g}));var a=n(14),o=n(851),r=n(852),i=n(232),c=n(853),l=n(281),d=n(231),s=n(282),u=n(267),b=n(283),j=n(256),h=n.n(j),p=n(239),f=n(240),m=n(242),v=n(2);function g(){var e=Object(m.a)(),t=Object(a.a)(e,2),n=t[0],j=t[1];return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(r.a,{expandIcon:Object(v.jsx)(h.a,{}),children:Object(v.jsx)(i.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromUrl"})}),Object(v.jsx)(c.a,{children:Object(v.jsxs)(l.a,{sx:{mb:4},children:[Object(v.jsx)(d.a,{my:1,children:Object(v.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(v.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(v.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){null===j||void 0===j||j.board.background.setImageFromUrl("https://source.unsplash.com/random1000x400?hash=".concat(Math.random()))},children:"Load Random Background"})}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(i.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(v.jsx)(f.a,{children:function(){return"[setImageFromUrl](/api/classes/Background.html#setImageFromUrl)"}})}),Object(v.jsx)(p.a,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"})]})]})})]})}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(59),o=n(97),r=n(849),i=n(847),c=n(2),l=["children"];function d(e){var t=e.children,n=Object(o.a)(e,l);return Object(c.jsx)(r.a,Object(a.a)(Object(a.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(59),o=n(97),r=n(0),i=n(248),c=n(249),l=n(47),d=n(239),s=n(2),u=["node","inline","className","children"];function b(e){var t=e.children,n="string"===typeof t?t:t(),b=Object(r.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),a=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},r=0;r<n.length;r++){var i=n[r];o(i)&&(a=!0),t.push(a?i:i.trim()),a&&o(n[r+1])&&(a=!1)}return t.join("\n")}(n)}),[n]);return Object(s.jsx)(i.a,{skipHtml:!0,remarkPlugins:[c.a],children:b,components:{a:function(e){var t=e.href,n=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(s.jsx)("a",{href:t,target:"_blank",children:n}):Object(s.jsx)(l.b,{to:t,children:n})},code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,i=Object(o.a)(e,u),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(s.jsx)(d.a,Object(a.a)({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"div"},i)):Object(s.jsx)("code",Object(a.a)(Object(a.a)({className:n},i),{},{children:r}))}}})}},243:function(e,t,n){"use strict";function a(){var e=Math.round,t=Math.random;return"rgb("+e(255*t())+","+e(255*t())+","+e(255*t())+")"}n.d(t,"a",(function(){return a}))},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(48);function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(241);function o(e,t,n){return o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}},o(e,t,n||e)}},267:function(e,t,n){"use strict";var a=n(10),o=n(3),r=n(1),i=n(0),c=(n(7),n(5)),l=n(214),d=n(212),s=n(8),u=n(9),b=n(224),j=n(12),h=n(161),p=n(215);function f(e){return Object(h.a)("MuiButton",e)}var m=Object(p.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=n(2),g=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],O=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(j.a)(n.color))],t["size".concat(Object(j.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(j.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(r.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(d.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(m.focusVisible),Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(m.disabled),Object(r.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(d.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(m.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(m.disabled),{boxShadow:"none"}),t)})),y=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(j.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},O(t))})),S=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(j.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},O(t))})),w=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),a=n.children,i=n.color,d=void 0===i?"primary":i,s=n.component,b=void 0===s?"button":s,h=n.disabled,p=void 0!==h&&h,m=n.disableElevation,O=void 0!==m&&m,w=n.disableFocusRipple,k=void 0!==w&&w,z=n.endIcon,C=n.focusVisibleClassName,I=n.fullWidth,F=void 0!==I&&I,R=n.size,M=void 0===R?"medium":R,B=n.startIcon,N=n.type,L=n.variant,W=void 0===L?"text":L,A=Object(o.a)(n,g),E=Object(r.a)({},n,{color:d,component:b,disabled:p,disableElevation:O,disableFocusRipple:k,fullWidth:F,size:M,type:N,variant:W}),T=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,i=e.variant,c=e.classes,d={root:["root",i,"".concat(i).concat(Object(j.a)(t)),"size".concat(Object(j.a)(o)),"".concat(i,"Size").concat(Object(j.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(j.a)(o))],endIcon:["endIcon","iconSize".concat(Object(j.a)(o))]},s=Object(l.a)(d,f,c);return Object(r.a)({},c,s)}(E),U=B&&Object(v.jsx)(y,{className:T.startIcon,ownerState:E,children:B}),P=z&&Object(v.jsx)(S,{className:T.endIcon,ownerState:E,children:z});return Object(v.jsxs)(x,Object(r.a)({ownerState:E,component:b,disabled:p,focusRipple:!k,focusVisibleClassName:Object(c.a)(T.focusVisible,C),ref:t,type:N},A,{classes:T,children:[U,a,P]}))}));t.a=w},281:function(e,t,n){"use strict";var a=n(1),o=n(3),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),d=n(9),s=n(235),u=n(161),b=n(215);function j(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var h=n(2),p=["className","raised"],f=Object(l.a)(s.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),m=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCard"}),r=n.className,l=n.raised,s=void 0!==l&&l,u=Object(o.a)(n,p),b=Object(a.a)({},n,{raised:s}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(b);return Object(h.jsx)(f,Object(a.a)({className:Object(i.a)(m.root,r),elevation:s?8:void 0,ref:t,ownerState:b},u))}));t.a=m},282:function(e,t,n){"use strict";var a=n(3),o=n(1),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),d=n(9),s=n(161),u=n(215);function b(e){return Object(s.a)("MuiCardActions",e)}Object(u.a)("MuiCardActions",["root","spacing"]);var j=n(2),h=["disableSpacing","className"],p=Object(l.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(o.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardActions"}),r=n.disableSpacing,l=void 0!==r&&r,s=n.className,u=Object(a.a)(n,h),f=Object(o.a)({},n,{disableSpacing:l}),m=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(n,b,t)}(f);return Object(j.jsx)(p,Object(o.a)({className:Object(i.a)(m.root,s),ownerState:f,ref:t},u))}));t.a=f},283:function(e,t,n){"use strict";var a=n(1),o=n(3),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),d=n(9),s=n(161),u=n(215);function b(e){return Object(s.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var j=n(2),h=["className","component"],p=Object(l.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardContent"}),r=n.className,l=n.component,s=void 0===l?"div":l,u=Object(o.a)(n,h),f=Object(a.a)({},n,{component:s}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(f);return Object(j.jsx)(p,Object(a.a)({as:s,className:Object(i.a)(m.root,r),ownerState:f,ref:t},u))}));t.a=f},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(240),o=n(141),r=n(142),i=n(140),c=n(2);function l(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a,{children:"# [Background](/api/classes/Background.html)\n        \nBackground is the lowest and default layer. It will be created automatically when Pikaso is started.\n\nBackground is a special kind of [Shape Model](/api/classes/ShapeModel.html) that includes both [Image](/core/image) and [Rect](/core/rect). \n\nThe possibility of directly accessing those models and working on them is also available.\n\n```js\n// Access to background's image model\nconst backgroundImage = editor.board.background.image\n\n// Access to background's rect model\nconst backgroundOverlay = editor.board.background.overlay\n\n// All public methods and properties of ShapeModel can be accessed\nbackgroundImage.addFilter({\n  name: 'Blur',\n  options: {\n    blurRadius: 10\n  }\n})\n```"}),Object(c.jsx)(r.LoadFromUrl,{}),Object(c.jsx)(o.LoadFromFile,{}),Object(c.jsx)(i.FillBackground,{})]})}}}]);
//# sourceMappingURL=12.5caf7915.chunk.js.map