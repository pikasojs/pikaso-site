(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[36],{239:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(59),i=e(97),a=e(849),c=e(847),o=e(2),s=["children"];function u(n){var t=n.children,e=Object(i.a)(n,s);return Object(o.jsx)(a.a,Object(r.a)(Object(r.a)({style:c.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},240:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var r=e(59),i=e(97),a=e(0),c=e(248),o=e(249),s=e(47),u=e(239),l=e(2),d=["node","inline","className","children"];function h(n){var t=n.children,e="string"===typeof t?t:t(),h=Object(a.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),r=!1,i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},a=0;a<e.length;a++){var c=e[a];i(c)&&(r=!0),t.push(r?c:c.trim()),r&&i(e[a+1])&&(r=!1)}return t.join("\n")}(e)}),[e]);return Object(l.jsx)(c.a,{skipHtml:!0,remarkPlugins:[o.a],children:h,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(l.jsx)("a",{href:t,target:"_blank",children:e}):Object(l.jsx)(s.b,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,a=n.children,c=Object(i.a)(n,d),o=/language-(\w+)/.exec(e||"");return!t&&o?Object(l.jsx)(u.a,Object(r.a)({children:String(a).replace(/\n$/,""),language:o[1],PreTag:"div"},c)):Object(l.jsx)("code",Object(r.a)(Object(r.a)({className:e},c),{},{children:a}))}}})}},85:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var r=e(240),i=e(2);function a(){return Object(i.jsx)(r.a,{children:function(){return"\n        # [imageToDataUrl](/api/index.html#imageToDataUrl)\n\n        As opposed to [createImageFromUrl](/utilities/create-image-from-url), this function converts the given file to a base64 URL.\n\n        ~~~ts\n        function imageToDataUrl(file: File): Promise<string>\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=36.51b30206.chunk.js.map