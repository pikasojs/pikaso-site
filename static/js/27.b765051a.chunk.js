(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[27],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"LoadFromUrl",(function(){return l}));var r=t(14),a=t(183),c=t(538),i=t(193),o=t(194),u=t(197),s=t(2);function l(){var e=Object(u.a)(),n=Object(r.a)(e,2),t=n[0],l=n[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("a",{id:"load-image-from-url"}),Object(s.jsx)(o.a,{children:function(){return"\n        ### [Load image from url](#load-image-from-url)\n      "}}),Object(s.jsx)(a.a,{my:1,children:Object(s.jsx)("div",{ref:t,style:{margin:"0 auto",background:"#f5f5f5",width:"250px",height:"250px"}})}),Object(s.jsx)(i.a,{language:"typescript",children:"// load image from url\neditor.board.background.setImageFromUrl('<ImageUrl>')\n\n// Alternatively, you may use\neditor.loadFromUrl('<ImageUrl>')"}),Object(s.jsx)(a.a,{my:2,children:Object(s.jsx)(c.a,{variant:"contained",color:"primary",onClick:function(){null===l||void 0===l||l.board.background.setImageFromUrl("https://source.unsplash.com/random?hash=".concat(Math.random()))},children:"Load Random Background"})})]})}},193:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(56),a=t(90),c=t(537),i=t(536),o=t(2),u=["children"];function s(e){var n=e.children,t=Object(a.a)(e,u);return Object(o.jsx)(c.a,Object(r.a)(Object(r.a)({style:i.a,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:n}))}},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(56),a=t(90),c=t(0),i=t(199),o=t(200),u=t(193),s=t(2),l=["node","inline","className","children"];function d(e){var n=e.children,t="string"===typeof n?n:n(),d=Object(c.useMemo)((function(){return function(e){for(var n=[],t=e.split("\n"),r=!1,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},c=0;c<t.length;c++){var i=t[c];a(i)&&(r=!0),n.push(r?i:i.trim()),r&&a(t[c+1])&&(r=!1)}return n.join("\n")}(t)}),[t]);return Object(s.jsx)(i.a,{remarkPlugins:[o.a],children:d,components:{code:function(e){e.node;var n=e.inline,t=e.className,c=e.children,i=Object(a.a)(e,l),o=/language-(\w+)/.exec(t||"");return!n&&o?Object(s.jsx)(u.a,Object(r.a)({children:String(c).replace(/\n$/,""),language:o[1],PreTag:"div"},i)):Object(s.jsx)("code",Object(r.a)(Object(r.a)({className:t},i),{},{children:c}))}}})}},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(56),a=t(14),c=t(0),i=t(211);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(c.useState)(null),t=Object(a.a)(n,2),o=t[0],u=t[1],s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var n=new i.a(Object(r.a)({container:s.current},e));u(n)}),[]),Object(c.useEffect)((function(){o&&window.addEventListener("resize",(function(){o.board.rescale()}))}),[o]),[s,o]}}}]);
//# sourceMappingURL=27.b765051a.chunk.js.map