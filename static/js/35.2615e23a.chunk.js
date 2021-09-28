(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[35],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"EditorShape",(function(){return c}));var o=a(14),n=a(0),r=a(207),i=a(2);function c(e){var t=e.onLoad,a=Object(r.a)({transformer:{borderStroke:"#262626"}}),c=Object(o.a)(a,2),d=c[0],s=c[1];return Object(n.useEffect)((function(){s&&t(s)}),[s]),Object(i.jsx)("div",{ref:d,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}},115:function(e,t,a){"use strict";a.r(t),a.d(t,"ShapeModel",(function(){return u}));var o=a(541),n=a(542),r=a(196),i=a(543),c=a(217),d=a(204),s=a(114),l=a(2);function u(e){e.type;var t=e.codes,a=e.insertFn;return Object(l.jsx)("div",{children:Object(l.jsxs)(o.a,{sx:{mb:4},children:[Object(l.jsx)(s.EditorShape,{onLoad:a}),Object(l.jsxs)(n.a,{children:[Object(l.jsx)(r.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Insert"}),Object(l.jsx)(d.a,{language:"typescript",children:t.insert})]}),Object(l.jsx)(i.a,{children:Object(l.jsx)(c.a,{size:"small",color:"primary",variant:"contained",children:"Learn more"})})]})})}},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(56),n=a(92),r=a(553),i=a(552),c=a(2),d=["children"];function s(e){var t=e.children,a=Object(n.a)(e,d);return Object(c.jsx)(r.a,Object(o.a)(Object(o.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},a),{},{children:t}))}},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(56),n=a(14),r=a(0),i=a(214);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(null),a=Object(n.a)(t,2),c=a[0],d=a[1],s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new i.a(Object(o.a)({container:s.current},e));d(t)}),[]),Object(r.useEffect)((function(){c&&window.addEventListener("resize",(function(){c.board.rescale()}))}),[c]),[s,c]}},217:function(e,t,a){"use strict";var o=a(10),n=a(3),r=a(1),i=a(0),c=(a(7),a(5)),d=a(182),s=a(180),l=a(8),u=a(9),b=a(190),p=a(12),v=a(148),j=a(183);function f(e){return Object(v.a)("MuiButton",e)}var h=Object(j.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),O=a(2),m=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=Object(l.a)(b.a,{shouldForwardProp:function(e){return Object(l.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(p.a)(a.color))],t["size".concat(Object(p.a)(a.size))],t["".concat(a.variant,"Size").concat(Object(p.a)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((function(e){var t,a=e.theme,n=e.ownerState;return Object(r.a)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:a.shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(s.a)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:Object(s.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat(a.palette[n.color].main),backgroundColor:Object(s.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:a.palette.grey.A100,boxShadow:a.shadows[4],"@media (hover: none)":{boxShadow:a.shadows[2],backgroundColor:a.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:a.palette[n.color].dark,"@media (hover: none)":{backgroundColor:a.palette[n.color].main}}),"&:active":Object(r.a)({},"contained"===n.variant&&{boxShadow:a.shadows[8]})},Object(o.a)(t,"&.".concat(h.focusVisible),Object(r.a)({},"contained"===n.variant&&{boxShadow:a.shadows[6]})),Object(o.a)(t,"&.".concat(h.disabled),Object(r.a)({color:a.palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat(a.palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat(a.palette.action.disabled)},"contained"===n.variant&&{color:a.palette.action.disabled,boxShadow:a.shadows[0],backgroundColor:a.palette.action.disabledBackground})),t),"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].main,border:"1px solid ".concat(Object(s.a)(a.palette[n.color].main,.5))},"contained"===n.variant&&{color:a.palette.getContrastText(a.palette.grey[300]),backgroundColor:a.palette.grey[300],boxShadow:a.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].contrastText,backgroundColor:a.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(t,"&.".concat(h.focusVisible),{boxShadow:"none"}),Object(o.a)(t,"&:active",{boxShadow:"none"}),Object(o.a)(t,"&.".concat(h.disabled),{boxShadow:"none"}),t)})),S=Object(l.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},g(t))})),z=Object(l.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},g(t))})),w=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiButton"}),o=a.children,i=a.color,s=void 0===i?"primary":i,l=a.component,b=void 0===l?"button":l,v=a.disabled,j=void 0!==v&&v,h=a.disableElevation,g=void 0!==h&&h,w=a.disableFocusRipple,y=void 0!==w&&w,C=a.endIcon,R=a.focusVisibleClassName,I=a.fullWidth,M=void 0!==I&&I,k=a.size,E=void 0===k?"medium":k,L=a.startIcon,N=a.type,B=a.variant,W=void 0===B?"text":B,T=Object(n.a)(a,m),V=Object(r.a)({},a,{color:s,component:b,disabled:j,disableElevation:g,disableFocusRipple:y,fullWidth:M,size:E,type:N,variant:W}),A=function(e){var t=e.color,a=e.disableElevation,o=e.fullWidth,n=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat(Object(p.a)(t)),"size".concat(Object(p.a)(n)),"".concat(i,"Size").concat(Object(p.a)(n)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(n))],endIcon:["endIcon","iconSize".concat(Object(p.a)(n))]},l=Object(d.a)(s,f,c);return Object(r.a)({},c,l)}(V),F=L&&Object(O.jsx)(S,{className:A.startIcon,ownerState:V,children:L}),P=C&&Object(O.jsx)(z,{className:A.endIcon,ownerState:V,children:C});return Object(O.jsxs)(x,Object(r.a)({ownerState:V,component:b,disabled:j,focusRipple:!y,focusVisibleClassName:Object(c.a)(A.focusVisible,R),ref:t,type:N},T,{classes:A,children:[F,o,P]}))}));t.a=w},541:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(7),a(5)),c=a(182),d=a(8),s=a(9),l=a(199),u=a(148),b=a(183);function p(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var v=a(2),j=["className","raised"],f=Object(d.a)(l.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCard"}),r=a.className,d=a.raised,l=void 0!==d&&d,u=Object(n.a)(a,j),b=Object(o.a)({},a,{raised:l}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(b);return Object(v.jsx)(f,Object(o.a)({className:Object(i.a)(h.root,r),elevation:l?8:void 0,ref:t,ownerState:b},u))}));t.a=h},542:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(7),a(5)),c=a(182),d=a(8),s=a(9),l=a(148),u=a(183);function b(e){return Object(l.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var p=a(2),v=["className","component"],j=Object(d.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCardContent"}),r=a.className,d=a.component,l=void 0===d?"div":d,u=Object(n.a)(a,v),f=Object(o.a)({},a,{component:l}),h=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(f);return Object(p.jsx)(j,Object(o.a)({as:l,className:Object(i.a)(h.root,r),ownerState:f,ref:t},u))}));t.a=f},543:function(e,t,a){"use strict";var o=a(3),n=a(1),r=a(0),i=(a(7),a(5)),c=a(182),d=a(8),s=a(9),l=a(148),u=a(183);function b(e){return Object(l.a)("MuiCardActions",e)}Object(u.a)("MuiCardActions",["root","spacing"]);var p=a(2),v=["disableSpacing","className"],j=Object(d.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(n.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),f=r.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiCardActions"}),r=a.disableSpacing,d=void 0!==r&&r,l=a.className,u=Object(o.a)(a,v),f=Object(n.a)({},a,{disableSpacing:d}),h=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(a,b,t)}(f);return Object(p.jsx)(j,Object(n.a)({className:Object(i.a)(h.root,l),ownerState:f,ref:t},u))}));t.a=f}}]);
//# sourceMappingURL=35.2615e23a.chunk.js.map