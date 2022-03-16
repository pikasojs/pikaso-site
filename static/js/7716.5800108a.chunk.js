"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[7716],{56954:function(n,t,e){e.d(t,{n:function(){return l}});var r=e(1413),i=e(45987),o=e(64209),u=e(35834),c=e(80184),s=["children"];function l(n){var t=n.children,e=(0,i.Z)(n,s);return(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({style:u.Z,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},78572:function(n,t,e){e.d(t,{U:function(){return f}});var r=e(1413),i=e(45987),o=e(72791),u=e(30035),c=e(18096),s=e(91523),l=e(56954),a=e(80184),d=["node","inline","className","children"];function f(n){var t=n.children,e="string"===typeof t?t:t(),f=(0,o.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},o=0;o<e.length;o++){var u=e[o];i(u)&&(r=!0),t.push(r?u:u.trim()),r&&i(e[o+1])&&(r=!1)}return t.join("\n")}(e)}),[e]);return(0,a.jsx)(u.D,{skipHtml:!0,remarkPlugins:[c.Z],children:f,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?(0,a.jsx)("a",{href:t,target:"_blank",children:e}):(0,a.jsx)(s.rU,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,o=n.children,u=(0,i.Z)(n,d),c=/language-(\w+)/.exec(e||"");return!t&&c?(0,a.jsx)(l.n,(0,r.Z)({children:String(o).replace(/\n$/,""),language:c[1],PreTag:"div"},u)):(0,a.jsx)("code",(0,r.Z)((0,r.Z)({className:e},u),{},{children:o}))}}})}},17716:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(66509),i=e(78572),o=e(80184);function u(){return(0,r.Z)("Pikaso | Utilities | convertHtmlToText"),(0,o.jsx)(i.U,{children:function(){return"\n        # [convertHtmlToText](/api/index.html#convertHtmlToText)\n\n        Converts given HTML to the plain text.\n\n        ~~~ts\n        function convertHtmlToText(html = ''): string\n        ~~~\n      "}})}},66509:function(n,t,e){var r=e(72791),i={restoreOnUnmount:!1};t.Z="undefined"!==typeof document?function(n,t){void 0===t&&(t=i);var e=(0,r.useRef)(document.title);document.title!==n&&(document.title=n),(0,r.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=e.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=7716.5800108a.chunk.js.map