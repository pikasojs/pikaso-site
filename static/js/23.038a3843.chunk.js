(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[23],{245:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(59),i=n(99),a=n(855),o=n(853),c=n(2),s=["children"];function u(t){var e=t.children,n=Object(i.a)(t,s);return Object(c.jsx)(a.a,Object(r.a)(Object(r.a)({style:o.a,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:e}))}},246:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(59),i=n(99),a=n(0),o=n(255),c=n(256),s=n(47),u=n(245),l=n(2),d=["node","inline","className","children"];function h(t){var e=t.children,n="string"===typeof e?e:e(),h=Object(a.useMemo)((function(){return function(t){for(var e=[],n=t.split("\n"),r=!1,i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.startsWith("```")||t.startsWith("~~~")},a=0;a<n.length;a++){var o=n[a];i(o)&&(r=!0),e.push(r?o:o.trim()),r&&i(n[a+1])&&(r=!1)}return e.join("\n")}(n)}),[n]);return Object(l.jsx)(o.a,{skipHtml:!0,remarkPlugins:[c.a],children:h,components:{a:function(t){var e=t.href,n=t.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?Object(l.jsx)("a",{href:e,target:"_blank",children:n}):Object(l.jsx)(s.b,{to:e,children:n})},code:function(t){t.node;var e=t.inline,n=t.className,a=t.children,o=Object(i.a)(t,d),c=/language-(\w+)/.exec(n||"");return!e&&c?Object(l.jsx)(u.a,Object(r.a)({children:String(a).replace(/\n$/,""),language:c[1],PreTag:"div"},o)):Object(l.jsx)("code",Object(r.a)(Object(r.a)({className:n},o),{},{children:a}))}}})}},247:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(59),i=n(14),a=n(0),o=n(249);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=Object(a.useState)(null),c=Object(i.a)(n,2),s=c[0],u=c[1],l=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=new o.b(Object(r.a)({container:l.current},t),e);u(n)}),[]),Object(a.useEffect)((function(){s&&window.addEventListener("resize",(function(){s.board.rescale()}))}),[s]),[l,s]}},252:function(t,e,n){"use strict";function r(){var t=Math.round,e=Math.random;return"rgb("+t(255*e())+","+t(255*e())+","+t(255*e())+")"}n.d(e,"a",(function(){return r}))},463:function(t,e,n){"use strict";function r(t,e){return Math.random()*(e-t)+t}n.d(e,"a",(function(){return r}))},70:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(14),i=n(0),a=n(237),o=n(534),c=n(274),s=n(260),u=n(247),l=n(246),d=n(463),h=n(252),j=n(2);function b(){Object(s.a)("Pikaso | Core Components | History");var t=Object(u.a)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),e=Object(r.a)(t,2),n=e[0],b=e[1];Object(i.useEffect)((function(){b&&new Array(20).fill(null).forEach((function(){return f()}))}),[b]);var f=function(){b&&b.shapes.circle.insert({radius:Object(d.a)(40,80),fill:Object(h.a)(),x:Object(d.a)(0,b.board.stage.width()-50),y:Object(d.a)(0,b.board.stage.height()-50)})};return Object(j.jsxs)("div",{children:[Object(j.jsx)(l.a,{children:"# [History](/api/classes/History.html)\n        \nPikaso is a fully stateful library that tracks changes across separated states to allow navigation around them.\n\nIn this regard [undo](/api/classes/History.html#undo), [redo](/api/classes/History.html#redo) and [jump](/api/classes/History.html#jump) are available.\n\n\n```js\n// go to previous state\neditor.undo() // or editor.history.undo()\n\n// go to next state\neditor.redo() // or editor.history.redo()\n\n// reinitialize the board\neditor.reset()\n\n// jump to specific state\neditor.history.jump(<Number>)\n```"}),Object(j.jsx)(a.a,{mb:3,children:Object(j.jsx)("div",{ref:n,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}),Object(j.jsxs)(a.a,{display:"flex",justifyContent:"flex-end",children:[Object(j.jsxs)(o.a,{variant:"outlined",sx:{mr:2},children:[Object(j.jsx)(c.a,{size:"small",variant:"outlined",onClick:function(){return null===b||void 0===b?void 0:b.undo()},children:"Undo"}),Object(j.jsx)(c.a,{size:"small",variant:"outlined",onClick:function(){return null===b||void 0===b?void 0:b.reset()},children:"Reset"}),Object(j.jsx)(c.a,{size:"small",variant:"outlined",onClick:function(){return null===b||void 0===b?void 0:b.redo()},children:"Redo"})]}),Object(j.jsx)(c.a,{size:"small",variant:"contained",color:"secondary",onClick:f,children:"Create Circle"})]})]})}}}]);
//# sourceMappingURL=23.038a3843.chunk.js.map