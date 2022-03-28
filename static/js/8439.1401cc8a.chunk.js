"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[8439],{56954:function(e,o,t){t.d(o,{n:function(){return c}});var n=t(1413),i=t(45987),a=t(64209),r=t(35834),l=t(80184),d=["children"];function c(e){var o=e.children,t=(0,i.Z)(e,d);return(0,l.jsx)(a.Z,(0,n.Z)((0,n.Z)({style:r.Z,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:o}))}},78572:function(e,o,t){t.d(o,{U:function(){return p}});var n=t(1413),i=t(45987),a=t(72791),r=t(30035),l=t(18096),d=t(91523),c=t(56954),s=t(80184),u=["node","inline","className","children"];function p(e){var o=e.children,t="string"===typeof o?o:o(),p=(0,a.useMemo)((function(){return function(e){for(var o=[],t=e.split("\n"),n=!1,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},a=0;a<t.length;a++){var r=t[a];i(r)&&(n=!0),o.push(n?r:r.trim()),n&&i(t[a+1])&&(n=!1)}return o.join("\n")}(t)}),[t]);return(0,s.jsx)(r.D,{skipHtml:!0,remarkPlugins:[l.Z],children:p,components:{a:function(e){var o=e.href,t=e.children;return(null===o||void 0===o?void 0:o.startsWith("/api/"))||(null===o||void 0===o?void 0:o.startsWith("http"))?(0,s.jsx)("a",{href:o,target:"_blank",children:t}):(0,s.jsx)(d.rU,{to:o,children:t})},code:function(e){e.node;var o=e.inline,t=e.className,a=e.children,r=(0,i.Z)(e,u),l=/language-(\w+)/.exec(t||"");return!o&&l?(0,s.jsx)(c.n,(0,n.Z)({children:String(a).replace(/\n$/,""),language:l[1],PreTag:"div"},r)):(0,s.jsx)("code",(0,n.Z)((0,n.Z)({className:t},r),{},{children:a}))}}})}},74497:function(e,o,t){t.d(o,{Z:function(){return l}});var n=t(1413),i=t(29439),a=t(72791),r=t(83469);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,t=(0,a.useState)(null),l=(0,i.Z)(t,2),d=l[0],c=l[1],s=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t=new r.Fb((0,n.Z)({container:s.current},e),o);c(t)}),[]),(0,a.useEffect)((function(){d&&window.addEventListener("resize",(function(){d.board.rescale()}))}),[d]),[s,d]}},68439:function(e,o,t){t.r(o),t.d(o,{default:function(){return p}});var n=t(29439),i=t(72791),a=t(64554),r=t(24518),l=t(2199),d=t(66509),c=t(74497),s=t(78572),u=t(80184);function p(){(0,d.Z)("Pikaso | Core Components | Selection");var e=(0,c.Z)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),o=(0,n.Z)(e,2),t=o[0],p=o[1];return(0,i.useEffect)((function(){null===p||void 0===p||p.shapes.image.insert("/tiger.svg",{x:100,y:100}),null===p||void 0===p||p.shapes.circle.insert({fill:"red",radius:50,x:500,y:100}),null===p||void 0===p||p.shapes.label.insert({container:{x:600,y:300},tag:{fill:"transparent",cornerRadius:0},text:{text:"Pikaso is great, isn't it?",fontSize:40,fontWeight:"bold",fill:"purple"}})}),[p]),(0,u.jsxs)("div",{children:[(0,u.jsx)(s.U,{children:"# [Selection](/api/classes/Selection.html)\n        \nSelection component provides both visual and programmatic control over created [shapes](/api/classes/ShapeModel.html) in a board.\n\n\n```ts\n// configure selection\nconst editor = new Pikaso({\n  container: <element>,\n  selection: {\n    interactive: true, // enable or disable visual selection\n    keyboard: {\n      enabled: true, // enable or disable keyboard shortcuts\n      movingSpaces: 5,\n      map: {\n        delete: ['Backspace', 'Delete'],\n        moveLeft: ['ArrowLeft'],\n        moveRight: ['ArrowRight'],\n        moveUp: ['ArrowUp'],\n        moveDown: ['ArrowDown'],\n        deselect: ['Escape']\n      }\n    },\n    transformer: {\n      borderStroke: '#fff',\n      borderStrokeWidth: 3,\n      anchorSize: 15,\n      anchorFill: '#fff',\n      anchorStroke: '#fff',\n      anchorStrokeWidth: 1,\n      anchorCornerRadius: 30,\n      borderDash: [0, 0]\n    },\n    zone: {\n      fill: 'rgba(105, 105, 105, 0.7)',\n      stroke: '#dbdbdb'\n    }\n  }\n})\n\n// creates a circle\nconst shape = editor.board.circle.insert({ /* config */ })\n\n// select the created shape\nshape.select() // or editor.board.selection.add([shape])\n\n// deselect the shape\nshape.deselect()\n\n// toggle shape selection\neditor.board.selection.toggle(shape)\n\n// select all shapes in the board\neditor.board.selection.selectAll()\n\n// deselect all shapes in the board\neditor.board.selection.deselectAll()\n\n// select multiple shapes\neditor.board.selection.multi([shape, ...moreShapes])\n\n// delete all selected shapes\neditor.board.selection.delete()\n\n// move the selected shapes\neditor.board.selection.moveX(100)\neditor.board.selection.moveY(100)\n\n// add filter to the selected shapes\neditor.board.selection.addFilter({\n  name: 'blur',\n  options: {\n    blurRadius: 10\n  }\n})\n```"}),(0,u.jsx)(a.Z,{mb:3,children:(0,u.jsx)("div",{ref:t,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"500px"}})}),(0,u.jsxs)(a.Z,{display:"flex",justifyContent:"flex-end",children:[(0,u.jsx)(r.Z,{variant:"outlined",size:"small",sx:{mr:1},onClick:function(){null===p||void 0===p||p.board.selection.deselectAll();var e=null===p||void 0===p?void 0:p.board.shapes.find((function(e){return"Image"===e.node.getClassName()}));null===p||void 0===p||p.board.selection.toggle(e),null===p||void 0===p||p.board.selection.moveX(100),null===p||void 0===p||p.board.selection.moveY(100)},children:"Select Image and Move"}),(0,u.jsx)(r.Z,{variant:"outlined",size:"small",sx:{mr:1},onClick:function(){var e=null===p||void 0===p?void 0:p.board.shapes.find((function(e){return"Circle"===e.node.getClassName()}));null===p||void 0===p||p.board.selection.toggle(e)},children:"Toggle Circle"}),(0,u.jsx)(r.Z,{variant:"outlined",size:"small",sx:{mr:1},onClick:function(){null===p||void 0===p||p.board.selection.deselectAll(),null===p||void 0===p||p.board.selection.find((function(e){return"Label"===e.node.getClassName()}))},children:"Select Label"}),(0,u.jsxs)(l.Z,{variant:"outlined",size:"small",children:[(0,u.jsx)(r.Z,{onClick:function(){return null===p||void 0===p?void 0:p.selection.selectAll()},children:"Select All"}),(0,u.jsx)(r.Z,{onClick:function(){return null===p||void 0===p?void 0:p.selection.deselectAll()},children:"Deselect All"})]})]})]})}},24518:function(e,o,t){t.d(o,{Z:function(){return R}});var n=t(4942),i=t(63366),a=t(87462),r=t(72791),l=t(28182),d=t(35735),c=t(90767),s=t(12065),u=t(47630),p=t(61046),v=t(10335),h=t(14036),b=t(95159);function f(e){return(0,b.Z)("MuiButton",e)}var g=(0,t(30208).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),m=t(91793),x=t(80184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(e){return(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o[t.variant],o["".concat(t.variant).concat((0,h.Z)(t.color))],o["size".concat((0,h.Z)(t.size))],o["".concat(t.variant,"Size").concat((0,h.Z)(t.size))],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})((function(e){var o,t=e.theme,i=e.ownerState;return(0,a.Z)({},t.typography.button,(o={minWidth:64,padding:"6px 16px",borderRadius:t.shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,s.Fq)(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:(0,s.Fq)(t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat(t.palette[i.color].main),backgroundColor:(0,s.Fq)(t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:t.palette.grey.A100,boxShadow:t.shadows[4],"@media (hover: none)":{boxShadow:t.shadows[2],backgroundColor:t.palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:t.palette[i.color].dark,"@media (hover: none)":{backgroundColor:t.palette[i.color].main}}),"&:active":(0,a.Z)({},"contained"===i.variant&&{boxShadow:t.shadows[8]})},(0,n.Z)(o,"&.".concat(g.focusVisible),(0,a.Z)({},"contained"===i.variant&&{boxShadow:t.shadows[6]})),(0,n.Z)(o,"&.".concat(g.disabled),(0,a.Z)({color:t.palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat(t.palette.action.disabledBackground)},"outlined"===i.variant&&"secondary"===i.color&&{border:"1px solid ".concat(t.palette.action.disabled)},"contained"===i.variant&&{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground})),o),"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:t.palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===i.variant&&"inherit"!==i.color&&{color:t.palette[i.color].main,border:"1px solid ".concat((0,s.Fq)(t.palette[i.color].main,.5))},"contained"===i.variant&&{color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],boxShadow:t.shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:t.palette[i.color].contrastText,backgroundColor:t.palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})}),(function(e){var o;return e.ownerState.disableElevation&&(o={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,n.Z)(o,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,n.Z)(o,"&:active",{boxShadow:"none"}),(0,n.Z)(o,"&.".concat(g.disabled),{boxShadow:"none"}),o)})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.startIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===o.size&&{marginLeft:-2},S(o))})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,o){var t=e.ownerState;return[o.endIcon,o["iconSize".concat((0,h.Z)(t.size))]]}})((function(e){var o=e.ownerState;return(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===o.size&&{marginRight:-2},S(o))})),R=r.forwardRef((function(e,o){var t=r.useContext(m.Z),n=(0,d.Z)(t,e),s=(0,p.Z)({props:n,name:"MuiButton"}),u=s.children,v=s.color,b=void 0===v?"primary":v,g=s.component,S=void 0===g?"button":g,R=s.className,C=s.disabled,k=void 0!==C&&C,W=s.disableElevation,E=void 0!==W&&W,j=s.disableFocusRipple,I=void 0!==j&&j,B=s.endIcon,L=s.focusVisibleClassName,N=s.fullWidth,T=void 0!==N&&N,M=s.size,F=void 0===M?"medium":M,P=s.startIcon,A=s.type,O=s.variant,V=void 0===O?"text":O,D=(0,i.Z)(s,Z),U=(0,a.Z)({},s,{color:b,component:S,disabled:k,disableElevation:E,disableFocusRipple:I,fullWidth:T,size:F,type:A,variant:V}),q=function(e){var o=e.color,t=e.disableElevation,n=e.fullWidth,i=e.size,r=e.variant,l=e.classes,d={root:["root",r,"".concat(r).concat((0,h.Z)(o)),"size".concat((0,h.Z)(i)),"".concat(r,"Size").concat((0,h.Z)(i)),"inherit"===o&&"colorInherit",t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(i))],endIcon:["endIcon","iconSize".concat((0,h.Z)(i))]},s=(0,c.Z)(d,f,l);return(0,a.Z)({},l,s)}(U),H=P&&(0,x.jsx)(y,{className:q.startIcon,ownerState:U,children:P}),G=B&&(0,x.jsx)(w,{className:q.endIcon,ownerState:U,children:B});return(0,x.jsxs)(z,(0,a.Z)({ownerState:U,className:(0,l.Z)(R,t.className),component:S,disabled:k,focusRipple:!I,focusVisibleClassName:(0,l.Z)(q.focusVisible,L),ref:o,type:A},D,{classes:q,children:[H,u,G]}))}))},2199:function(e,o,t){t.d(o,{Z:function(){return Z}});var n=t(4942),i=t(63366),a=t(87462),r=t(72791),l=t(28182),d=t(90767),c=t(12065),s=t(14036),u=t(47630),p=t(61046),v=t(95159);function h(e){return(0,v.Z)("MuiButtonGroup",e)}var b=(0,t(30208).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),f=t(91793),g=t(80184),m=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],x=(0,u.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[(0,n.Z)({},"& .".concat(b.grouped),o.grouped),(0,n.Z)({},"& .".concat(b.grouped),o["grouped".concat((0,s.Z)(t.orientation))]),(0,n.Z)({},"& .".concat(b.grouped),o["grouped".concat((0,s.Z)(t.variant))]),(0,n.Z)({},"& .".concat(b.grouped),o["grouped".concat((0,s.Z)(t.variant)).concat((0,s.Z)(t.orientation))]),(0,n.Z)({},"& .".concat(b.grouped),o["grouped".concat((0,s.Z)(t.variant)).concat((0,s.Z)(t.color))]),o.root,o[t.variant],!0===t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth,"vertical"===t.orientation&&o.vertical]}})((function(e){var o=e.theme,t=e.ownerState;return(0,a.Z)({display:"inline-flex",borderRadius:o.shape.borderRadius},"contained"===t.variant&&{boxShadow:o.shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},(0,n.Z)({},"& .".concat(b.grouped),(0,a.Z)({minWidth:40,"&:not(:first-of-type)":(0,a.Z)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,a.Z)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"inherit"!==t.color&&{borderColor:(0,c.Fq)(o.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&(0,n.Z)({borderRight:"1px solid ".concat(o.palette.grey[400])},"&.".concat(b.disabled),{borderRight:"1px solid ".concat(o.palette.action.disabled)}),"contained"===t.variant&&"vertical"===t.orientation&&(0,n.Z)({borderBottom:"1px solid ".concat(o.palette.grey[400])},"&.".concat(b.disabled),{borderBottom:"1px solid ".concat(o.palette.action.disabled)}),"contained"===t.variant&&"inherit"!==t.color&&{borderColor:o.palette[t.color].dark},{"&:hover":(0,a.Z)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,a.Z)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"})))})),Z=r.forwardRef((function(e,o){var t=(0,p.Z)({props:e,name:"MuiButtonGroup"}),n=t.children,c=t.className,u=t.color,v=void 0===u?"primary":u,b=t.component,Z=void 0===b?"div":b,S=t.disabled,z=void 0!==S&&S,y=t.disableElevation,w=void 0!==y&&y,R=t.disableFocusRipple,C=void 0!==R&&R,k=t.disableRipple,W=void 0!==k&&k,E=t.fullWidth,j=void 0!==E&&E,I=t.orientation,B=void 0===I?"horizontal":I,L=t.size,N=void 0===L?"medium":L,T=t.variant,M=void 0===T?"outlined":T,F=(0,i.Z)(t,m),P=(0,a.Z)({},t,{color:v,component:Z,disabled:z,disableElevation:w,disableFocusRipple:C,disableRipple:W,fullWidth:j,orientation:B,size:N,variant:M}),A=function(e){var o=e.classes,t=e.color,n=e.disabled,i=e.disableElevation,a=e.fullWidth,r=e.orientation,l=e.variant,c={root:["root",l,"vertical"===r&&"vertical",a&&"fullWidth",i&&"disableElevation"],grouped:["grouped","grouped".concat((0,s.Z)(r)),"grouped".concat((0,s.Z)(l)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(r)),"grouped".concat((0,s.Z)(l)).concat((0,s.Z)(t)),n&&"disabled"]};return(0,d.Z)(c,h,o)}(P),O=r.useMemo((function(){return{className:A.grouped,color:v,disabled:z,disableElevation:w,disableFocusRipple:C,disableRipple:W,fullWidth:j,size:N,variant:M}}),[v,z,w,C,W,j,N,M,A.grouped]);return(0,g.jsx)(x,(0,a.Z)({as:Z,role:"group",className:(0,l.Z)(A.root,c),ref:o,ownerState:P},F,{children:(0,g.jsx)(f.Z.Provider,{value:O,children:n})}))}))},91793:function(e,o,t){var n=t(72791).createContext({});o.Z=n},66509:function(e,o,t){var n=t(72791),i={restoreOnUnmount:!1};o.Z="undefined"!==typeof document?function(e,o){void 0===o&&(o=i);var t=(0,n.useRef)(document.title);document.title!==e&&(document.title=e),(0,n.useEffect)((function(){return o&&o.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(e){}}}]);
//# sourceMappingURL=8439.1401cc8a.chunk.js.map