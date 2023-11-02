(self.webpackChunkl_4_dsr_wiki=self.webpackChunkl_4_dsr_wiki||[]).push([[930],{1435:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var s=n(7294),o=n(1151),c=n(5742),a=n(2389),r=n(6010),l=n(2949),i=n(6668);function u(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,l.I)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var d=n(5281),m=n(7594),f=n.n(m);const h=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:s}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function x(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&p.test(c)){const e=c.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(g).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(s,o),r=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let f=0;f<r.length;){const e=r[f].match(a);if(!e){f+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${f},`:u[t]?l[u[t]].start=f:d[t]&&(l[d[t]].range+=`${l[d[t]].start}-${f-1},`),r.splice(f,1)}n=r.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const v={codeBlockContainer:"codeBlockContainer_Ckt0"};var j=n(5893);function k(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=t[s];c&&"string"==typeof o&&(n[c]=o)})),n}(u());return(0,j.jsx)(t,{...n,style:s,className:(0,r.Z)(n.className,v.codeBlockContainer,d.k.common.codeBlock)})}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return(0,j.jsx)(k,{as:"pre",tabIndex:0,className:(0,r.Z)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,j.jsx)("code",{className:C.codeBlockLines,children:t})})}var y=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function B(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=L);const o=(0,y.zX)(t),c=(0,y.Ql)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(2573);const E={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=o({line:t,className:(0,r.Z)(n,s&&E.codeLine)}),l=t.map(((e,t)=>(0,j.jsx)("span",{...c({token:e,key:t})},t)));return(0,j.jsxs)("span",{...a,children:[s?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:E.codeLineNumber}),(0,j.jsx)("span",{className:E.codeLineContent,children:l})]}):l,(0,j.jsx)("br",{})]})}var H=n(5999);function Z(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function S(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function A(e){let{code:t,className:n}=e;const[o,c]=(0,s.useState)(!1),a=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),s=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection(),c=o.rangeCount>0&&o.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}n.remove(),c&&(o.removeAllRanges(),o.addRange(c)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,j.jsx)("button",{type:"button","aria-label":o?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:l,children:(0,j.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,j.jsx)(Z,{className:I.copyButtonIcon}),(0,j.jsx)(S,{className:I.copyButtonSuccessIcon})]})})}function T(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const M={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function O(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,j.jsx)("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,s&&M.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,j.jsx)(T,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function $(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:a,language:l}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,i.L)(),f=function(e){return e?.toLowerCase()}(l??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),p=u(),g=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return B(c,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),b=function(e){return e?.match(h)?.groups.title??""}(o)||c,{lineClassNames:v,code:N}=x(t,{metastring:o,language:f,magicComments:m}),y=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,j.jsxs)(k,{as:"div",className:(0,r.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`),children:[b&&(0,j.jsx)("div",{className:C.codeBlockTitle,children:b}),(0,j.jsxs)("div",{className:C.codeBlockContent,children:[(0,j.jsx)(w.y$,{theme:p,code:N,language:f??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:c}=e;return(0,j.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,r.Z)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,j.jsx)("code",{className:(0,r.Z)(C.codeBlockLines,y&&C.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,j.jsx)(_,{line:e,getLineProps:o,getTokenProps:c,classNames:v[t],showLineNumbers:y},t)))})})}}),(0,j.jsxs)("div",{className:C.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,j.jsx)(O,{className:C.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,j.jsx)(A,{className:C.codeButton,code:N})]})]})]})}function R(e){let{children:t,...n}=e;const o=(0,a.Z)(),c=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof c?$:N;return(0,j.jsx)(r,{...n,children:c},String(o))}var W=n(9960);var V=n(6043);const z={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function P(e){return!!e&&("SUMMARY"===e.tagName||P(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function D(e){let{summary:t,children:n,...o}=e;const c=(0,a.Z)(),l=(0,s.useRef)(null),{collapsed:i,setCollapsed:u}=(0,V.u)({initialState:!o.open}),[d,m]=(0,s.useState)(o.open),f=s.isValidElement(t)?t:(0,j.jsx)("summary",{children:t??"Details"});return(0,j.jsxs)("details",{...o,ref:l,open:d,"data-collapsed":i,className:(0,r.Z)(z.details,c&&z.isBrowser,o.className),onMouseDown:e=>{P(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;P(t)&&q(t,l.current)&&(e.preventDefault(),i?(u(!1),m(!0)):u(!0))},children:[f,(0,j.jsx)(V.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),m(!e)},children:(0,j.jsx)("div",{className:z.collapsibleContent,children:n})})]})}const F={details:"details_b_Ee"},U="alert alert--info";function G(e){let{...t}=e;return(0,j.jsx)(D,{...t,className:(0,r.Z)(U,F.details,t.className)})}function Y(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),o=(0,j.jsx)(j.Fragment,{children:t.filter((e=>e!==n))});return(0,j.jsx)(G,{...e,summary:n,children:o})}var J=n(2503);function K(e){return(0,j.jsx)(J.Z,{...e})}const Q={containsTaskList:"containsTaskList_mC6p"};function X(e){if(void 0!==e)return(0,r.Z)(e,e?.includes("contains-task-list")&&Q.containsTaskList)}const ee={img:"img_ev3q"};var te=n(7083),ne=n(1875);const se={Head:c.Z,details:Y,Details:Y,code:function(e){return s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,j.jsx)("code",{...e}):(0,j.jsx)(R,{...e})},a:function(e){return(0,j.jsx)(W.Z,{...e})},pre:function(e){return(0,j.jsx)(j.Fragment,{children:e.children})},ul:function(e){return(0,j.jsx)("ul",{...e,className:X(e.className)})},img:function(e){return(0,j.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,r.Z)(t,ee.img))});var t},h1:e=>(0,j.jsx)(K,{as:"h1",...e}),h2:e=>(0,j.jsx)(K,{as:"h2",...e}),h3:e=>(0,j.jsx)(K,{as:"h3",...e}),h4:e=>(0,j.jsx)(K,{as:"h4",...e}),h5:e=>(0,j.jsx)(K,{as:"h5",...e}),h6:e=>(0,j.jsx)(K,{as:"h6",...e}),admonition:te.Z,mermaid:ne.Z};function oe(e){let{children:t}=e;return(0,j.jsx)(o.Z,{components:se,children:t})}},3743:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var s=n(7294),o=n(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):s.push(o)})),s}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function i(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,s.useRef)(void 0),n=i();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let o=t;o<=n;o+=1)s.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:c,maxHeadingLevel:a}),i=l(r,{anchorTopOffset:n.current}),u=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var d=n(9960),m=n(5893);function f(e){let{toc:t,className:n,linkClassName:s,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const h=s.memo(f);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:d,...f}=e;const p=(0,o.L)(),g=i??p.tableOfContents.minHeadingLevel,b=d??p.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,s.useMemo)((()=>a({toc:c(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:b});return u((0,s.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:b}}),[r,l,g,b])),(0,m.jsx)(h,{toc:x,className:n,linkClassName:r,...f})}},9407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(7294);var s=n(6010),o=n(3743);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=n(5893);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function i(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,s.Z)(c.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(o.Z,{...n,linkClassName:r,linkActiveClassName:l})})}},2212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});n(7294);var s=n(6010),o=n(5999),c=n(5742),a=n(5893);function r(){return(0,a.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function i(){return(0,a.jsx)(c.Z,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var u=n(5281),d=n(7083);function m(e){let{className:t}=e;return(0,a.jsx)(d.Z,{type:"caution",title:(0,a.jsx)(r,{}),className:(0,s.Z)(t,u.k.common.unlistedBanner),children:(0,a.jsx)(l,{})})}function f(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{}),(0,a.jsx)(m,{...e})]})}},7594:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);