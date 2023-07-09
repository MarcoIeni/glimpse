"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[943],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="Install",l={unversionedId:"install",id:"install",title:"Install",description:"1. Install the Glimpse VSCode extension.",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/MarcoIeni/glimpse/tree/main/docs/docs/install.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/configuration"}},s={},p=[{value:"Glimpse keyboard shortcut",id:"glimpse-keyboard-shortcut",level:2},{value:"Non-Vim users",id:"non-vim-users",level:3},{value:"VSCodeVim users",id:"vscodevim-users",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install"},"Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ieni.glimpse"},"Glimpse")," VSCode extension."),(0,o.kt)("li",{parentName:"ol"},"Verify that the extension is correctly installed by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+P")," to open the command palette and searching for ",(0,o.kt)("inlineCode",{parentName:"li"},"Glimpse: Run"),".")),(0,o.kt)("p",null,"Running Glimpse from the command palette isn't ergonomic \u2014\nlet's configure a shortcut to trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"Glimpse: Run"),"."),(0,o.kt)("h2",{id:"glimpse-keyboard-shortcut"},"Glimpse keyboard shortcut"),(0,o.kt)("p",null,"In the following, we edit the VSCode configuration to run Glimpse with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"alt+space")," key for non-Vim users"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"space")," key for Vim users")),(0,o.kt)("p",null,"Feel free to change the key binding to your liking."),(0,o.kt)("h3",{id:"non-vim-users"},"Non-Vim users"),(0,o.kt)("p",null,"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P")," to open the command palette and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences: Open Keyboard Shortcuts (JSON)"),".\nAdd the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "alt+space",\n    "command": "glimpse.run",\n}\n')),(0,o.kt)("h2",{id:"vscodevim-users"},(0,o.kt)("a",{parentName:"h2",href:"https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"},"VSCodeVim")," users"),(0,o.kt)("p",null,"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P")," to open the command palette and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences: Open Keyboard Shortcuts (JSON)"),".\nAdd the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key": "space",\n    "command": "glimpse.run",\n    "when": "((activeEditorGroupEmpty && focusedView == \'\') || inWelcome || sideBarFocus) && !inputFocus && !glimpseVisible"\n}\n')),(0,o.kt)("p",null,"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P")," to open the command palette and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences: Open User Settings (JSON)"),".\nAdd the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "vim.normalModeKeyBindingsNonRecursive": [\n        {\n            "before": [\n                "<space>"\n            ],\n            "commands": [\n                "glimpse.run"\n            ]\n        },\n    ],\n    "vim.visualModeKeyBindingsNonRecursive": [\n        {\n            "before": [\n                "<space>"\n            ],\n            "commands": [\n                "glimpse.run"\n            ]\n        },\n    ]\n}\n')))}u.isMDXComponent=!0}}]);