(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9266:function(e,t,o){Promise.resolve().then(o.bind(o,3356))},3356:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return n}});var l=o(7437),r=o(4033);function n(){let e=(0,r.useRouter)(),t=async()=>{let e=await webflow.getAllElements(),t=e[0];if(console.log(t),"Body"!=t.type)return;let o=webflow.createDOM("div");o.setTextContent("Hellow world!");let l=await webflow.getStyleByName("divBlockStyle");l||(l=webflow.createStyle("divBlockStyle")),l.clearAllProperties(),l.setProperties({"background-color":"blue","font-size":"30px",display:"flex","justify-content":"center"}),await l.save(),o.setStyles([l]);let r=t.getChildren();t.setChildren([...r,o]),await t.save()};return(0,l.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,l.jsx)("div",{className:"text-white",children:"Welcome to Webflow!"}),(0,l.jsx)("button",{type:"button",className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>{console.log("Hello hello"),t(),e.push("/tuto")},children:"Click Me!"})]})}},622:function(e,t,o){"use strict";var l=o(2265),r=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var l,c={},u=null,a=null;for(l in void 0!==o&&(u=""+o),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)n.call(t,l)&&!i.hasOwnProperty(l)&&(c[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===c[l]&&(c[l]=t[l]);return{$$typeof:r,type:e,key:u,ref:a,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,o){"use strict";e.exports=o(622)},4033:function(e,t,o){e.exports=o(94)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=9266)}),_N_E=e.O()}]);