(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[11,49,52,53],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"FillBackground",(function(){return x}));var a=n(11),o=n(0),r=n(861),i=n(862),c=n(243),l=n(863),d=n(286),s=n(242),u=n(287),b=n(271),j=n(288),h=n(266),p=n.n(h),m=n(251),f=n(252),v=n(253),O=n(254),g=n(2);function x(){var e=Object(v.a)(),t=Object(a.a)(e,2),n=t[0],h=t[1];Object(o.useEffect)((function(){null===h||void 0===h||h.board.background.fill(Object(O.a)())}),[h]);return Object(g.jsxs)(r.a,{children:[Object(g.jsx)(i.a,{expandIcon:Object(g.jsx)(p.a,{}),children:Object(g.jsx)(c.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"fill"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(d.a,{sx:{mb:4},children:[Object(g.jsx)(s.a,{my:1,children:Object(g.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"600px",height:"400px"}})}),Object(g.jsx)(u.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(b.a,{variant:"contained",onClick:function(){null===h||void 0===h||h.board.background.fill(Object(O.a)())},children:"Change Background Color"})}),Object(g.jsxs)(j.a,{children:[Object(g.jsx)(c.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(f.a,{children:function(){return"[fill](/api/classes/Background.html#fill) "}})}),Object(g.jsx)(m.a,{language:"typescript",children:"// change background color\neditor.board.background.fill('#262626')"})]})]})})]})}},149:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromFile",(function(){return O}));var a=n(11),o=n(861),r=n(862),i=n(243),c=n(863),l=n(286),d=n(242),s=n(287),u=n(271),b=n(288),j=n(266),h=n.n(j),p=n(251),m=n(252),f=n(253),v=n(2);function O(){var e=Object(f.a)(),t=Object(a.a)(e,2),n=t[0],j=t[1];return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(r.a,{expandIcon:Object(v.jsx)(h.a,{}),children:Object(v.jsx)(i.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromFile"})}),Object(v.jsx)(c.a,{children:Object(v.jsxs)(l.a,{sx:{mb:4},children:[Object(v.jsx)(d.a,{my:1,children:Object(v.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"600px",height:"400px"}})}),Object(v.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(v.jsxs)(u.a,{variant:"contained",component:"label",children:["Select Image From Computer",Object(v.jsx)("input",{accept:"image/*",type:"file",hidden:!0,onChange:function(e){var t,n,a=null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];a&&(null===j||void 0===j||j.loadFromFile(a))}})]})}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(i.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(v.jsx)(m.a,{children:function(){return"[setImageFromFile](/api/classes/Background.html#setImageFromFile)"}})}),Object(v.jsx)(p.a,{language:"typescript",children:"// load image file\neditor.board.background.setImageFromFile('<ImageFile>')\n\n// Alternatively, you may use\neditor.loadFromFile('<ImageFile>')"})]})]})})]})}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromUrl",(function(){return O}));var a=n(11),o=n(861),r=n(862),i=n(243),c=n(863),l=n(286),d=n(242),s=n(287),u=n(271),b=n(288),j=n(266),h=n.n(j),p=n(251),m=n(252),f=n(253),v=n(2);function O(){var e=Object(f.a)(),t=Object(a.a)(e,2),n=t[0],j=t[1];return Object(v.jsxs)(o.a,{expanded:!0,children:[Object(v.jsx)(r.a,{expandIcon:Object(v.jsx)(h.a,{}),children:Object(v.jsx)(i.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromUrl"})}),Object(v.jsx)(c.a,{children:Object(v.jsxs)(l.a,{sx:{mb:4},children:[Object(v.jsx)(d.a,{my:1,children:Object(v.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"600px",height:"400px"}})}),Object(v.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(v.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){null===j||void 0===j||j.board.background.setImageFromUrl("https://source.unsplash.com/random/600x400?hash=".concat(Math.random()))},children:"Load Random Background"})}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(i.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(v.jsx)(m.a,{children:function(){return"[setImageFromUrl](/api/classes/Background.html#setImageFromUrl)"}})}),Object(v.jsx)(p.a,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"})]})]})})]})}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(37),o=n(100),r=n(860),i=n(859),c=n(2),l=["children"];function d(e){var t=e.children,n=Object(o.a)(e,l);return Object(c.jsx)(r.a,Object(a.a)(Object(a.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(37),o=n(100),r=n(0),i=n(257),c=n(258),l=n(49),d=n(251),s=n(2),u=["node","inline","className","children"];function b(e){var t=e.children,n="string"===typeof t?t:t(),b=Object(r.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),a=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},r=0;r<n.length;r++){var i=n[r];o(i)&&(a=!0),t.push(a?i:i.trim()),a&&o(n[r+1])&&(a=!1)}return t.join("\n")}(n)}),[n]);return Object(s.jsx)(i.a,{skipHtml:!0,remarkPlugins:[c.a],children:b,components:{a:function(e){var t=e.href,n=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(s.jsx)("a",{href:t,target:"_blank",children:n}):Object(s.jsx)(l.b,{to:t,children:n})},code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,i=Object(o.a)(e,u),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(s.jsx)(d.a,Object(a.a)({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"div"},i)):Object(s.jsx)("code",Object(a.a)(Object(a.a)({className:n},i),{},{children:r}))}}})}},253:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(37),o=n(11),r=n(0),i=n(259);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=Object(r.useState)(null),c=Object(o.a)(n,2),l=c[0],d=c[1],s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var n=new i.b(Object(a.a)({container:s.current},e),t);d(n)}),[]),Object(r.useEffect)((function(){l&&window.addEventListener("resize",(function(){l.board.rescale()}))}),[l]),[s,l]}},254:function(e,t,n){"use strict";function a(){var e=Math.round,t=Math.random;return"rgb("+e(255*t())+","+e(255*t())+","+e(255*t())+")"}n.d(t,"a",(function(){return a}))},263:function(e,t,n){"use strict";var a=n(0),o={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(e,t){void 0===t&&(t=o);var n=Object(a.useRef)(document.title);document.title!==e&&(document.title=e),Object(a.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=n.current}:void 0}),[])}:function(e){}},271:function(e,t,n){"use strict";var a=n(10),o=n(3),r=n(1),i=n(0),c=(n(7),n(5)),l=n(226),d=n(224),s=n(8),u=n(9),b=n(237),j=n(12),h=n(169),p=n(227);function m(e){return Object(h.a)("MuiButton",e)}var f=Object(p.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=n(2),O=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(j.a)(n.color))],t["size".concat(Object(j.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(j.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(r.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(d.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(f.focusVisible),Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(f.disabled),Object(r.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(d.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(f.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(f.disabled),{boxShadow:"none"}),t)})),S=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(j.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},g(t))})),y=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(j.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},g(t))})),k=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),a=n.children,i=n.color,d=void 0===i?"primary":i,s=n.component,b=void 0===s?"button":s,h=n.disabled,p=void 0!==h&&h,f=n.disableElevation,g=void 0!==f&&f,k=n.disableFocusRipple,w=void 0!==k&&k,z=n.endIcon,C=n.focusVisibleClassName,I=n.fullWidth,F=void 0!==I&&I,R=n.size,M=void 0===R?"medium":R,B=n.startIcon,L=n.type,N=n.variant,E=void 0===N?"text":N,W=Object(o.a)(n,O),U=Object(r.a)({},n,{color:d,component:b,disabled:p,disableElevation:g,disableFocusRipple:w,fullWidth:F,size:M,type:L,variant:E}),A=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,i=e.variant,c=e.classes,d={root:["root",i,"".concat(i).concat(Object(j.a)(t)),"size".concat(Object(j.a)(o)),"".concat(i,"Size").concat(Object(j.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(j.a)(o))],endIcon:["endIcon","iconSize".concat(Object(j.a)(o))]},s=Object(l.a)(d,m,c);return Object(r.a)({},c,s)}(U),T=B&&Object(v.jsx)(S,{className:A.startIcon,ownerState:U,children:B}),P=z&&Object(v.jsx)(y,{className:A.endIcon,ownerState:U,children:z});return Object(v.jsxs)(x,Object(r.a)({ownerState:U,component:b,disabled:p,focusRipple:!w,focusVisibleClassName:Object(c.a)(A.focusVisible,C),ref:t,type:L},W,{classes:A,children:[T,a,P]}))}));t.a=k},286:function(e,t,n){"use strict";var a=n(1),o=n(3),r=n(0),i=(n(7),n(5)),c=n(226),l=n(8),d=n(9),s=n(246),u=n(169),b=n(227);function j(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var h=n(2),p=["className","raised"],m=Object(l.a)(s.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCard"}),r=n.className,l=n.raised,s=void 0!==l&&l,u=Object(o.a)(n,p),b=Object(a.a)({},n,{raised:s}),f=function(e){var t=e.classes;return Object(c.a)({root:["root"]},j,t)}(b);return Object(h.jsx)(m,Object(a.a)({className:Object(i.a)(f.root,r),elevation:s?8:void 0,ref:t,ownerState:b},u))}));t.a=f},287:function(e,t,n){"use strict";var a=n(3),o=n(1),r=n(0),i=(n(7),n(5)),c=n(226),l=n(8),d=n(9),s=n(169),u=n(227);function b(e){return Object(s.a)("MuiCardActions",e)}Object(u.a)("MuiCardActions",["root","spacing"]);var j=n(2),h=["disableSpacing","className"],p=Object(l.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(o.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardActions"}),r=n.disableSpacing,l=void 0!==r&&r,s=n.className,u=Object(a.a)(n,h),m=Object(o.a)({},n,{disableSpacing:l}),f=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(n,b,t)}(m);return Object(j.jsx)(p,Object(o.a)({className:Object(i.a)(f.root,s),ownerState:m,ref:t},u))}));t.a=m},288:function(e,t,n){"use strict";var a=n(1),o=n(3),r=n(0),i=(n(7),n(5)),c=n(226),l=n(8),d=n(9),s=n(169),u=n(227);function b(e){return Object(s.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var j=n(2),h=["className","component"],p=Object(l.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=r.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardContent"}),r=n.className,l=n.component,s=void 0===l?"div":l,u=Object(o.a)(n,h),m=Object(a.a)({},n,{component:s}),f=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(m);return Object(j.jsx)(p,Object(a.a)({as:s,className:Object(i.a)(f.root,r),ownerState:m,ref:t},u))}));t.a=m},65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(263),o=n(252),r=n(149),i=n(150),c=n(148),l=n(2);function d(){return Object(a.a)("Pikaso | Core Components | Background"),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:"# [Background](/api/classes/Background.html)\n        \nBackground is the lowest and default layer. It will be created automatically when Pikaso is started.\n\nBackground is a special kind of [Shape Model](/api/classes/ShapeModel.html) that includes both [Image](/core/image) and [Rect](/core/rect). \n\nThe possibility of directly accessing those models and working on them is also available.\n\n```js\n// Access to background's image model\nconst backgroundImage = editor.board.background.image\n\n// Access to background's rect model\nconst backgroundOverlay = editor.board.background.overlay\n\n// All public methods and properties of ShapeModel can be accessed\nbackgroundImage.addFilter({\n  name: 'Blur',\n  options: {\n    blurRadius: 10\n  }\n})\n```"}),Object(l.jsx)(i.LoadFromUrl,{}),Object(l.jsx)(r.LoadFromFile,{}),Object(l.jsx)(c.FillBackground,{})]})}}}]);
//# sourceMappingURL=11.27130168.chunk.js.map