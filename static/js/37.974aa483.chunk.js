(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[37],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"FillBackground",(function(){return b}));var n=a(14),o=a(196),i=a(218),r=a(0),c=a(205),l=a(206),d=a(208);function s(){return"#"+((1<<24)*Math.random()|0).toString(16)}var u=a(2);function b(){var e=Object(d.a)(),t=Object(n.a)(e,2),a=t[0],b=t[1];Object(r.useEffect)((function(){null===b||void 0===b||b.board.background.fill(s())}),[b]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{children:function(){return"\n        ### [fill](/api/classes/Background.html#fill)\n      "}}),Object(u.jsx)(o.a,{my:1,children:Object(u.jsx)("div",{ref:a,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(u.jsx)(c.a,{language:"typescript",children:"// change background color\neditor.board.background.fill('#262626')"}),Object(u.jsx)(o.a,{my:2,children:Object(u.jsx)(i.a,{variant:"contained",onClick:function(){null===b||void 0===b||b.board.background.fill(s())},children:"Change Background Color"})})]})}},205:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(56),o=a(92),i=a(554),r=a(553),c=a(2),l=["children"];function d(e){var t=e.children,a=Object(o.a)(e,l);return Object(c.jsx)(i.a,Object(n.a)(Object(n.a)({style:r.a,showLineNumbers:!0,wrapLongLines:!0},a),{},{children:t}))}},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(56),o=a(92),i=a(0),r=a(212),c=a(213),l=a(205),d=a(2),s=["node","inline","className","children"];function u(e){var t=e.children,a="string"===typeof t?t:t(),u=Object(i.useMemo)((function(){return function(e){for(var t=[],a=e.split("\n"),n=!1,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},i=0;i<a.length;i++){var r=a[i];o(r)&&(n=!0),t.push(n?r:r.trim()),n&&o(a[i+1])&&(n=!1)}return t.join("\n")}(a)}),[a]);return Object(d.jsx)(r.a,{remarkPlugins:[c.a],children:u,linkTarget:"_blank",components:{code:function(e){e.node;var t=e.inline,a=e.className,i=e.children,r=Object(o.a)(e,s),c=/language-(\w+)/.exec(a||"");return!t&&c?Object(d.jsx)(l.a,Object(n.a)({children:String(i).replace(/\n$/,""),language:c[1],PreTag:"div"},r)):Object(d.jsx)("code",Object(n.a)(Object(n.a)({className:a},r),{},{children:i}))}}})}},208:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(56),o=a(14),i=a(0),r=a(215);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(i.useState)(null),a=Object(o.a)(t,2),c=a[0],l=a[1],d=Object(i.useRef)(null);return Object(i.useEffect)((function(){var t=new r.a(Object(n.a)({container:d.current},e));l(t)}),[]),Object(i.useEffect)((function(){c&&window.addEventListener("resize",(function(){c.board.rescale()}))}),[c]),[d,c]}},218:function(e,t,a){"use strict";var n=a(10),o=a(3),i=a(1),r=a(0),c=(a(7),a(5)),l=a(183),d=a(181),s=a(8),u=a(9),b=a(191),p=a(12),h=a(149),v=a(184);function f(e){return Object(h.a)("MuiButton",e)}var g=Object(v.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),j=a(2),m=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return Object(i.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},O=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(p.a)(a.color))],t["size".concat(Object(p.a)(a.size))],t["".concat(a.variant,"Size").concat(Object(p.a)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((function(e){var t,a=e.theme,o=e.ownerState;return Object(i.a)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:a.shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":Object(i.a)({textDecoration:"none",backgroundColor:Object(d.a)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(d.a)(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(a.palette[o.color].main),backgroundColor:Object(d.a)(a.palette[o.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:a.palette.grey.A100,boxShadow:a.shadows[4],"@media (hover: none)":{boxShadow:a.shadows[2],backgroundColor:a.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:a.palette[o.color].dark,"@media (hover: none)":{backgroundColor:a.palette[o.color].main}}),"&:active":Object(i.a)({},"contained"===o.variant&&{boxShadow:a.shadows[8]})},Object(n.a)(t,"&.".concat(g.focusVisible),Object(i.a)({},"contained"===o.variant&&{boxShadow:a.shadows[6]})),Object(n.a)(t,"&.".concat(g.disabled),Object(i.a)({color:a.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(a.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(a.palette.action.disabled)},"contained"===o.variant&&{color:a.palette.action.disabled,boxShadow:a.shadows[0],backgroundColor:a.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:a.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:a.palette[o.color].main,border:"1px solid ".concat(Object(d.a)(a.palette[o.color].main,.5))},"contained"===o.variant&&{color:a.palette.getContrastText(a.palette.grey[300]),backgroundColor:a.palette.grey[300],boxShadow:a.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:a.palette[o.color].contrastText,backgroundColor:a.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(n.a)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),Object(n.a)(t,"&:active",{boxShadow:"none"}),Object(n.a)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),S=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),z=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(i.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),y=r.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiButton"}),n=a.children,r=a.color,d=void 0===r?"primary":r,s=a.component,b=void 0===s?"button":s,h=a.disabled,v=void 0!==h&&h,g=a.disableElevation,x=void 0!==g&&g,y=a.disableFocusRipple,w=void 0!==y&&y,k=a.endIcon,C=a.focusVisibleClassName,I=a.fullWidth,R=void 0!==I&&I,E=a.size,M=void 0===E?"medium":E,L=a.startIcon,W=a.type,B=a.variant,T=void 0===B?"text":B,N=Object(o.a)(a,m),V=Object(i.a)({},a,{color:d,component:b,disabled:v,disableElevation:x,disableFocusRipple:w,fullWidth:R,size:M,type:W,variant:T}),F=function(e){var t=e.color,a=e.disableElevation,n=e.fullWidth,o=e.size,r=e.variant,c=e.classes,d={root:["root",r,"".concat(r).concat(Object(p.a)(t)),"size".concat(Object(p.a)(o)),"".concat(r,"Size").concat(Object(p.a)(o)),"inherit"===t&&"colorInherit",a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(o))],endIcon:["endIcon","iconSize".concat(Object(p.a)(o))]},s=Object(l.a)(d,f,c);return Object(i.a)({},c,s)}(V),P=L&&Object(j.jsx)(S,{className:F.startIcon,ownerState:V,children:L}),J=k&&Object(j.jsx)(z,{className:F.endIcon,ownerState:V,children:k});return Object(j.jsxs)(O,Object(i.a)({ownerState:V,component:b,disabled:v,focusRipple:!w,focusVisibleClassName:Object(c.a)(F.focusVisible,C),ref:t,type:W},N,{classes:F,children:[P,n,J]}))}));t.a=y}}]);
//# sourceMappingURL=37.974aa483.chunk.js.map