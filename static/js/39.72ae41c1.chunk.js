(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[39],{239:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t(59),a=t(97),i=t(849),c=t(847),o=t(2),s=["children"];function u(n){var e=n.children,t=Object(a.a)(n,s);return Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({style:c.a,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:e}))}},240:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t(59),a=t(97),i=t(0),c=t(248),o=t(249),s=t(47),u=t(239),d=t(2),l=["node","inline","className","children"];function h(n){var e=n.children,t="string"===typeof e?e:e(),h=Object(i.useMemo)((function(){return function(n){for(var e=[],t=n.split("\n"),r=!1,a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},i=0;i<t.length;i++){var c=t[i];a(c)&&(r=!0),e.push(r?c:c.trim()),r&&a(t[i+1])&&(r=!1)}return e.join("\n")}(t)}),[t]);return Object(d.jsx)(c.a,{skipHtml:!0,remarkPlugins:[o.a],children:h,components:{a:function(n){var e=n.href,t=n.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?Object(d.jsx)("a",{href:e,target:"_blank",children:t}):Object(d.jsx)(s.b,{to:e,children:t})},code:function(n){n.node;var e=n.inline,t=n.className,i=n.children,c=Object(a.a)(n,l),o=/language-(\w+)/.exec(t||"");return!e&&o?Object(d.jsx)(u.a,Object(r.a)({children:String(i).replace(/\n$/,""),language:o[1],PreTag:"div"},c)):Object(d.jsx)("code",Object(r.a)(Object(r.a)({className:t},c),{},{children:i}))}}})}},88:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return i}));var r=t(240),a=t(2);function i(){return Object(a.jsx)(r.a,{children:function(){return"\n        # [rotateAroundCenter](/api/index.html#rotateAroundCenter)\n\n        Based on the angle given, this helper function rotates the given node around its center.\n\n        ~~~ts\n        rotateAroundCenter(node: Konva.Group | Konva.Shape | Konva.Layer | Konva.Stage, theta: number): void\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=39.72ae41c1.chunk.js.map