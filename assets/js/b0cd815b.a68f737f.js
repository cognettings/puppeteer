/*! For license information please see b0cd815b.a68f737f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23747],{72662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(85893),l=t(11151);const s={sidebar_label:"ElementHandle.$$"},a="ElementHandle.$$() method",i={id:"api/puppeteer.elementhandle.__",title:"ElementHandle.$$() method",description:"Queries the current element for all elements matching the given selector.",source:"@site/versioned_docs/version-22.6.5/api/puppeteer.elementhandle.__.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__",permalink:"/api/puppeteer.elementhandle.__",draft:!1,unlisted:!1,tags:[],version:"22.6.5",frontMatter:{sidebar_label:"ElementHandle.$$"},sidebar:"api",previous:{title:"ElementHandle.$",permalink:"/api/puppeteer.elementhandle._"},next:{title:"ElementHandle.$$eval",permalink:"/api/puppeteer.elementhandle.__eval"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"elementhandle-method",children:"ElementHandle.$$() method"}),"\n",(0,r.jsx)(n.p,{children:"Queries the current element for all elements matching the given selector."}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  $$<Selector extends string>(\n    selector: Selector\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The selector to query for."})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<Array<",(0,r.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,r.jsx)(n.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,r.jsxs)(n.p,{children:["An array of ",(0,r.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"element handles"})," that point to elements matching the given selector."]})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,n,t)=>{var r=t(67294),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,c=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:d,ref:c,props:s,_owner:i.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);