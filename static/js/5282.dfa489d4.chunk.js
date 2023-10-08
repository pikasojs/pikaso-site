"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[5282],{56954:function(n,e,t){t.d(e,{n:function(){return c}});var r=t(1413),i=t(45987),a=t(64209),o=t(35834),u=t(80184),s=["children"];function c(n){var e=n.children,t=(0,i.Z)(n,s);return(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({style:o.Z,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:e}))}},78572:function(n,e,t){t.d(e,{U:function(){return d}});var r=t(1413),i=t(45987),a=t(72791),o=t(30035),u=t(18096),s=t(91523),c=t(56954),f=t(80184),l=["node","inline","className","children"];function d(n){var e=n.children,t="string"===typeof e?e:e(),d=(0,a.useMemo)((function(){return function(n){for(var e=[],t=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},a=0;a<t.length;a++){var o=t[a];i(o)&&(r=!0),e.push(r?o:o.trim()),r&&i(t[a+1])&&(r=!1)}return e.join("\n")}(t)}),[t]);return(0,f.jsx)(o.D,{skipHtml:!0,remarkPlugins:[u.Z],children:d,components:{a:function(n){var e=n.href,t=n.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?(0,f.jsx)("a",{href:e,target:"_blank",children:t}):(0,f.jsx)(s.rU,{to:e,children:t})},code:function(n){n.node;var e=n.inline,t=n.className,a=n.children,o=(0,i.Z)(n,l),u=/language-(\w+)/.exec(t||"");return!e&&u?(0,f.jsx)(c.n,(0,r.Z)({children:String(a).replace(/\n$/,""),language:u[1],PreTag:"div"},o)):(0,f.jsx)("code",(0,r.Z)((0,r.Z)({className:t},o),{},{children:a}))}}})}},70665:function(n,e,t){t.d(e,{W:function(){return o}});var r=t(72455),i=t(80184),a=(0,r.Z)((function(n){return{root:{borderLeft:"4px solid #d1f2a5",backgroundColor:"#effab4",marginBottom:n.spacing(2),padding:n.spacing(2,1),fontWeight:600}}}),{name:"ReleaseBanner"});function o(n){var e=n.text,t=a();return(0,i.jsx)("div",{className:t.root,children:e})}},74497:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(1413),i=t(29439),a=t(72791),o=t(83469);function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,t=(0,a.useState)(null),u=(0,i.Z)(t,2),s=u[0],c=u[1],f=(0,a.useRef)(null);return(0,a.useEffect)((function(){var t=new o.Fb((0,r.Z)({container:f.current},n),e);c(t)}),[]),(0,a.useEffect)((function(){s&&window.addEventListener("resize",(function(){s.board.rescale()}))}),[s]),[f,s]}},95282:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(15861),i=t(29439),a=t(87757),o=t.n(a),u=t(72791),s=t(66509),c=t(74497),f=t(78572),l=t(70665),d=t(80184);function h(){(0,s.Z)("Pikaso | Core Components | Measurement Tag");var n=(0,c.Z)({measurement:{background:{cornerRadius:5,fill:"purple"},text:{fill:"#fff",padding:5,fontSize:14,fontStyle:"bold"}}}),e=(0,i.Z)(n,2),t=e[0],a=e[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return");case 2:a.shapes.rect.insert({width:200,height:100,x:400,y:200,fill:"red"}).select();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[a]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.W,{text:"New as of v2.5.0"}),(0,d.jsx)(f.U,{children:"# Measurement Tag\n        \nPikso has a built-in measurement tag helper that will display the size of a shape when drawing or transforming.\n\nThe style of the tag can be customized in any way you want. \n\nBy default, this feature is disabled, but it can be enabled during initial configurations.\n\n```ts\n// it is only possible to enable measurement tags when creating the canvas editor\nnew Pikaso({\n  /* other configurations */\n  measurement: {\n    margin: 20,\n    background: {\n      cornerRadius: 5,\n      fill: 'purple'\n    },\n    text: {\n      fill: '#fff',\n      padding: 5,\n      fontSize: 14,\n      fontStyle: 'bold'\n    }\n  }\n```"}),(0,d.jsx)("div",{ref:t,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"500px"}})]})}},66509:function(n,e,t){var r=t(72791),i={restoreOnUnmount:!1};e.Z="undefined"!==typeof document?function(n,e){void 0===e&&(e=i);var t=(0,r.useRef)(document.title);document.title!==n&&(document.title=n),(0,r.useEffect)((function(){return e&&e.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=5282.dfa489d4.chunk.js.map