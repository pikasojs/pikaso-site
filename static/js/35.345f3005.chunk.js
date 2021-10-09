(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[35],{248:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e(37),r=e(100),c=e(858),o=e(857),a=e(2),u=["children"];function s(t){var n=t.children,e=Object(r.a)(t,u);return Object(a.jsx)(c.a,Object(i.a)(Object(i.a)({style:o.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:n}))}},249:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var i=e(37),r=e(100),c=e(0),o=e(254),a=e(255),u=e(48),s=e(248),d=e(2),l=["node","inline","className","children"];function f(t){var n=t.children,e="string"===typeof n?n:n(),f=Object(c.useMemo)((function(){return function(t){for(var n=[],e=t.split("\n"),i=!1,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.startsWith("```")||t.startsWith("~~~")},c=0;c<e.length;c++){var o=e[c];r(o)&&(i=!0),n.push(i?o:o.trim()),i&&r(e[c+1])&&(i=!1)}return n.join("\n")}(e)}),[e]);return Object(d.jsx)(o.a,{skipHtml:!0,remarkPlugins:[a.a],children:f,components:{a:function(t){var n=t.href,e=t.children;return(null===n||void 0===n?void 0:n.startsWith("/api/"))||(null===n||void 0===n?void 0:n.startsWith("http"))?Object(d.jsx)("a",{href:n,target:"_blank",children:e}):Object(d.jsx)(u.b,{to:n,children:e})},code:function(t){t.node;var n=t.inline,e=t.className,c=t.children,o=Object(r.a)(t,l),a=/language-(\w+)/.exec(e||"");return!n&&a?Object(d.jsx)(s.a,Object(i.a)({children:String(c).replace(/\n$/,""),language:a[1],PreTag:"div"},o)):Object(d.jsx)("code",Object(i.a)(Object(i.a)({className:e},o),{},{children:c}))}}})}},260:function(t,n,e){"use strict";var i=e(0),r={restoreOnUnmount:!1};n.a="undefined"!==typeof document?function(t,n){void 0===n&&(n=r);var e=Object(i.useRef)(document.title);document.title!==t&&(document.title=t),Object(i.useEffect)((function(){return n&&n.restoreOnUnmount?function(){document.title=e.current}:void 0}),[])}:function(t){}},89:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var i=e(260),r=e(249),c=e(2);function o(){return Object(i.a)("Pikaso | Utilities | omit"),Object(c.jsx)(r.a,{children:function(){return"\n        # [omit](/api/index.html#omit)\n\n        This helper function creates an object composed of the own and inherited enumerable property paths of object that are not omitted.\n\n        ~~~ts\n        function omit(object: object, keys: string[]): object\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=35.345f3005.chunk.js.map