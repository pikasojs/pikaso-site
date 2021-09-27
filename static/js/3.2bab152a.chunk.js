(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[3,30,31,32],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromFile",(function(){return s}));var a=n(14),o=n(187),r=n(212),i=n(196),c=n(198),l=n(199),d=n(2);function s(){var e=Object(l.a)(),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.a,{children:function(){return"\n        ### [setImageFromFile](/api/classes/Background.html#setImageFromFile)\n      "}}),Object(d.jsx)(o.a,{my:1,children:Object(d.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(d.jsx)(i.a,{language:"typescript",children:"// load image file\neditor.board.background.setImageFromFile('<ImageFile>')\n\n// Alternatively, you may use\neditor.loadFromFile('<ImageFile>')"}),Object(d.jsx)(o.a,{my:2,children:Object(d.jsxs)(r.a,{variant:"contained",component:"label",children:["Select Image From Computer",Object(d.jsx)("input",{accept:"image/*",type:"file",hidden:!0,onChange:function(e){var t,n,a=null===(t=e.target)||void 0===t||null===(n=t.files)||void 0===n?void 0:n[0];a&&(null===s||void 0===s||s.loadFromFile(a))}})]})})]})}},117:function(e,t,n){"use strict";n.r(t),n.d(t,"LoadFromUrl",(function(){return s}));var a=n(14),o=n(187),r=n(212),i=n(196),c=n(198),l=n(199),d=n(2);function s(){var e=Object(l.a)(),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("a",{id:"load-image-from-url"}),Object(d.jsx)(c.a,{children:function(){return"\n        ### [setImageFromUrl](/api/classes/Background.html#setImageFromUrl)\n      "}}),Object(d.jsx)(o.a,{my:1,children:Object(d.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(d.jsx)(i.a,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"}),Object(d.jsx)(o.a,{my:2,children:Object(d.jsx)(r.a,{variant:"contained",color:"primary",onClick:function(){null===s||void 0===s||s.board.background.setImageFromUrl("https://source.unsplash.com/random?hash=".concat(Math.random()))},children:"Load Random Background"})})]})}},119:function(e,t,n){"use strict";n.r(t),n.d(t,"FillBackground",(function(){return b}));var a=n(14),o=n(187),r=n(212),i=n(0),c=n(196),l=n(198),d=n(199);function s(){return"#"+((1<<24)*Math.random()|0).toString(16)}var u=n(2);function b(){var e=Object(d.a)(),t=Object(a.a)(e,2),n=t[0],b=t[1];Object(i.useEffect)((function(){null===b||void 0===b||b.board.background.fill(s())}),[b]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{children:function(){return"\n        ### [fill](/api/classes/Background.html#fill)\n      "}}),Object(u.jsx)(o.a,{my:1,children:Object(u.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(u.jsx)(c.a,{language:"typescript",children:"// change background color\neditor.board.background.fill('#262626')"}),Object(u.jsx)(o.a,{my:2,children:Object(u.jsx)(r.a,{variant:"contained",onClick:function(){null===b||void 0===b||b.board.background.fill(s())},children:"Change Background Color"})})]})}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(56),o=n(92),r=n(542),i=n(541),c=n(2),l=["children"];function d(e){var t=e.children,n=Object(o.a)(e,l);return Object(c.jsx)(r.a,Object(a.a)(Object(a.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(56),o=n(92),r=n(0),i=n(204),c=n(205),l=n(196),d=n(2),s=["node","inline","className","children"];function u(e){var t=e.children,n="string"===typeof t?t:t(),u=Object(r.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),a=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},r=0;r<n.length;r++){var i=n[r];o(i)&&(a=!0),t.push(a?i:i.trim()),a&&o(n[r+1])&&(a=!1)}return t.join("\n")}(n)}),[n]);return Object(d.jsx)(i.a,{remarkPlugins:[c.a],children:u,components:{code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,i=Object(o.a)(e,s),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(d.jsx)(l.a,Object(a.a)({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"div"},i)):Object(d.jsx)("code",Object(a.a)(Object(a.a)({className:n},i),{},{children:r}))}}})}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(56),o=n(14),r=n(0),i=n(207);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],l=n[1],d=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new i.a(Object(a.a)({container:d.current},e));l(t)}),[]),Object(r.useEffect)((function(){c&&window.addEventListener("resize",(function(){c.board.rescale()}))}),[c]),[d,c]}},212:function(e,t,n){"use strict";var a=n(10),o=n(3),r=n(1),i=n(0),c=(n(7),n(5)),l=n(174),d=n(172),s=n(8),u=n(9),b=n(182),p=n(12),h=n(140),m=n(175);function j(e){return Object(h.a)("MuiButton",e)}var g=Object(m.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=n(2),v=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},O=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(p.a)(n.color))],t["size".concat(Object(p.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(p.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(r.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(d.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(d.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(g.focusVisible),Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(g.disabled),Object(r.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(d.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),y=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),S=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),z=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),a=n.children,i=n.color,d=void 0===i?"primary":i,s=n.component,b=void 0===s?"button":s,h=n.disabled,m=void 0!==h&&h,g=n.disableElevation,x=void 0!==g&&g,z=n.disableFocusRipple,k=void 0!==z&&z,w=n.endIcon,I=n.focusVisibleClassName,F=n.fullWidth,C=void 0!==F&&F,R=n.size,B=void 0===R?"medium":R,L=n.startIcon,E=n.type,M=n.variant,W=void 0===M?"text":M,U=Object(o.a)(n,v),N=Object(r.a)({},n,{color:d,component:b,disabled:m,disableElevation:x,disableFocusRipple:k,fullWidth:C,size:B,type:E,variant:W}),T=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,i=e.variant,c=e.classes,d={root:["root",i,"".concat(i).concat(Object(p.a)(t)),"size".concat(Object(p.a)(o)),"".concat(i,"Size").concat(Object(p.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(o))],endIcon:["endIcon","iconSize".concat(Object(p.a)(o))]},s=Object(l.a)(d,j,c);return Object(r.a)({},c,s)}(N),P=L&&Object(f.jsx)(y,{className:T.startIcon,ownerState:N,children:L}),V=w&&Object(f.jsx)(S,{className:T.endIcon,ownerState:N,children:w});return Object(f.jsxs)(O,Object(r.a)({ownerState:N,component:b,disabled:m,focusRipple:!k,focusVisibleClassName:Object(c.a)(T.focusVisible,I),ref:t,type:E},U,{classes:T,children:[P,a,V]}))}));t.a=z},58:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(187),o=n(198),r=n(116),i=n(117),c=n(119),l=n(2);function d(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:function(){return"\n        # Background\n        \n        ### API Reference\n        **[classes/Background.html](/api/classes/Background.html)**\n\n        ### Usage\n      "}}),Object(l.jsx)(a.a,{my:10,children:Object(l.jsx)(i.LoadFromUrl,{})}),Object(l.jsx)(a.a,{my:10,children:Object(l.jsx)(r.LoadFromFile,{})}),Object(l.jsx)(a.a,{my:10,children:Object(l.jsx)(c.FillBackground,{})})]})}}}]);
//# sourceMappingURL=3.2bab152a.chunk.js.map