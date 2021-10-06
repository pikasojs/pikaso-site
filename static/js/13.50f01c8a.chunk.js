(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[13],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"EditorShape",(function(){return s}));var o=n(59),a=n(14),r=n(0),i=n(242),c=n(2);function l(e){var t=e.editorRef,n=e.onLoad,o=Object(i.a)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),l=Object(a.a)(o,2),s=l[0],d=l[1];return Object(r.useEffect)((function(){d&&n(d)}),[d]),Object(r.useImperativeHandle)(t,(function(){return{editor:d}})),Object(c.jsx)("div",{ref:s,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}var s=Object(r.forwardRef)((function(e,t){return Object(c.jsx)(l,Object(o.a)({},e))}))},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(59),a=n(97),r=n(849),i=n(847),c=n(2),l=["children"];function s(e){var t=e.children,n=Object(a.a)(e,l);return Object(c.jsx)(r.a,Object(o.a)(Object(o.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(59),a=n(97),r=n(0),i=n(248),c=n(249),l=n(47),s=n(239),d=n(2),u=["node","inline","className","children"];function p(e){var t=e.children,n="string"===typeof t?t:t(),p=Object(r.useMemo)((function(){return function(e){for(var t=[],n=e.split("\n"),o=!1,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},r=0;r<n.length;r++){var i=n[r];a(i)&&(o=!0),t.push(o?i:i.trim()),o&&a(n[r+1])&&(o=!1)}return t.join("\n")}(n)}),[n]);return Object(d.jsx)(i.a,{skipHtml:!0,remarkPlugins:[c.a],children:p,components:{a:function(e){var t=e.href,n=e.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(d.jsx)("a",{href:t,target:"_blank",children:n}):Object(d.jsx)(l.b,{to:t,children:n})},code:function(e){e.node;var t=e.inline,n=e.className,r=e.children,i=Object(a.a)(e,u),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(d.jsx)(s.a,Object(o.a)({children:String(r).replace(/\n$/,""),language:c[1],PreTag:"div"},i)):Object(d.jsx)("code",Object(o.a)(Object(o.a)({className:n},i),{},{children:r}))}}})}},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(48);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(241);function a(e,t,n){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(o.a)(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(n):r.value}},a(e,t,n||e)}},267:function(e,t,n){"use strict";var o=n(10),a=n(3),r=n(1),i=n(0),c=(n(7),n(5)),l=n(214),s=n(212),d=n(8),u=n(9),p=n(224),b=n(12),h=n(161),f=n(215);function m(e){return Object(h.a)("MuiButton",e)}var j=Object(f.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),v=n(2),O=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],x=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=Object(d.a)(p.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(b.a)(n.color))],t["size".concat(Object(b.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(b.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,a=e.ownerState;return Object(r.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(s.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===a.variant&&"inherit"!==a.color&&{backgroundColor:Object(s.a)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===a.variant&&"inherit"!==a.color&&{border:"1px solid ".concat(n.palette[a.color].main),backgroundColor:Object(s.a)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===a.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===a.variant&&"inherit"!==a.color&&{backgroundColor:n.palette[a.color].dark,"@media (hover: none)":{backgroundColor:n.palette[a.color].main}}),"&:active":Object(r.a)({},"contained"===a.variant&&{boxShadow:n.shadows[8]})},Object(o.a)(t,"&.".concat(j.focusVisible),Object(r.a)({},"contained"===a.variant&&{boxShadow:n.shadows[6]})),Object(o.a)(t,"&.".concat(j.disabled),Object(r.a)({color:n.palette.action.disabled},"outlined"===a.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===a.variant&&"secondary"===a.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===a.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===a.variant&&{padding:"6px 8px"},"text"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].main},"outlined"===a.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].main,border:"1px solid ".concat(Object(s.a)(n.palette[a.color].main,.5))},"contained"===a.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===a.variant&&"inherit"!==a.color&&{color:n.palette[a.color].contrastText,backgroundColor:n.palette[a.color].main},"inherit"===a.color&&{color:"inherit",borderColor:"currentColor"},"small"===a.size&&"text"===a.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"text"===a.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===a.size&&"outlined"===a.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"outlined"===a.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===a.size&&"contained"===a.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===a.size&&"contained"===a.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(t,"&.".concat(j.focusVisible),{boxShadow:"none"}),Object(o.a)(t,"&:active",{boxShadow:"none"}),Object(o.a)(t,"&.".concat(j.disabled),{boxShadow:"none"}),t)})),S=Object(d.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(b.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},x(t))})),y=Object(d.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(b.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},x(t))})),w=i.forwardRef((function(e,t){var n=Object(u.a)({props:e,name:"MuiButton"}),o=n.children,i=n.color,s=void 0===i?"primary":i,d=n.component,p=void 0===d?"button":d,h=n.disabled,f=void 0!==h&&h,j=n.disableElevation,x=void 0!==j&&j,w=n.disableFocusRipple,z=void 0!==w&&w,C=n.endIcon,k=n.focusVisibleClassName,L=n.fullWidth,R=void 0!==L&&L,P=n.size,M=void 0===P?"medium":P,I=n.startIcon,E=n.type,W=n.variant,N=void 0===W?"text":W,G=Object(a.a)(n,O),T=Object(r.a)({},n,{color:s,component:p,disabled:f,disableElevation:x,disableFocusRipple:z,fullWidth:R,size:M,type:E,variant:N}),B=function(e){var t=e.color,n=e.disableElevation,o=e.fullWidth,a=e.size,i=e.variant,c=e.classes,s={root:["root",i,"".concat(i).concat(Object(b.a)(t)),"size".concat(Object(b.a)(a)),"".concat(i,"Size").concat(Object(b.a)(a)),"inherit"===t&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(b.a)(a))],endIcon:["endIcon","iconSize".concat(Object(b.a)(a))]},d=Object(l.a)(s,m,c);return Object(r.a)({},c,d)}(T),A=I&&Object(v.jsx)(S,{className:B.startIcon,ownerState:T,children:I}),V=C&&Object(v.jsx)(y,{className:B.endIcon,ownerState:T,children:C});return Object(v.jsxs)(g,Object(r.a)({ownerState:T,component:p,disabled:f,focusRipple:!z,focusVisibleClassName:Object(c.a)(B.focusVisible,k),ref:t,type:E},G,{classes:B,children:[A,o,V]}))}));t.a=w},281:function(e,t,n){"use strict";var o=n(1),a=n(3),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),s=n(9),d=n(235),u=n(161),p=n(215);function b(e){return Object(u.a)("MuiCard",e)}Object(p.a)("MuiCard",["root"]);var h=n(2),f=["className","raised"],m=Object(l.a)(d.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),j=r.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCard"}),r=n.className,l=n.raised,d=void 0!==l&&l,u=Object(a.a)(n,f),p=Object(o.a)({},n,{raised:d}),j=function(e){var t=e.classes;return Object(c.a)({root:["root"]},b,t)}(p);return Object(h.jsx)(m,Object(o.a)({className:Object(i.a)(j.root,r),elevation:d?8:void 0,ref:t,ownerState:p},u))}));t.a=j},282:function(e,t,n){"use strict";var o=n(3),a=n(1),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),s=n(9),d=n(161),u=n(215);function p(e){return Object(d.a)("MuiCardActions",e)}Object(u.a)("MuiCardActions",["root","spacing"]);var b=n(2),h=["disableSpacing","className"],f=Object(l.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(a.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=r.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCardActions"}),r=n.disableSpacing,l=void 0!==r&&r,d=n.className,u=Object(o.a)(n,h),m=Object(a.a)({},n,{disableSpacing:l}),j=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(n,p,t)}(m);return Object(b.jsx)(f,Object(a.a)({className:Object(i.a)(j.root,d),ownerState:m,ref:t},u))}));t.a=m},283:function(e,t,n){"use strict";var o=n(1),a=n(3),r=n(0),i=(n(7),n(5)),c=n(214),l=n(8),s=n(9),d=n(161),u=n(215);function p(e){return Object(d.a)("MuiCardContent",e)}Object(u.a)("MuiCardContent",["root"]);var b=n(2),h=["className","component"],f=Object(l.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=r.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiCardContent"}),r=n.className,l=n.component,d=void 0===l?"div":l,u=Object(a.a)(n,h),m=Object(o.a)({},n,{component:d}),j=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(m);return Object(b.jsx)(f,Object(o.a)({as:d,className:Object(i.a)(j.root,r),ownerState:m,ref:t},u))}));t.a=m},61:function(e,t,n){"use strict";n.r(t),n.d(t,"ShapesList",(function(){return f})),n.d(t,"default",(function(){return m}));var o=n(231),a=n(281),r=n(283),i=n(232),c=n(282),l=n(267),s=n(0),d=n(13),u=n(47),p=n(240),b=n(125),h=n(2),f=[{title:"Circle",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(59)]).then(n.bind(null,132))})),insert:function(e){return e.shapes.circle.insert({radius:100,x:e.board.stage.width()/2,y:150,fillLinearGradientStartPoint:{x:-50,y:-50},fillLinearGradientEndPoint:{x:50,y:50},fillLinearGradientColorStops:[0,"tomato",1,"red"]})}},{title:"Rect",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(63)]).then(n.bind(null,136))})),insert:function(e){return e.shapes.rect.insert({width:150,height:150,x:e.board.stage.width()/2-75,y:100,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"purple",1,"yellow"]})}},{title:"Ellipse",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(60)]).then(n.bind(null,133))})),insert:function(e){return e.shapes.ellipse.insert({radiusX:120,radiusY:80,x:e.board.stage.width()/2,y:150,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"#262626",1,"olive"]})}},{title:"Triangle",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(65)]).then(n.bind(null,138))})),insert:function(e){return e.shapes.triangle.insert({radius:120,x:e.board.stage.width()/2,y:160,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"orange",1,"yellow"]})}},{title:"Polygon",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(62)]).then(n.bind(null,135))})),insert:function(e){return e.shapes.polygon.insert({radius:110,x:e.board.stage.width()/2,y:150,sides:5,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"greenyellow",1,"olive"]})}},{title:"Line",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(61)]).then(n.bind(null,134))})),insert:function(e){e.shapes.line.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.line.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.line.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}},{title:"Arrow",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(58)]).then(n.bind(null,131))})),insert:function(e){e.shapes.arrow.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.arrow.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.arrow.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}},{title:"Text",Component:Object(s.lazy)((function(){return Promise.all([n.e(2),n.e(3),n.e(64)]).then(n.bind(null,137))})),insert:function(e){e.shapes.text.insert({text:"Pikaso is Great!!!",x:40,y:100,fontSize:35,fill:"purple"})}},{title:"Label",url:"/core/label",insert:function(e){e.shapes.label.insert({container:{x:40,y:100},tag:{fill:"#262626"},text:{text:"Pikaso Rocks",fill:"#00ff00",fontSize:40}})}},{title:"Image",url:"/core/image",insert:function(e){e.shapes.image.insert("/logo.svg",{x:120,y:70})}}];function m(){var e=Object(d.h)().shape;return Object(h.jsxs)("div",{children:[!e&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{children:function(){return"\n          # [Shapes](/api/classes/ShapeModel.html)\n          Pikaso comes with a few built-in shapes but it's possible to extend [Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) to develop custom shapes.\n\n          [Background](/core/background), [Image](/core/image) and [Text](/core/text) are also considered as [Shape Model](/api/classes/ShapeModel.html), inheriting all of its methods and properties.\n        "}}),Object(h.jsx)(o.a,{display:"flex",flexWrap:"wrap",children:f.map((function(e,t){return Object(h.jsxs)(a.a,{sx:{width:"32%",mb:1,mx:.5},children:[Object(h.jsx)(b.EditorShape,{onLoad:e.insert}),Object(h.jsx)(r.a,{children:Object(h.jsx)(i.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title})}),Object(h.jsx)(c.a,{children:Object(h.jsx)(l.a,{size:"small",color:"primary",variant:"contained",component:u.b,to:e.url||"/core/shapes/".concat(e.title.toLowerCase()),children:"Learn more"})})]},t)}))})]}),Object(h.jsx)(s.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:Object(h.jsx)(d.d,{children:f.filter((function(e){return!!e.Component})).map((function(e){var t=e.title,n=e.Component;return Object(h.jsx)(d.b,{exact:!0,path:"/core/shapes/".concat(t.toLowerCase()),component:n},t)}))})})]})}}}]);
//# sourceMappingURL=13.50f01c8a.chunk.js.map