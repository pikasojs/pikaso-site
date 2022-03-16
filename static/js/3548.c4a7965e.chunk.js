"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[3548],{90101:function(n,e,r){r.d(e,{m:function(){return u}});var t=r(29439),i=r(72791),o=r(24518),a=r(15473),l=r(80184);function u(n){var e=n.buttonRenderer,r=n.children,u=(0,i.useState)(null),s=(0,t.Z)(u,2),d=s[0],c=s[1],f=function(){c(null)},h=Boolean(d),p=h?"base-popover":void 0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{disableRipple:!0,"aria-describedby":p,style:{background:"none",cursor:"pointer"},onClick:function(n){c(n.currentTarget)},children:e({id:p,isOpen:h})}),(0,l.jsx)(a.ZP,{id:p,open:h,anchorEl:d,onClose:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"function"===typeof r?r({close:f}):r})]})}},56954:function(n,e,r){r.d(e,{n:function(){return s}});var t=r(1413),i=r(45987),o=r(64209),a=r(35834),l=r(80184),u=["children"];function s(n){var e=n.children,r=(0,i.Z)(n,u);return(0,l.jsx)(o.Z,(0,t.Z)((0,t.Z)({style:a.Z,showLineNumbers:!0,wrapLongLines:!0},r),{},{children:e}))}},4401:function(n,e,r){r.d(e,{z:function(){return d}});var t=r(29439),i=r(72791),o=r(81918),a=r(93044),l=r(34257),u=r(90101),s=r(80184);function d(n){var e=n.title,r=n.defaultColor,d=n.onChange,c=(0,i.useState)(r),f=(0,t.Z)(c,2),h=f[0],p=f[1];return(0,s.jsx)(u.m,{buttonRenderer:function(n){var r=n.id,t=n.isOpen;return(0,s.jsx)(o.Z,{"aria-describedby":r,size:"medium",avatar:(0,s.jsx)(a.Z,{sx:{bgcolor:h,borderColor:"primary.main"},children:"\xa0"}),label:(0,s.jsx)("strong",{children:e}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:t?"primary.main":"info",color:t?"primary.main":"info"}})},children:(0,s.jsx)(l.xS,{color:h,presetColors:[],onSwatchHover:function(n){p(n.hex),d(n.hex)},onChange:function(n){p(n.hex),d(n.hex)}})})}},78572:function(n,e,r){r.d(e,{U:function(){return f}});var t=r(1413),i=r(45987),o=r(72791),a=r(30035),l=r(18096),u=r(91523),s=r(56954),d=r(80184),c=["node","inline","className","children"];function f(n){var e=n.children,r="string"===typeof e?e:e(),f=(0,o.useMemo)((function(){return function(n){for(var e=[],r=n.split("\n"),t=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},o=0;o<r.length;o++){var a=r[o];i(a)&&(t=!0),e.push(t?a:a.trim()),t&&i(r[o+1])&&(t=!1)}return e.join("\n")}(r)}),[r]);return(0,d.jsx)(a.D,{skipHtml:!0,remarkPlugins:[l.Z],children:f,components:{a:function(n){var e=n.href,r=n.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?(0,d.jsx)("a",{href:e,target:"_blank",children:r}):(0,d.jsx)(u.rU,{to:e,children:r})},code:function(n){n.node;var e=n.inline,r=n.className,o=n.children,a=(0,i.Z)(n,c),l=/language-(\w+)/.exec(r||"");return!e&&l?(0,d.jsx)(s.n,(0,t.Z)({children:String(o).replace(/\n$/,""),language:l[1],PreTag:"div"},a)):(0,d.jsx)("code",(0,t.Z)((0,t.Z)({className:r},a),{},{children:o}))}}})}},84782:function(n,e,r){r.d(e,{U:function(){return v}});var t=r(29439),i=r(1413),o=r(45987),a=r(72791),l=r(46633),u=r(81918),s=r(93044),d=r(64554),c=r(106),f=r(90101),h=r(80184),p=["children"],b=(0,c.Z)(l.ZP)((function(n){var e=n.theme;return{color:"#3a8589",height:3,padding:"13px 0","& .MuiSlider-thumb":{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor","&:hover":{boxShadow:"0 0 0 8px rgba(58, 133, 137, 0.16)"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},"& .MuiSlider-track":{height:3},"& .MuiSlider-rail":{color:"dark"===e.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===e.palette.mode?void 0:1,height:3}}}));function m(n){var e=n.children,r=(0,o.Z)(n,p);return(0,h.jsxs)(l.gs,(0,i.Z)((0,i.Z)({},r),{},{children:[e,(0,h.jsx)("span",{className:"airbnb-bar"}),(0,h.jsx)("span",{className:"airbnb-bar"}),(0,h.jsx)("span",{className:"airbnb-bar"})]}))}function v(n){var e=n.title,r=n.defaultValue,o=n.SliderProps,l=n.valueLabelFormat,c=void 0===l?function(n){return n}:l,p=n.onChange,v=(0,a.useState)(r),x=(0,t.Z)(v,2),g=x[0],j=x[1];return(0,h.jsx)(f.m,{buttonRenderer:function(n){var r=n.id,t=n.isOpen;return(0,h.jsx)(u.Z,{"aria-describedby":r,size:"medium",avatar:(0,h.jsx)(s.Z,{sx:{borderColor:"primary.main"},children:"function"===typeof c?c(g):null!==g&&void 0!==g?g:""}),label:(0,h.jsx)("strong",{children:e}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:t?"primary.main":"info",color:t?"primary.main":"info"}})},children:(0,h.jsx)(d.Z,{px:4,pt:5,pb:2,width:"300px",children:(0,h.jsx)(b,(0,i.Z)((0,i.Z)({valueLabelDisplay:"on",components:{Thumb:m},valueLabelFormat:c},o),{},{value:g,onChange:function(n,e){j(e),p(e)}}))})})}},74497:function(n,e,r){r.d(e,{Z:function(){return l}});var t=r(1413),i=r(29439),o=r(72791),a=r(83469);function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=(0,o.useState)(null),l=(0,i.Z)(r,2),u=l[0],s=l[1],d=(0,o.useRef)(null);return(0,o.useEffect)((function(){var r=new a.Fb((0,t.Z)({container:d.current},n),e);s(r)}),[]),(0,o.useEffect)((function(){u&&window.addEventListener("resize",(function(){u.board.rescale()}))}),[u]),[d,u]}},3548:function(n,e,r){r.r(e),r.d(e,{default:function(){return f}});var t=r(29439),i=r(72791),o=r(64554),a=r(66509),l=r(74497),u=r(4401),s=r(84782),d=r(78572),c=r(80184);function f(){(0,a.Z)("Pikaso | Core Components | Label");var n=(0,l.Z)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),e=(0,t.Z)(n,2),r=e[0],f=e[1];(0,i.useEffect)((function(){f&&f.shapes.label.insert({container:{x:300,y:100},tag:{fill:"#262626",cornerRadius:0},text:{text:"Pikaso Rocks",fill:"#00ff00",fontSize:60}})}),[f]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d.U,{children:"# [Label](/api/classes/Label.html)\n        \nLabel is a special kind of [Text](/api/classes/Text.html) and [Shape Model](/api/classes/ShapeModel.html) that includes both [Text](/core/shapes/text) and [Tag](https://konvajs.org/api/Konva.Tag.html). \n\nLabel comes with built-in features such as Inline Editing and Auto Transformation.\n\n\n```js\n// create a new label\nconst myLabel = editor.shapes.label.insert({\n  container: {\n    x: 40,\n    y: 100\n  },\n  tag: {\n    fill: '#262626'\n  },\n  text: {\n    text: 'Pikaso Rocks',\n    fill: '#00ff00',\n    fontSize: 40\n  }\n})\n\n// update label's tag\nmylabel.updateTag({\n  fill: '#fff',\n  cornerRadius: [2, 0, 2, 0] // or simply cornerRadius: 2\n})\n\n// update label's text\nmylabel.updateText({\n  fill: '#ff0000',\n  fontSize: 30,\n  fontFamily: 'Arial'\n})\n\n// all ShapeModel methods and properties are available\nmylabel.addFilter({\n  name: 'Blur',\n  options: {\n    blurRadius: 10\n  }\n})\n```"}),(0,c.jsx)(o.Z,{mb:3,children:(0,c.jsx)("div",{ref:r,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}),(0,c.jsxs)(o.Z,{children:[(0,c.jsx)(u.z,{title:"Font Color",defaultColor:"#00ff00",onChange:function(n){var e=null===f||void 0===f?void 0:f.board.shapes.find((function(){return!0}));null===e||void 0===e||e.updateText({fill:n})}}),(0,c.jsx)(u.z,{title:"Background Color",defaultColor:"#262626",onChange:function(n){var e=null===f||void 0===f?void 0:f.board.shapes.find((function(){return!0}));null===e||void 0===e||e.updateTag({fill:n})}}),(0,c.jsx)(s.U,{title:"Font Size",defaultValue:60,SliderProps:{min:20,max:80,valueLabelDisplay:"on"},onChange:function(n){var e=null===f||void 0===f?void 0:f.board.shapes.find((function(){return!0}));null===e||void 0===e||e.updateText({fontSize:n})}}),(0,c.jsx)(s.U,{title:"Border Radius",defaultValue:0,SliderProps:{min:0,max:20,valueLabelDisplay:"on"},onChange:function(n){var e=null===f||void 0===f?void 0:f.board.shapes.find((function(){return!0}));null===e||void 0===e||e.updateTag({cornerRadius:n})}})]})]})}},66509:function(n,e,r){var t=r(72791),i={restoreOnUnmount:!1};e.Z="undefined"!==typeof document?function(n,e){void 0===e&&(e=i);var r=(0,t.useRef)(document.title);document.title!==n&&(document.title=n),(0,t.useEffect)((function(){return e&&e.restoreOnUnmount?function(){document.title=r.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=3548.c4a7965e.chunk.js.map