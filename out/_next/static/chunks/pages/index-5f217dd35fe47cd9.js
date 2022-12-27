(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2882)}])},2882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var i=n(5893),o=n(5675),a=n.n(o),s=n(1664),c=n.n(s);function l(e){let t=e.size||32;return(0,i.jsxs)(c(),{href:"/",className:"flex items-center gap-2",children:[(0,i.jsx)(a(),{src:"/icon.png",alt:"Yubo Cao's Icon",width:t-4,height:t-4}),(0,i.jsx)("p",{className:"".concat(32===t?"text-lg":40===t?"text-xl":"text-2xl"," font-medium sm:max-md:hidden"),children:"Yubo Cao"})]})}var r=n(7294);function d(e,t){let n=t[0];for(let i of t)Math.abs(e-i)<Math.abs(e-n)&&(n=i);return n}function h(e){let t=e.from||"md",n=e.type||"outlined",o=e.weight?Math.max(100,Math.min(700,100*Math.round(e.weight/100))):200,a=e.grade?d(e.grade,[-25,0,200]):0,s=e.size||"24px",c=e.className||"";if("md"===t){let l=["rounded","sharp","outlined"];if(!l.includes(n))throw Error("Material Design Icons only support ".concat(l.join(", "),". Got ").concat(n,"."));return(0,i.jsx)("i",{className:{rounded:"material-symbols-rounded",sharp:"material-symbols-sharp",outlined:"material-symbols-outlined"}[n]+" "+c,style:{fontSize:s,fontVariationSettings:"'wght' ".concat(o,", 'GRAD' ").concat(a,", 'FILL' ").concat(e.fill?1:0,", 'opsz' ").concat(d(function(e){if("number"==typeof e)return e;let t=e.match(/^(\d+)(px|rem|em)$/);if(!t)throw Error("Invalid length: ".concat(e));let[,n,i]=t;return"px"!==i&&"rem"!==i&&"em"!==i?20:parseInt(n)*({px:1,rem:16,em:16})[i]}(s),[20,24,40,48]))},children:e.name})}if("fa"===t){let r=["brand","classic","regular","sharp","solid","outlined"];if(!r.includes(n))throw Error("Font Awesome only support ".concat(r.join(", "),". Got ").concat(n,"."));return(0,i.jsx)("i",{className:"fa fa-".concat(n," fa-").concat(e.name," ").concat(c),style:{fontSize:s},children:" "})}if("mdi"===t){if("solid"!==n)throw Error("Material Design Icons only support solid icons. Got ".concat(n,"."));return(0,i.jsx)("i",{className:"mdi mdi-".concat(e.name," ").concat(c),style:{fontSize:s,fontWeight:o},children:" "})}throw Error("Unknown icon source: ".concat(t))}function m(e){let{open:t,onClick:n}=e,{className:o,size:a}=e;return o=o||"",(0,i.jsx)("div",{onClick:n,className:"transition-all rounded-full active:border active:border-black active:bg-neutral-100 flex justify-center items-center w-12 h-12 ".concat(o),children:(0,i.jsx)(h,{from:"md",name:t?"menu_open":"menu",size:a,className:"transition-all"})})}let u=[{name:"Home",icon:"home",href:"/",description:"Home page"},{name:"Blog",icon:"book",href:"/blog",description:"Coding &amps; Life"},{name:"Projects",icon:"code",href:"/projects",description:"What Yubo has done"},{name:"Resume",icon:"description",href:"/resume",description:"Yubo's resume"}];function x(e){let[t,n]=(0,r.useState)(!1),{name:o,icon:a,href:s,description:l,active:d}=e;return(0,i.jsxs)("div",{title:l,className:"transition-all flex items-center rounded-full ".concat(d?"bg-primary-100":""," ").concat(t?d?"bg-primary-200":"bg-neutral-100":""),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,i.jsx)("div",{className:"h-12 w-12 flex items-center justify-center",children:(0,i.jsx)(h,{from:"md",name:a,grade:t?200:0,className:"transition-all rounded-full p-3",size:24,type:"rounded",fill:t})}),(0,i.jsx)(c(),{href:s,className:"text-base mr-4 xs:max-sm:hidden",children:o})]})}function f(e){let[t,n]=(0,r.useState)(!1),o=e.height||64;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{open:t,onClick:()=>n(!t),className:"hidden max-xs:flex"}),(0,i.jsx)("div",{className:"xs:hidden bg-black fixed left-0 top-0 h-full w-full opacity-20 -z-50 ".concat(t?"block":"hidden")}),(0,i.jsxs)("nav",{className:"transition-all flex gap-4 z-0 bg-slate-50 max-xs:px-2 "+"gap-0 flex-col rounded-r-2xl\n                     fixed top-0 left-0 w-64 h-full\n                     ".concat(t?"translate-x shadow-md":"-translate-x-full","\n                    z-10\n                    ").split(/\s+/).filter(e=>0!==e.trim().length).map(e=>"max-xs:"+e).join(" "),children:[(0,i.jsx)("div",{className:"".concat(64===o?"h-16":"h-12"," items-center hidden max-xs:flex"),children:(0,i.jsx)(m,{open:t,onClick:()=>n(!t)})}),u.map((t,n)=>(0,i.jsx)(x,{name:t.name,icon:t.icon,href:t.href,description:t.description,active:t.name===e.active},n))]})]})}function g(e){let t=e.height||64,n=e.active;return(0,i.jsxs)("header",{className:"flex items-center justify-between p-3 bg-slate-50",style:{height:"".concat(t,"px")},children:[(0,i.jsx)(l,{size:{64:48,48:40}[t]}),(0,i.jsx)(f,{active:n,height:t})]})}function p(e){let t=e.type||"elevated",n=e.className||"",o=e.rounded||!0,a=e.accent||"gray";return(0,i.jsx)("div",{className:"p-8 transition-all cursor-pointer ".concat(o?"rounded-lg":"","  ").concat({outlined:"hover:border-".concat(a,"-400"),filled:"hover:bg-".concat(a,"-200"),elevated:"hover:shadow-md hover:shadow-".concat(a,"-400/30")}[t]," ").concat({outlined:"active:border-".concat(a,"-500"),filled:"active:bg-".concat(a,"-300"),elevated:"active:shadow-lg active:shadow-".concat(a,"-500/30")}[t]," ").concat({outlined:"border border-".concat(a,"-300"),filled:"bg-".concat(a,"-100"),elevated:"shadow shadow-".concat(a,"-300/30")}[t]," ")+n,onClick:e.onClick,children:e.children})}var j=n(1163);function b(e){if(e.icon&&e.image)throw Error("Icon and image cannot be used at the same time.");if(!e.icon&&!e.image)throw Error("Icon or image must be used.");let t=e.size||64,n=e.description||"";"string"==typeof e.children&&(n=e.children);let o=(0,j.useRouter)();return(0,i.jsxs)(p,{className:"flex flex-row gap-4 items-center flex-wrap",onClick:()=>{o.push(e.url)},accent:"primary",children:[(0,i.jsxs)("div",{style:{width:64,height:64},className:"flex shrink-0 grow-0 items-center justify-center",children:[e.icon&&(0,i.jsx)(h,{name:e.icon,size:t}),e.image&&(0,i.jsx)(a(),{src:e.image,alt:e.title,width:t,height:t})]}),(0,i.jsxs)("div",{className:"basis-72 flex-1",children:[(0,i.jsx)("h3",{className:"text-xl font-bold text-primary-400 mb-1",children:e.title}),(0,i.jsxs)("div",{className:"text-base font-thi",children:[n&&(0,i.jsx)("p",{children:n}),"object"==typeof e.children&&e.children]})]})]})}function w(e){let t=e.id||"",n=e.className||"",o=e.title||"",a=e.subtitle||"",s=e.level||2;if(e.flow,""===o&&""!==a)throw Error("Subtitle must have a title.");return(0,i.jsxs)("section",{id:t,className:"p-8 rounded-lg odd:p-0 odd:m-8 odd:bg-primary-100"+n,children:[""!==o&&r.createElement("h"+s,{className:"".concat({h1:"text-6xl font-black text-primary-400",h2:"text-5xl font-bold text-primary-400",h3:"text-4xl font-medium text-primary-300",h4:"text-3xl",h5:"text-2xl",h6:"text-xl"}["h"+s]," mb-1")},o,[]),""!==a&&(0,i.jsx)("p",{className:"text-lg text-slate-300",children:a}),(0,i.jsx)("div",{className:"".concat(""!==o&&""!==a?"mt-4":""," ").concat(e.contentClassName||""),children:e.children})]})}function y(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{active:"Home"}),(0,i.jsxs)("main",{className:"m-4",children:[(0,i.jsxs)(w,{contentClassName:"flex gap-4 items-center justify-center flex-wrap",children:[(0,i.jsx)(a(),{src:"/about/yubo.png",alt:"Yubo's Figure",width:200,height:300,className:"grayscale"}),(0,i.jsxs)("div",{className:"flex flex-col gap-2 basis-72 flex-1",children:[(0,i.jsx)("h1",{className:"text-primary-400 text-6xl font-black",children:"Yubo Cao"}),(0,i.jsx)("p",{className:"text-lg",children:"As a sophomore in high school, programming and artificial intelligence are two of my passions. My GPA is 4.0 out of 4.0 and I attend the Gwinnett School of Mathematics, Science, and Technology."})]})]}),(0,i.jsxs)(w,{title:"Projects",subtitle:"I am working on…",contentClassName:"grid gap-4 grid-cols-fit-80",children:[(0,i.jsxs)(b,{title:"My Website",icon:"public",url:"https://yubo-cao.github.com",children:["A gallery of my projects and a blog. Built with",(0,i.jsx)("code",{children:"Next.js"}),", ",(0,i.jsx)("code",{children:"React"}),", ",(0,i.jsx)("code",{children:"Tailwind CSS"}),",",(0,i.jsx)("code",{children:"SASS"}),", and ",(0,i.jsx)("code",{children:"TypeScript"}),"."]}),(0,i.jsxs)(b,{title:"FPN Object detection",image:"/about/object.png",size:48,url:"https://www.github.com/yubo-cao/RedFTCController",children:["A feature pyramid network object detection model for the FTC robotics competition. Built with ",(0,i.jsx)("code",{children:"Python"})," and ",(0,i.jsx)("code",{children:"TensorFlow"}),"."]}),(0,i.jsxs)(b,{title:"Algorithms",image:"/about/flow-chart.png",size:48,url:"https://www.github.com/yubo-cao/Algorithms",children:["A collection of solutions to common algorithms question and a book regarding them. Built with ",(0,i.jsx)("code",{children:"C++"}),", ",(0,i.jsx)("code",{children:"Java"}),", and ",(0,i.jsx)("code",{children:"LaTeX"}),"."]}),(0,i.jsxs)(b,{title:"Chemistry Language",icon:"science",url:"https://github.com/Yubo-Cao/chemistry_language",children:["A programming language for chemistry supporting chemical equations and dimensional analysis. Built with ",(0,i.jsx)("code",{children:"Python"}),"."]}),(0,i.jsxs)(b,{title:"Todo Grade",icon:"list",url:"https://github.com/Yubo-Cao/todo_list",children:["A tool for analyzing grades and prioritizing assignments/todo lists. Built with ",(0,i.jsx)("code",{children:"Python"})," and ",(0,i.jsx)("code",{children:"Next.js"}),"."]}),(0,i.jsxs)(b,{title:"Quizlet Helper",icon:"help",url:"https://github.com/Yubo-Cao/quizlet_helper",children:["A tool to manage and create Quizlet sets. Built with ",(0,i.jsx)("code",{children:"Python"}),"and ",(0,i.jsx)("code",{children:"Playwright"}),"."]})]})]})]})}}},function(e){e.O(0,[664,873,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);