"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[9330],{56954:function(n,t,r){r.d(t,{n:function(){return u}});var e=r(1413),i=r(45987),a=r(64209),s=r(35834),c=r(80184),o=["children"];function u(n){var t=n.children,r=(0,i.Z)(n,o);return(0,c.jsx)(a.Z,(0,e.Z)((0,e.Z)({style:s.Z,showLineNumbers:!0,wrapLongLines:!0},r),{},{children:t}))}},78572:function(n,t,r){r.d(t,{U:function(){return h}});var e=r(1413),i=r(45987),a=r(72791),s=r(30035),c=r(18096),o=r(91523),u=r(56954),l=r(80184),d=["node","inline","className","children"];function h(n){var t=n.children,r="string"===typeof t?t:t(),h=(0,a.useMemo)((function(){return function(n){for(var t=[],r=n.split("\n"),e=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},a=0;a<r.length;a++){var s=r[a];i(s)&&(e=!0),t.push(e?s:s.trim()),e&&i(r[a+1])&&(e=!1)}return t.join("\n")}(r)}),[r]);return(0,l.jsx)(s.D,{skipHtml:!0,remarkPlugins:[c.Z],children:h,components:{a:function(n){var t=n.href,r=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?(0,l.jsx)("a",{href:t,target:"_blank",children:r}):(0,l.jsx)(o.rU,{to:t,children:r})},code:function(n){n.node;var t=n.inline,r=n.className,a=n.children,s=(0,i.Z)(n,d),c=/language-(\w+)/.exec(r||"");return!t&&c?(0,l.jsx)(u.n,(0,e.Z)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},s)):(0,l.jsx)("code",(0,e.Z)((0,e.Z)({className:r},s),{},{children:a}))}}})}},9330:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(29439),i=r(72791),a=r(66509),s=r(20263),c=r(74569),o=r.n(c),u=r(78572),l=r(80184);function d(){(0,a.Z)("Pikaso | Start");var n=(0,i.useState)(""),t=(0,e.Z)(n,2),r=t[0],c=t[1];return(0,s.Z)((function(){o().get("https://raw.githubusercontent.com/pikasojs/pikaso/master/README.md?rand=".concat(Math.random())).then((function(n){var t=n.data;c(t)}))})),(0,l.jsx)("div",{children:(0,l.jsx)(u.U,{children:r})})}}}]);
//# sourceMappingURL=9330.29d7c391.chunk.js.map