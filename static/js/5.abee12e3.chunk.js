(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[5],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"EditorShape",(function(){return s}));var a=n(14),o=n(0),r=n(199),i=n(2);function s(e){var t=e.onLoad,n=Object(r.a)({transformer:{borderStroke:"#262626"}}),s=Object(a.a)(n,2),c=s[0],l=s[1];return Object(o.useEffect)((function(){l&&t(l)}),[l]),Object(i.jsx)("div",{ref:c,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(56),o=n(92),r=n(542),i=n(541),s=n(2),c=["children"];function l(e){var t=e.children,n=Object(o.a)(e,c);return Object(s.jsx)(r.a,Object(a.a)(Object(a.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:t}))}},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(56),o=n(14),r=n(0),i=n(207);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(null),n=Object(o.a)(t,2),s=n[0],c=n[1],l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new i.a(Object(a.a)({container:l.current},e));c(t)}),[]),Object(r.useEffect)((function(){s&&window.addEventListener("resize",(function(){s.board.rescale()}))}),[s]),[l,s]}},212:function(e,t,n){"use strict";var a=n(10),o=n(3),r=n(1),i=n(0),s=(n(7),n(5)),c=n(174),l=n(172),d=n(8),h=n(9),p=n(182),b=n(12),u=n(140),j=n(175);function m(e){return Object(u.a)("MuiButton",e)}var v=Object(j.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),O=n(2),x=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],f=function(e){return Object(r.a)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=Object(d.a)(p.a,{shouldForwardProp:function(e){return Object(d.b)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(b.a)(n.color))],t["size".concat(Object(b.a)(n.size))],t["".concat(n.variant,"Size").concat(Object(b.a)(n.size))],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((function(e){var t,n=e.theme,o=e.ownerState;return Object(r.a)({},n.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":Object(r.a)({textDecoration:"none",backgroundColor:Object(l.a)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:Object(l.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:"1px solid ".concat(n.palette[o.color].main),backgroundColor:Object(l.a)(n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:n.palette[o.color].dark,"@media (hover: none)":{backgroundColor:n.palette[o.color].main}}),"&:active":Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[8]})},Object(a.a)(t,"&.".concat(v.focusVisible),Object(r.a)({},"contained"===o.variant&&{boxShadow:n.shadows[6]})),Object(a.a)(t,"&.".concat(v.disabled),Object(r.a)({color:n.palette.action.disabled},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===o.variant&&"secondary"===o.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===o.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),t),"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].main,border:"1px solid ".concat(Object(l.a)(n.palette[o.color].main,.5))},"contained"===o.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:n.palette[o.color].contrastText,backgroundColor:n.palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(a.a)(t,"&.".concat(v.focusVisible),{boxShadow:"none"}),Object(a.a)(t,"&:active",{boxShadow:"none"}),Object(a.a)(t,"&.".concat(v.disabled),{boxShadow:"none"}),t)})),w=Object(d.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.startIcon,t["iconSize".concat(Object(b.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},f(t))})),y=Object(d.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var n=e.ownerState;return[t.endIcon,t["iconSize".concat(Object(b.a)(n.size))]]}})((function(e){var t=e.ownerState;return Object(r.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},f(t))})),S=i.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiButton"}),a=n.children,i=n.color,l=void 0===i?"primary":i,d=n.component,p=void 0===d?"button":d,u=n.disabled,j=void 0!==u&&u,v=n.disableElevation,f=void 0!==v&&v,S=n.disableFocusRipple,z=void 0!==S&&S,k=n.endIcon,C=n.focusVisibleClassName,R=n.fullWidth,L=void 0!==R&&R,M=n.size,E=void 0===M?"medium":M,I=n.startIcon,W=n.type,N=n.variant,B=void 0===N?"text":N,A=Object(o.a)(n,x),_=Object(r.a)({},n,{color:l,component:p,disabled:j,disableElevation:f,disableFocusRipple:z,fullWidth:L,size:E,type:W,variant:B}),T=function(e){var t=e.color,n=e.disableElevation,a=e.fullWidth,o=e.size,i=e.variant,s=e.classes,l={root:["root",i,"".concat(i).concat(Object(b.a)(t)),"size".concat(Object(b.a)(o)),"".concat(i,"Size").concat(Object(b.a)(o)),"inherit"===t&&"colorInherit",n&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(b.a)(o))],endIcon:["endIcon","iconSize".concat(Object(b.a)(o))]},d=Object(c.a)(l,m,s);return Object(r.a)({},s,d)}(_),J=I&&Object(O.jsx)(w,{className:T.startIcon,ownerState:_,children:I}),P=k&&Object(O.jsx)(y,{className:T.endIcon,ownerState:_,children:k});return Object(O.jsxs)(g,Object(r.a)({ownerState:_,component:p,disabled:j,focusRipple:!z,focusVisibleClassName:Object(s.a)(T.focusVisible,C),ref:t,type:W},A,{classes:T,children:[J,a,P]}))}));t.a=S},83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var a=n(187),o=n(1),r=n(3),i=n(0),s=(n(7),n(5)),c=n(174),l=n(8),d=n(9),h=n(191),p=n(140),b=n(175);function u(e){return Object(p.a)("MuiCard",e)}Object(b.a)("MuiCard",["root"]);var j=n(2),m=["className","raised"],v=Object(l.a)(h.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),O=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCard"}),a=n.className,i=n.raised,l=void 0!==i&&i,h=Object(r.a)(n,m),p=Object(o.a)({},n,{raised:l}),b=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(p);return Object(j.jsx)(v,Object(o.a)({className:Object(s.a)(b.root,a),elevation:l?8:void 0,ref:t,ownerState:p},h))}));function x(e){return Object(p.a)("MuiCardContent",e)}Object(b.a)("MuiCardContent",["root"]);var f=["className","component"],g=Object(l.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),w=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardContent"}),a=n.className,i=n.component,l=void 0===i?"div":i,h=Object(r.a)(n,f),p=Object(o.a)({},n,{component:l}),b=function(e){var t=e.classes;return Object(c.a)({root:["root"]},x,t)}(p);return Object(j.jsx)(g,Object(o.a)({as:l,className:Object(s.a)(b.root,a),ownerState:p,ref:t},h))})),y=n(188);function S(e){return Object(p.a)("MuiCardActions",e)}Object(b.a)("MuiCardActions",["root","spacing"]);var z=["disableSpacing","className"],k=Object(l.a)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return Object(o.a)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),C=i.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardActions"}),a=n.disableSpacing,i=void 0!==a&&a,l=n.className,h=Object(r.a)(n,z),p=Object(o.a)({},n,{disableSpacing:i}),b=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return Object(c.a)(n,S,t)}(p);return Object(j.jsx)(k,Object(o.a)({className:Object(s.a)(b.root,l),ownerState:p,ref:t},h))})),R=n(212),L=n(48),M=n(196),E=n(118),I="editor.shapes.circle.insert({\n    radius: 100,\n    x: 170,\n    y: 150,\n    fill: 'tomato'\n  })",W="editor.shapes.rect.insert({\n    width: 150,\n    height: 150,\n    x: 100,\n    y: 100,\n    fill: 'purple'\n  })",N="editor.shapes.ellipse.insert({\n    radiusX: 120,\n    radiusY: 80,\n    x: 170,\n    y: 150,\n    fill: 'khaki'\n  })",B="editor.shapes.triangle.insert({\n    radius: 120,\n    x: 170,\n    y: 160,\n    fill: 'orange'\n  })",A="editor.shapes.polygon.insert({\n    radius: 110,\n    x: 170,\n    y: 150,\n    sides: 7,\n    fill: 'greenyellow'\n  })",_="editor.shapes.line.insert({\n    points: [50, 50, 300, 50],\n    stroke: 'blue',\n    strokeWidth: 10\n  })\n\n  editor.shapes.line.insert({\n    points: [50, 130, 300, 130],\n    stroke: 'purple',\n    strokeWidth: 15,\n    lineCap: 'round',\n    lineJoin: 'round',\n    dash: [29, 20, 0.001, 20]\n  })\n\n  editor.shapes.line.insert({\n    points: [50, 200, 80, 230, 160, 210, 180, 250],\n    stroke: 'tomato',\n    strokeWidth: 10,\n    lineJoin: 'round'\n  })",T=" editor.shapes.arrow.insert({\n    points: [50, 50, 300, 50],\n    stroke: 'blue',\n    strokeWidth: 10\n  })\n\n  editor.shapes.arrow.insert({\n    points: [50, 130, 300, 130],\n    stroke: 'purple',\n    strokeWidth: 15,\n    lineCap: 'round',\n    lineJoin: 'round',\n    dash: [29, 20, 0.001, 20]\n  })\n\n  editor.shapes.arrow.insert({\n    points: [50, 200, 80, 230, 160, 210, 180, 250],\n    stroke: 'tomato',\n    strokeWidth: 10,\n    lineJoin: 'round'\n  })";function J(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(a.a,{display:"flex",justifyContent:"space-between",flexWrap:"wrap",children:[Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){return e.shapes.circle.insert({radius:100,x:e.board.stage.width()/2,y:150,fill:"tomato"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Circle"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:I})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/CircleDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=circle",children:"Circle Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.Circle.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){return e.shapes.rect.insert({width:150,height:150,x:e.board.stage.width()/2-75,y:100,fill:"purple"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Rectangle"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:W})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/RectDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=rectangle",children:"Rectangle Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.Rect.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){return e.shapes.ellipse.insert({radiusX:120,radiusY:80,x:e.board.stage.width()/2,y:150,fill:"#262626"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Ellipse"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:N})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/EllipseDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=ellipse",children:"Ellipse Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.Ellipse.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){return e.shapes.triangle.insert({radius:120,x:e.board.stage.width()/2,y:160,fill:"orange"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Triangle"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:B})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/TriangleDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=triangle",children:"Triangle Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.RegularPolygon.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){return e.shapes.polygon.insert({radius:110,x:e.board.stage.width()/2,y:150,sides:7,fill:"greenyellow"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Polygon"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:A})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/PolygonDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=polygon",children:"Polygon Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.RegularPolygon.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){e.shapes.line.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.line.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.line.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Line"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:_})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/LineDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=line",children:"Line Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.Line.html",children:"Configurations Reference"})]})]}),Object(j.jsxs)(O,{sx:{width:"100%",mb:4},children:[Object(j.jsx)("div",{children:Object(j.jsx)(E.EditorShape,{onLoad:function(e){e.shapes.arrow.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.arrow.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.arrow.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}})}),Object(j.jsxs)(w,{children:[Object(j.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Arrow"}),Object(j.jsx)(M.a,{showLineNumbers:!1,language:"typescript",children:T})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)(R.a,{size:"small",target:"_blank",color:"primary",variant:"contained",href:"/api/classes/ArrowDrawer.html#insert",children:"Api Reference"}),Object(j.jsx)(R.a,{size:"small",component:L.b,color:"primary",variant:"contained",to:"/core/shapes/methods?shape=arrow",children:"Arrow Methods"}),Object(j.jsx)(R.a,{size:"small",target:"_blank",variant:"outlined",href:"https://konvajs.org/api/Konva.Arrow.html",children:"Configurations Reference"})]})]})]})})}}}]);
//# sourceMappingURL=5.abee12e3.chunk.js.map