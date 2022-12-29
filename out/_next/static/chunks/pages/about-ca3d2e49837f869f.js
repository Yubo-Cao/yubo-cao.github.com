(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(3806)}])},442:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var i=n(4288),a=n(1664),r=n.n(a),l=n(5828);function o(e){let t=e.size||32;return(0,i.BX)(r(),{href:"/",className:"flex items-center gap-2",children:[(0,i.tZ)(l.Z,{name:"/icon.png",size:t}),(0,i.tZ)("p",{className:"".concat(32===t?"text-lg":40===t?"text-xl":"text-2xl"," font-medium sm:max-md:hidden"),children:"Yubo Cao"})]})}var c=n(7294);function s(e){let{open:t,onClick:n}=e,{className:a,size:r}=e;return a=a||"",(0,i.tZ)("div",{onClick:n,className:"transition-all rounded-full active:border active:border-black active:bg-neutral-100 flex justify-center items-center w-12 h-12 ".concat(a),children:(0,i.tZ)(l.Z,{from:"md",name:t?"menu_open":"menu",size:r,className:"transition-all"})})}let d=[{name:"Home",icon:"home",href:"/",description:"Home page"},{name:"Blog",icon:"book",href:"/blog",description:"Coding & Life"},{name:"Projects",icon:"code",href:"/projects",description:"What Yubo has done"},{name:"About",icon:"info",href:"/about",description:"About Yubo"}];function m(e){let[t,n]=(0,c.useState)(!1),{name:a,icon:o,href:s,description:d,active:m}=e;return(0,i.BX)("div",{title:d,className:"transition-all flex items-center rounded-full ".concat(m?"bg-primary-100":""," ").concat(t?m?"bg-primary-200":"bg-neutral-100":""),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,i.tZ)(l.Z,{from:"md",name:o,grade:t?200:0,className:"transition-all rounded-full p-3",size:48,iconSize:24,type:"rounded",fill:t}),(0,i.tZ)(r(),{href:s,className:"text-base mr-4 xs:max-sm:hidden",children:a})]})}function h(e){let[t,n]=(0,c.useState)(!1),a=e.height||64;return(0,c.useEffect)(()=>{let e=()=>{t&&n(!1)};return window.addEventListener("resize",e),window.addEventListener("scroll",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e)}},[t]),(0,i.BX)(i.HY,{children:[(0,i.tZ)(s,{open:t,onClick:()=>n(!t),className:"hidden max-xs:flex"}),(0,i.tZ)("div",{className:"transition-all bg-black fixed left-0 top-0 h-full w-full ".concat(t?"z-10 opacity-40":"-z-10 opacity-0")}),(0,i.BX)("nav",{className:"transition-all flex gap-4 bg-slate-50 z-10\n                    max-xs:px-2\n                    max-xs:gap-0 max-xs:flex-col max-xs:rounded-r-2xl\n                    max-xs:fixed max-xs:top-0 max-xs:left-0 max-xs:w-64 max-xs:h-full max-xs:z-10\n                    ".concat(t?"max-xs:translate-x max-xs:shadow-md":"max-xs:-translate-x-full"),children:[(0,i.tZ)("div",{className:"".concat(64===a?"h-16":"h-12"," items-center hidden max-xs:flex"),children:(0,i.tZ)(s,{open:t,onClick:()=>n(!t)})}),d.map((t,n)=>(0,i.tZ)(m,{name:t.name,icon:t.icon,href:t.href,description:t.description,active:t.name.toLowerCase()===e.active.toLowerCase()},n))]})]})}function u(e){let t=e.height||64,n=e.active;return(0,i.BX)("header",{className:"flex items-center justify-between p-3 bg-slate-50 \n            max-xs:flex-row-reverse max-xs:justify-end max-xs:gap-2",style:{height:"".concat(t,"px")},children:[(0,i.tZ)(o,{size:{64:48,48:40}[t]}),(0,i.tZ)(h,{active:n,height:t})]})}},5828:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(4288),a=n(5675),r=n.n(a);function l(e,t){let n=t[0];for(let i of t)Math.abs(e-i)<Math.abs(e-n)&&(n=i);return n}function o(e){let t=e.from||"md",n=e.type||"outlined",a=e.weight?Math.max(100,Math.min(700,100*Math.round(e.weight/100))):200,r=e.grade?l(e.grade,[-25,0,200]):0,o=e.size||24,c=e.className||"";if("md"===t){let s=["rounded","sharp","outlined"];if(!s.includes(n))throw Error("Material Design Icons only support ".concat(s.join(", "),". Got ").concat(n,"."));return(0,i.tZ)("i",{className:{rounded:"material-symbols-rounded",sharp:"material-symbols-sharp",outlined:"material-symbols-outlined"}[n]+" "+c,style:{fontSize:o,fontVariationSettings:"'wght' ".concat(a,", 'GRAD' ").concat(r,", 'FILL' ").concat(e.fill?1:0,", 'opsz' ").concat(l(function(e){if("number"==typeof e)return e;let t=e.match(/^(\d+)(px|rem|em)$/);if(!t)throw Error("Invalid length: ".concat(e));let[,n,i]=t;return"px"!==i&&"rem"!==i&&"em"!==i?20:parseInt(n)*({px:1,rem:16,em:16})[i]}(o),[20,24,40,48]))},children:e.name})}if("fa"===t){let d=["brand","classic","regular","sharp","solid","outlined"];if(!d.includes(n))throw Error("Font Awesome only support ".concat(d.join(", "),". Got ").concat(n,"."));return(0,i.tZ)("i",{className:"fa ".concat({brand:"fab",classic:"fas",regular:"far",sharp:"fas",solid:"fas",outlined:"far"}[n]," fa-").concat(e.name," ").concat(c),style:{fontSize:o}})}if("mdi"===t){if("solid"!==n)throw Error("Material Design Icons only support solid icons. Got ".concat(n,"."));return(0,i.tZ)("i",{className:"mdi mdi-".concat(e.name," ").concat(c),style:{fontSize:o,fontWeight:a}})}throw Error("Unknown icon source: ".concat(t))}function c(e){let t=e.size||24,n=e.iconSize||t,a=e.wrap||e.wrapClassName||n!==t,l=e.name.startsWith("/")?"image":void 0===e.from?"md":e.from,c={...e};if(c.size=n,!a&&"image"!==l)return o(c);let s="image"===l?(0,i.tZ)(r(),{src:e.name,width:n,height:n,alt:e.alt||"",className:e.className||""}):o(c);return a?(0,i.tZ)("div",{className:"flex justify-center items-center ".concat(e.wrapClassName||""),style:{width:t,height:t},children:s}):s}},2926:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s},cZ:function(){return c}});var i=n(4288),a=n(7294),r=n(4345);function l(e){let t=e.parentElement,n=null==t?void 0:t.firstChild;if(!t||!n)return -1;let i=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&i++,n!==e&&n.nextSibling);)n=n.nextSibling;return i}function o(e){let t=e.parentElement;return!!t&&"MAIN"===t.tagName}function c(e){let t=function(e){for(;"SECTION"!==e.tagName&&e.parentElement;)e=e.parentElement;return e}(e);return!!t&&t.classList.contains("alternate")}function s(e){let t=e.id||"",n=e.className||"",c=a.useRef(null),s=void 0!==e.title||void 0!==e.subtitle,d=e.flow||!1,m=e.alternate||"even",h=e.level||2,u=e=>{let t=document.createElement("div");return t.classList.add("absolute","-left-full","-right-full","xl:right-0","top-0","rounded-lg","bottom-0","bg-primary-100/30","-z-10"),e.classList.add("relative","alternate"),e.appendChild(t),()=>null==e?void 0:e.removeChild(t)};return(0,a.useEffect)(()=>{let e=c.current;if(e){let t,n,i,a,r;if(o(e)||e.classList.remove("my-6","py-8"),n=null==(t=e.parentElement)?void 0:t.firstChild,t&&n&&n===e&&(e.classList.remove("my-6"),e.classList.add("mb-6")),o(e)||(i=e.parentElement)&&"ROOT"===i.tagName)switch(m){case"even":(-1===(a=l(e))?1:a%2!=0)||u(e);break;case"odd":(-1===(r=l(e))?1:r%2!=1)||u(e)}}}),(0,i.BX)("section",{id:t,className:"my-6 py-8 px-4 "+n,ref:c,children:[s&&(0,i.tZ)(r.Z,{title:e.title,subtitle:e.subtitle,level:h}),(0,i.tZ)("div",{className:"".concat(d?"grid grid-cols-fit-72 md:grid-cols-fit-102 gap-2 sm:gap-4 ":" "," ").concat(s?h<3?"mt-8 ":"mt-4 ":" "," ").concat(e.contentClassName||""),children:e.children})]})}},4345:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(4288),a=n(7294);function r(e){let t=e=>"string"==typeof e?e.split(/\s+/).map(e=>e[0].toUpperCase()+e.substring(1)).join(" "):e,n=e.title?t(e.title):"",r=e.subtitle?t(e.subtitle):"",l=e.level,o=e.className||"",c=e.subtitleClassName||"";if(void 0!==e.children&&void 0===e.title&&(n=e.children),void 0===n)throw Error("Title must have a title.");if(""===n&&""!==r)throw Error("Subtitle must have a title.");return(0,i.BX)(i.HY,{children:[a.createElement("h"+l,{className:"".concat({h1:"text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-indigo-500",h2:"text-4xl font-extrabold text-primary-400",h3:"text-2xl font-bold",h4:"text-3xl font-semibold",h5:"text-2xl",h6:"text-xl"}["h"+l]," mb-1.5 ").concat(o)},n,[]),""!==r&&a.createElement("div",{className:"text-lg font-light ".concat(c)},r,[])]})}},3806:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(4288),a=n(4345),r=n(5675),l=n.n(r);function o(e){let t=e.height||144,n=Math.round(.5*t),r=Math.round(.1*t);return(0,i.BX)("div",{className:"flex items-center",children:[(0,i.tZ)(l(),{src:"/images/achievement/wheat-left.svg",alt:"Left side of wheat",width:n,height:t,style:{marginRight:"-".concat(r,"px")}}),(0,i.BX)("div",{className:"flex-1 text-center",children:[(0,i.tZ)(a.Z,{title:e.title,subtitle:e.subtitle,level:e.level||3,className:"text-primary-400",subtitleClassName:"text-primary-400 -mt-2"}),(0,i.BX)("p",{className:"font-light prose",children:[e.description,e.children]})]}),(0,i.tZ)(l(),{src:"/images/achievement/wheat-right.svg",alt:"Left side of wheat",width:n,height:t,style:{marginLeft:"-".concat(r,"px")}})]})}var c=n(1664),s=n.n(c),d=n(7294),m=n(2926);function h(e){let t=e.type||"outlined",n=e.hoverType||t,a=e.activeType||t,r=e.className||"",l=e.rounded||!0,o=e.accent||"gray";return(0,i.tZ)("div",{className:"p-4 transition-all cursor-pointer ".concat(l?"rounded-lg":"","  ").concat({outlined:"hover:border-".concat(o,"-300"),filled:"hover:bg-".concat(o,"-100"),elevated:"hover:shadow-md hover:shadow-".concat(o,"-300/30")}[n]," ").concat({outlined:"active:border-".concat(o,"-400"),filled:"active:bg-".concat(o,"-200"),elevated:"active:shadow-lg active:shadow-".concat(o,"-400/30")}[a]," ").concat({outlined:"border border-".concat(o,"-200"),filled:"bg-".concat(o,"-100/30"),elevated:"shadow shadow-".concat(o,"-200/30")}[t]," ")+r,onClick:e.onClick,ref:e.rootRef,children:e.children})}function u(e){let t=(0,d.useRef)(null),n=e.accent||"gray",a=e.alternateAccent||"primary",[r,l]=(0,d.useState)(n);return(0,d.useEffect)(()=>{let e=t.current;e&&l((0,m.cZ)(e)?a:n)},[t,a,n]),(0,i.tZ)(h,{className:e.className,onClick:e.onClick,type:e.type,hoverType:e.hoverType,activeType:e.activeType,rounded:e.rounded,accent:r,rootRef:t,children:e.children})}function p(e){let[t,n]=d.useState(!1),a=(0,d.useRef)(null),r=t=>{t.stopPropagation(),navigator.clipboard.writeText(e.content),n(!0),a.current&&clearTimeout(a.current),a.current=window.setTimeout(()=>{n(!1)},2e3),e.onClick&&e.onClick()};return(0,i.BX)("span",{className:"relative cursor-pointer ".concat(e.className),style:e.style,onClick:r,children:[e.children,(0,i.tZ)("span",{className:"absolute bg-black text-white rounded-md p-2 text-sm top-full left-1/2 -translate-x-1/2 transition-all",style:{clipPath:t?"polygon(0 0, 100% 0%, 100% 100%, 0 100%)":"polygon(0 0, 100% 0%, 100% 0, 0 0)"},children:"Copied"})]})}var f=n(5828);function g(e){let t=e.open||!1,n=e.showCloseButton||!0,[a,r]=d.useState(t),l=d.useRef(null);d.useEffect(()=>{r(t)},[t]);let o=()=>{r(!1),setTimeout(()=>{e.onClose()},150)};return(0,i.tZ)("div",{className:"transition-all fixed inset-0 bg-black flex items-center justify-center\n              ".concat(a?"bg-opacity-50 backdrop-blur-sm opacity-100  z-50":"bg-opacity-0 opacity-0 -z-50"),ref:l,children:(0,i.BX)("div",{className:"relative bg-white rounded-md p-8 ".concat(e.className||""," transition-all  transform ").concat(a?"scale-100":"scale-95"),style:e.style,children:[n&&(0,i.tZ)("button",{onClick:o,className:"absolute top-2 right-2 p-2 cursor-pointer",children:(0,i.tZ)(f.Z,{name:"close"})}),e.children]})})}function b(e){let t=e.type,n=e.value,a={email:(0,i.tZ)(f.Z,{name:"email",size:48,from:"md",type:"rounded",fill:!0}),tel:(0,i.tZ)(f.Z,{name:"phone",size:48,from:"md",type:"outlined",fill:!0}),discord:(0,i.tZ)(f.Z,{name:"discord",size:48,from:"fa",type:"brand"}),github:(0,i.tZ)(f.Z,{name:"github",size:48,from:"fa",type:"brand"})}[t],[r,l]=d.useState(!1),o={email:()=>{window.open("mailto:".concat(n))},tel:()=>{window.open("tel:".concat(n))},discord:()=>{l(!0)},github:()=>{window.open("https://".concat(n,".github.com"),"_blank")}}[t];return(0,i.BX)(u,{onClick:o,className:"p-4",activeType:"elevated",hoverType:"elevated",accent:"gray",alternateAccent:"primary",children:[(0,i.BX)("div",{className:"flex items-center gap-4",children:[a,(0,i.tZ)("div",{className:"text-lg font-medium",children:n})]}),"discord"===t&&(0,i.BX)(g,{onClose:()=>{l(!1),window.open("https://discord.com/users/@me","_blank")},open:r,children:[(0,i.tZ)("p",{className:"text-2xl font-bold mb-2",children:"Discord"}),(0,i.BX)("p",{className:"prose",children:["Click my discord username"," ",(0,i.tZ)(p,{content:n,className:"text-blue-500 hover:underline",children:(0,i.tZ)("code",{children:n})}),"You will be sent to"," ",(0,i.tZ)(s(),{href:"https://discord.com/users/@me",children:"https://discord.com/users/@me"})," ","after you close"]})]})]})}function v(e){let[t,n,i]=e.split("-").map(e=>parseInt(e,10)),a=["January","February","March","April","May","June","July","August","September","October","November","December"];return i?"".concat(a[n-1]," ").concat(i,", ").concat(t):"".concat(a[n-1]," ").concat(t)}function y(e){return e.toUpperCase().substring(0,1)+e.toLowerCase().substring(1,e.length)}function x(e){let t=e.title,n=e.company,a=v(e.start),r=e.end?v(e.end):"Present";return(0,i.tZ)(m.ZP,{title:y(n),subtitle:(0,i.BX)(i.HY,{children:[(0,i.BX)("p",{className:"font-semibold text-base",children:[" ",y(t)," "]}),(0,i.BX)("p",{className:"font-light text-base",children:[" ","".concat(a,"–").concat(r)," "]})]}),level:3,contentClassName:"prose",children:e.children})}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n(8417),n(8679);var Z=n(7906);function N(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,Z.O)(t)}n(7278);var C=function(){var e=N.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function B(){let e=w(["\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    "]);return B=function(){return e},e}function S(){let e=w(["\n        0% {\n            transform: rotate(-140deg);\n        }\n        50% {\n            transform: rotate(-160deg);\n        }\n        100% {\n            transform: rotate(140deg);\n        }\n    "]);return S=function(){return e},e}function X(){let e=w(["\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(220deg);\n        }\n    "]);return X=function(){return e},e}function E(){let e=w(["\n                width: ","px;\n                height: ","px;\n                animation: "," 4.8s linear infinite;\n                position: relative;\n            "]);return E=function(){return e},e}function z(){let e=w(["\n                    display: block;\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    bottom: 0;\n                    right: 0;\n                    margin: auto;\n                    height: ","px;\n                    width: ","px;\n                    clip: rect(0, ","px, ","px, ","px);\n                    animation: ",' 1.2s linear infinite;\n\n                    &::after {\n                        content: "";\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        bottom: 0;\n                        right: 0;\n                        margin: auto;\n                        height: ',"px;\n                        width: ","px;\n                        border-radius: 50%;\n                        clip: rect(0, ","px, ","px, ","px);\n                        animation: "," 1.2s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n                    }\n                "]);return z=function(){return e},e}function k(e){var t;let{type:n,size:a,width:r,height:l,className:o,lineheight:c}=e;if(!r&&!l&&!a)throw Error("You must specify either width, height, or size for a text loading component");switch(n){case"text":let s;return t=l||a,s=c||16,(0,i.tZ)("div",{style:{width:r||a,height:t},className:"animate-pulse space-y-2 \n            overflow-hidden ".concat(o||""),children:[...Array(Math.ceil(t/s))].map((e,t)=>(0,i.tZ)("div",{className:"bg-gray-300 rounded w-full",style:{height:s}},t))});case"icon":let d=a;if(!d){if(r&&l&&r!==l)throw Error("Width and height must be equal for an icon loading component");d=r||l}return function(e,t){let n=C(B()),a=C(S()),r=C(X());return(0,i.tZ)("div",{css:N(E(),e,e,n),className:"".concat(t||""),children:(0,i.tZ)("span",{css:N(z(),e,e,e,e,e/2,r,e,e,e,e,e/2,a),className:"after:border-gray-300 after:border-4 after:border-solid after:rounded-full"})})}(d,o);case"image":if(!r||!l)throw Error("You must specify both width and height for an image loading component");return(0,i.tZ)("div",{style:{width:r,height:l},className:o||"",children:(0,i.tZ)("div",{className:"w-full h-full bg-gray-300 rounded"})});default:throw Error("Invalid loading type")}}function T(e){let{username:t,name:n}=e,[r,o]=(0,d.useState)(""),[c,s]=(0,d.useState)("");return(0,d.useEffect)(()=>{fetch("https://api.github.com/users/".concat(t)).then(e=>e.json()).then(e=>{o(e.avatar_url),s(e.bio||"NULL")}).catch(e=>{o("/images/error.png"),s(e.message)})},[t]),(0,i.BX)(u,{onClick:()=>window.open("https://github.com/".concat(t),"_blank"),className:"flex flex-col gap-2 xs:flex-row xs:gap-4 xs:items-center",hoverType:"elevated",activeType:"elevated",accent:"gray",alternateAccent:"primary",children:[r?(0,i.tZ)(l(),{src:r,alt:t,className:"w-20 h-20 rounded-full",width:80,height:80}):(0,i.tZ)(k,{type:"icon",size:80}),(0,i.BX)("div",{className:"space-y-0",children:[(0,i.tZ)(a.Z,{level:3,children:n||t}),"NULL"!==c?c?(0,i.tZ)("p",{children:c}):(0,i.tZ)(k,{type:"text",width:300,height:45}):null]})]})}var L=n(442);function A(e){let t=e.items,n=e.level||1,a=e.ordered||!1,r=e.className||"",l=[],o="transition-all no-underline hover:underline text-slate-300 hover:text-slate-500 "+r;for(let c=0;c<t.length;c++){let d=t[c];if(d.level===n){let m=t[c+1];if(m&&m.level>n){let h=[];for(;m&&m.level>n;)h.push(m),m=t[++c+1];l.push((0,i.BX)("li",{children:[(0,i.tZ)(s(),{href:"#".concat(d.id),className:o,children:d.title}),(0,i.tZ)(A,{items:h,level:n+1,ordered:a})]},d.id))}else l.push((0,i.tZ)("li",{children:(0,i.tZ)(s(),{href:"#".concat(d.id),className:o,children:d.title})},d.id))}}return a?(0,i.tZ)("ol",{className:"mt-0 ml-0",children:l}):(0,i.tZ)("ul",{className:"mt-0 ml-0",children:l})}class P extends d.Component{componentDidMount(){let e=document.querySelector("main")||document.body,t=Array.from(e.querySelector("main")?e.querySelector("main").querySelectorAll("h1, h2, h3, h4, h5, h6"):e.querySelectorAll("h1, h2, h3, h4, h5, h6")),n=t.filter(e=>parseInt(e.tagName[1])<=this.level).map(e=>{let t=e.id;return""===t&&(t=e.innerText.toLowerCase().replace(/\s+/g,"-"),e.id=t),{id:t,title:e.innerText,level:parseInt(e.tagName[1])}});this.setState({toc:n});let i=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target.id,n=document.querySelector('nav a[href$="#'.concat(t,'"]'));n&&(e.intersectionRatio>0?(n.classList.remove("text-slate-300"),n.classList.add("text-slate-500","font-medium","border-l-4","border-slate-500","pl-4","-ml-4"),n.parentElement.classList.add("list-none")):(n.classList.add("text-slate-300"),n.classList.remove("text-slate-500","font-medium","border-l-4","border-slate-500","pl-4","-ml-4"),n.parentElement.classList.remove("list-none")))})});t.forEach(e=>{i.observe(e)})}render(){return(0,i.BX)("aside",{className:"sticky top-2 mr-8 prose self-start hidden xl:block "+this.className,children:[(0,i.tZ)(a.Z,{level:2,className:"mb-4",children:"Table of Content"}),(0,i.tZ)("nav",{ref:this.nav,children:(0,i.tZ)(A,{items:this.state.toc,ordered:this.ordered})})]})}constructor(e){super(e),this.state={toc:[]},this.nav=d.createRef(),this.level=e.level||6,this.ordered=e.ordered||!1,this.className=e.className||""}}function j(e){let{active:t,children:n}=e;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(L.Z,{active:t}),(0,i.BX)("div",{className:"xl:grid xl:grid-cols-nav xl:gap-4 mt-4 mx-auto max-xl:overflow-x-hidden",style:{maxWidth:"min(100%, 1444px)"},children:[(0,i.tZ)("main",{className:"mx-6 sm:mx-8 md:mx-16 xl:mr-0 flex flex-col",children:n}),(0,i.tZ)(P,{})]})]})}var I=n(1163);function _(e){let t=e.size||64,n=e.description||"string"==typeof e.children?e.children:"",a=(0,d.useRef)(null),r=(0,I.useRouter)();return(0,i.BX)(u,{className:"flex flex-row gap-4 items-start justify-start flex-wrap",onClick:()=>r.push(e.url),accent:"gray",alternateAccent:"primary",hoverType:"elevated",activeType:"elevated",children:[(0,i.tZ)(f.Z,{name:e.name,size:t,className:"image-primary-400",wrap:!0,grade:200,iconSize:e.iconSize}),(0,i.BX)("div",{className:"flex-1 basis-64 prose",ref:a,children:[(0,i.tZ)("h3",{children:e.title}),(0,i.BX)("div",{className:"flex-1",children:[n&&(0,i.tZ)("p",{children:n}),"object"==typeof e.children&&e.children]})]})]})}function M(e){var t,n;let a=e.names||(null===(t=null===(n=e.children)||void 0===n?void 0:n.split(/(\s+|,)/))||void 0===t?void 0:t.filter(e=>""!==e&&" "!==e&&","!==e))||[];if(0===a.length)throw Error("No icon name provided");return(0,i.tZ)("div",{className:"flex items-center gap-2 ".concat(e.className||""),children:a.map((t,n)=>d.createElement(f.Z,{key:n,name:t,...e,className:e.iconClassName}))})}function O(e){return(0,i.tZ)(m.ZP,{title:e.title,subtitle:(0,i.tZ)(M,{from:"fa",type:e.type||"solid",iconSize:24,size:48,wrapClassName:"transition-all rounded-full bg-slate-100 hover:bg-slate-200",iconClassName:"image-primary-400",children:e.icons}),level:3,contentClassName:"prose max-w-3xl",children:(0,i.tZ)("p",{className:"mt-2",children:e.children})})}function R(){return(0,i.BX)(j,{active:"About",children:[(0,i.tZ)(a.Z,{level:1,children:"About me"}),(0,i.BX)(m.ZP,{title:"Projects",subtitle:"My hobby, passion, and dream",flow:!0,children:[(0,i.BX)(_,{title:"My Website",name:"public",url:"https://yubo-cao.github.io",children:["A gallery of my projects and a blog. Built with",(0,i.tZ)("code",{children:"Next.js"}),", ",(0,i.tZ)("code",{children:"React"}),", ",(0,i.tZ)("code",{children:"Tailwind CSS"}),",",(0,i.tZ)("code",{children:"SASS"}),", and ",(0,i.tZ)("code",{children:"TypeScript"}),"."]}),(0,i.BX)(_,{title:"FPN Object detection",name:"/images/about/object.png",iconSize:48,url:"https://www.github.com/yubo-cao/RedFTCController",children:["A feature pyramid network object detection model for the FTC robotics competition. Built with ",(0,i.tZ)("code",{children:"Python"})," and ",(0,i.tZ)("code",{children:"TensorFlow"}),"."]}),(0,i.BX)(_,{title:"Algorithms",name:"/images/about/flow-chart.png",iconSize:48,url:"https://www.github.com/yubo-cao/Algorithms",children:["A collection of solutions to common algorithms question and a book regarding them. Built with ",(0,i.tZ)("code",{children:"C++"}),", ",(0,i.tZ)("code",{children:"Java"}),", and ",(0,i.tZ)("code",{children:"LaTeX"}),"."]}),(0,i.BX)(_,{title:"Chemistry Language",name:"science",url:"https://github.com/Yubo-Cao/chemistry_language",children:["A programming language for chemistry supporting chemical equations and dimensional analysis. Built with ",(0,i.tZ)("code",{children:"Python"}),"."]}),(0,i.BX)(_,{title:"Todo Grade",name:"list",url:"https://github.com/Yubo-Cao/todo_list",children:["A tool for analyzing grades and prioritizing assignments/todo lists. Built with ",(0,i.tZ)("code",{children:"Python"})," and ",(0,i.tZ)("code",{children:"Next.js"}),"."]}),(0,i.BX)(_,{title:"Quizlet Helper",name:"help",url:"https://github.com/Yubo-Cao/quizlet_helper",children:["A tool to manage and create Quizlet sets. Built with ",(0,i.tZ)("code",{children:"Python"}),"and ",(0,i.tZ)("code",{children:"Playwright"}),"."]})]}),(0,i.BX)(m.ZP,{title:"Experience",subtitle:"I have worked with…",flow:!0,children:[(0,i.tZ)(x,{title:"officer",company:"Computer Science Club",start:"2022-09",children:(0,i.BX)("ul",{children:[(0,i.tZ)("li",{children:"Create instructional materials, plan activities, and be present at regular meetings."}),(0,i.tZ)("li",{children:"Participate in initiatives including internet, machine learning, and cyber security."}),(0,i.tZ)("li",{children:"Assisting members of the computer science club"})]})}),(0,i.tZ)(x,{title:"tutor",company:"Learn to be",start:"2022-05",children:(0,i.BX)("ul",{children:[(0,i.tZ)("li",{children:"Tutor students about knowledge of CS, math, and physics/chemistry"}),(0,i.tZ)("li",{children:"Help students with homework and prepare for tests."})]})}),(0,i.tZ)(x,{title:"member",company:"Tri-M music honor society",start:"2022-05",children:(0,i.BX)("ul",{children:[(0,i.tZ)("li",{children:"Participate in music performances and competitions."}),(0,i.tZ)("li",{children:"Help organize and run music events."}),(0,i.tZ)("li",{children:"Help students with music theory and instrument playing."})]})}),(0,i.tZ)(x,{title:"member",company:"Red Robodragons",start:"2021-09",children:(0,i.BX)("ul",{children:[(0,i.tZ)("li",{children:"Participate in robotics competitions."}),(0,i.tZ)("li",{children:"Program robots with Android Studio/OnBotJava"}),(0,i.tZ)("li",{children:"Help other members with programming and mechanical design."})]})})]}),(0,i.BX)(m.ZP,{title:"Achievement",subtitle:"I have received…",flow:!0,children:[(0,i.tZ)(o,{title:"Academic achievement",subtitle:"in mathematics",children:"In 2021 fall award, I was the only student in my freshman class to receive the award for my outstanding performance in mathematics"}),(0,i.tZ)(o,{title:"GHP nomination",children:"Governor’s honors program nomination in mathematics, computer programming, and mechanical engineering"}),(0,i.tZ)(o,{title:"Academic Letter",children:"Upon start of the 2022 fall semester, I was awarded the academic letter for having high GPA in all subjects (NGA > 95)."}),(0,i.tZ)(o,{title:"CyberPatriot First Place",children:"Under my leadership, my team lambda won the first place in silver tier at Georgia open division."})]}),(0,i.BX)(m.ZP,{title:"Skills",subtitle:"Some thing I am proficient with",flow:!0,children:[(0,i.tZ)(O,{title:"Office",icons:"file-powerpoint file-word file-excel file-pdf /images/about/TeX.svg",children:"Utilize Microsoft Office to generate and modify documents, spreadsheets, and presentations while exhibiting a proficient understanding of design and layout principles, including the concept of usability, in order to produce visually appealing and easily editable documents. I am also familiar with LaTeX."}),(0,i.tZ)(O,{title:"Programming",type:"brand",icons:"python java git github "+"cpp pytorch tensorflow".split(" ").map(e=>"/images/about/".concat(e,".svg")).join(" "),children:"I have a explored in various programming languages, including Python, Java, and C++. I can write spiders, do data analysis, and build websites. I am also familiar with machine learning frameworks such as PyTorch and TensorFlow. I also understand version control with Git and GitHub."}),(0,i.tZ)(O,{title:"Cyber-security",type:"brand",icons:"ubuntu centos redhat fedora",children:"I have experience with Linux administration, including installing and configuring Linux distributions, managing users and groups, and using the command line to perform various tasks. I am OK with both Debian-based and Red Hat-based distributions."}),(0,i.tZ)(O,{title:"Web development",icons:"nextjs react tailwindcss sass typescript".split(" ").map(e=>"/images/about/".concat(e,".svg")).join(" "),children:"I have experience with web development, including building websites with Next.js, React, and Tailwind CSS. I am also familiar with Sass and TypeScript. This website is built with Next.js and Tailwind CSS, deployed through Github Action."})]}),(0,i.BX)(m.ZP,{title:"Friends",subtitle:"Some close people in my circle",flow:!0,children:[(0,i.tZ)(T,{username:"anishgoyal1108",name:"Anish G."}),(0,i.tZ)(T,{username:"ModAegis",name:"Sean L."}),(0,i.tZ)(T,{username:"CelineCherry",name:"Celine C."})]}),(0,i.BX)(m.ZP,{title:"Contact",subtitle:"You can reach me at…",flow:!0,children:[(0,i.tZ)(b,{type:"email",value:"cao2006721@gmail.com"}),(0,i.tZ)(b,{type:"discord",value:"yubo#6746"}),(0,i.tZ)(b,{type:"github",value:"yubo-cao"}),(0,i.tZ)(b,{type:"tel",value:"4709549826"})]})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);