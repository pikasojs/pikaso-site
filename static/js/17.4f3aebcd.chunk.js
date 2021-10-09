(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[17],{248:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(37),o=n(100),i=n(858),r=n(857),c=n(2),l=["children"];function d(e){var t=e.children,n=Object(o.a)(e,l);return Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({style:r.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(37),o=n(100),i=n(0),r=n(254),c=n(255),l=n(48),d=n(248),s=n(2),u=["node","inline","className","children"];function b(e){var t=e.children,n="string"===typeof t?t:t(),b=Object(i.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),a=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},i=0;i<n.length;i++){var r=n[i];o(r)&&(a=!0),t.push(a?r:r.trim()),a&&o(n[i+1])&&(a=!1)}return t.join("\n")}(n)}),[n]);return Object(s.jsx)(r.a,{skipHtml:!0,remarkPlugins:[c.a],children:b,components:{a:function(e){var t=e.href,n=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(s.jsx)("a",{href:t,target:"_blank",children:n}):Object(s.jsx)(l.b,{to:t,children:n})},code:function(e){e.node;var t=e.inline,n=e.className,i=e.children,r=Object(o.a)(e,u),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(s.jsx)(d.a,Object(a.a)({children:String(i).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(s.jsx)("code",Object(a.a)(Object(a.a)({className:n},r),{},{children:i}))}}})}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(37),o=n(14),i=n(0),r=n(256);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(i.useState)(null),c=Object(o.a)(n,2),l=c[0],d=c[1],s=Object(i.useRef)(null);return Object(i.useEffect)((function(){var n=new r.b(Object(a.a)({container:s.current},e),t);d(n)}),[]),Object(i.useEffect)((function(){l&&window.addEventListener("resize",(function(){l.board.rescale()}))}),[l]),[s,l]}},260:function(e,t,n){"use strict";var a=n(0),o={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var n=Object(a.useRef)(document.title);document.title!==e&&(document.title=e),Object(a.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=n.current}:void 0}),[])}:function(e){}},268:function(e,t,n){"use strict";var a=n(10),o=n(3),i=n(1),r=n(0),c=(n(7),n(5)),l=n(223),d=n(221),s=n(8),u=n(9),b=n(234),p=n(11),h=n(166),m=n(224);function v(e){return Object(h.a)("MuiButton",e)}var f=Object(m.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),g=n(2),j=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],O=function(e){return Object(i.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(p.a)(n.color))],t["size".concat(Object(p.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(p.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(i.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(i.a)({textDecoration:"none",backgroundColor:Object(d.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(i.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(f.focusVisible),Object(i.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(f.disabled),Object(i.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(d.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(f.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(f.disabled),{boxShadow:"none"}),t)})),S=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},O(t))})),z=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},O(t))})),y=r.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),a=n.children,r=n.color,d=void 0===r?"primary":r,s=n.component,b=void 0===s?"button":s,h=n.disabled,m=void 0!==h&&h,f=n.disableElevation,O=void 0!==f&&f,y=n.disableFocusRipple,w=void 0!==y&&y,I=n.endIcon,k=n.focusVisibleClassName,C=n.fullWidth,R=void 0!==C&&C,E=n.size,M=void 0===E?"medium":E,L=n.startIcon,W=n.type,B=n.variant,N=void 0===B?"text":B,T=Object(o.a)(n,j),P=Object(i.a)({},n,{color:d,component:b,disabled:m,disableElevation:O,disableFocusRipple:w,fullWidth:R,size:M,type:W,variant:N}),V=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,r=e.variant,c=e.classes,d={root:["root",r,"".concat(r).concat(Object(p.a)(t)),"size".concat(Object(p.a)(o)),"".concat(r,"Size").concat(Object(p.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(o))],endIcon:["endIcon","iconSize".concat(Object(p.a)(o))]},s=Object(l.a)(d,v,c);return Object(i.a)({},c,s)}(P),F=L&&Object(g.jsx)(S,{className:V.startIcon,ownerState:P,children:L}),U=I&&Object(g.jsx)(z,{className:V.endIcon,ownerState:P,children:I});return Object(g.jsxs)(x,Object(i.a)({ownerState:P,component:b,disabled:m,focusRipple:!w,focusVisibleClassName:Object(c.a)(V.focusVisible,k),ref:t,type:W},T,{classes:V,children:[F,a,U]}))}));t.a=y},469:function(e,t,n){"use strict";function a(e,t){return Math.random()*(t-e)+e}n.d(t,"a",(function(){return a}))},71:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(14),o=n(0),i=n(239),r=n(268),c=n(260),l=n(250),d=n(249),s=n(469),u=n(2);function b(){Object(c.a)("Pikaso | Core Components | Image");var e=Object(l.a)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),t=Object(a.a)(e,2),n=t[0],b=t[1];Object(o.useEffect)((function(){b&&p()}),[b]);var p=function(){null===b||void 0===b||b.shapes.image.insert("https://source.unsplash.com/random/200x200random?rand=".concat(Math.random()),{x:Object(s.a)(0,b.board.stage.width()-100),y:Object(s.a)(0,b.board.stage.height()-100),drawBorder:!0})};return Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{children:"# [Image](/api/classes/Image.html)\n        \nImage is another built-in [Shape](/api/classes/ShapeModel.html) and inherits all of its methods and properties.\n\n```js\n// create a new image from url\neditor.shapes.image.insert('<URL>', {\n  // config\n})\n\n// create a new image from file\neditor.shapes.image.insert('<FILE>', {\n  // config\n})\n\n// create a new image from Konva\nconst konvaImage = new Konva.Image({\n  image: <Image>\n})\n\neditor.shapes.image.insert(konvaImage, {\n  // config\n})\n```"}),Object(u.jsx)(i.a,{mb:3,children:Object(u.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}),Object(u.jsx)(i.a,{display:"flex",justifyContent:"flex-end",children:Object(u.jsx)(r.a,{variant:"contained",color:"primary",size:"small",onClick:p,children:"Add Random Image"})})]})}}}]);
//# sourceMappingURL=17.4f3aebcd.chunk.js.map