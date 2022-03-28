"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[3295],{56954:function(n,e,t){t.d(e,{n:function(){return u}});var i=t(1413),o=t(45987),r=t(64209),s=t(35834),a=t(80184),c=["children"];function u(n){var e=n.children,t=(0,o.Z)(n,c);return(0,a.jsx)(r.Z,(0,i.Z)((0,i.Z)({style:s.Z,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:e}))}},78572:function(n,e,t){t.d(e,{U:function(){return d}});var i=t(1413),o=t(45987),r=t(72791),s=t(30035),a=t(18096),c=t(91523),u=t(56954),l=t(80184),f=["node","inline","className","children"];function d(n){var e=n.children,t="string"===typeof e?e:e(),d=(0,r.useMemo)((function(){return function(n){for(var e=[],t=n.split("\n"),i=!1,o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.startsWith("```")||n.startsWith("~~~")},r=0;r<t.length;r++){var s=t[r];o(s)&&(i=!0),e.push(i?s:s.trim()),i&&o(t[r+1])&&(i=!1)}return e.join("\n")}(t)}),[t]);return(0,l.jsx)(s.D,{skipHtml:!0,remarkPlugins:[a.Z],children:d,components:{a:function(n){var e=n.href,t=n.children;return(null===e||void 0===e?void 0:e.startsWith("/api/"))||(null===e||void 0===e?void 0:e.startsWith("http"))?(0,l.jsx)("a",{href:e,target:"_blank",children:t}):(0,l.jsx)(c.rU,{to:e,children:t})},code:function(n){n.node;var e=n.inline,t=n.className,r=n.children,s=(0,o.Z)(n,f),a=/language-(\w+)/.exec(t||"");return!e&&a?(0,l.jsx)(u.n,(0,i.Z)({children:String(r).replace(/\n$/,""),language:a[1],PreTag:"div"},s)):(0,l.jsx)("code",(0,i.Z)((0,i.Z)({className:t},s),{},{children:r}))}}})}},43295:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var i=t(66509),o=t(78572),r=t(80184);function s(){return(0,i.Z)("Pikaso | Usage"),(0,r.jsx)("div",{children:(0,r.jsx)(o.U,{children:"## How to use\n\n```js\nimport Pikaso from 'pikaso'\n\nconst editor = new Pikaso({\n  container: document.getElementById('<YOUR_DIV_ID>')\n})\n```\n\n### React\n\nUsing Pikaso in React is easy with the official hook\n\nhttps://github.com/pikasojs/pikaso-react-hook   \n\n---\n\nAlternatively, you could write your own React code.\n\nTypeScript Example:\n\n```tsx\nimport { useRef, useState, useEffect, RefObject } from 'react'\n\nimport Pikaso, { Settings } from 'pikaso'\n\nexport default function usePikaso(\n  options: Partial<Settings> = {}\n): [RefObject<HTMLDivElement>, Pikaso | null] {\n  const [instance, setInstance] = useState<Nullable<Pikaso>>(null)\n  const ref = useRef<HTMLDivElement>(null)\n\n  useEffect(() => {\n    const editor = new Pikaso({\n      container: ref.current as HTMLDivElement,\n      ...options\n    })\n\n    setInstance(editor)\n  }, [])\n\n  return [ref, instance]\n}\n```\n\nJavaScript Example:\n```jsx\nimport { useRef, useState, useEffect, RefObject } from 'react'\n\nimport Pikaso from 'pikaso'\n\nexport default function usePikaso(\n  options = {}\n) {\n  const [instance, setInstance] = useState(null)\n  const ref = useRef(null)\n\n  useEffect(() => {\n    const editor = new Pikaso({\n      container: ref.current,\n      ...options\n    })\n\n    setInstance(editor)\n  }, [])\n\n  return [ref, instance]\n}\n```\n\n### Vue\n\n[Pikaso Vue Example](https://codesandbox.io/s/vue3-example-o3cig)"})})}},66509:function(n,e,t){var i=t(72791),o={restoreOnUnmount:!1};e.Z="undefined"!==typeof document?function(n,e){void 0===e&&(e=o);var t=(0,i.useRef)(document.title);document.title!==n&&(document.title=n),(0,i.useEffect)((function(){return e&&e.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(n){}}}]);
//# sourceMappingURL=3295.99e4bdab.chunk.js.map