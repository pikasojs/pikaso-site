(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[31],{248:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e(37),i=e(100),c=e(858),a=e(856),o=e(2),u=["children"];function s(n){var t=n.children,e=Object(i.a)(n,u);return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({style:a.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},249:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(37),i=e(100),c=e(0),a=e(258),o=e(259),u=e(48),s=e(248),l=e(2),d=["node","inline","className","children"];function f(n){var t=n.children,e="string"===typeof t?t:t(),f=Object(c.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},c=0;c<e.length;c++){var a=e[c];i(a)&&(r=!0),t.push(r?a:a.trim()),r&&i(e[c+1])&&(r=!1)}return t.join("\n")}(e)}),[e]);return Object(l.jsx)(a.a,{skipHtml:!0,remarkPlugins:[o.a],children:f,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(l.jsx)("a",{href:t,target:"_blank",children:e}):Object(l.jsx)(u.b,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,c=n.children,a=Object(i.a)(n,d),o=/language-(\w+)/.exec(e||"");return!t&&o?Object(l.jsx)(s.a,Object(r.a)({children:String(c).replace(/\n$/,""),language:o[1],PreTag:"div"},a)):Object(l.jsx)("code",Object(r.a)(Object(r.a)({className:e},a),{},{children:c}))}}})}},263:function(n,t,e){"use strict";var r=e(0),i={restoreOnUnmount:!1};t.a="undefined"!==typeof document?function(n,t){void 0===t&&(t=i);var e=Object(r.useRef)(document.title);document.title!==n&&(document.title=n),Object(r.useEffect)((function(){return t&&t.restoreOnUnmount?function(){document.title=e.current}:void 0}),[])}:function(n){}},82:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var r=e(263),i=e(249),c=e(2);function a(){return Object(r.a)("Pikaso | Utilities | createImageFromUrl"),Object(c.jsx)(i.a,{children:function(){return"\n        # [createImageFromUrl](/api/index.html#createImageFromUrl)\n\n        The helper function gets a url and download and  that to an Image.\n        \n        ~~~ts\n          function createImageFromUrl(url: string): Promise<Konva.Image>\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=31.827f5f23.chunk.js.map