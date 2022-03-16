"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[3980,5703],{90101:function(r,e,n){n.d(e,{m:function(){return s}});var i=n(29439),o=n(72791),t=n(24518),a=n(15473),l=n(80184);function s(r){var e=r.buttonRenderer,n=r.children,s=(0,o.useState)(null),c=(0,i.Z)(s,2),u=c[0],d=c[1],f=function(){d(null)},x=Boolean(u),h=x?"base-popover":void 0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{disableRipple:!0,"aria-describedby":h,style:{background:"none",cursor:"pointer"},onClick:function(r){d(r.currentTarget)},children:e({id:h,isOpen:x})}),(0,l.jsx)(a.ZP,{id:h,open:x,anchorEl:u,onClose:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:"function"===typeof n?n({close:f}):n})]})}},56954:function(r,e,n){n.d(e,{n:function(){return c}});var i=n(1413),o=n(45987),t=n(64209),a=n(35834),l=n(80184),s=["children"];function c(r){var e=r.children,n=(0,o.Z)(r,s);return(0,l.jsx)(t.Z,(0,i.Z)((0,i.Z)({style:a.Z,showLineNumbers:!0,wrapLongLines:!0},n),{},{children:e}))}},4401:function(r,e,n){n.d(e,{z:function(){return u}});var i=n(29439),o=n(72791),t=n(81918),a=n(93044),l=n(34257),s=n(90101),c=n(80184);function u(r){var e=r.title,n=r.defaultColor,u=r.onChange,d=(0,o.useState)(n),f=(0,i.Z)(d,2),x=f[0],h=f[1];return(0,c.jsx)(s.m,{buttonRenderer:function(r){var n=r.id,i=r.isOpen;return(0,c.jsx)(t.Z,{"aria-describedby":n,size:"medium",avatar:(0,c.jsx)(a.Z,{sx:{bgcolor:x,borderColor:"primary.main"},children:"\xa0"}),label:(0,c.jsx)("strong",{children:e}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:i?"primary.main":"info",color:i?"primary.main":"info"}})},children:(0,c.jsx)(l.xS,{color:x,presetColors:[],onSwatchHover:function(r){h(r.hex),u(r.hex)},onChange:function(r){h(r.hex),u(r.hex)}})})}},84782:function(r,e,n){n.d(e,{U:function(){return p}});var i=n(29439),o=n(1413),t=n(45987),a=n(72791),l=n(46633),s=n(81918),c=n(93044),u=n(64554),d=n(106),f=n(90101),x=n(80184),h=["children"],m=(0,d.Z)(l.ZP)((function(r){var e=r.theme;return{color:"#3a8589",height:3,padding:"13px 0","& .MuiSlider-thumb":{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor","&:hover":{boxShadow:"0 0 0 8px rgba(58, 133, 137, 0.16)"},"& .airbnb-bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},"& .MuiSlider-track":{height:3},"& .MuiSlider-rail":{color:"dark"===e.palette.mode?"#bfbfbf":"#d8d8d8",opacity:"dark"===e.palette.mode?void 0:1,height:3}}}));function Z(r){var e=r.children,n=(0,t.Z)(r,h);return(0,x.jsxs)(l.gs,(0,o.Z)((0,o.Z)({},n),{},{children:[e,(0,x.jsx)("span",{className:"airbnb-bar"}),(0,x.jsx)("span",{className:"airbnb-bar"}),(0,x.jsx)("span",{className:"airbnb-bar"})]}))}function p(r){var e=r.title,n=r.defaultValue,t=r.SliderProps,l=r.valueLabelFormat,d=void 0===l?function(r){return r}:l,h=r.onChange,p=(0,a.useState)(n),g=(0,i.Z)(p,2),v=g[0],j=g[1];return(0,x.jsx)(f.m,{buttonRenderer:function(r){var n=r.id,i=r.isOpen;return(0,x.jsx)(s.Z,{"aria-describedby":n,size:"medium",avatar:(0,x.jsx)(c.Z,{sx:{borderColor:"primary.main"},children:"function"===typeof d?d(v):null!==v&&void 0!==v?v:""}),label:(0,x.jsx)("strong",{children:e}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:i?"primary.main":"info",color:i?"primary.main":"info"}})},children:(0,x.jsx)(u.Z,{px:4,pt:5,pb:2,width:"300px",children:(0,x.jsx)(m,(0,o.Z)((0,o.Z)({valueLabelDisplay:"on",components:{Thumb:Z},valueLabelFormat:d},t),{},{value:v,onChange:function(r,e){j(e),h(e)}}))})})}},74497:function(r,e,n){n.d(e,{Z:function(){return l}});var i=n(1413),o=n(29439),t=n(72791),a=n(83469);function l(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=(0,t.useState)(null),l=(0,o.Z)(n,2),s=l[0],c=l[1],u=(0,t.useRef)(null);return(0,t.useEffect)((function(){var n=new a.Fb((0,i.Z)({container:u.current},r),e);c(n)}),[]),(0,t.useEffect)((function(){s&&window.addEventListener("resize",(function(){s.board.rescale()}))}),[s]),[u,s]}},85703:function(r,e,n){n.r(e),n.d(e,{CropperType:function(){return c}});var i=n(81918),o=n(64554),t=n(24518),a=n(90101),l=n(80184),s=[{fixed:!1,circular:!1},{fixed:!1,circular:!0},{fixed:!0,circular:!1},{fixed:!0,circular:!0}];function c(r){var e=r.config,n=r.onChange;return(0,l.jsx)(a.m,{buttonRenderer:function(r){var n=r.id,o=r.isOpen;return(0,l.jsx)(i.Z,{"aria-describedby":n,size:"medium",label:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("strong",{children:e.fixed?"Fixed":"Flexible"})," - ",(0,l.jsx)("strong",{children:e.circular?"Circular":"Rectangular"})]}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:o?"primary.main":"info",color:o?"primary.main":"info"}})},children:function(r){var i=r.close;return(0,l.jsx)(o.Z,{sx:{px:2,py:2,maxWidth:"450px"},children:s.map((function(r,o){return(0,l.jsxs)(t.Z,{variant:r.fixed===e.fixed&&r.circular===e.circular?"contained":"outlined",size:"small",sx:{mr:1,mb:1,width:"200px"},onClick:function(){i(),n({fixed:r.fixed,circular:r.circular})},children:[r.fixed?"Fixed":"Flexible"," &"," ",r.circular?"Circular":"Rectangular"]},o)}))})}})}},63980:function(r,e,n){n.r(e),n.d(e,{Playground:function(){return F}});var i=n(15861),o=n(1413),t=n(29439),a=n(87757),l=n.n(a),s=n(72791),c=n(86493),u=n(96884),d=n(83469),f=n(41473),x=n(55818),h=n(20890),m=n(3721),Z=n(64554),p=n(85523),g=n(79174),v=n(81918),j=n(50052),b=n(47924),C=n(81131),y=n(74497),S=n(56954),k=n(4401),w=n(84782),R=n(90101),z=n(85703),L=n(80184);function F(){var r,e,n,a,F,O,U,V,W,D,I=(0,y.Z)(),N=(0,t.Z)(I,2),A=N[0],M=N[1],E=(0,s.useState)({transformer:d.Dg,circular:!1,fixed:!1,keepRatio:!0,aspectRatio:1,minWidth:100,minHeight:100,marginRatio:1.1,overlay:{color:"#262626",opacity:.5},guides:{show:!0,count:3,color:"#eee",width:2,dash:[15,10,15]}}),G=(0,t.Z)(E,2),H=G[0],T=G[1],B=(0,s.useState)(H),_=(0,t.Z)(B,2),q=_[0],J=_[1],K=(0,c.Z)((function(){J(H)}),200,[H]),Y=((0,t.Z)(K,1),function(r){T((function(e){return(0,o.Z)((0,o.Z)({},e),r)}))});(0,u.Z)((function(){null===M||void 0===M||M.cropper.stop(),null===M||void 0===M||M.cropper.start(H)}),[q]),(0,s.useEffect)((function(){var r=function(){var r=(0,i.Z)(l().mark((function r(){return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!M){r.next=4;break}return r.next=3,M.loadFromUrl("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80");case 3:M.cropper.start(H);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[M]);var Q="editor.cropper.start(".concat(JSON.stringify(H,null,2),")");return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{ref:A,style:{margin:"0 auto",width:"600px",height:"400px"}}),(0,L.jsxs)(f.Z,{children:[(0,L.jsx)(x.Z,{expandIcon:(0,L.jsx)(C.Z,{}),children:(0,L.jsx)(h.Z,{variant:"h6",children:"General Settings"})}),(0,L.jsx)(m.Z,{children:(0,L.jsxs)(Z.Z,{display:"flex",alignItems:"center",mb:2,children:[(0,L.jsx)(z.CropperType,{config:H,onChange:Y}),(0,L.jsx)(P,{}),(0,L.jsx)(p.Z,{control:(0,L.jsx)(g.Z,{checked:H.keepRatio,onChange:function(r,e){Y({keepRatio:e})}}),label:"Keep Ratio"}),(0,L.jsx)(P,{}),(0,L.jsx)(w.U,{title:"Margin Ratio",defaultValue:H.marginRatio,SliderProps:{min:0,max:5},onChange:function(r){T((0,o.Z)((0,o.Z)({},H),{},{marginRatio:r}))}}),(0,L.jsx)(P,{}),!1===H.circular&&(0,L.jsx)(w.U,{title:"Aspect Ratio",defaultValue:H.aspectRatio,valueLabelFormat:function(r){return r<0?"0.".concat(-r):r.toString()},SliderProps:{min:-9,max:10},onChange:function(r){var e=r;T((0,o.Z)((0,o.Z)({},H),{},{aspectRatio:e<0?Number((-e/10).toFixed(2)):e}))}})]})})]}),(0,L.jsxs)(f.Z,{children:[(0,L.jsx)(x.Z,{expandIcon:(0,L.jsx)(C.Z,{}),children:(0,L.jsx)(h.Z,{variant:"h6",children:"Overlay Settings"})}),(0,L.jsx)(m.Z,{children:(0,L.jsxs)(Z.Z,{display:"flex",alignItems:"center",mb:2,children:[(0,L.jsx)(k.z,{title:"Overlay Color",defaultColor:H.overlay.color,onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{overlay:(0,o.Z)((0,o.Z)({},H.overlay),{},{color:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(w.U,{title:"Overlay Opacity",defaultValue:H.overlay.opacity,SliderProps:{min:0,max:1,step:.1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{overlay:(0,o.Z)((0,o.Z)({},H.overlay),{},{opacity:r})}))}})]})})]}),(0,L.jsxs)(f.Z,{children:[(0,L.jsx)(x.Z,{expandIcon:(0,L.jsx)(C.Z,{}),children:(0,L.jsx)(h.Z,{variant:"h6",children:"Transformer Settings"})}),(0,L.jsx)(m.Z,{children:(0,L.jsxs)(Z.Z,{display:"flex",alignItems:"center",flexWrap:"wrap",mb:2,children:[(0,L.jsx)(k.z,{title:"Stroke Color",defaultColor:null===(r=H.transformer)||void 0===r?void 0:r.borderStroke,onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{borderStroke:r})}))}}),(0,L.jsx)(w.U,{title:"Stroke Width",defaultValue:null===(e=H.transformer)||void 0===e?void 0:e.borderStrokeWidth,SliderProps:{min:3,max:20,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{borderStrokeWidth:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(k.z,{title:"Anchor Color",defaultColor:null===(n=H.transformer)||void 0===n?void 0:n.anchorFill,onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{anchorFill:r})}))}}),(0,L.jsx)(k.z,{title:"Anchor Stroke Color",defaultColor:null===(a=H.transformer)||void 0===a?void 0:a.anchorStroke,onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{anchorStroke:r})}))}}),(0,L.jsx)(w.U,{title:"Anchor Radius",defaultValue:null===(F=H.transformer)||void 0===F?void 0:F.anchorCornerRadius,SliderProps:{min:0,max:50,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{anchorCornerRadius:r})}))}}),(0,L.jsx)(w.U,{title:"Anchor Stroke Width",defaultValue:null===(O=H.transformer)||void 0===O?void 0:O.anchorStrokeWidth,SliderProps:{min:0,max:50,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{anchorStrokeWidth:r})}))}}),(0,L.jsx)(w.U,{title:"Anchor Size",defaultValue:null===(U=H.transformer)||void 0===U?void 0:U.anchorSize,SliderProps:{min:1,max:50,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{anchorSize:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(R.m,{buttonRenderer:function(r){var e=r.id,n=r.isOpen;return(0,L.jsx)(v.Z,{"aria-describedby":e,size:"medium",label:(0,L.jsx)("strong",{children:"Dash Lines"}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:n?"primary.main":"info",color:n?"primary.main":"info"}})},children:(0,L.jsx)(j.Z,{value:(null===(V=H.transformer)||void 0===V?void 0:V.borderDash)||"",onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{transformer:(0,o.Z)((0,o.Z)({},H.transformer),{},{borderDash:r.target.value.trim().split(",").map(Number)})}))}})})]})})]}),(0,L.jsxs)(f.Z,{children:[(0,L.jsx)(x.Z,{expandIcon:(0,L.jsx)(C.Z,{}),children:(0,L.jsx)(h.Z,{variant:"h6",children:"Guide Line Settings"})}),(0,L.jsx)(m.Z,{children:(0,L.jsxs)(Z.Z,{display:"flex",alignItems:"center",mb:2,children:[(0,L.jsx)(p.Z,{control:(0,L.jsx)(g.Z,{checked:null===(W=H.guides)||void 0===W?void 0:W.show,onChange:function(r,e){Y((0,o.Z)((0,o.Z)({},H),{},{guides:(0,o.Z)((0,o.Z)({},H.guides),{},{show:e})}))}}),label:"Show Guid Lines"}),(0,L.jsx)(P,{}),(0,L.jsx)(w.U,{title:"Lines Count",defaultValue:H.guides.count,SliderProps:{min:3,max:20,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{guides:(0,o.Z)((0,o.Z)({},H.guides),{},{count:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(w.U,{title:"Lines Width",defaultValue:H.guides.width,SliderProps:{min:1,max:20,step:1},onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{guides:(0,o.Z)((0,o.Z)({},H.guides),{},{width:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(k.z,{title:"Lines Color",defaultColor:H.guides.color,onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{guides:(0,o.Z)((0,o.Z)({},H.guides),{},{color:r})}))}}),(0,L.jsx)(P,{}),(0,L.jsx)(R.m,{buttonRenderer:function(r){var e=r.id,n=r.isOpen;return(0,L.jsx)(v.Z,{"aria-describedby":e,size:"medium",label:(0,L.jsx)("strong",{children:"Dash Lines"}),variant:"outlined",color:"info",sx:{cursor:"pointer",borderColor:n?"primary.main":"info",color:n?"primary.main":"info"}})},children:(0,L.jsx)(j.Z,{value:(null===(D=H.guides)||void 0===D?void 0:D.dash)||"",onChange:function(r){return T((0,o.Z)((0,o.Z)({},H),{},{guides:(0,o.Z)((0,o.Z)({},H.guides),{},{dash:r.target.value.trim().split(",").map(Number)})}))}})})]})})]}),(0,L.jsx)(b.Z,{sx:{my:4}}),(0,L.jsx)(S.n,{language:"typescript",children:Q})]})}var P=function(){return(0,L.jsx)(b.Z,{orientation:"vertical",sx:{mx:2,height:"16px"}})}}}]);
//# sourceMappingURL=3980.d95474df.chunk.js.map