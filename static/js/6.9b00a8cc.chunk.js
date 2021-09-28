(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[6],{205:function(n,e,r){"use strict";r.d(e,"a",(function(){return d}));var t=r(56),o=r(92),i=r(554),a=r(553),c=r(2),s=["children"];function d(n){var e=n.children,r=Object(o.a)(n,s);return Object(c.jsx)(i.a,Object(t.a)(Object(t.a)({style:a.a,showLineNumbers:!0,wrapLongLines:!0},r),{},{children:e}))}},206:function(n,e,r){"use strict";r.d(e,"a",(function(){return u}));var t=r(56),o=r(92),i=r(0),a=r(212),c=r(213),s=r(205),d=r(2),f=["node","inline","className","children"];function u(n){var e=n.children,r="string"===typeof e?e:e(),u=Object(i.useMemo)((function(){return function(n){for(var e=[],r=n.split("\n"),t=!1,o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},i=0;i<r.length;i++){var a=r[i];o(a)&&(t=!0),e.push(t?a:a.trim()),t&&o(r[i+1])&&(t=!1)}return e.join("\n")}(r)}),[r]);return Object(d.jsx)(a.a,{remarkPlugins:[c.a],children:u,linkTarget:"_blank",components:{code:function(n){n.node;var e=n.inline,r=n.className,i=n.children,a=Object(o.a)(n,f),c=/language-(\w+)/.exec(r||"");return!e&&c?Object(d.jsx)(s.a,Object(t.a)({children:String(i).replace(/\n$/,""),language:c[1],PreTag:"div"},a)):Object(d.jsx)("code",Object(t.a)(Object(t.a)({className:r},a),{},{children:i}))}}})}},262:function(n,e,r){"use strict";var t=r(0),o={restoreOnUnmount:!1};e.a="undefined"!==typeof document?function(n,e){void 0===e&&(e=o);var r=Object(t.useRef)(document.title);document.title!==n&&(document.title=n),Object(t.useEffect)((function(){return e&&e.restoreOnUnmount?function(){document.title=r.current}:void 0}),[])}:function(n){}},71:function(n,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return a}));var t=r(262),o=r(206),i=r(2);function a(){return Object(t.a)("Pikaso | Configuration"),Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{children:"## Configuration\n\nPikaso supports global configuration settings across all components. \nIt is possible to initialize the editor with predefined settings and later override them in each component.\n\n### API Reference\n**[interfaces/OptionalSettings.html](/api/interfaces/OptionalSettings.html)**\n\n### Default Settings\n```json\n{\n  disableCanvasContextMenu: true,\n  containerClassName: 'pikaso',\n  transformer: {\n    borderDash: [15, 10],\n    borderStroke: '#fff',\n    borderStrokeWidth: 3,\n    anchorSize: 15,\n    anchorColor: '#fff',\n    anchorStroke: '#fff',\n    anchorBorderWidth: 1,\n    anchorCornerRadius: 30\n  },\n  cropper: {\n    transformer: {\n      borderDash: [15, 10],\n      borderStroke: '#fff',\n      borderStrokeWidth: 3,\n      anchorSize: 15,\n      anchorColor: '#fff',\n      anchorStroke: '#fff',\n      anchorBorderWidth: 1,\n      anchorCornerRadius: 30\n    },\n    circular: false,\n    fixed: false,\n    keepRatio: true,\n    aspectRatio: 1,\n    minWidth: 100,\n    minHeight: 100,\n    marginRatio: 1.1,\n    overlay: {\n      color: '#262626',\n      opacity: 0.5\n    },\n    guides: {\n      show: true,\n      count: 3,\n      color: '#fff',\n      width: 1,\n      dash: [15, 10]\n    }\n  },\n  drawing: {\n    keyboard: {\n      cancelOnEscape: true\n    }\n  },\n  selection: {\n    interactive: true,\n    keyboard: {\n      enabled: true,\n      movingSpaces: 5,\n      map: {\n        delete: ['Backspace', 'Delete'],\n        moveLeft: ['ArrowLeft'],\n        moveRight: ['ArrowRight'],\n        moveUp: ['ArrowUp'],\n        moveDown: ['ArrowDown'],\n        deselect: ['Escape']\n      }\n    },\n    transformer: {\n      borderStroke: '#fff',\n      borderStrokeWidth: 3,\n      anchorSize: 15,\n      anchorColor: '#fff',\n      anchorStroke: '#fff',\n      anchorBorderWidth: 1,\n      anchorCornerRadius: 30\n      borderDash: [0, 0]\n    },\n    zone: {\n      fill: 'rgba(105, 105, 105, 0.7)',\n      stroke: '#dbdbdb'\n    }\n  },\n  history: {\n    keyboard: {\n      enabled: true\n    }\n  }\n}\n```\n\n### How to use\n```js\nimport Pikaso from 'pikaso'\n\nconst editor = new Pikaso({\n  container: document.getElementById('<YOUR_DIV_ID>'),\n  disableCanvasContextMenu: false,\n  containerClassName: 'foo',\n  selection: {\n    interactive: false,\n  },\n  // rest of settings\n})\n```\n\n### Overriding settings\n```js\nimport Pikaso from 'pikaso'\n\nconst editor = new Pikaso({\n  container: document.getElementById('<YOUR_DIV_ID>'),\n  transformer: {\n    borderStroke: 'green',\n    borderStrokeWidth: 1\n  }\n})\n\neditor.cropper.start({\n  transformer: {\n    borderStroke: 'yellow',\n    borderStrokeWidth: 2\n  }\n})\n```"})})}}}]);
//# sourceMappingURL=6.9b00a8cc.chunk.js.map