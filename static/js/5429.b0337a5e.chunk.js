"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[5429],{56954:function(n,r,e){e.d(r,{n:function(){return l}});var t=e(1413),i=e(45987),a=e(64209),o=e(35834),s=e(80184),c=["children"];function l(n){var r=n.children,e=(0,i.Z)(n,c);return(0,s.jsx)(a.Z,(0,t.Z)((0,t.Z)({style:o.Z,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:r}))}},78572:function(n,r,e){e.d(r,{U:function(){return h}});var t=e(1413),i=e(45987),a=e(72791),o=e(30035),s=e(18096),c=e(91523),l=e(56954),d=e(80184),u=["node","inline","className","children"];function h(n){var r=n.children,e="string"===typeof r?r:r(),h=(0,a.useMemo)((function(){return function(n){for(var r=[],e=n.split("\n"),t=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},a=0;a<e.length;a++){var o=e[a];i(o)&&(t=!0),r.push(t?o:o.trim()),t&&i(e[a+1])&&(t=!1)}return r.join("\n")}(e)}),[e]);return(0,d.jsx)(o.D,{skipHtml:!0,remarkPlugins:[s.Z],children:h,components:{a:function(n){var r=n.href,e=n.children;return(null===r||void 0===r?void 0:r.startsWith("/api/"))||(null===r||void 0===r?void 0:r.startsWith("http"))?(0,d.jsx)("a",{href:r,target:"_blank",children:e}):(0,d.jsx)(c.rU,{to:r,children:e})},code:function(n){n.node;var r=n.inline,e=n.className,a=n.children,o=(0,i.Z)(n,u),s=/language-(\w+)/.exec(e||"");return!r&&s?(0,d.jsx)(l.n,(0,t.Z)({children:String(a).replace(/\n$/,""),language:s[1],PreTag:"div"},o)):(0,d.jsx)("code",(0,t.Z)((0,t.Z)({className:e},o),{},{children:a}))}}})}},74497:function(n,r,e){e.d(r,{Z:function(){return s}});var t=e(1413),i=e(29439),a=e(72791),o=e(83469);function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,e=(0,a.useState)(null),s=(0,i.Z)(e,2),c=s[0],l=s[1],d=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new o.Fb((0,t.Z)({container:d.current},n),r);l(e)}),[]),(0,a.useEffect)((function(){c&&window.addEventListener("resize",(function(){c.board.rescale()}))}),[c]),[d,c]}},5429:function(n,r,e){e.r(r),e.d(r,{LoadFromUrl:function(){return Z}});var t=e(29439),i=e(41473),a=e(55818),o=e(20890),s=e(3721),c=e(57621),l=e(64554),d=e(72363),u=e(24518),h=e(39504),f=e(81131),m=e(56954),g=e(78572),x=e(74497),v=e(80184);function Z(){var n=(0,x.Z)(),r=(0,t.Z)(n,2),e=r[0],Z=r[1];return(0,v.jsxs)(i.Z,{expanded:!0,children:[(0,v.jsx)(a.Z,{expandIcon:(0,v.jsx)(f.Z,{}),children:(0,v.jsx)(o.Z,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"loadFromUrl"})}),(0,v.jsx)(s.Z,{children:(0,v.jsxs)(c.Z,{sx:{mb:4},children:[(0,v.jsx)(l.Z,{my:1,children:(0,v.jsx)("div",{ref:e,style:{margin:"0 auto",background:"#f5f5f5",width:"600px",height:"400px"}})}),(0,v.jsx)(d.Z,{sx:{justifyContent:"flex-end"},children:(0,v.jsx)(u.Z,{variant:"contained",color:"primary",onClick:function(){null===Z||void 0===Z||Z.board.background.setImageFromUrl("https://source.unsplash.com/random/600x400?hash=".concat(Math.random()))},children:"Load Random Background"})}),(0,v.jsxs)(h.Z,{children:[(0,v.jsx)(o.Z,{gutterBottom:!0,variant:"h6",component:"div",children:(0,v.jsx)(g.U,{children:function(){return"[setImageFromUrl](/api/classes/Background.html#setImageFromUrl)"}})}),(0,v.jsx)(m.n,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"})]})]})})]})}}}]);
//# sourceMappingURL=5429.b0337a5e.chunk.js.map