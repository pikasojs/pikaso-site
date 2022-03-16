"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[3442],{56954:function(n,e,t){t.d(e,{n:function(){return d}});var r=t(1413),i=t(45987),o=t(64209),u=t(35834),c=t(80184),a=["children"];function d(n){var e=n.children,t=(0,i.Z)(n,a);return(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({style:u.Z,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:e}))}},78572:function(n,e,t){t.d(e,{U:function(){return f}});var r=t(1413),i=t(45987),o=t(72791),u=t(30035),c=t(18096),a=t(91523),d=t(56954),s=t(80184),l=["node","inline","className","children"];function f(n){var e=n.children,t="string"===typeof e?e:e(),f=(0,o.useMemo)((function(){return function(n){for(var e=[],t=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},o=0;o<t.length;o++){var u=t[o];i(u)&&(r=!0),e.push(r?u:u.trim()),r&&i(t[o+1])&&(r=!1)}return e.join("\n")}(t)}),[t]);return(0,s.jsx)(u.D,{skipHtml:!0,remarkPlugins:[c.Z],children:f,components:{a:function(n){var e=n.href,t=n.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?(0,s.jsx)("a",{href:e,target:"_blank",children:t}):(0,s.jsx)(a.rU,{to:e,children:t})},code:function(n){n.node;var e=n.inline,t=n.className,o=n.children,u=(0,i.Z)(n,l),c=/language-(\w+)/.exec(t||"");return!e&&c?(0,s.jsx)(d.n,(0,r.Z)({children:String(o).replace(/\n$/,""),language:c[1],PreTag:"div"},u)):(0,s.jsx)("code",(0,r.Z)((0,r.Z)({className:t},u),{},{children:o}))}}})}},13442:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r=t(66509),i=t(78572),o=t(80184);function u(){return(0,r.Z)("Pikaso | Utilities | convertDegreeToRadian"),(0,o.jsx)(i.U,{children:function(){return"\n        # [convertDegreeToRadian](/api/index.html#convertDegreeToRadian)\n\n        The helper function converts degree value to radian.\n\n        radian = (degree * PI) / 180\n        ~~~ts\n        function convertDegreeToRadian(degree: number): number\n        ~~~\n      "}})}},66509:function(n,e,t){var r=t(72791),i={restoreOnUnmount:!1};e.Z="undefined"!==typeof document?function(n,e){void 0===e&&(e=i);var t=(0,r.useRef)(document.title);document.title!==n&&(document.title=n),(0,r.useEffect)((function(){return e&&e.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=3442.e3845b21.chunk.js.map