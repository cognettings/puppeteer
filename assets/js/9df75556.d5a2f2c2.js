"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={sidebar_label:"Page.evaluateOnNewDocument"},p="Page.evaluateOnNewDocument() method",i={unversionedId:"api/puppeteer.page.evaluateonnewdocument",id:"version-20.8.3/api/puppeteer.page.evaluateonnewdocument",title:"Page.evaluateOnNewDocument() method",description:"Adds a function which would be invoked in one of the following scenarios:",source:"@site/versioned_docs/version-20.8.3/api/puppeteer.page.evaluateonnewdocument.md",sourceDirName:"api",slug:"/api/puppeteer.page.evaluateonnewdocument",permalink:"/api/puppeteer.page.evaluateonnewdocument",draft:!1,tags:[],version:"20.8.3",frontMatter:{sidebar_label:"Page.evaluateOnNewDocument"},sidebar:"api",previous:{title:"Page.evaluateHandle",permalink:"/api/puppeteer.page.evaluatehandle"},next:{title:"Page.exposeFunction",permalink:"/api/puppeteer.page.exposefunction"}},u={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"pageevaluateonnewdocument-method"}),"Page.evaluateOnNewDocument() method"),(0,a.kt)("p",null,"Adds a function which would be invoked in one of the following scenarios:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"whenever the page is navigated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"whenever the child frame is attached or navigated. In this case, the function is invoked in the context of the newly attached frame."))),(0,a.kt)("p",null,"The function is invoked after the document was created but before any of its scripts were run. This is useful to amend the JavaScript environment, e.g. to seed ",(0,a.kt)("inlineCode",{parentName:"p"},"Math.random"),"."),(0,a.kt)("h4",r({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  evaluateOnNewDocument<\n    Params extends unknown[],\n    Func extends (...args: Params) => unknown = (...args: Params) => unknown,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<NewDocumentScriptEvaluation>;\n}\n")),(0,a.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"pageFunction"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Func ","|"," string"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Function to be evaluated in browser context")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"args"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Params"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Arguments to pass to ",(0,a.kt)("code",null,"pageFunction"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",r({parentName:"p"},{href:"/api/puppeteer.newdocumentscriptevaluation"}),"NewDocumentScriptEvaluation"),">"),(0,a.kt)("h2",r({},{id:"example"}),"Example"),(0,a.kt)("p",null,"An example of overriding the navigator.languages property before the page loads:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"// preload.js\n\n// overwrite the `languages` property to use a custom getter\nObject.defineProperty(navigator, 'languages', {\n  get: function () {\n    return ['en-US', 'en', 'bn'];\n  },\n});\n\n// In your puppeteer script, assuming the preload.js file is\n// in same folder of our script.\nconst preloadFile = fs.readFileSync('./preload.js', 'utf8');\nawait page.evaluateOnNewDocument(preloadFile);\n")))}m.isMDXComponent=!0}}]);