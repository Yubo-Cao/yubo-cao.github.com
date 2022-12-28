(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(9587)}])},442:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(4288),i=n(1664),r=n.n(i),o=n(5828);function s(e){let t=e.size||32;return(0,a.BX)(r(),{href:"/",className:"flex items-center gap-2",children:[(0,a.tZ)(o.Z,{name:"/icon.png",size:t}),(0,a.tZ)("p",{className:"".concat(32===t?"text-lg":40===t?"text-xl":"text-2xl"," font-medium sm:max-md:hidden"),children:"Yubo Cao"})]})}var c=n(7294);function l(e){let{open:t,onClick:n}=e,{className:i,size:r}=e;return i=i||"",(0,a.tZ)("div",{onClick:n,className:"transition-all rounded-full active:border active:border-black active:bg-neutral-100 flex justify-center items-center w-12 h-12 ".concat(i),children:(0,a.tZ)(o.Z,{from:"md",name:t?"menu_open":"menu",size:r,className:"transition-all"})})}let m=[{name:"Home",icon:"home",href:"/",description:"Home page"},{name:"Blog",icon:"book",href:"/blog",description:"Coding & Life"},{name:"Projects",icon:"code",href:"/projects",description:"What Yubo has done"},{name:"Resume",icon:"description",href:"/resume",description:"Yubo's resume"}];function d(e){let[t,n]=(0,c.useState)(!1),{name:i,icon:s,href:l,description:m,active:d}=e;return(0,a.BX)("div",{title:m,className:"transition-all flex items-center rounded-full ".concat(d?"bg-primary-100":""," ").concat(t?d?"bg-primary-200":"bg-neutral-100":""),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,a.tZ)(o.Z,{from:"md",name:s,grade:t?200:0,className:"transition-all rounded-full p-3",size:48,iconSize:24,type:"rounded",fill:t}),(0,a.tZ)(r(),{href:l,className:"text-base mr-4 xs:max-sm:hidden",children:i})]})}function u(e){let[t,n]=(0,c.useState)(!1),i=e.height||64;return(0,c.useEffect)(()=>{let e=()=>{t&&n(!1)};return window.addEventListener("resize",e),window.addEventListener("scroll",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}},[t]),(0,a.BX)(a.HY,{children:[(0,a.tZ)(l,{open:t,onClick:()=>n(!t),className:"hidden max-xs:flex"}),(0,a.tZ)("div",{className:"transition-all bg-black fixed left-0 top-0 h-full w-full ".concat(t?"z-10 opacity-40":"-z-10 opacity-0")}),(0,a.BX)("nav",{className:"transition-all flex gap-4 bg-slate-50 z-10\n                    max-xs:px-2\n                    max-xs:gap-0 max-xs:flex-col max-xs:rounded-r-2xl\n                    max-xs:fixed max-xs:top-0 max-xs:left-0 max-xs:w-64 max-xs:h-full max-xs:z-10\n                    ".concat(t?"max-xs:translate-x max-xs:shadow-md":"max-xs:-translate-x-full"),children:[(0,a.tZ)("div",{className:"".concat(64===i?"h-16":"h-12"," items-center hidden max-xs:flex"),children:(0,a.tZ)(l,{open:t,onClick:()=>n(!t)})}),m.map((t,n)=>(0,a.tZ)(d,{name:t.name,icon:t.icon,href:t.href,description:t.description,active:t.name.toLowerCase()===e.active.toLowerCase()},n))]})]})}function f(e){let t=e.height||64,n=e.active;return(0,a.BX)("header",{className:"flex items-center justify-between p-3 bg-slate-50 \n            max-xs:flex-row-reverse max-xs:justify-end max-xs:gap-2",style:{height:"".concat(t,"px")},children:[(0,a.tZ)(s,{size:{64:48,48:40}[t]}),(0,a.tZ)(u,{active:n,height:t})]})}},5828:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(4288),i=n(5675),r=n.n(i);function o(e,t){let n=t[0];for(let a of t)Math.abs(e-a)<Math.abs(e-n)&&(n=a);return n}function s(e){let t=e.from||"md",n=e.type||"outlined",i=e.weight?Math.max(100,Math.min(700,100*Math.round(e.weight/100))):200,r=e.grade?o(e.grade,[-25,0,200]):0,s=e.size||24,c=e.className||"";if("md"===t){let l=["rounded","sharp","outlined"];if(!l.includes(n))throw Error("Material Design Icons only support ".concat(l.join(", "),". Got ").concat(n,"."));return(0,a.tZ)("i",{className:{rounded:"material-symbols-rounded",sharp:"material-symbols-sharp",outlined:"material-symbols-outlined"}[n]+" "+c,style:{fontSize:s,fontVariationSettings:"'wght' ".concat(i,", 'GRAD' ").concat(r,", 'FILL' ").concat(e.fill?1:0,", 'opsz' ").concat(o(function(e){if("number"==typeof e)return e;let t=e.match(/^(\d+)(px|rem|em)$/);if(!t)throw Error("Invalid length: ".concat(e));let[,n,a]=t;return"px"!==a&&"rem"!==a&&"em"!==a?20:parseInt(n)*({px:1,rem:16,em:16})[a]}(s),[20,24,40,48]))},children:e.name})}if("fa"===t){let m=["brand","classic","regular","sharp","solid","outlined"];if(!m.includes(n))throw Error("Font Awesome only support ".concat(m.join(", "),". Got ").concat(n,"."));return(0,a.tZ)("i",{className:"fa ".concat({brand:"fab",classic:"fas",regular:"far",sharp:"fas",solid:"fas",outlined:"far"}[n]," fa-").concat(e.name," ").concat(c),style:{fontSize:s}})}if("mdi"===t){if("solid"!==n)throw Error("Material Design Icons only support solid icons. Got ".concat(n,"."));return(0,a.tZ)("i",{className:"mdi mdi-".concat(e.name," ").concat(c),style:{fontSize:s,fontWeight:i}})}throw Error("Unknown icon source: ".concat(t))}function c(e){let t=e.size||24,n=e.iconSize||t,i=e.wrap||e.wrapClassName||n!==t,o=e.name.startsWith("/")?"image":void 0===e.from?"md":e.from,c={...e};if(c.size=n,!i&&"image"!==o)return s(c);let l="image"===o?(0,a.tZ)(r(),{src:e.name,width:n,height:n,alt:e.alt||"",className:e.className||""}):s(c);return i?(0,a.tZ)("div",{className:"flex justify-center items-center ".concat(e.wrapClassName||""),style:{width:t,height:t},children:l}):l}},9587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(4288),i=n(442);function r(){return(0,a.tZ)(a.HY,{children:(0,a.tZ)(i.Z,{active:"projects"})})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);