/*! For license information please see 930475bf.b614f4bb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12544],{99449:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=r(85893),i=r(11151);const l={sidebar_label:"API"},t="@puppeteer/browsers",o={id:"browsers-api/index",title:"@puppeteer/browsers",description:"Manage and launch browsers/drivers from a CLI or programmatically.",source:"@site/versioned_docs/version-23.1.0/browsers-api/index.md",sourceDirName:"browsers-api",slug:"/browsers-api/",permalink:"/browsers-api/",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"API"},sidebar:"browsersApi",next:{title:"launch",permalink:"/browsers-api/browsers.launch"}},d={},a=[{value:"CLI",id:"cli",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"API",id:"api",level:2},{value:"Classes",id:"classes",level:2},{value:"Enumerations",id:"enumerations",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"puppeteerbrowsers",children:"@puppeteer/browsers"}),"\n",(0,n.jsx)(s.p,{children:"Manage and launch browsers/drivers from a CLI or programmatically."}),"\n",(0,n.jsx)(s.h2,{id:"cli",children:"CLI"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.code,{children:"npx"})," to run the CLI:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npx @puppeteer/browsers --help\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Built-in per-command ",(0,n.jsx)(s.code,{children:"help"})," will provide all documentation you need to use the CLI."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npx @puppeteer/browsers --help # help for all commands\nnpx @puppeteer/browsers install --help # help for the install command\nnpx @puppeteer/browsers launch --help # help for the launch command\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Some example to give an idea of what the CLI looks like (use the ",(0,n.jsx)(s.code,{children:"--help"})," command for more examples):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"# Download the latest available Chrome for Testing binary corresponding to the Stable channel.\nnpx @puppeteer/browsers install chrome@stable\n\n# Download a specific Chrome for Testing version.\nnpx @puppeteer/browsers install chrome@116.0.5793.0\n\n# Download the latest Chrome for Testing version for the given milestone.\nnpx @puppeteer/browsers install chrome@117\n\n# Download the latest available ChromeDriver version corresponding to the Canary channel.\nnpx @puppeteer/browsers install chromedriver@canary\n\n# Download a specific ChromeDriver version.\nnpx @puppeteer/browsers install chromedriver@116.0.5793.0\n"})}),"\n",(0,n.jsx)(s.h2,{id:"known-limitations",children:"Known limitations"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Launching the system browsers is only possible for Chrome/Chromium."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(s.p,{children:["The programmatic API allows installing and launching browsers from your code. See the ",(0,n.jsx)(s.code,{children:"test"})," folder for examples on how to use the ",(0,n.jsx)(s.code,{children:"install"}),", ",(0,n.jsx)(s.code,{children:"canInstall"}),", ",(0,n.jsx)(s.code,{children:"launch"}),", ",(0,n.jsx)(s.code,{children:"computeExecutablePath"}),", ",(0,n.jsx)(s.code,{children:"computeSystemExecutablePath"})," and other methods."]}),"\n",(0,n.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Class"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"cli",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.cli",children:"CLI"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"installedbrowser",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.installedbrowser",children:"InstalledBrowser"})})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Remarks:"})}),(0,n.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(s.code,{children:"InstalledBrowser"})," class."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"process",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.process",children:"Process"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"timeouterror",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.timeouterror",children:"TimeoutError"})})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Remarks:"})}),(0,n.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(s.code,{children:"TimeoutError"})," class."]})]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"enumerations",children:"Enumerations"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Enumeration"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"browser",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.browser",children:"Browser"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Supported browsers."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"browserplatform",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.browserplatform",children:"BrowserPlatform"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Platform names used to identify a OS platform x architecture combination in the way that is relevant for the browser download."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"chromereleasechannel",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.chromereleasechannel",children:"ChromeReleaseChannel"})})}),(0,n.jsx)("td",{})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Function"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"candownload",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.candownload",children:"canDownload(options)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"computeexecutablepath",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.computeexecutablepath",children:"computeExecutablePath(options)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"computesystemexecutablepath",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.computesystemexecutablepath",children:"computeSystemExecutablePath(options)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"createprofile",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.createprofile",children:"createProfile(browser, opts)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"detectbrowserplatform",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.detectbrowserplatform",children:"detectBrowserPlatform()"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getinstalledbrowsers",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.getinstalledbrowsers",children:"getInstalledBrowsers(options)"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Returns metadata about browsers installed in the cache directory."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getversioncomparator",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.getversioncomparator",children:"getVersionComparator(browser)"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(s.p,{children:"Returns a version comparator for the given browser that can be used to sort browser versions."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"install",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.install",children:"install(options)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"install",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.install",children:"install(options)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"launch",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.launch",children:"launch(opts)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"makeprogresscallback",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.makeprogresscallback",children:"makeProgressCallback(browser, buildId)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"resolvebuildid",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.resolvebuildid",children:"resolveBuildId(browser, platform, tag)"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"uninstall",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.uninstall",children:"uninstall(options)"})})}),(0,n.jsx)("td",{})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Interface"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"getinstalledbrowsersoptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.getinstalledbrowsersoptions",children:"GetInstalledBrowsersOptions"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"installoptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.installoptions",children:"InstallOptions"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"launchoptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.launchoptions",children:"LaunchOptions"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"options",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.options",children:"Options"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"profileoptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.profileoptions",children:"ProfileOptions"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"systemoptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.systemoptions",children:"SystemOptions"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"uninstalloptions",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.uninstalloptions",children:"UninstallOptions"})})}),(0,n.jsx)("td",{})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Variable"})}),(0,n.jsx)("th",{children:(0,n.jsx)(s.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"cdp_websocket_endpoint_regex",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.cdp_websocket_endpoint_regex",children:"CDP_WEBSOCKET_ENDPOINT_REGEX"})})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"webdriver_bidi_websocket_endpoint_regex",children:(0,n.jsx)(s.a,{href:"/browsers-api/browsers.webdriver_bidi_websocket_endpoint_regex",children:"WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX"})})}),(0,n.jsx)("td",{})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,s,r)=>{var n=r(67294),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var n,l={},a=null,c=null;for(n in void 0!==r&&(a=""+r),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(c=s.ref),s)t.call(s,n)&&!d.hasOwnProperty(n)&&(l[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===l[n]&&(l[n]=s[n]);return{$$typeof:i,type:e,key:a,ref:c,props:l,_owner:o.current}}s.Fragment=l,s.jsx=a,s.jsxs=a},85893:(e,s,r)=>{e.exports=r(75251)},11151:(e,s,r)=>{r.d(s,{Z:()=>o,a:()=>t});var n=r(67294);const i={},l=n.createContext(i);function t(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);