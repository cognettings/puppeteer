"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_label:"ElementHandle.isVisible"},o="ElementHandle.isVisible() method",p={unversionedId:"api/puppeteer.elementhandle.isvisible",id:"version-21.2.0/api/puppeteer.elementhandle.isvisible",title:"ElementHandle.isVisible() method",description:"Checks if an element is visible using the same mechanism as ElementHandle.waitForSelector().",source:"@site/versioned_docs/version-21.2.0/api/puppeteer.elementhandle.isvisible.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.isvisible",permalink:"/api/puppeteer.elementhandle.isvisible",draft:!1,tags:[],version:"21.2.0",frontMatter:{sidebar_label:"ElementHandle.isVisible"},sidebar:"api",previous:{title:"ElementHandle.isIntersectingViewport",permalink:"/api/puppeteer.elementhandle.isintersectingviewport"},next:{title:"ElementHandle.press",permalink:"/api/puppeteer.elementhandle.press"}},s={},c=[{value:"Signature:",id:"signature",level:4}],u={toc:c};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",i({},{id:"elementhandleisvisible-method"}),"ElementHandle.isVisible() method"),(0,r.kt)("p",null,"Checks if an element is visible using the same mechanism as ",(0,r.kt)("a",i({parentName:"p"},{href:"/api/puppeteer.elementhandle.waitforselector"}),"ElementHandle.waitForSelector()"),"."),(0,r.kt)("h4",i({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  isVisible(): Promise<boolean>;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","boolean",">"))}m.isMDXComponent=!0}}]);