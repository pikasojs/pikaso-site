(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[20],{248:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(37),o=n(100),i=n(858),r=n(857),c=n(2),l=["children"];function s(e){var t=e.children,n=Object(o.a)(e,l);return Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({style:r.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(37),o=n(100),i=n(0),r=n(254),c=n(255),l=n(48),s=n(248),d=n(2),u=["node","inline","className","children"];function b(e){var t=e.children,n="string"===typeof t?t:t(),b=Object(i.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),a=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},i=0;i<n.length;i++){var r=n[i];o(r)&&(a=!0),t.push(a?r:r.trim()),a&&o(n[i+1])&&(a=!1)}return t.join("\n")}(n)}),[n]);return Object(d.jsx)(r.a,{skipHtml:!0,remarkPlugins:[c.a],children:b,components:{a:function(e){var t=e.href,n=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(d.jsx)("a",{href:t,target:"_blank",children:n}):Object(d.jsx)(l.b,{to:t,children:n})},code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,r=Object(o.a)(e,u),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(d.jsx)(s.a,Object(a.a)({children:String(i).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(d.jsx)("code",Object(a.a)(Object(a.a)({className:n},r),{},{children:i}))}}})}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(37),o=n(14),i=n(0),r=n(256);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(i.useState)(null),c=Object(o.a)(n,2),l=c[0],s=c[1],d=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n=new r.b(Object(a.a)({container:d.current},e),t);s(n)}),[]),Object(i.useEffect)((function(){l&&window.addEventListener("resize",(function(){l.board.rescale()}))}),[l]),[d,l]}},260:function(e,t,n){"use strict";var a=n(0),o={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var n=Object(a.useRef)(document.title);document.title!==e&&(document.title=e),Object(a.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=n.current}:void 0}),[])}:function(e){}},268:function(e,t,n){"use strict";var a=n(10),o=n(3),i=n(1),r=n(0),c=(n(7),n(5)),l=n(223),s=n(221),d=n(8),u=n(9),b=n(234),p=n(11),h=n(166),m=n(224);function f(e){return Object(h.a)("MuiButton",e)}var v=Object(m.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),j=n(2),g=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return Object(i.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},O=Object(d.a)(b.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(p.a)(n.color))],t["size".concat(Object(p.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(p.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(i.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(i.a)({textDecoration:"none",backgroundColor:Object(s.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(s.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(s.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(i.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(v.focusVisible),Object(i.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(v.disabled),Object(i.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(s.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(v.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(v.disabled),{boxShadow:"none"}),t)})),S=Object(d.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),z=Object(d.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),y=r.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),a=n.children,r=n.color,s=void 0===r?"primary":r,d=n.component,b=void 0===d?"button":d,h=n.disabled,m=void 0!==h&&h,v=n.disableElevation,x=void 0!==v&&v,y=n.disableFocusRipple,k=void 0!==y&&y,w=n.endIcon,C=n.focusVisibleClassName,R=n.fullWidth,F=void 0!==R&&R,I=n.size,M=void 0===I?"medium":I,B=n.startIcon,E=n.type,L=n.variant,W=void 0===L?"text":L,T=Object(o.a)(n,g),N=Object(i.a)({},n,{color:s,component:b,disabled:m,disableElevation:x,disableFocusRipple:k,fullWidth:F,size:M,type:E,variant:W}),P=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,r=e.variant,c=e.classes,s={root:["root",r,"".concat(r).concat(Object(p.a)(t)),"size".concat(Object(p.a)(o)),"".concat(r,"Size").concat(Object(p.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(o))],endIcon:["endIcon","iconSize".concat(Object(p.a)(o))]},d=Object(l.a)(s,f,c);return Object(i.a)({},c,d)}(N),V=B&&Object(j.jsx)(S,{className:P.startIcon,ownerState:N,children:B}),A=w&&Object(j.jsx)(z,{className:P.endIcon,ownerState:N,children:w});return Object(j.jsxs)(O,Object(i.a)({ownerState:N,component:b,disabled:m,focusRipple:!k,focusVisibleClassName:Object(c.a)(P.focusVisible,C),ref:t,type:E},T,{classes:P,children:[V,a,A]}))}));t.a=y},68:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(14),o=n(0),i=n(239),r=n(268),c=n(260),l=n(250),s=n(249),d=n(2);function u(){Object(c.a)("Pikaso | Core Components | Filters");var e=Object(l.a)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),t=Object(a.a)(e,2),n=t[0],u=t[1];return Object(o.useEffect)((function(){null===u||void 0===u||u.board.background.setImageFromUrl("https://source.unsplash.com/random/1000x400?hash=".concat(Math.random()))}),[u]),Object(d.jsxs)("div",{children:[Object(d.jsx)(s.a,{children:"# [Filter](/api/classes/Filter.html)\n        \nFilters are the best way to add visual effects to [Background](/api/classes/Background.html) and [Shapes](/api/classes/ShapeModel.html)\n\n[This page contains a list of all listeners to this event](/api/index.html#Filters)\n\n\n### Create Custom Filters\n\n[Read More](/customization/create-custom-filters)\n\n```ts\n// Adds Blur effect to background image\neditor.board.background.image.addFilter({\n  name: 'Blur',\n  options: {\n    blurRadius: 20\n  }\n})\n\n// Adds Contrast filter to all selected shapes\neditor.selection.addFilter({\n  name: 'Contrast',\n  options: {\n    contrast: 30\n  }\n})\n\n// Adds multiple filters to all selected shapes\neditor.selection.addFilter([\n  {\n    name: 'Contrast',\n    options: {\n      contrast: 30\n    }\n  }, \n  {\n    name: 'Blur',\n    options: {\n      blurRadius: 20\n    }\n  }\n])\n\n// Remove Contrast filter from selected items\neditor.selection.removeFilter({ name: 'Contrast' })\n\n// Remove multiple filters\neditor.selection.removeFilter([\n  { name: 'Blur' },\n  { name: 'Contrast' }\n])\n\n\n// Add Mask filter to a shape\nconst shape = editor.shapes.circle.insert({ /* config */ })\n\nshape.addFilter({\n  name: 'Mask',\n  options: {\n    threshold: 10\n  }\n})\n\n// Remove Mask filter from the shape\nshape.removeFilter({ name: 'Mask' })\n\n// add custom filter\nshape.addFilter({\n  customFn: imageData => theCustomFilter(imageData)\n})\n\n// Apply filters to shapes directly\neditor.filters.apply(<ListOfShapes>, <ListOfFilters>)\n\n// Remove filters of shapes directly\neditor.filters.remove(<ListOfShapes>, <ListOfFilters>)\n```\n"}),Object(d.jsx)(i.a,{mb:3,children:Object(d.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"400px"}})}),Object(d.jsxs)(i.a,{display:"flex",justifyContent:"flex-end",children:[Object(d.jsx)(r.a,{size:"small",variant:"outlined",sx:{mr:1},onClick:function(){return null===u||void 0===u?void 0:u.board.background.image.addFilter({name:"Blur",options:{blurRadius:10}})},children:"Blur"}),Object(d.jsx)(r.a,{size:"small",variant:"outlined",sx:{mr:1},onClick:function(){return null===u||void 0===u?void 0:u.board.background.image.addFilter({name:"Contrast",options:{contrast:30}})},children:"Contrast"}),Object(d.jsx)(r.a,{size:"small",variant:"outlined",sx:{mr:1},onClick:function(){return null===u||void 0===u?void 0:u.board.background.image.addFilter({name:"Grayscale"})},children:"Grayscale"}),Object(d.jsx)(r.a,{size:"small",sx:{mr:1},href:"/api/index.html#Filters",target:"_blank",children:"More Filters..."})]})]})}}}]);
//# sourceMappingURL=20.78798545.chunk.js.map