(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[35],{239:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(59),i=e(97),c=e(849),a=e(847),o=e(2),s=["children"];function u(n){var t=n.children,e=Object(i.a)(n,s);return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({style:a.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},240:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var r=e(59),i=e(97),c=e(0),a=e(248),o=e(249),s=e(47),u=e(239),l=e(2),d=["node","inline","className","children"];function h(n){var t=n.children,e="string"===typeof t?t:t(),h=Object(c.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},c=0;c<e.length;c++){var a=e[c];i(a)&&(r=!0),t.push(r?a:a.trim()),r&&i(e[c+1])&&(r=!1)}return t.join("\n")}(e)}),[e]);return Object(l.jsx)(a.a,{skipHtml:!0,remarkPlugins:[o.a],children:h,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(l.jsx)("a",{href:t,target:"_blank",children:e}):Object(l.jsx)(s.b,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,c=n.children,a=Object(i.a)(n,d),o=/language-(\w+)/.exec(e||"");return!t&&o?Object(l.jsx)(u.a,Object(r.a)({children:String(c).replace(/\n$/,""),language:o[1],PreTag:"div"},a)):Object(l.jsx)("code",Object(r.a)(Object(r.a)({className:e},a),{},{children:c}))}}})}},84:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return c}));var r=e(240),i=e(2);function c(){return Object(i.jsx)(r.a,{children:function(){return"\n        # [convertHtmlToText](/api/index.html#convertHtmlToText)\n\n        Converts given HTML to the plain text.\n\n        ~~~ts\n        function convertHtmlToText(html = ''): string\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=35.d61d674e.chunk.js.map