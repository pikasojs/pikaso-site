(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[34],{239:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var i=e(59),r=e(97),a=e(849),c=e(847),o=e(2),s=["children"];function u(n){var t=n.children,e=Object(r.a)(n,s);return Object(o.jsx)(a.a,Object(i.a)(Object(i.a)({style:c.a,showLineNumbers:!0,wrapLongLines:!0},e),{},{children:t}))}},240:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var i=e(59),r=e(97),a=e(0),c=e(248),o=e(249),s=e(47),u=e(239),l=e(2),d=["node","inline","className","children"];function h(n){var t=n.children,e="string"===typeof t?t:t(),h=Object(a.useMemo)((function(){return function(n){for(var t=[],e=n.split("\n"),i=!1,r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},a=0;a<e.length;a++){var c=e[a];r(c)&&(i=!0),t.push(i?c:c.trim()),i&&r(e[a+1])&&(i=!1)}return t.join("\n")}(e)}),[e]);return Object(l.jsx)(c.a,{skipHtml:!0,remarkPlugins:[o.a],children:h,components:{a:function(n){var t=n.href,e=n.children;return(null===t||void 0===t?void 0:t.startsWith("/api/"))||(null===t||void 0===t?void 0:t.startsWith("http"))?Object(l.jsx)("a",{href:t,target:"_blank",children:e}):Object(l.jsx)(s.b,{to:t,children:e})},code:function(n){n.node;var t=n.inline,e=n.className,a=n.children,c=Object(r.a)(n,d),o=/language-(\w+)/.exec(e||"");return!t&&o?Object(l.jsx)(u.a,Object(i.a)({children:String(a).replace(/\n$/,""),language:o[1],PreTag:"div"},c)):Object(l.jsx)("code",Object(i.a)(Object(i.a)({className:e},c),{},{children:a}))}}})}},83:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var i=e(240),r=e(2);function a(){return Object(r.jsx)(i.a,{children:function(){return"\n        # [getPointsDistance](/api/index.html#getPointsDistance)\n\n        Calculates new position of the given point after rotating around the given angle.\n\n        [More Info](https://drive.google.com/file/d/1yhi1vG9a_U0rPpz57jWEi8DQJemrtjr9/view?usp=sharing)\n\n        ~~~ts\n        getRotatedPoint(point: Point, angle: number): Point\n        ~~~\n      "}})}}}]);
//# sourceMappingURL=34.6b6d5cf6.chunk.js.map