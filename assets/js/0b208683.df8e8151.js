/*! For license information please see 0b208683.df8e8151.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45816],{261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),i=t(11151);const s={sidebar_label:"Page.goBack"},o="Page.goBack() method",a={id:"api/puppeteer.page.goback",title:"Page.goBack() method",description:"This method navigate to the previous page in history.",source:"@site/versioned_docs/version-22.6.5/api/puppeteer.page.goback.md",sourceDirName:"api",slug:"/api/puppeteer.page.goback",permalink:"/api/puppeteer.page.goback",draft:!1,unlisted:!1,tags:[],version:"22.6.5",frontMatter:{sidebar_label:"Page.goBack"},sidebar:"api",previous:{title:"Page.getDefaultTimeout",permalink:"/api/puppeteer.page.getdefaulttimeout"},next:{title:"Page.goForward",permalink:"/api/puppeteer.page.goforward"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pagegoback-method",children:"Page.goBack() method"}),"\n",(0,r.jsx)(n.p,{children:"This method navigate to the previous page in history."}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Navigation parameters"]})})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,r.jsxs)(n.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go back, resolves to ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["The argument ",(0,r.jsx)(n.code,{children:"options"})," might have the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"timeout"})," : Maximum navigation time in milliseconds, defaults to 30 seconds, pass 0 to disable timeout. The default value can be changed by using the ",(0,r.jsx)(n.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," or ",(0,r.jsx)(n.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," methods."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"waitUntil"})," : When to consider navigation succeeded, defaults to ",(0,r.jsx)(n.code,{children:"load"}),". Given an array of event strings, navigation is considered to be successful after all events have been fired. Events can be either:",(0,r.jsx)("br",{})," - ",(0,r.jsx)(n.code,{children:"load"})," : consider navigation to be finished when the load event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(n.code,{children:"domcontentloaded"})," : consider navigation to be finished when the DOMContentLoaded event is fired.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(n.code,{children:"networkidle0"})," : consider navigation to be finished when there are no more than 0 network connections for at least ",(0,r.jsx)(n.code,{children:"500"})," ms.",(0,r.jsx)("br",{})," - ",(0,r.jsx)(n.code,{children:"networkidle2"})," : consider navigation to be finished when there are no more than 2 network connections for at least ",(0,r.jsx)(n.code,{children:"500"})," ms."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,n,t)=>{var r=t(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:l,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);