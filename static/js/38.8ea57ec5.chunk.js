(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[38],{265:function(r,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i(14),c=i(0),t=i(268),a=i(471),o=i(2);function l(r){var e=r.buttonRenderer,i=r.children,l=Object(c.useState)(null),u=Object(n.a)(l,2),d=u[0],s=u[1],x=function(){s(null)},b=Boolean(d),f=b?"base-popover":void 0;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(t.a,{disableRipple:!0,"aria-describedby":f,style:{background:"none",cursor:"pointer"},onClick:function(r){s(r.currentTarget)},children:e({id:f,isOpen:b})}),Object(o.jsx)(a.a,{id:f,open:b,anchorEl:d,onClose:x,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"function"===typeof i?i({close:x}):i})]})}},63:function(r,e,i){"use strict";i.r(e),i.d(e,"CropperType",(function(){return u}));var n=i(480),c=i(239),t=i(268),a=i(265),o=i(2),l=[{fixed:!1,circular:!1},{fixed:!1,circular:!0},{fixed:!0,circular:!1},{fixed:!0,circular:!0}];function u(r){var e=r.config,i=r.onChange;return Object(o.jsx)(a.a,{buttonRenderer:function(r){var i=r.id,c=r.isOpen;return Object(o.jsx)(n.a,{"aria-describedby":i,size:"medium",label:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("strong",{children:e.fixed?"Fixed":"Flexible"})," - ",Object(o.jsx)("strong",{children:e.circular?"Circular":"Rectangular"})]}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:c?"primary.main":"info",color:c?"primary.main":"info"}})},children:function(r){var n=r.close;return Object(o.jsx)(c.a,{sx:{px:2,py:2,maxWidth:"450px"},children:l.map((function(r,c){return Object(o.jsxs)(t.a,{variant:r.fixed===e.fixed&&r.circular===e.circular?"contained":"outlined",size:"small",sx:{mr:1,mb:1,width:"200px"},onClick:function(){n(),i({fixed:r.fixed,circular:r.circular})},children:[r.fixed?"Fixed":"Flexible"," &"," ",r.circular?"Circular":"Rectangular"]},c)}))})}})}}}]);
//# sourceMappingURL=38.8ea57ec5.chunk.js.map