(this["webpackJsonppikaso-documentation"]=this["webpackJsonppikaso-documentation"]||[]).push([[59],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"ShapeModel",(function(){return L}));var i=n(286),c=n(288),r=n(861),a=n(862),o=n(243),l=n(863),d=n(287),s=n(271),j=n(10),u=n(3),h=n(1),b=n(0),x=(n(7),n(16)),v=n(18),O=n(229),p=n(127),f=n(8),m=n(9),g=n(2),y=["component","direction","spacing","divider","children"];function k(e,t){var n=b.Children.toArray(e).filter(Boolean);return n.reduce((function(e,i,c){return e.push(i),c<n.length-1&&e.push(b.cloneElement(t,{key:"separator-".concat(c)})),e}),[])}var S=Object(f.a)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,i=Object(h.a)({display:"flex"},Object(x.b)({theme:n},t.direction,(function(e){return{flexDirection:e}})));if(t.spacing){var c=Object(v.a)(n),r=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),a=Object(x.d)({values:t.direction,base:r}),o=Object(x.d)({values:t.spacing,base:r});i=Object(p.a)(i,Object(x.b)({theme:n},o,(function(e,n){return{"& > :not(style) + :not(style)":Object(j.a)({margin:0},"margin".concat((i=n?a[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),Object(v.d)(c,e))};var i})))}return i})),C=b.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiStack"}),i=Object(O.a)(n),c=i.component,r=void 0===c?"div":c,a=i.direction,o=void 0===a?"column":a,l=i.spacing,d=void 0===l?0:l,s=i.divider,j=i.children,b=Object(u.a)(i,y),x={direction:o,spacing:d};return Object(g.jsx)(S,Object(h.a)({as:r,ownerState:x,ref:t},b,{children:s?k(j,s):j}))})),w=n(242),M=n(313),R=n(266),F=n.n(R),D=n(251),B=n(252),A=n(254),E=n(131),I=n(130);function L(e){var t=e.type,n=e.codes,j=e.insertFn,u=Object(b.useRef)(null),h=Object(b.useRef)(null),x=Object(b.useRef)(null),v=Object(b.useRef)(null),O=Object(b.useRef)(null),p=Object(b.useRef)(null),f=Object(b.useRef)(null),m=Object(b.useRef)(null);return Object(g.jsxs)("div",{children:[Object(g.jsx)(B.a,{children:function(){return"\n        # [".concat(t," Model](/api/classes/").concat(t,"Model.html)\n      ")}}),Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(B.a,{children:function(){return"\n                ## [Insert](/api/classes/".concat(t,"Drawer.html#insert)\n\n                Creates a new shape and insert that into the [Board](/api/classes/Board.html)\n              ")}}),Object(g.jsx)(D.a,{language:"typescript",children:n.insert})]})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Show & Hide"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{editorRef:u,onLoad:j}),Object(g.jsx)(d.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n=null===(e=u.current)||void 0===e||null===(t=e.editor)||void 0===t?void 0:t.board.shapes.find((function(){return!0}));(null===n||void 0===n?void 0:n.isVisible)?(null===n||void 0===n||n.deselect(),n.hide()):(null===n||void 0===n||n.select(),null===n||void 0===n||n.show())},children:"Toggle Show/Hide"})}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Show](/api/classes/".concat(t,"Model.html#show) and [Hide](/api/classes/").concat(t,"Model.html#hide)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.ShowHideCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Delete & Undelete"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:h}),Object(g.jsxs)(d.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===(e=h.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));(null===i||void 0===i?void 0:i.isDeleted)?i.undelete():null===i||void 0===i||i.delete()},children:"Delete / Undelete"}),Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===(e=h.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.deselect(),null===i||void 0===i||i.destroy()},children:"Destroy"})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Delete](/api/classes/".concat(t,"Model.html#delete) and [Undelete](/api/classes/").concat(t,"Model.html#undelete)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.DeleteUndeleteDestoryCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Flip"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:x}),Object(g.jsxs)(d.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===x||void 0===x||null===(e=x.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.flipX()},children:"Flip X (Horizontally)"}),Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===x||void 0===x||null===(e=x.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.flipY()},children:"Flip Y (Vertically)"})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[flipX](/api/classes/".concat(t,"Model.html#flipX) and [flipY](/api/classes/").concat(t,"Model.html#flipY)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.FlipCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Select & Deselect"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:v}),Object(g.jsxs)(d.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===v||void 0===v||null===(e=v.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.select()},children:"Select"}),Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===v||void 0===v||null===(e=v.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.deselect()},children:"Deselect"})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Select](/api/classes/".concat(t,"Model.html#select) and [Deselect](/api/classes/").concat(t,"Model.html#deselect)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.SelectionCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Rotate"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:O}),Object(g.jsx)(d.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsxs)(C,{direction:"row",spacing:1,alignItems:"center",width:"300px",children:[Object(g.jsx)(w.a,{mr:.5,children:"-360"}),Object(g.jsx)(M.b,{min:-360,max:360,defaultValue:0,onChange:function(e,t){var n,i,c,r=null===O||void 0===O||null===(n=O.current)||void 0===n||null===(i=n.editor)||void 0===i||null===(c=i.board)||void 0===c?void 0:c.shapes.find((function(){return!0}));null===r||void 0===r||r.rotate(t)}}),Object(g.jsx)(w.a,{ml:.5,children:"+360"})]})}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Rotate](/api/classes/".concat(t,"Model.html#rotate)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.RotationCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Update"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:p}),Object(g.jsx)(d.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===p||void 0===p||null===(e=p.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.update({x:300*Math.random()+100,y:50*Math.random()+100,radius:70*Math.random()+30,fill:Object(A.a)(),stroke:Object(A.a)()})},children:"Update Attributes"})}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Update](/api/classes/".concat(t,"Model.html#update)")}})}),Object(g.jsx)(w.a,{my:2,children:Object(g.jsx)("a",{href:"https://konvajs.org/api/Konva.Shape.html",target:"_blank",children:"Attributes Documentation"})}),Object(g.jsx)(D.a,{language:"typescript",children:I.UpdateCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Animate"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:f}),Object(g.jsx)(d.a,{sx:{justifyContent:"flex-end"},children:Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===f||void 0===f||null===(e=f.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));try{null===i||void 0===i||i.to({duration:.5,x:300*Math.random()+100,y:50*Math.random()+100,radius:70*Math.random()+30,fill:Object(A.a)(),stroke:Object(A.a)()})}catch(c){console.log(c)}},children:"Animate Attributes"})}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[Animate](/api/classes/".concat(t,"Model.html#to)")}})}),Object(g.jsx)(w.a,{my:2,children:Object(g.jsx)("a",{href:"https://konvajs.org/api/Konva.Shape.html",target:"_blank",children:"Attributes Documentation"})}),Object(g.jsx)(D.a,{language:"typescript",children:I.AnimateCode})]})]})})]}),Object(g.jsxs)(r.a,{children:[Object(g.jsx)(a.a,{expandIcon:Object(g.jsx)(F.a,{}),children:Object(g.jsx)(o.a,{variant:"h6",sx:{width:"30%",flexShrink:0},children:"Filters"})}),Object(g.jsx)(l.a,{children:Object(g.jsxs)(i.a,{sx:{mb:4},children:[Object(g.jsx)(E.EditorShape,{onLoad:j,editorRef:m}),Object(g.jsxs)(d.a,{sx:{justifyContent:"flex-end"},children:[Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===m||void 0===m||null===(e=m.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.addFilter({name:"Sepia"})},children:"Add Filter"}),Object(g.jsx)(s.a,{color:"primary",variant:"contained",onClick:function(){var e,t,n,i=null===m||void 0===m||null===(e=m.current)||void 0===e||null===(t=e.editor)||void 0===t||null===(n=t.board)||void 0===n?void 0:n.shapes.find((function(){return!0}));null===i||void 0===i||i.removeFilter({name:"Sepia"})},children:"Remove Filter"})]}),Object(g.jsxs)(c.a,{children:[Object(g.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"div",children:Object(g.jsx)(B.a,{children:function(){return"[addFilter](/api/classes/".concat(t,"Model.html#addFilter) and [removeFilter](/api/classes/").concat(t,"Model.html#removeFilter)")}})}),Object(g.jsx)(D.a,{language:"typescript",children:I.FilterCode})]})]})})]})]})}},137:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));var i=n(132),c=n(2),r={insert:"editor.shapes.arrow.insert({\n  points: [50, 50, 300, 50],\n  stroke: 'blue',\n  strokeWidth: 10\n})"};function a(){return Object(c.jsx)(i.ShapeModel,{type:"Arrow",codes:r,insertFn:function(e){return e.shapes.arrow.insert({points:[250,150,600,150],stroke:"tomato",strokeWidth:10})}})}},254:function(e,t,n){"use strict";function i(){var e=Math.round,t=Math.random;return"rgb("+e(255*t())+","+e(255*t())+","+e(255*t())+")"}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=59.45e43de2.chunk.js.map