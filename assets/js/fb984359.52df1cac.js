"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,f=u["".concat(o,".").concat(c)]||u[c]||s[c]||l;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<l;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={sidebar_label:"Frame.addStyleTag_1"},i="Frame.addStyleTag() method",o={unversionedId:"api/puppeteer.frame.addstyletag_1",id:"version-21.2.0/api/puppeteer.frame.addstyletag_1",title:"Frame.addStyleTag() method",description:"Adds a HTMLLinkElement into the frame with the desired URL",source:"@site/versioned_docs/version-21.2.0/api/puppeteer.frame.addstyletag_1.md",sourceDirName:"api",slug:"/api/puppeteer.frame.addstyletag_1",permalink:"/api/puppeteer.frame.addstyletag_1",draft:!1,tags:[],version:"21.2.0",frontMatter:{sidebar_label:"Frame.addStyleTag_1"},sidebar:"api",previous:{title:"Frame.addStyleTag",permalink:"/api/puppeteer.frame.addstyletag"},next:{title:"Frame.childFrames",permalink:"/api/puppeteer.frame.childframes"}},d={},m=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}],s={toc:m};function u(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"frameaddstyletag-method"}),"Frame.addStyleTag() method"),(0,n.kt)("p",null,"Adds a ",(0,n.kt)("inlineCode",{parentName:"p"},"HTMLLinkElement")," into the frame with the desired URL"),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Frame {\n  addStyleTag(\n    options: FrameAddStyleTagOptions\n  ): Promise<ElementHandle<HTMLLinkElement>>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.frameaddstyletagoptions"}),"FrameAddStyleTagOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<","HTMLLinkElement",">",">"),(0,n.kt)("p",null,"An ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"element handle")," to the loaded ",(0,n.kt)("inlineCode",{parentName:"p"},"<link>")," element."))}u.isMDXComponent=!0}}]);