"use strict";(self.webpackChunkpikaso_documentation=self.webpackChunkpikaso_documentation||[]).push([[5737],{29823:function(e,n,t){var o=t(95318);n.Z=void 0;var r=o(t(45649)),i=t(80184),a=(0,r.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=a},5289:function(e,n,t){t.d(n,{Z:function(){return W}});var o=t(4942),r=t(63366),i=t(87462),a=t(72791),c=t(28182),l=t(90767),s=t(96248),u=t(14036),d=t(39042),p=t(60627),f=t(10703),v=t(61046),m=t(47630),h=t(95159);function Z(e){return(0,h.Z)("MuiDialog",e)}var g=(0,t(30208).Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),x=t(85090),b=t(81489),w=t(13967),k=t(80184),S=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],C=(0,m.ZP)(b.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,n){return n.backdrop}})({zIndex:-1}),y=(0,m.ZP)(d.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,n){return n.root}})({"@media print":{position:"absolute !important"}}),E=(0,m.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,n){var t=e.ownerState;return[n.container,n["scroll".concat((0,u.Z)(t.scroll))]]}})((function(e){var n=e.ownerState;return(0,i.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===n.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===n.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),R=(0,m.ZP)(f.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,n){var t=e.ownerState;return[n.paper,n["scrollPaper".concat((0,u.Z)(t.scroll))],n["paperWidth".concat((0,u.Z)(String(t.maxWidth)))],t.fullWidth&&n.paperFullWidth,t.fullScreen&&n.paperFullScreen]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===t.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===t.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!t.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===t.maxWidth&&(0,o.Z)({maxWidth:"px"===n.breakpoints.unit?Math.max(n.breakpoints.values.xs,444):"".concat(n.breakpoints.values.xs).concat(n.breakpoints.unit)},"&.".concat(g.paperScrollBody),(0,o.Z)({},n.breakpoints.down(Math.max(n.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),"xs"!==t.maxWidth&&(0,o.Z)({maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)},"&.".concat(g.paperScrollBody),(0,o.Z)({},n.breakpoints.down(n.breakpoints.values[t.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),t.fullWidth&&{width:"calc(100% - 64px)"},t.fullScreen&&(0,o.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(g.paperScrollBody),{margin:0,maxWidth:"100%"}))})),W=a.forwardRef((function(e,n){var t=(0,v.Z)({props:e,name:"MuiDialog"}),o=(0,w.Z)(),d={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},m=t["aria-describedby"],h=t["aria-labelledby"],g=t.BackdropComponent,b=t.BackdropProps,W=t.children,M=t.className,P=t.disableEscapeKeyDown,D=void 0!==P&&P,T=t.fullScreen,L=void 0!==T&&T,O=t.fullWidth,B=void 0!==O&&O,j=t.maxWidth,N=void 0===j?"sm":j,z=t.onBackdropClick,F=t.onClose,A=t.open,I=t.PaperComponent,H=void 0===I?f.Z:I,X=t.PaperProps,K=void 0===X?{}:X,Y=t.scroll,_=void 0===Y?"paper":Y,G=t.TransitionComponent,U=void 0===G?p.Z:G,q=t.transitionDuration,J=void 0===q?d:q,Q=t.TransitionProps,V=(0,r.Z)(t,S),$=(0,i.Z)({},t,{disableEscapeKeyDown:D,fullScreen:L,fullWidth:B,maxWidth:N,scroll:_}),ee=function(e){var n=e.classes,t=e.scroll,o=e.maxWidth,r=e.fullWidth,i=e.fullScreen,a={root:["root"],container:["container","scroll".concat((0,u.Z)(t))],paper:["paper","paperScroll".concat((0,u.Z)(t)),"paperWidth".concat((0,u.Z)(String(o))),r&&"paperFullWidth",i&&"paperFullScreen"]};return(0,l.Z)(a,Z,n)}($),ne=a.useRef(),te=(0,s.Z)(h),oe=a.useMemo((function(){return{titleId:te}}),[te]);return(0,k.jsx)(y,(0,i.Z)({className:(0,c.Z)(ee.root,M),BackdropProps:(0,i.Z)({transitionDuration:J,as:g},b),closeAfterTransition:!0,BackdropComponent:C,disableEscapeKeyDown:D,onClose:F,open:A,ref:n,onClick:function(e){ne.current&&(ne.current=null,z&&z(e),F&&F(e,"backdropClick"))},ownerState:$},V,{children:(0,k.jsx)(U,(0,i.Z)({appear:!0,in:A,timeout:J,role:"presentation"},Q,{children:(0,k.jsx)(E,{className:(0,c.Z)(ee.container),onMouseDown:function(e){ne.current=e.target===e.currentTarget},ownerState:$,children:(0,k.jsx)(R,(0,i.Z)({as:H,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":te},K,{className:(0,c.Z)(ee.paper,K.className),ownerState:$,children:(0,k.jsx)(x.Z.Provider,{value:oe,children:W})}))})}))}))}))},85090:function(e,n,t){var o=(0,t(72791).createContext)({});n.Z=o},39157:function(e,n,t){t.d(n,{Z:function(){return Z}});var o=t(4942),r=t(63366),i=t(87462),a=t(72791),c=t(28182),l=t(90767),s=t(47630),u=t(61046),d=t(95159);function p(e){return(0,d.Z)("MuiDialogContent",e)}(0,t(30208).Z)("MuiDialogContent",["root","dividers"]);var f=t(17673),v=t(80184),m=["className","dividers"],h=(0,s.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.dividers&&n.dividers]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat(n.palette.divider),borderBottom:"1px solid ".concat(n.palette.divider)}:(0,o.Z)({},".".concat(f.Z.root," + &"),{paddingTop:0}))})),Z=a.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiDialogContent"}),o=t.className,a=t.dividers,s=void 0!==a&&a,d=(0,r.Z)(t,m),f=(0,i.Z)({},t,{dividers:s}),Z=function(e){var n=e.classes,t={root:["root",e.dividers&&"dividers"]};return(0,l.Z)(t,p,n)}(f);return(0,v.jsx)(h,(0,i.Z)({className:(0,c.Z)(Z.root,o),ownerState:f,ref:n},d))}))},65661:function(e,n,t){var o=t(87462),r=t(63366),i=t(72791),a=t(28182),c=t(90767),l=t(20890),s=t(47630),u=t(61046),d=t(17673),p=t(85090),f=t(80184),v=["className","id"],m=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:"16px 24px",flex:"0 0 auto"}),h=i.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),l=t.className,s=t.id,h=(0,r.Z)(t,v),Z=t,g=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},d.a,n)}(Z),x=i.useContext(p.Z).titleId,b=void 0===x?s:x;return(0,f.jsx)(m,(0,o.Z)({component:"h2",className:(0,a.Z)(g.root,l),ownerState:Z,ref:n,variant:"h6",id:b},h))}));n.Z=h},17673:function(e,n,t){t.d(n,{a:function(){return r}});var o=t(95159);function r(e){return(0,o.Z)("MuiDialogTitle",e)}var i=(0,t(30208).Z)("MuiDialogTitle",["root"]);n.Z=i},55646:function(e,n,t){t.d(n,{Z:function(){return N}});var o=t(29439),r=t(4942),i=t(63366),a=t(87462),c=t(72791),l=t(28182),s=t(90767),u=t(47563),d=t(58956),p=t(99723),f=t(80184);function v(e){return e.substring(2).toLowerCase()}var m=function(e){var n=e.children,t=e.disableReactTree,o=void 0!==t&&t,r=e.mouseEvent,i=void 0===r?"onClick":r,a=e.onClickAway,l=e.touchEvent,s=void 0===l?"onTouchEnd":l,m=c.useRef(!1),h=c.useRef(null),Z=c.useRef(!1),g=c.useRef(!1);c.useEffect((function(){return setTimeout((function(){Z.current=!0}),0),function(){Z.current=!1}}),[]);var x=(0,u.Z)(n.ref,h),b=(0,d.Z)((function(e){var n=g.current;g.current=!1;var t=(0,p.Z)(h.current);!Z.current||!h.current||"clientX"in e&&function(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}(e,t)||(m.current?m.current=!1:(e.composedPath?e.composedPath().indexOf(h.current)>-1:!t.documentElement.contains(e.target)||h.current.contains(e.target))||!o&&n||a(e))})),w=function(e){return function(t){g.current=!0;var o=n.props[e];o&&o(t)}},k={ref:x};return!1!==s&&(k[s]=w(s)),c.useEffect((function(){if(!1!==s){var e=v(s),n=(0,p.Z)(h.current),t=function(){m.current=!0};return n.addEventListener(e,b),n.addEventListener("touchmove",t),function(){n.removeEventListener(e,b),n.removeEventListener("touchmove",t)}}}),[b,s]),!1!==i&&(k[i]=w(i)),c.useEffect((function(){if(!1!==i){var e=v(i),n=(0,p.Z)(h.current);return n.addEventListener(e,b),function(){n.removeEventListener(e,b)}}}),[b,i]),(0,f.jsx)(c.Fragment,{children:c.cloneElement(n,k)})},h=t(47630),Z=t(13967),g=t(61046),x=t(89683),b=t(14036),w=t(13208),k=t(12065),S=t(10703),C=t(95159),y=t(30208);function E(e){return(0,C.Z)("MuiSnackbarContent",e)}(0,y.Z)("MuiSnackbarContent",["root","message","action"]);var R=["action","className","message","role"],W=(0,h.ZP)(S.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n=e.theme,t="light"===n.palette.mode?.8:.98,o=(0,k._4)(n.palette.background.default,t);return(0,a.Z)({},n.typography.body2,(0,r.Z)({color:n.palette.getContrastText(o),backgroundColor:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:n.shape.borderRadius,flexGrow:1},n.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}))})),M=(0,h.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,n){return n.message}})({padding:"8px 0"}),P=(0,h.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,n){return n.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),D=c.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiSnackbarContent"}),o=t.action,r=t.className,c=t.message,u=t.role,d=void 0===u?"alert":u,p=(0,i.Z)(t,R),v=t,m=function(e){var n=e.classes;return(0,s.Z)({root:["root"],action:["action"],message:["message"]},E,n)}(v);return(0,f.jsxs)(W,(0,a.Z)({role:d,square:!0,elevation:6,className:(0,l.Z)(m.root,r),ownerState:v,ref:n},p,{children:[(0,f.jsx)(M,{className:m.message,ownerState:v,children:c}),o?(0,f.jsx)(P,{className:m.action,ownerState:v,children:o}):null]}))}));function T(e){return(0,C.Z)("MuiSnackbar",e)}(0,y.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);var L=["onEnter","onExited"],O=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],B=(0,h.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["anchorOrigin".concat((0,b.Z)(t.anchorOrigin.vertical)).concat((0,b.Z)(t.anchorOrigin.horizontal))]]}})((function(e){var n=e.theme,t=e.ownerState,o=(0,a.Z)({},!t.isRtl&&{left:"50%",right:"auto",transform:"translateX(-50%)"},t.isRtl&&{right:"50%",left:"auto",transform:"translateX(50%)"});return(0,a.Z)({zIndex:n.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===t.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===t.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===t.anchorOrigin.horizontal&&{justifyContent:"flex-end"},(0,r.Z)({},n.breakpoints.up("sm"),(0,a.Z)({},"top"===t.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===t.anchorOrigin.horizontal&&o,"left"===t.anchorOrigin.horizontal&&(0,a.Z)({},!t.isRtl&&{left:24,right:"auto"},t.isRtl&&{right:24,left:"auto"}),"right"===t.anchorOrigin.horizontal&&(0,a.Z)({},!t.isRtl&&{right:24,left:"auto"},t.isRtl&&{left:24,right:"auto"}))))})),j=c.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiSnackbar"}),r=(0,Z.Z)(),u={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},d=t.action,p=t.anchorOrigin,v=(p=void 0===p?{vertical:"bottom",horizontal:"left"}:p).vertical,h=p.horizontal,k=t.autoHideDuration,S=void 0===k?null:k,C=t.children,y=t.className,E=t.ClickAwayListenerProps,R=t.ContentProps,W=t.disableWindowBlurListener,M=void 0!==W&&W,P=t.message,j=t.onBlur,N=t.onClose,z=t.onFocus,F=t.onMouseEnter,A=t.onMouseLeave,I=t.open,H=t.resumeHideDuration,X=t.TransitionComponent,K=void 0===X?w.Z:X,Y=t.transitionDuration,_=void 0===Y?u:Y,G=t.TransitionProps,U=(G=void 0===G?{}:G).onEnter,q=G.onExited,J=(0,i.Z)(t.TransitionProps,L),Q=(0,i.Z)(t,O),V="rtl"===r.direction,$=(0,a.Z)({},t,{anchorOrigin:{vertical:v,horizontal:h},isRtl:V}),ee=function(e){var n=e.classes,t=e.anchorOrigin,o={root:["root","anchorOrigin".concat((0,b.Z)(t.vertical)).concat((0,b.Z)(t.horizontal))]};return(0,s.Z)(o,T,n)}($),ne=c.useRef(),te=c.useState(!0),oe=(0,o.Z)(te,2),re=oe[0],ie=oe[1],ae=(0,x.Z)((function(){N&&N.apply(void 0,arguments)})),ce=(0,x.Z)((function(e){N&&null!=e&&(clearTimeout(ne.current),ne.current=setTimeout((function(){ae(null,"timeout")}),e))}));c.useEffect((function(){return I&&ce(S),function(){clearTimeout(ne.current)}}),[I,S,ce]);var le=function(){clearTimeout(ne.current)},se=c.useCallback((function(){null!=S&&ce(null!=H?H:.5*S)}),[S,H,ce]);return c.useEffect((function(){if(!M&&I)return window.addEventListener("focus",se),window.addEventListener("blur",le),function(){window.removeEventListener("focus",se),window.removeEventListener("blur",le)}}),[M,se,I]),c.useEffect((function(){if(I)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||N&&N(e,"escapeKeyDown")}}),[re,I,N]),!I&&re?null:(0,f.jsx)(m,(0,a.Z)({onClickAway:function(e){N&&N(e,"clickaway")}},E,{children:(0,f.jsx)(B,(0,a.Z)({className:(0,l.Z)(ee.root,y),onBlur:function(e){j&&j(e),se()},onFocus:function(e){z&&z(e),le()},onMouseEnter:function(e){F&&F(e),le()},onMouseLeave:function(e){A&&A(e),se()},ownerState:$,ref:n,role:"presentation"},Q,{children:(0,f.jsx)(K,(0,a.Z)({appear:!0,in:I,timeout:_,direction:"top"===v?"down":"up",onEnter:function(e,n){ie(!1),U&&U(e,n)},onExited:function(e){ie(!0),q&&q(e)}},J,{children:C||(0,f.jsx)(D,(0,a.Z)({message:P,action:d},R))}))}))}))})),N=j},66509:function(e,n,t){var o=t(72791),r={restoreOnUnmount:!1};n.Z="undefined"!==typeof document?function(e,n){void 0===n&&(n=r);var t=(0,o.useRef)(document.title);document.title!==e&&(document.title=e),(0,o.useEffect)((function(){return n&&n.restoreOnUnmount?function(){document.title=t.current}:void 0}),[])}:function(e){}}}]);
//# sourceMappingURL=5737.3064617b.chunk.js.map