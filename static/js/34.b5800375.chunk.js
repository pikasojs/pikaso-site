(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[34],{245:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var i=e(59),c=e(99),r=e(855),a=e(853),o=e(2),s=["children"];function u(t){var n=t.children,e=Object(c.a)(t,s);return Object(o.jsx)(r.a,Object(i.a)(Object(i.a)({style:a.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:n}))}},246:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var i=e(59),c=e(99),r=e(0),a=e(255),o=e(256),s=e(47),u=e(245),l=e(2),d=["node","inline","className","children"];function f(t){var n=t.children,e="string"===typeof n?n:n(),f=Object(r.useMemo)((function(){return function(t){for(var n=[],e=t.split("\n"),i=!1,c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.startsWith("```")||t.startsWith("~~~")},r=0;r<e.length;r++){var a=e[r];c(a)&&(i=!0),n.push(i?a:a.trim()),i&&c(e[r+1])&&(i=!1)}return n.join("\n")}(e)}),[e]);return Object(l.jsx)(a.a,{skipHtml:!0,remarkPlugins:[o.a],children:f,components:{a:function(t){var n=t.href,e=t.children;return(null===n||void 0===n?void 0:n.startsWith("/api/"))||(null===n||void 0===n?void 0:n.startsWith("http"))?Object(l.jsx)("a",{href:n,target:"_blank",children:e}):Object(l.jsx)(s.b,{to:n,children:e})},code:function(t){t.node;var n=t.inline,e=t.className,r=t.children,a=Object(c.a)(t,d),o=/language-(\w+)/.exec(e||"");return!n&&o?Object(l.jsx)(u.a,Object(i.a)({children:String(r).replace(/\n$/,""),language:o[1],PreTag:"div"},a)):Object(l.jsx)("code",Object(i.a)(Object(i.a)({className:e},a),{},{children:r}))}}})}},260:function(t,n,e){"use strict";var i=e(0),c={restoreOnUnmount:!1};n.a="undefined"!==typeof document?function(t,n){void 0===n&&(n=c);var e=Object(i.useRef)(document.title);document.title!==t&&(document.title=t),Object(i.useEffect)((function(){return n&&n.restoreOnUnmount?function(){document.title=e.current}:void 0}),[])}:function(t){}},84:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var i=e(260),c=e(246),r=e(2);function a(){return Object(i.a)("Pikaso | Utilities | getPointsDistance"),Object(r.jsx)(c.a,{children:function(){return"\n        # [getPointsDistance](/api/index.html#getPointsDistance)\n\n        Helper function that calculates the distance between two given points.\n\n        ~~~ts\n        function getPointsDistance(p1: Point, p2: Point): number\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=34.b5800375.chunk.js.map