(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[63,54],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"ShowHideCode",(function(){return i})),t.d(n,"DeleteUndeleteDestoryCode",(function(){return a})),t.d(n,"FlipCode",(function(){return c})),t.d(n,"SelectionCode",(function(){return r})),t.d(n,"RotationCode",(function(){return o})),t.d(n,"UpdateCode",(function(){return l})),t.d(n,"AnimateCode",(function(){return s})),t.d(n,"FilterCode",(function(){return d}));var i="const shape = /* insert or get shape */\n\n// make shape hidden\nshape.hide()\n\n// make shape visible\nshape.show()\n\n// check shape visibility\nconst isVisible = shape.isVisible\n\n// check shape invisibility\nconst isVisible = shape.isInvisible",a="const shape = /* insert or get shape */\n\n// delete the shape\nshape.delete()\n\n// check is shape deleted\nconst isDeleted = shape.isDeleted\n\n// undelete the shape\nshape.undelete()\n\n// destroy node of the shape\nshape.destroy()",c="const shape = /* insert or get shape */\n\n// flip horizontally\nshape.flipX()\n\n// flip vertically\nshape.flipY()",r="const shape = /* insert or get shape */\n\n// select shape\nshape.select()\n\n// deselect shape\nshape.deselect()",o="const shape = /* insert or get shape */\n\n// rotate shape\nshape.rotate(<Theta>)",l="const shape = /* insert or get shape */\n\n// update shape\nshape.update({\n  // list of attributes\n})",s="const shape = /* insert or get shape */\n\n// animate shape\nshape.to({\n  duration: <seconds>,\n  onFinish: () => {},\n  onUpdate: () => {},\n  // list of attributes\n})",d="const shape = /* insert or get shape */\n\n// add filter\nshape.addFilter({\n  name: '<Name>',\n  options: {\n    // values\n  }\n})\n\n// remove filter\nshape.removeFilter('<Name>')"},127:function(e,n,t){"use strict";t.r(n),t.d(n,"ShapeModel",(function(){return U}));var i=t(281),a=t(283),c=t(851),r=t(852),o=t(232),l=t(853),s=t(282),d=t(267),j=t(10),h=t(3),u=t(1),b=t(0),p=(t(7),t(16)),x=t(18),v=t(217),O=t(122),f=t(8),m=t(9),g=t(2),y=["component","direction","spacing","divider","children"];function k(e,n){var t=b.Children.toArray(e).filter(Boolean);return t.reduce((function(e,i,a){return e.push(i),a<t.length-1&&e.push(b.cloneElement(n,{key:"separator-".concat(a)})),e}),[])}var C=Object(f.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,i=Object(u.a)({display:"flex"},Object(p.b)({theme:t},n.direction,(function(e){return{flexDirection:e}})));if(n.spacing){var a=Object(x.a)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),r=Object(p.d)({values:n.direction,base:c}),o=Object(p.d)({values:n.spacing,base:c});i=Object(O.a)(i,Object(p.b)({theme:t},o,(function(e,t){return{"& > :not(style) + :not(style)":Object(j.a)({margin:0},"margin".concat((i=t?r[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),Object(x.d)(a,e))};var i})))}return i})),S=b.forwardRef((function(e,n){var t=Object(m.a)({props:e,name:"MuiStack"}),i=Object(v.a)(t),a=i.component,c=void 0===a?"div":a,r=i.direction,o=void 0===r?"column":r,l=i.spacing,s=void 0===l?0:l,d=i.divider,j=i.children,b=Object(h.a)(i,y),p={direction:o,spacing:s};return Object(g.jsx)(C,Object(u.a)({as:c,ownerState:p,ref:n},b,{children:d?k(j,d):j}))})),w=t(231),M=t(850),R=t(256),F=t.n(R),D=t(239),B=t(240),A=t(243),I=t(125),L=t(126);function U(e){var n=e.type,t=e.codes,j=e.insertFn,h=Object(b.useRef)(null),u=Object(b.useRef)(null),p=Object(b.useRef)(null),x=Object(b.useRef)(null),v=Object(b.useRef)(null),O=Object(b.useRef)(null),f=Object(b.useRef)(null),m=Object(b.useRef)(null);return Object(g.jsxs)("div",{children:[Object(g.jsx)(B.a,{children:function(){return"\n        # [".concat(n," Model](/api/classes/").concat(n,"Model.html)\n      ")}}),Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(B.a,{children:function(){return"\n                ## [Insert](/api/classes/".concat(n,"Drawer.html#insert)\n\n                Creates a new shape and insert that into the [Board](/api/classes/Board.html)\n              ")}}),Object(g.jsx)(D.a,{language:"typescript",children:t.insert})]})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Show & Hide"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{editorRef:h,onLoad:j}),Object(g.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t=null===(e=h.current)||void 0===e||null===(n=e.editor)||void 0===n?void 0:n.board.shapes.find((function(){return!0}));(null===t||void 0===t?void 0:t.isVisible)?(null===t||void 0===t||t.deselect(),t.hide()):(null===t||void 0===t||t.select(),null===t||void 0===t||t.show())},children:"Toggle Show/Hide"})}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Show](/api/classes/".concat(n,"Model.html#show) and [Hide](/api/classes/").concat(n,"Model.html#hide)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.ShowHideCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Delete & Undelete"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:u}),Object(g.jsxs)(s.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===(e=u.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));(null===i||void 0===i?void 0:i.isDeleted)?i.undelete():null===i||void 0===i||i.delete()},children:"Delete / Undelete"}),Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===(e=u.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.deselect(),null===i||void 0===i||i.destroy()},children:"Destroy"})]}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Delete](/api/classes/".concat(n,"Model.html#delete) and [Undelete](/api/classes/").concat(n,"Model.html#undelete)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.DeleteUndeleteDestoryCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Flip"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:p}),Object(g.jsxs)(s.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===p||void 0===p||null===(e=p.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.flipX()},children:"Flip X (Horizontally)"}),Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===p||void 0===p||null===(e=p.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.flipY()},children:"Flip Y (Vertically)"})]}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[flipX](/api/classes/".concat(n,"Model.html#flipX) and [flipY](/api/classes/").concat(n,"Model.html#flipY)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.FlipCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Select & Deselect"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:x}),Object(g.jsxs)(s.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===x||void 0===x||null===(e=x.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.select()},children:"Select"}),Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===x||void 0===x||null===(e=x.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.deselect()},children:"Deselect"})]}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Select](/api/classes/".concat(n,"Model.html#select) and [Deselect](/api/classes/").concat(n,"Model.html#deselect)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.SelectionCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Rotate"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:v}),Object(g.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsxs)(S,{direction:"row",spacing:1,alignItems:"center",width:"300px",children:[Object(g.jsx)(w.a,{mr:.5,children:"-360"}),Object(g.jsx)(M.b,{min:-360,max:360,defaultValue:0,onChange:function(e,n){var t,i,a,c=null===v||void 0===v||null===(t=v.current)||void 0===t||null===(i=t.editor)||void 0===i||null===(a=i.board)||void 0===a?void 0:a.shapes.find((function(){return!0}));null===c||void 0===c||c.rotate(n)}}),Object(g.jsx)(w.a,{ml:.5,children:"+360"})]})}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Rotate](/api/classes/".concat(n,"Model.html#rotate)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.RotationCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Update"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:O}),Object(g.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===O||void 0===O||null===(e=O.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.update({x:300*Math.random()+100,y:50*Math.random()+100,radius:70*Math.random()+30,fill:Object(A.a)(),stroke:Object(A.a)()})},children:"Update Attributes"})}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Update](/api/classes/".concat(n,"Model.html#update)")}})}),Object(g.jsx)(w.a,{my:2,children:Object(g.jsx)("a",{href:"https://konvajs.org/api/Konva.Shape.html",target:"_blank",children:"Attributes Documentation"})}),Object(g.jsx)(D.a,{language:"typescript",children:L.UpdateCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Animate"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:f}),Object(g.jsx)(s.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===f||void 0===f||null===(e=f.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));try{null===i||void 0===i||i.to({duration:.5,x:300*Math.random()+100,y:50*Math.random()+100,radius:70*Math.random()+30,fill:Object(A.a)(),stroke:Object(A.a)()})}catch(a){console.log(a)}},children:"Animate Attributes"})}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Animate](/api/classes/".concat(n,"Model.html#to)")}})}),Object(g.jsx)(w.a,{my:2,children:Object(g.jsx)("a",{href:"https://konvajs.org/api/Konva.Shape.html",target:"_blank",children:"Attributes Documentation"})}),Object(g.jsx)(D.a,{language:"typescript",children:L.AnimateCode})]})]})})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(r.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Filters"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(I.EditorShape,{onLoad:j,editorRef:m}),Object(g.jsxs)(s.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===m||void 0===m||null===(e=m.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.addFilter({name:"Sepia"})},children:"Add Filter"}),Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){var e,n,t,i=null===m||void 0===m||null===(e=m.current)||void 0===e||null===(n=e.editor)||void 0===n||null===(t=n.board)||void 0===t?void 0:t.shapes.find((function(){return!0}));null===i||void 0===i||i.removeFilter("Sepia")},children:"Remove Filter"})]}),Object(g.jsxs)(a.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[addFilter](/api/classes/".concat(n,"Model.html#addFilter) and [removeFilter](/api/classes/").concat(n,"Model.html#removeFilter)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:L.FilterCode})]})]})})]})]})}},136:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var i=t(127),a=t(61),c=t(2),r={insert:"editor.shapes.rect.insert({\n  width: 150,\n  height: 150,\n  x: 100,\n  y: 150,\n  fill: 'tomato'\n})"};function o(){var e;return Object(c.jsx)(i.ShapeModel,{type:"Rect",codes:r,insertFn:null===(e=a.ShapesList.find((function(e){return"Rect"===e.title})))||void 0===e?void 0:e.insert})}},243:function(e,n,t){"use strict";function i(){var e=Math.round,n=Math.random;return"rgb("+e(255*n())+","+e(255*n())+","+e(255*n())+")"}t.d(n,"a",(function(){return i}))}}]);
//# sourceMappingURL=63.9702f89c.chunk.js.map