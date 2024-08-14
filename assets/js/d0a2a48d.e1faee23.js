/*! For license information please see d0a2a48d.e1faee23.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8873],{83379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(85893),a=t(11151);const i={sidebar_label:"Frame.addScriptTag"},s="Frame.addScriptTag() method",d={id:"api/puppeteer.frame.addscripttag",title:"Frame.addScriptTag() method",description:"Adds a `` tag into the page with the desired url or content.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.frame.addscripttag.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addscripttag",permalink:"/api/puppeteer.frame.addscripttag",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Frame.addScriptTag"},sidebar:"api",previous:{title:"Frame.$eval",permalink:"/api/puppeteer.frame._eval"},next:{title:"Frame.addStyleTag",permalink:"/api/puppeteer.frame.addstyletag"}},p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"frameaddscripttag-method",children:"Frame.addScriptTag() method"}),"\n",(0,n.jsxs)(r.p,{children:["Adds a ",(0,n.jsx)(r.code,{children:"<script>"})," tag into the page with the desired url or content."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  addScriptTag(\n    options: FrameAddScriptTagOptions\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Options for the script."})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,n.jsx)(r.code,{children:"<script>"})," element."]})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},75251:(e,r,t)=>{var n=t(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,i={},c=null,o=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(o=r.ref),r)s.call(r,n)&&!p.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:o,props:i,_owner:d.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>s});var n=t(67294);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);