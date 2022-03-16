"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[5776],{56954:function(n,t,e){e.d(t,{n:function(){return c}});var i=e(1413),r=e(45987),o=e(64209),s=e(35834),a=e(80184),u=["children"];function c(n){var t=n.children,e=(0,r.Z)(n,u);return(0,a.jsx)(o.Z,(0,i.Z)((0,i.Z)({style:s.Z,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},78572:function(n,t,e){e.d(t,{U:function(){return h}});var i=e(1413),r=e(45987),o=e(72791),s=e(30035),a=e(18096),u=e(91523),c=e(56954),l=e(80184),d=["node","inline","className","children"];function h(n){var t=n.children,e="string"===typeof t?t:t(),h=(0,o.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),i=!1,r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},o=0;o<e.length;o++){var s=e[o];r(s)&&(i=!0),t.push(i?s:s.trim()),i&&r(e[o+1])&&(i=!1)}return t.join("\n")}(e)}),[e]);return(0,l.jsx)(s.D,{skipHtml:!0,remarkPlugins:[a.Z],children:h,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?(0,l.jsx)("a",{href:t,target:"_blank",children:e}):(0,l.jsx)(u.rU,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,o=n.children,s=(0,r.Z)(n,d),a=/language-(\w+)/.exec(e||"");return!t&&a?(0,l.jsx)(c.n,(0,i.Z)({children:String(o).replace(/\n$/,""),language:a[1],PreTag:"div"},s)):(0,l.jsx)("code",(0,i.Z)((0,i.Z)({className:e},s),{},{children:o}))}}})}},55776:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var i=e(66509),r=e(78572),o=e(80184);function s(){return(0,i.Z)("Pikaso | Installation"),(0,o.jsx)("div",{children:(0,o.jsx)(r.U,{children:'## Installation\n\n#### NPM\n\nPikaso provides both ES module and CommonJS bundles, which is easy to use with the popular bundlers\n\n```js\nnpm install pikaso --save\n```\n\n#### Yarn\n```js\nyarn add pikaso\n```\n\n\n#### <script> tag\n\nPikaso also supports UMD loading\n\n```js\n<srcipt src="https://unpkg.com/pikaso@latest/umd/pikaso.min.js" type="text/javascript" />\n```\n'})})}},66509:function(n,t,e){var i=e(72791),r={restoreOnUnmount:!1};t.Z="undefined"!==typeof document?function(n,t){void 0===t&&(t=r);var e=(0,i.useRef)(document.title);document.title!==n&&(document.title=n),(0,i.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=e.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=5776.e553c984.chunk.js.map