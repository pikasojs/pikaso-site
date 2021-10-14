(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[53],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"LoadFromUrl",(function(){return O}));var o=a(11),n=a(861),r=a(862),i=a(243),c=a(863),l=a(286),d=a(242),s=a(287),u=a(271),b=a(288),p=a(266),j=a.n(p),h=a(251),v=a(252),m=a(253),f=a(2);function O(){var e=Object(m.a)(),t=Object(o.a)(e,2),a=t[0],p=t[1];return Object(f.jsxs)(n.a,{expanded:!0,children:[Object(f.jsx)(r.a,{expandIcon:Object(f.jsx)(j.a,{}),children:Object(f.jsx)(i.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromUrl"})}),Object(f.jsx)(c.a,{children:Object(f.jsxs)(l.a,{sx:{mb:4},children:[Object(f.jsx)(d.a,{my:1,children:Object(f.jsx)("div",{ref:a,style:{margin:"0 auto",background:"#f5f5f5",width:"600px",height:"400px"}})}),Object(f.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){null===p||void 0===p||p.board.background.setImageFromUrl("https://source.unsplash.com/random/600x400?hash=".concat(Math.random()))},children:"Load Random Background"})}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(i.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(f.jsx)(v.a,{children:function(){return"[setImageFromUrl](/api/classes/Background.html#setImageFromUrl)"}})}),Object(f.jsx)(h.a,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"})]})]})})]})}},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var o=a(37),n=a(100),r=a(860),i=a(859),c=a(2),l=["children"];function d(e){var t=e.children,a=Object(n.a)(e,l);return Object(c.jsx)(r.a,Object(o.a)(Object(o.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},a),{},{children:t}))}},252:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var o=a(37),n=a(100),r=a(0),i=a(257),c=a(258),l=a(49),d=a(251),s=a(2),u=["node","inline","className","children"];function b(e){var t=e.children,a="string"===typeof t?t:t(),b=Object(r.useMemo)((function(){return function(e){for(var t=[],a=e.split("\n"),o=!1,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},r=0;r<a.length;r++){var i=a[r];n(i)&&(o=!0),t.push(o?i:i.trim()),o&&n(a[r+1])&&(o=!1)}return t.join("\n")}(a)}),[a]);return Object(s.jsx)(i.a,{skipHtml:!0,remarkPlugins:[c.a],children:b,components:{a:function(e){var t=e.href,a=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(s.jsx)("a",{href:t,target:"_blank",children:a}):Object(s.jsx)(l.b,{to:t,children:a})},code:function(e){e.node;var t=e.inline,a=e.className,r=e.children,i=Object(n.a)(e,u),c=/language-(\w+)/.exec(a||"");return!t&&c?Object(s.jsx)(d.a,Object(o.a)({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"div"},i)):Object(s.jsx)("code",Object(o.a)(Object(o.a)({className:a},i),{},{children:r}))}}})}},253:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var o=a(37),n=a(11),r=a(0),i=a(259);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object(r.useState)(null),c=Object(n.a)(a,2),l=c[0],d=c[1],s=Object(r.useRef)(null);return Object(r.useEffect)((function(){var a=new i.b(Object(o.a)({container:s.current},e),t);d(a)}),[]),Object(r.useEffect)((function(){l&&window.addEventListener("resize",(function(){l.board.rescale()}))}),[l]),[s,l]}},271:function(e,t,a){"use strict";var o=a(10),n=a(3),r=a(1),i=a(0),c=(a(7),a(5)),l=a(226),d=a(224),s=a(8),u=a(9),b=a(237),p=a(12),j=a(169),h=a(227);function v(e){return Object(j.a)("MuiButton",e)}var m=Object(h.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=a(2),O=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=Object(s.a)(b.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(p.a)(a.color))],t["size".concat(Object(p.a)(a.size))],t["".concat(a.variant,"Size").concat(Object(p.a)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((function(e){var t,a=e.theme,n=e.ownerState;return Object(r.a)({},a.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:a.shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(d.a)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===n.variant&&"inherit"!==n.color&&{backgroundColor:Object(d.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===n.variant&&"inherit"!==n.color&&{border:"1px solid ".concat(a.palette[n.color].main),backgroundColor:Object(d.a)(a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===n.variant&&{backgroundColor:a.palette.grey.A100,boxShadow:a.shadows[4],"@media (hover: none)":{boxShadow:a.shadows[2],backgroundColor:a.palette.grey[300]}},"contained"===n.variant&&"inherit"!==n.color&&{backgroundColor:a.palette[n.color].dark,"@media (hover: none)":{backgroundColor:a.palette[n.color].main}}),"&:active":Object(r.a)({},"contained"===n.variant&&{boxShadow:a.shadows[8]})},Object(o.a)(t,"&.".concat(m.focusVisible),Object(r.a)({},"contained"===n.variant&&{boxShadow:a.shadows[6]})),Object(o.a)(t,"&.".concat(m.disabled),Object(r.a)({color:a.palette.action.disabled},"outlined"===n.variant&&{border:"1px solid ".concat(a.palette.action.disabledBackground)},"outlined"===n.variant&&"secondary"===n.color&&{border:"1px solid ".concat(a.palette.action.disabled)},"contained"===n.variant&&{color:a.palette.action.disabled,boxShadow:a.shadows[0],backgroundColor:a.palette.action.disabledBackground})),t),"text"===n.variant&&{padding:"6px 8px"},"text"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].main},"outlined"===n.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].main,border:"1px solid ".concat(Object(d.a)(a.palette[n.color].main,.5))},"contained"===n.variant&&{color:a.palette.getContrastText(a.palette.grey[300]),backgroundColor:a.palette.grey[300],boxShadow:a.shadows[2]},"contained"===n.variant&&"inherit"!==n.color&&{color:a.palette[n.color].contrastText,backgroundColor:a.palette[n.color].main},"inherit"===n.color&&{color:"inherit",borderColor:"currentColor"},"small"===n.size&&"text"===n.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"text"===n.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===n.size&&"outlined"===n.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"outlined"===n.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===n.size&&"contained"===n.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===n.size&&"contained"===n.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},n.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(t,"&.".concat(m.focusVisible),{boxShadow:"none"}),Object(o.a)(t,"&:active",{boxShadow:"none"}),Object(o.a)(t,"&.".concat(m.disabled),{boxShadow:"none"}),t)})),S=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},g(t))})),z=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var a=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(p.a)(a.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},g(t))})),y=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiButton"}),o=a.children,i=a.color,d=void 0===i?"primary":i,s=a.component,b=void 0===s?"button":s,j=a.disabled,h=void 0!==j&&j,m=a.disableElevation,g=void 0!==m&&m,y=a.disableFocusRipple,w=void 0!==y&&y,C=a.endIcon,k=a.focusVisibleClassName,R=a.fullWidth,I=void 0!==R&&R,M=a.size,N=void 0===M?"medium":M,L=a.startIcon,W=a.type,E=a.variant,B=void 0===E?"text":E,F=Object(n.a)(a,O),T=Object(r.a)({},a,{color:d,component:b,disabled:h,disableElevation:g,disableFocusRipple:w,fullWidth:I,size:N,type:W,variant:B}),U=function(e){var t=e.color,a=e.disableElevation,o=e.fullWidth,n=e.size,i=e.variant,c=e.classes,d={root:["root",i,"".concat(i).concat(Object(p.a)(t)),"size".concat(Object(p.a)(n)),"".concat(i,"Size").concat(Object(p.a)(n)),"inherit"===t&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(p.a)(n))],endIcon:["endIcon","iconSize".concat(Object(p.a)(n))]},s=Object(l.a)(d,v,c);return Object(r.a)({},c,s)}(T),V=L&&Object(f.jsx)(S,{className:U.startIcon,ownerState:T,children:L}),A=C&&Object(f.jsx)(z,{className:U.endIcon,ownerState:T,children:C});return Object(f.jsxs)(x,Object(r.a)({ownerState:T,component:b,disabled:h,focusRipple:!w,focusVisibleClassName:Object(c.a)(U.focusVisible,k),ref:t,type:W},F,{classes:U,children:[V,o,A]}))}));t.a=y},286:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(7),a(5)),c=a(226),l=a(8),d=a(9),s=a(246),u=a(169),b=a(227);function p(e){return Object(u.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var j=a(2),h=["className","raised"],v=Object(l.a)(s.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),m=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCard"}),r=a.className,l=a.raised,s=void 0!==l&&l,u=Object(n.a)(a,h),b=Object(o.a)({},a,{raised:s}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(b);return Object(j.jsx)(v,Object(o.a)({className:Object(i.a)(m.root,r),elevation:s?8:void 0,ref:t,ownerState:b},u))}));t.a=m},287:function(e,t,a){"use strict";var o=a(3),n=a(1),r=a(0),i=(a(7),a(5)),c=a(226),l=a(8),d=a(9),s=a(169),u=a(227);function b(e){return Object(s.a)("MuiCardActions",e)}Object(u.a)("MuiCardActions",["root","spacing"]);var p=a(2),j=["disableSpacing","className"],h=Object(l.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(n.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardActions"}),r=a.disableSpacing,l=void 0!==r&&r,s=a.className,u=Object(o.a)(a,j),v=Object(n.a)({},a,{disableSpacing:l}),m=function(e){var t=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(a,b,t)}(v);return Object(p.jsx)(h,Object(n.a)({className:Object(i.a)(m.root,s),ownerState:v,ref:t},u))}));t.a=v},288:function(e,t,a){"use strict";var o=a(1),n=a(3),r=a(0),i=(a(7),a(5)),c=a(226),l=a(8),d=a(9),s=a(169),u=a(227);function b(e){return Object(s.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var p=a(2),j=["className","component"],h=Object(l.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=r.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardContent"}),r=a.className,l=a.component,s=void 0===l?"div":l,u=Object(n.a)(a,j),v=Object(o.a)({},a,{component:s}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(v);return Object(p.jsx)(h,Object(o.a)({as:s,className:Object(i.a)(m.root,r),ownerState:v,ref:t},u))}));t.a=v}}]);
//# sourceMappingURL=53.b040eb88.chunk.js.map