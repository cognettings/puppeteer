/*! For license information please see 9aabf2ee.2817470b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67970],{84854:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(85893),a=t(11151);const o={sidebar_label:"KeyInput"},i="KeyInput type",p={id:"api/puppeteer.keyinput",title:"KeyInput type",description:"All the valid keys that can be passed to functions that take user input, such as keyboard.press",source:"@site/versioned_docs/version-22.6.5/api/puppeteer.keyinput.md",sourceDirName:"api",slug:"/api/puppeteer.keyinput",permalink:"/api/puppeteer.keyinput",draft:!1,unlisted:!1,tags:[],version:"22.6.5",frontMatter:{sidebar_label:"KeyInput"},sidebar:"api",previous:{title:"KeyDownOptions",permalink:"/api/puppeteer.keydownoptions"},next:{title:"KeyPressOptions",permalink:"/api/puppeteer.keypressoptions"}},s={},u=[{value:"Signature:",id:"signature",level:4}];function l(n){const e={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"keyinput-type",children:"KeyInput type"}),"\n",(0,r.jsxs)(e.p,{children:["All the valid keys that can be passed to functions that take user input, such as ",(0,r.jsx)(e.a,{href:"/api/puppeteer.keyboard.press",children:"keyboard.press"})]}),"\n",(0,r.jsx)(e.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-typescript",children:"export type KeyInput =\n  | '0'\n  | '1'\n  | '2'\n  | '3'\n  | '4'\n  | '5'\n  | '6'\n  | '7'\n  | '8'\n  | '9'\n  | 'Power'\n  | 'Eject'\n  | 'Abort'\n  | 'Help'\n  | 'Backspace'\n  | 'Tab'\n  | 'Numpad5'\n  | 'NumpadEnter'\n  | 'Enter'\n  | '\\r'\n  | '\\n'\n  | 'ShiftLeft'\n  | 'ShiftRight'\n  | 'ControlLeft'\n  | 'ControlRight'\n  | 'AltLeft'\n  | 'AltRight'\n  | 'Pause'\n  | 'CapsLock'\n  | 'Escape'\n  | 'Convert'\n  | 'NonConvert'\n  | 'Space'\n  | 'Numpad9'\n  | 'PageUp'\n  | 'Numpad3'\n  | 'PageDown'\n  | 'End'\n  | 'Numpad1'\n  | 'Home'\n  | 'Numpad7'\n  | 'ArrowLeft'\n  | 'Numpad4'\n  | 'Numpad8'\n  | 'ArrowUp'\n  | 'ArrowRight'\n  | 'Numpad6'\n  | 'Numpad2'\n  | 'ArrowDown'\n  | 'Select'\n  | 'Open'\n  | 'PrintScreen'\n  | 'Insert'\n  | 'Numpad0'\n  | 'Delete'\n  | 'NumpadDecimal'\n  | 'Digit0'\n  | 'Digit1'\n  | 'Digit2'\n  | 'Digit3'\n  | 'Digit4'\n  | 'Digit5'\n  | 'Digit6'\n  | 'Digit7'\n  | 'Digit8'\n  | 'Digit9'\n  | 'KeyA'\n  | 'KeyB'\n  | 'KeyC'\n  | 'KeyD'\n  | 'KeyE'\n  | 'KeyF'\n  | 'KeyG'\n  | 'KeyH'\n  | 'KeyI'\n  | 'KeyJ'\n  | 'KeyK'\n  | 'KeyL'\n  | 'KeyM'\n  | 'KeyN'\n  | 'KeyO'\n  | 'KeyP'\n  | 'KeyQ'\n  | 'KeyR'\n  | 'KeyS'\n  | 'KeyT'\n  | 'KeyU'\n  | 'KeyV'\n  | 'KeyW'\n  | 'KeyX'\n  | 'KeyY'\n  | 'KeyZ'\n  | 'MetaLeft'\n  | 'MetaRight'\n  | 'ContextMenu'\n  | 'NumpadMultiply'\n  | 'NumpadAdd'\n  | 'NumpadSubtract'\n  | 'NumpadDivide'\n  | 'F1'\n  | 'F2'\n  | 'F3'\n  | 'F4'\n  | 'F5'\n  | 'F6'\n  | 'F7'\n  | 'F8'\n  | 'F9'\n  | 'F10'\n  | 'F11'\n  | 'F12'\n  | 'F13'\n  | 'F14'\n  | 'F15'\n  | 'F16'\n  | 'F17'\n  | 'F18'\n  | 'F19'\n  | 'F20'\n  | 'F21'\n  | 'F22'\n  | 'F23'\n  | 'F24'\n  | 'NumLock'\n  | 'ScrollLock'\n  | 'AudioVolumeMute'\n  | 'AudioVolumeDown'\n  | 'AudioVolumeUp'\n  | 'MediaTrackNext'\n  | 'MediaTrackPrevious'\n  | 'MediaStop'\n  | 'MediaPlayPause'\n  | 'Semicolon'\n  | 'Equal'\n  | 'NumpadEqual'\n  | 'Comma'\n  | 'Minus'\n  | 'Period'\n  | 'Slash'\n  | 'Backquote'\n  | 'BracketLeft'\n  | 'Backslash'\n  | 'BracketRight'\n  | 'Quote'\n  | 'AltGraph'\n  | 'Props'\n  | 'Cancel'\n  | 'Clear'\n  | 'Shift'\n  | 'Control'\n  | 'Alt'\n  | 'Accept'\n  | 'ModeChange'\n  | ' '\n  | 'Print'\n  | 'Execute'\n  | '\\u0000'\n  | 'a'\n  | 'b'\n  | 'c'\n  | 'd'\n  | 'e'\n  | 'f'\n  | 'g'\n  | 'h'\n  | 'i'\n  | 'j'\n  | 'k'\n  | 'l'\n  | 'm'\n  | 'n'\n  | 'o'\n  | 'p'\n  | 'q'\n  | 'r'\n  | 's'\n  | 't'\n  | 'u'\n  | 'v'\n  | 'w'\n  | 'x'\n  | 'y'\n  | 'z'\n  | 'Meta'\n  | '*'\n  | '+'\n  | '-'\n  | '/'\n  | ';'\n  | '='\n  | ','\n  | '.'\n  | '`'\n  | '['\n  | '\\\\'\n  | ']'\n  | \"'\"\n  | 'Attn'\n  | 'CrSel'\n  | 'ExSel'\n  | 'EraseEof'\n  | 'Play'\n  | 'ZoomOut'\n  | ')'\n  | '!'\n  | '@'\n  | '#'\n  | '$'\n  | '%'\n  | '^'\n  | '&'\n  | '('\n  | 'A'\n  | 'B'\n  | 'C'\n  | 'D'\n  | 'E'\n  | 'F'\n  | 'G'\n  | 'H'\n  | 'I'\n  | 'J'\n  | 'K'\n  | 'L'\n  | 'M'\n  | 'N'\n  | 'O'\n  | 'P'\n  | 'Q'\n  | 'R'\n  | 'S'\n  | 'T'\n  | 'U'\n  | 'V'\n  | 'W'\n  | 'X'\n  | 'Y'\n  | 'Z'\n  | ':'\n  | '<'\n  | '_'\n  | '>'\n  | '?'\n  | '~'\n  | '{'\n  | '|'\n  | '}'\n  | '\"'\n  | 'SoftLeft'\n  | 'SoftRight'\n  | 'Camera'\n  | 'Call'\n  | 'EndCall'\n  | 'VolumeDown'\n  | 'VolumeUp';\n"})})]})}function c(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},75251:(n,e,t)=>{var r=t(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(n,e,t){var r,o={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(l=e.ref),e)i.call(e,r)&&!s.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:a,type:n,key:u,ref:l,props:o,_owner:p.current}}e.Fragment=o,e.jsx=u,e.jsxs=u},85893:(n,e,t)=>{n.exports=t(75251)},11151:(n,e,t)=>{t.d(e,{Z:()=>p,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);