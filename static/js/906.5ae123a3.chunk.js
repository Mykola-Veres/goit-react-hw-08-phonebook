(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[906],{2757:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1413),i=t(890),a=t(3060),o=t(184);function s(e){return(0,o.jsxs)(i.Z,(0,r.Z)((0,r.Z)({sx:{mt:1,mb:2},variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,o.jsx)(a.Z,{color:"inherit",href:"https://github.com/Mykola-Veres/goit-react-hw-08-phonebook",children:"My GitHub"})," ",(new Date).getFullYear(),"."]}))}},9906:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ve}});var r,i=t(885),a=t(168),o=t(7939),s=o.ZP.article(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),c=t(2791),l=t(4017),d=t(2419),u=t(6151),p=t(3044),h=t(4708),v=t(5125),m=t(5777),f=t(4554),x=t(890),Z=t(1614),b=t(7107),g=t(7012),j=t(184);function y(){var e=(0,l.wY)().data,n=(0,l.Ol)(),t=(0,i.Z)(n,1)[0],r=(0,c.useState)(""),a=(0,i.Z)(r,2),o=a[0],s=a[1],y=(0,c.useState)(""),w=(0,i.Z)(y,2),z=w[0],C=w[1],P=function(e){switch(e.target.name){case"name":return s(e.target.value);case"number":return C(e.target.value);default:throw new Error}},k=function(n){e.some((function(e){return e.name.toLocaleLowerCase()===o.toLocaleLowerCase()}))?alert("".concat(o," is already in contacts")):t(n)},L=function(){s(""),C("")},E=(0,b.Z)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{theme:E,children:(0,j.jsxs)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(h.ZP,{}),(0,j.jsxs)(f.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(p.Z,{sx:{m:.5,bgcolor:"secondary.main"},children:(0,j.jsx)(m.Z,{})}),(0,j.jsx)(x.Z,{component:"h1",variant:"h2",children:"Phonebook"}),(0,j.jsxs)(f.Z,{component:"form",onSubmit:function(e){e.preventDefault(),k({name:o,number:z}),L()},sx:{mt:.5},children:[(0,j.jsx)(v.Z,{type:"text",value:o,onChange:P,margin:"normal",required:!0,fullWidth:!0,id:"outlined-name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0,inputProps:{inputMode:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"},helperText:"Name may contain only letters, apostrophe, dash and spaces"}),(0,j.jsx)(v.Z,{value:z,onChange:P,margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone number",type:"number",id:"number",autoComplete:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},helperText:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,j.jsx)(u.Z,{fullWidth:!0,variant:"contained",type:"submit",startIcon:(0,j.jsx)(d.Z,{}),size:"large",color:"success",sx:{bgcolor:"#0278d1",mt:3,mb:4},children:"Add contact"})]})]})]})})})}var w=t(9952),z=t(4942),C=t(3366),P=t(7462),k=t(8182),L=t(4419),E=t(4036),M=t(9740),S=t(2930),T=t(6934),A=t(1217);function I(e){return(0,A.Z)("MuiInputAdornment",e)}var _,R,V,D=(0,t(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),O=t(1402),F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(0,T.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,E.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,P.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,z.Z)({},"&.".concat(D.positionStart,"&:not(.").concat(D.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),H=c.forwardRef((function(e,n){var t=(0,O.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,i=t.className,a=t.component,o=void 0===a?"div":a,s=t.disablePointerEvents,l=void 0!==s&&s,d=t.disableTypography,u=void 0!==d&&d,p=t.position,h=t.variant,v=(0,C.Z)(t,F),m=(0,S.Z)()||{},f=h;h&&m.variant,m&&!f&&(f=m.variant);var Z=(0,P.Z)({},t,{hiddenLabel:m.hiddenLabel,size:m.size,disablePointerEvents:l,position:p,variant:f}),b=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,i=e.position,a=e.size,o=e.variant,s={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,E.Z)(i)),o,r&&"hiddenLabel",a&&"size".concat((0,E.Z)(a))]};return(0,L.Z)(s,I,n)}(Z);return(0,j.jsx)(M.Z.Provider,{value:null,children:(0,j.jsx)(N,(0,P.Z)({as:o,ownerState:Z,className:(0,k.Z)(b.root,i),ref:n},v,{children:"string"!==typeof r||u?(0,j.jsxs)(c.Fragment,{children:["start"===p?_||(_=(0,j.jsx)("span",{className:"notranslate",children:"\u200b"})):null,r]}):(0,j.jsx)(x.Z,{color:"text.secondary",children:r})}))})})),W=function(e){var n=e.value,t=e.onChange;return(0,j.jsx)(v.Z,{id:"filled-basic",name:"filter",label:"Filter contacts by name",variant:"filled",type:"text",sx:{mt:1,width:300},value:n,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",InputProps:{startAdornment:(0,j.jsx)(H,{position:"start",children:(0,j.jsx)(w.Z,{})})}})},B=t(2007),$=t.n(B),q=t(1413),U=(o.ZP.button(R||(R=(0,a.Z)(["\n  background-color: white;\n  border: 2px solid red;\n  border-radius: 10px;\n  font-size: 14px;\n  margin-left: 20px;\n  cursor: pointer;\n"]))),o.ZP.li(V||(V=(0,a.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid rgba(117, 190, 218, 0.7);\n  background-color: rgba(117, 190, 218, 0.4);\n  border-radius: 8px;\n  font-size: 14px;\n  :not(:last-child) {\n    margin-bottom: 12px;\n  }\n  padding: 10px;\n  @media (min-width: 920px) {\n    width: 900px;\n  }\n"])))),Y=t(4739),G=t(2978),J=t(7247),K=t(1184),Q=t(5682),X=t(8519),ee=t(2466),ne=["component","direction","spacing","divider","children"];function te(e,n){var t=c.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,i){return e.push(r),i<t.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var re=(0,T.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,P.Z)({display:"flex"},(0,K.k9)({theme:t},(0,K.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var i=(0,Q.hB)(t),a=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),o=(0,K.P$)({values:n.direction,base:a}),s=(0,K.P$)({values:n.spacing,base:a});r=(0,ee.Z)(r,(0,K.k9)({theme:t},s,(function(e,t){return{"& > :not(style) + :not(style)":(0,z.Z)({margin:0},"margin".concat((r=t?o[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,Q.NA)(i,e))};var r})))}return r})),ie=c.forwardRef((function(e,n){var t=(0,O.Z)({props:e,name:"MuiStack"}),r=(0,X.Z)(t),i=r.component,a=void 0===i?"div":i,o=r.direction,s=void 0===o?"column":o,c=r.spacing,l=void 0===c?0:c,d=r.divider,u=r.children,p=(0,C.Z)(r,ne),h={direction:s,spacing:l};return(0,j.jsx)(re,(0,P.Z)({as:a,ownerState:h,ref:n},p,{children:d?te(u,d):u}))})),ae=ie,oe=t(1286),se=t(2963),ce=t(224);function le(e){var n,t=0;for(n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);var r="#";for(n=0;n<3;n+=1){r+="00".concat((t>>8*n&255).toString(16)).slice(-2)}return r}function de(e){return{sx:{bgcolor:le(e)},children:"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0])}}var ue=t(2757),pe=function(e){var n=e.filter,t=(0,l.wY)(),r=t.data,a=t.isUninitialized,o=t.isFetching,s=t.refetch,c=t.isError,d=(0,G.v9)(Y.Z.getIsLoggedIn);var h=(0,l.zr)(),v=(0,i.Z)(h,2),m=v[0],f=v[1].isLoading,Z=r&&!o&&!c&&d&&s;return(0,j.jsxs)(j.Fragment,{children:[Z&&(0,j.jsx)(u.Z,{onClick:s,disabled:a,variant:"outlined",startIcon:(0,j.jsx)(ce.Z,{}),color:"warning",sx:{bgcolor:"#0288d1",mb:2,mt:1},children:"REFETCH CONTACTS"}),Z&&r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return(0,j.jsxs)(U,{children:[(0,j.jsx)(p.Z,(0,q.Z)({},de((n=e.name,n.split(" ").length<2?"".concat(n," ").concat(n.split("").slice(1,2).join()):n)))),(0,j.jsxs)(x.Z,{sx:{ml:.4,mr:.4},variant:"h6",color:"text.primary",align:"justify",children:[e.name,":"]}),(0,j.jsx)(x.Z,{sx:{mr:.4},variant:"h6",color:"text.primary",align:"center",children:e.number}),(0,j.jsxs)(ae,{direction:"row",spacing:2,children:[(0,j.jsx)(u.Z,{variant:"contained",startIcon:(0,j.jsx)(oe.Z,{}),sx:{bgcolor:"#0288d1"},children:"EDIT"}),(0,j.jsx)(u.Z,{variant:"contained",startIcon:(0,j.jsx)(se.Z,{}),sx:{bgcolor:"#0288d1"},children:"DETEILS"}),(0,j.jsx)(u.Z,{variant:"contained",startIcon:(0,j.jsx)(J.Z,{}),color:"error",onClick:function(){return m(e.id)},disabled:a,type:"submit",children:f?"Deleting...":"Delete"})]})]},e.id);var n})),(0,j.jsx)(ue.Z,{})]})},he=function(e){var n=e.filter;return(0,j.jsx)("ol",{children:(0,j.jsx)(pe,{filter:n})})};function ve(){var e=(0,c.useState)(""),n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,j.jsxs)(s,{children:[(0,j.jsx)(y,{}),(0,j.jsx)(x.Z,{component:"h1",variant:"h2",children:"Contacts"}),(0,j.jsx)(W,{value:t,onChange:function(e){r(e.target.value)}}),(0,j.jsx)(he,{filter:t})]})}pe.propTypes={filter:$().string.isRequired}},9952:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");n.Z=o},2419:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=o},7247:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=o},2963:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M12 3 2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z"}),"Details");n.Z=o},1286:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.Z=o},5777:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)([(0,a.jsx)("path",{d:"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"},"0"),(0,a.jsx)("path",{d:"M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"},"1")],"MenuBook");n.Z=o},224:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");n.Z=o},888:function(e,n,t){"use strict";var r=t(9047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=906.5ae123a3.chunk.js.map