"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5},i="Why",s={unversionedId:"why",id:"why",title:"Why",description:"There are too many VSCode extensions already. Why creating another one?",source:"@site/docs/why.md",sourceDirName:".",slug:"/why",permalink:"/docs/why",draft:!1,editUrl:"https://github.com/MarcoIeni/glimpse/tree/main/docs/docs/why.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Vim tricks",permalink:"/docs/vim_tricks"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},l={},p=[{value:"Glimpse key bindings",id:"glimpse-key-bindings",level:2},{value:"Glimpse design",id:"glimpse-design",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"why"},"Why"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are too many VSCode extensions already. Why creating another one?")),(0,a.kt)("p",null,"Hey, I'm ",(0,a.kt)("a",{parentName:"p",href:"https://ieni.dev"},"Marco"),", the author of Glimpse. \ud83d\udc4b\nI'm glad you asked. \ud83d\ude0e"),(0,a.kt)("p",null,"This story begins in 2018 when I started using ",(0,a.kt)("a",{parentName:"p",href:"https://www.spacemacs.org/"},"spacemacs"),".\nI was blown away by the ergonomics and the discoverability of its key bindings, so\nI decided I wanted the same experience in every other IDEs I was using."),(0,a.kt)("p",null,"Today, I maintain ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MarcoIeni/intellimacs"},"Intellimacs"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MarcoIeni/spaceclipse"},"Spaceclipse"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/VSpaceCode"},"VSpaceCode"),",\nthe plugins emulating Spacemacs respectively in ",(0,a.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/"},"IntelliJ"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.eclipse.org/"},"Eclipse"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode"),"."),(0,a.kt)("p",null,"Everything is great: people love these projects because they can switch from Spacemacs to other IDEs when needed.\nHowever, I have one issue with these plugins: I don't feel like recommending them to non-Spacemacs users, because\nthe Spacemacs key bindings make sense only in the context of Spacemacs."),(0,a.kt)("h2",{id:"glimpse-key-bindings"},"Glimpse key bindings"),(0,a.kt)("p",null,"For example, let's compare some of the key bindings of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/VSpaceCode"},"VSpaceCode")," and Glimpse:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open VSCode settings: ",(0,a.kt)("inlineCode",{parentName:"li"},"f e d")," (files, emacs, dotfiles) vs ",(0,a.kt)("inlineCode",{parentName:"li"},"c c")," (configuration, configuration)"),(0,a.kt)("li",{parentName:"ul"},"Switch VSCode editor: ",(0,a.kt)("inlineCode",{parentName:"li"},"b b")," (buffer, buffer) vs ",(0,a.kt)("inlineCode",{parentName:"li"},"E e")," (editor, editor)"),(0,a.kt)("li",{parentName:"ul"},"Show call hierarchy: ",(0,a.kt)("inlineCode",{parentName:"li"},"m g h")," (major, goto, hierarchy) vs ",(0,a.kt)("inlineCode",{parentName:"li"},"g h")," (goto, hierarchy)")),(0,a.kt)("p",null,"As you can see, Glimpse key bindings don't use emacs terminology (like buffer or major mode),\nand they make sense to people who never used Spacemacs."),(0,a.kt)("h2",{id:"glimpse-design"},"Glimpse design"),(0,a.kt)("p",null,"Speaking of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VSpaceCode/VSpaceCode"},"VSpaceCode"),": to emulate as many Spacemacs features as possible,\nVSpaceCode depends on other 5 VSCode extensions.\nThis is great for spacemacs users: VSpaceCode is a battery-included solution, just like Spacemacs is."),(0,a.kt)("p",null,"However, non-spacemacs users probably don't need all those features, and they would be confused by the other extensions installed.\nThat's why Glimpse is just a single extension, that doesn't install anything else."))}m.isMDXComponent=!0}}]);