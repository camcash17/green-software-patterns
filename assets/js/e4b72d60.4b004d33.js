"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[24],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(4137));const a={},o="Match Utilization Requirements of Virtual Machines (VMs)",l={unversionedId:"catalog/match-utilization-requirements-of-vm",id:"catalog/match-utilization-requirements-of-vm",title:"Match Utilization Requirements of Virtual Machines (VMs)",description:"Version",source:"@site/docs/catalog/match-utilization-requirements-of-vm.md",sourceDirName:"catalog",slug:"/catalog/match-utilization-requirements-of-vm",permalink:"/catalog/match-utilization-requirements-of-vm",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/match-utilization-requirements-of-vm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete unused storage resources",permalink:"/catalog/delete-unused-storage-resources"},next:{title:"Match Utilization Requirements With Pre-Configured Servers",permalink:"/catalog/match-utilization-requirements-with-pre-configured-server"}},s={},u=[{value:"Version",id:"version",level:2},{value:"Submitted By",id:"submitted-by",level:2},{value:"Published Date",id:"published-date",level:2},{value:"Intent",id:"intent",level:2},{value:"Tags",id:"tags",level:2},{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Pros &amp; Cons",id:"pros--cons",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"match-utilization-requirements-of-virtual-machines-vms"},"Match Utilization Requirements of Virtual Machines (VMs)"),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("p",null,"1.0"),(0,i.kt)("h2",{id:"submitted-by"},"Submitted By"),(0,i.kt)("p",null,"Bill Johnson (@dubrie)"),(0,i.kt)("h2",{id:"published-date"},"Published Date"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h2",{id:"intent"},"Intent"),(0,i.kt)("p",null,"Choose servers that are the right size for the task at hand."),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"tags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cloud"),(0,i.kt)("li",{parentName:"ul"},"compute"),(0,i.kt)("li",{parentName:"ul"},"role-cloud-engineer"),(0,i.kt)("li",{parentName:"ul"},"size-small")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"It's better to have one VM running at a higher utilization than two running at low utilization rates. This is both from an energy proportionality angle. 2 servers running at low utilization rates will consume more energy than one server running at a high rate of utilization. But also, from an embodied carbon angle, the unused capacity on the underutilized server could be more efficiently used for another task or process."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Rightsize your VMs by changing the number of resources allocated to a VM to match the utilization requirements of the VM. For example, adding a vCPU if the VM is running high CPU utilization or removing memory if the server is not using all of its allocated memory."),(0,i.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,i.kt)("p",null,"With respect to the SCI equation. Rightsizing oversized VMs will impact two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of servers required to run a process, we reduce the total embodied carbon, the ",(0,i.kt)("inlineCode",{parentName:"li"},"M")," of the equation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E"),": Rightsizing oversized VMs will ",(0,i.kt)("strong",{parentName:"li"},"increase")," the total server utilization. The more a server is utilized, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing VMs should reduce the energy consumption of your processes, and consequently, the ",(0,i.kt)("inlineCode",{parentName:"li"},"E")," number should decrease.")),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"If we chose an oversized VM because ",(0,i.kt)("em",{parentName:"p"},"occasionally")," there is a burst of work, a peak load, then undersizing them will reduce the headroom available to handle the peak traffic. A better solution would be to consider an auto-scaling architecture that would automatically scale the number of VM."),(0,i.kt)("h2",{id:"pros--cons"},"Pros & Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PRO"),": It may reduce your cloud bill as reducing the spec of your VMs will cost less."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CON"),": If you do not have an auto-scaling architecture, there is less overhead for handling spikes in load.")))}m.isMDXComponent=!0}}]);