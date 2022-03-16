"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[4273,7408,1329,5488,6243],{56954:function(e,n,t){t.d(n,{n:function(){return c}});var i=t(1413),r=t(45987),o=t(64209),s=t(35834),a=t(80184),l=["children"];function c(e){var n=e.children,t=(0,r.Z)(e,l);return(0,a.jsx)(o.Z,(0,i.Z)((0,i.Z)({style:s.Z,showLineNumbers:!0,wrapLongLines:!0},t),{},{children:n}))}},78572:function(e,n,t){t.d(n,{U:function(){return h}});var i=t(1413),r=t(45987),o=t(72791),s=t(30035),a=t(18096),l=t(91523),c=t(56954),d=t(80184),u=["node","inline","className","children"];function h(e){var n=e.children,t="string"===typeof n?n:n(),h=(0,o.useMemo)((function(){return function(e){for(var n=[],t=e.split("\n"),i=!1,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.startsWith("```")||e.startsWith("~~~")},o=0;o<t.length;o++){var s=t[o];r(s)&&(i=!0),n.push(i?s:s.trim()),i&&r(t[o+1])&&(i=!1)}return n.join("\n")}(t)}),[t]);return(0,d.jsx)(s.D,{skipHtml:!0,remarkPlugins:[a.Z],children:h,components:{a:function(e){var n=e.href,t=e.children;return(null===n||void 0===n?void 0:n.startsWith("/api/"))||(null===n||void 0===n?void 0:n.startsWith("http"))?(0,d.jsx)("a",{href:n,target:"_blank",children:t}):(0,d.jsx)(l.rU,{to:n,children:t})},code:function(e){e.node;var n=e.inline,t=e.className,o=e.children,s=(0,r.Z)(e,u),a=/language-(\w+)/.exec(t||"");return!n&&a?(0,d.jsx)(c.n,(0,i.Z)({children:String(o).replace(/\n$/,""),language:a[1],PreTag:"div"},s)):(0,d.jsx)("code",(0,i.Z)((0,i.Z)({className:t},s),{},{children:o}))}}})}},74497:function(e,n,t){t.d(n,{Z:function(){return a}});var i=t(1413),r=t(29439),o=t(72791),s=t(83469);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=(0,o.useState)(null),a=(0,r.Z)(t,2),l=a[0],c=a[1],d=(0,o.useRef)(null);return(0,o.useEffect)((function(){var t=new s.Fb((0,i.Z)({container:d.current},e),n);c(t)}),[]),(0,o.useEffect)((function(){l&&window.addEventListener("resize",(function(){l.board.rescale()}))}),[l]),[d,l]}},46847:function(e,n,t){t.r(n),t.d(n,{EditorShape:function(){return c}});var i=t(1413),r=t(29439),o=t(72791),s=t(74497),a=t(80184);function l(e){var n=e.editorRef,t=e.onLoad,i=(0,s.Z)({selection:{transformer:{borderStroke:"#262626",anchorFill:"#262626"}}}),l=(0,r.Z)(i,2),c=l[0],d=l[1];return(0,o.useEffect)((function(){d&&t(d)}),[d]),(0,o.useImperativeHandle)(n,(function(){return{editor:d}})),(0,a.jsx)("div",{ref:c,style:{margin:"0 auto",background:"#CBC3E3",width:"100%",height:"300px"}})}var c=(0,o.forwardRef)((function(e,n){return(0,a.jsx)(l,(0,i.Z)({},e))}))},86243:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var i=t(20406),r=t(57408),o=t(80184),s={insert:"editor.shapes.rect.insert({\n  width: 150,\n  height: 150,\n  x: 100,\n  y: 100,\n  fill: 'purple'\n})"};function a(){var e;return(0,o.jsx)(i.ShapeModel,{type:"Ellipse",codes:s,insertFn:null===(e=r.ShapesList.find((function(e){return"Ellipse"===e.title})))||void 0===e?void 0:e.insert})}},5488:function(e,n,t){t.r(n),t.d(n,{AnimateCode:function(){return c},DeleteUndeleteDestoryCode:function(){return r},FilterCode:function(){return d},FlipCode:function(){return o},RotationCode:function(){return a},SelectionCode:function(){return s},ShowHideCode:function(){return i},SvgPath:function(){return u},UpdateCode:function(){return l}});var i="const shape = /* insert or get shape */\n\n// make shape hidden\nshape.hide()\n\n// make shape visible\nshape.show()\n\n// check shape visibility\nconst isVisible = shape.isVisible\n\n// check shape invisibility\nconst isVisible = shape.isInvisible",r="const shape = /* insert or get shape */\n\n// delete the shape\nshape.delete()\n\n// check is shape deleted\nconst isDeleted = shape.isDeleted\n\n// undelete the shape\nshape.undelete()\n\n// destroy node of the shape\nshape.destroy()",o="const shape = /* insert or get shape */\n\n// flip horizontally\nshape.flipX()\n\n// flip vertically\nshape.flipY()",s="const shape = /* insert or get shape */\n\n// select shape\nshape.select()\n\n// deselect shape\nshape.deselect()",a="const shape = /* insert or get shape */\n\n// rotate shape\nshape.rotate(<Theta>)",l="const shape = /* insert or get shape */\n\n// update shape\nshape.update({\n  // list of attributes\n})",c="const shape = /* insert or get shape */\n\n// animate shape\nshape.to({\n  duration: <seconds>,\n  onFinish: () => {},\n  onUpdate: () => {},\n  // list of attributes\n})",d="const shape = /* insert or get shape */\n\n// add filter\nshape.addFilter({\n  name: '<Name>',\n  options: {\n    // values\n  }\n})\n\n// remove filter\nshape.removeFilter('<Name>')",u="M106.583,167.873c-28.275,0-54.889-6.26-74.938-17.625C11.239,138.678,0,123.172,0,106.583s11.239-32.095,31.646-43.664\n\tc20.049-11.366,46.663-17.625,74.938-17.625c28.276,0,54.889,6.26,74.938,17.625c20.407,11.569,31.646,27.076,31.646,43.664\n\ts-11.238,32.095-31.646,43.664C161.473,161.614,134.859,167.873,106.583,167.873z M106.583,49.294C50.019,49.294,4,74.994,4,106.583\n\tc0,31.59,46.019,57.29,102.583,57.29s102.583-25.7,102.583-57.29C209.167,74.994,163.148,49.294,106.583,49.294z M106.584,152.017\n\tc-0.857,0-1.619-0.546-1.895-1.357c-1.904-5.609-8.217-20.886-14.479-24.175c-2.021-1.062-3.857-1.6-5.457-1.6\n\tc-2.834,0-4.435,1.683-5.604,2.911l-0.326,0.34c-1.648,1.688-4.735,5.793-4.766,5.834c-0.359,0.479-0.915,0.77-1.512,0.796\n\tc-0.599,0.031-1.177-0.217-1.576-0.663c-0.088-0.097-8.854-9.76-17.168-9.835l-0.137,0c-2.721,0-4.726,0.75-5.958,2.23\n\tc-2.114,2.539-1.581,6.52-1.367,7.68c0.81,4.398,4.182,10.027,4.216,10.083c0.44,0.73,0.369,1.658-0.176,2.313\n\tc-0.545,0.655-1.445,0.892-2.243,0.591c-1.285-0.485-31.527-12.151-35.551-36.035c-2.75-16.321,8.916-31.372,32.849-42.38\n\tc8.49-3.906,22.902-7.795,23.512-7.958c0.855-0.23,1.764,0.133,2.226,0.89c0.462,0.758,0.37,1.73-0.228,2.387\n\tc-0.463,0.513-11.284,12.715-2.284,22.52c2.735,2.98,6.157,4.555,9.895,4.555c7.319,0,13.888-5.828,14.655-10.842\n\tc1.396-9.113,1.578-21.362,1.58-21.485c0.013-0.902,0.627-1.685,1.501-1.91c0.876-0.226,1.79,0.164,2.237,0.948l4.979,8.75\n\tl3.035-0.061l3.115,0.061l4.979-8.75c0.446-0.783,1.361-1.171,2.236-0.948c0.874,0.225,1.489,1.007,1.502,1.91\n\tc0.002,0.123,0.184,12.372,1.579,21.485c0.769,5.014,7.338,10.842,14.656,10.842c3.739,0,7.161-1.575,9.896-4.555\n\tc9.035-9.842-1.817-22.007-2.283-22.52c-0.598-0.657-0.69-1.629-0.228-2.387c0.461-0.758,1.368-1.122,2.226-0.89\n\tc0.609,0.164,15.021,4.053,23.511,7.958c23.934,11.008,35.6,26.059,32.85,42.38c-4.025,23.884-34.267,35.55-35.552,36.035\n\tc-0.798,0.3-1.697,0.063-2.242-0.591s-0.616-1.583-0.177-2.313c0.034-0.056,3.409-5.699,4.217-10.084\n\tc0.213-1.16,0.745-5.141-1.368-7.68c-1.232-1.479-3.236-2.229-5.957-2.229l-0.136,0c-8.315,0.075-17.081,9.737-17.169,9.835\n\tc-0.399,0.444-0.969,0.692-1.576,0.663c-0.598-0.026-1.153-0.318-1.513-0.796c-0.03-0.042-3.119-4.148-4.766-5.834l-0.325-0.338\n\tc-1.169-1.229-2.77-2.913-5.604-2.913c-1.599,0-3.435,0.538-5.457,1.6c-6.269,3.293-12.577,18.567-14.479,24.174\n\tC108.202,151.471,107.441,152.017,106.584,152.017z M84.753,120.885c2.254,0,4.716,0.692,7.317,2.059\n\tc6.336,3.328,11.771,14.738,14.513,21.439c2.743-6.701,8.176-18.111,14.513-21.439c2.601-1.367,5.063-2.059,7.316-2.059\n\tc4.552,0,7.122,2.704,8.504,4.156l0.288,0.301c1.066,1.092,2.583,2.972,3.686,4.382c3.24-3.12,10.702-9.386,18.438-9.456l0.173,0\n\tc3.964,0,7.002,1.235,9.03,3.67c3.139,3.77,2.604,8.923,2.229,10.964c-0.379,2.059-1.195,4.272-2.045,6.198\n\tc8.579-4.322,25.225-14.637,27.92-30.635c3.104-18.423-14.914-30.877-30.576-38.081c-5-2.3-12.379-4.661-17.395-6.159\n\tc3.579,6.26,5.8,15.43-1.212,23.068c-3.513,3.827-7.954,5.85-12.843,5.85c-8.752,0-17.448-6.653-18.609-14.237\n\tc-0.753-4.914-1.161-10.578-1.38-14.936l-2.074,3.646c-0.363,0.637-1.05,1.051-1.778,1.01l-4.225-0.084l-4.145,0.084\n\tc-0.754,0.033-1.416-0.373-1.778-1.01l-2.074-3.646c-0.219,4.357-0.627,10.022-1.38,14.936c-1.162,7.584-9.857,14.237-18.609,14.237\n\tc-4.889,0-9.329-2.023-12.842-5.85c-7.012-7.639-4.791-16.808-1.211-23.068c-5.016,1.497-12.396,3.858-17.396,6.159\n\tc-15.662,7.204-33.68,19.659-30.576,38.081c2.696,15.998,19.341,26.313,27.92,30.635c-0.849-1.926-1.665-4.14-2.044-6.198\n\tc-0.376-2.041-0.912-7.194,2.227-10.963c2.028-2.436,5.067-3.671,9.032-3.671l0.173,0c7.736,0.07,15.198,6.336,18.438,9.456\n\tc1.103-1.41,2.619-3.29,3.686-4.383l0.29-0.302C77.633,123.588,80.204,120.885,84.753,120.885z"},57408:function(e,n,t){t.r(n),t.d(n,{ShapesList:function(){return x},default:function(){return g}});var i=t(64554),r=t(57621),o=t(39504),s=t(20890),a=t(72363),l=t(24518),c=t(72791),d=t(79271),u=t(91523),h=t(66509),p=t(78572),f=t(46847),m=t(5488),v=t(80184),x=[{title:"Circle",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(1393)]).then(t.bind(t,11393))})),insert:function(e){return e.shapes.circle.insert({radius:100,x:e.board.stage.width()/2,y:150,fillLinearGradientStartPoint:{x:-50,y:-50},fillLinearGradientEndPoint:{x:50,y:50},fillLinearGradientColorStops:[0,"tomato",1,"red"]})}},{title:"Rect",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(2496)]).then(t.bind(t,42496))})),insert:function(e){return e.shapes.rect.insert({width:150,height:150,x:e.board.stage.width()/2-75,y:100,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"purple",1,"yellow"]})}},{title:"Ellipse",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(6243)]).then(t.bind(t,86243))})),insert:function(e){return e.shapes.ellipse.insert({radiusX:120,radiusY:80,x:e.board.stage.width()/2,y:150,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"#262626",1,"olive"]})}},{title:"Triangle",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(7142)]).then(t.bind(t,87142))})),insert:function(e){return e.shapes.triangle.insert({radius:120,x:e.board.stage.width()/2,y:160,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"orange",1,"yellow"]})}},{title:"Polygon",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(2544)]).then(t.bind(t,22544))})),insert:function(e){return e.shapes.polygon.insert({radius:110,x:e.board.stage.width()/2,y:150,sides:5,fillLinearGradientStartPoint:{x:-150,y:-150},fillLinearGradientEndPoint:{x:150,y:150},fillLinearGradientColorStops:[0,"greenyellow",1,"olive"]})}},{title:"Line",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(7361)]).then(t.bind(t,77361))})),insert:function(e){e.shapes.line.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.line.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.line.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}},{title:"Arrow",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(5062)]).then(t.bind(t,35062))})),insert:function(e){e.shapes.arrow.insert({points:[50,50,300,50],stroke:"blue",strokeWidth:10}),e.shapes.arrow.insert({points:[50,130,300,130],stroke:"purple",strokeWidth:15,lineCap:"round",lineJoin:"round",dash:[29,20,.001,20]}),e.shapes.arrow.insert({points:[50,200,80,230,160,210,180,250],stroke:"tomato",strokeWidth:10,lineJoin:"round"})}},{title:"Text",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(4730)]).then(t.bind(t,54730))})),insert:function(e){e.shapes.text.insert({text:"Pikaso is Great!!!",x:40,y:100,fontSize:35,fill:"purple"})}},{title:"Label",url:"/core/label",insert:function(e){e.shapes.label.insert({container:{x:40,y:100},tag:{fill:"#262626"},text:{text:"Pikaso Rocks",fill:"#00ff00",fontSize:40}})}},{title:"Image",url:"/core/image",insert:function(e){e.shapes.image.insert("/logo.svg",{x:120,y:70})}},{title:"Svg",Component:(0,c.lazy)((function(){return Promise.all([t.e(4575),t.e(6633),t.e(406),t.e(7265)]).then(t.bind(t,57265))})),insert:function(e){e.shapes.svg.insert({data:m.SvgPath,fill:"#262626",x:50,y:0,scaleX:1.25,scaleY:1.25})}}];function g(){(0,h.Z)("Pikaso | Core Components | Shapes");var e=(0,d.UO)().shape;return(0,v.jsxs)("div",{children:[!e&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.U,{children:function(){return"\n          # [Shapes](/api/classes/ShapeModel.html)\n          Pikaso comes with a few built-in shapes but it's possible to extend [Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) to develop custom shapes.\n\n          [Background](/core/background), [Image](/core/image) and [Text](/core/text) are also considered as [Shape Model](/api/classes/ShapeModel.html), inheriting all of its methods and properties.\n        "}}),(0,v.jsx)(i.Z,{display:"flex",flexWrap:"wrap",children:x.map((function(e,n){return(0,v.jsxs)(r.Z,{sx:{width:"32%",mb:1,mx:.5},children:[(0,v.jsx)(f.EditorShape,{onLoad:e.insert}),(0,v.jsx)(o.Z,{children:(0,v.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.title})}),(0,v.jsx)(a.Z,{children:(0,v.jsx)(l.Z,{size:"small",color:"primary",variant:"contained",component:u.rU,to:e.url||"/core/shapes/".concat(e.title.toLowerCase()),children:"Learn more"})})]},n)}))})]}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(d.rs,{children:x.filter((function(e){return!!e.Component})).map((function(e){var n=e.title,t=e.Component;return(0,v.jsx)(d.AW,{exact:!0,path:"/core/shapes/".concat(n.toLowerCase()),component:t},n)}))})})]})}},66509:function(e,n,t){var i=t(72791),r={restoreOnUnmount:!1};n.Z="undefined"!==typeof document?function(e,n){void 0===n&&(n=r);var t=(0,i.useRef)(document.title);document.title!==e&&(document.title=e),(0,i.useEffect)((function(){return n&&n.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(e){}}}]);
//# sourceMappingURL=4273.2bba59c0.chunk.js.map