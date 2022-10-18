"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[9692],{4137:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return i?r.createElement(m,o(o({ref:t},u),{},{components:i})):r.createElement(m,o({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5140:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=i(7462),n=(i(7294),i(4137));const a={version:1,submitted_by:"danielmeixner",published_date:"TBD",category:"cloud",tags:["Cloud","Reliability/Availability","Monitoring"]},o="Match your service level objectives to business needs",l={unversionedId:"catalog/cloud/match-slo",id:"catalog/cloud/match-slo",title:"Match your service level objectives to business needs",description:"Description",source:"@site/docs/catalog/cloud/match-slo.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/match-slo",permalink:"/catalog/cloud/match-slo",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/match-slo.md",tags:[{label:"Cloud",permalink:"/tags/cloud"},{label:"Reliability/Availability",permalink:"/tags/reliability-availability"},{label:"Monitoring",permalink:"/tags/monitoring"}],version:"current",frontMatter:{version:1,submitted_by:"danielmeixner",published_date:"TBD",category:"cloud",tags:["Cloud","Reliability/Availability","Monitoring"]},sidebar:"tutorialSidebar",previous:{title:"Delete Unused Storage Resources",permalink:"/catalog/cloud/delete-unused-storage-resources"},next:{title:"Match Utilization Requirements of Virtual Machines (VMs)",permalink:"/catalog/cloud/match-utilization-requirements-of-vm"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"match-your-service-level-objectives-to-business-needs"},"Match your service level objectives to business needs"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"If service downtimes are acceptable it's better to not strive for highest availability but to design the solution according to real business needs. Lower availability guarantees can help reduce energy consumption by using less infrastructure components."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Adjust your solution design to the service level your actual end users require."),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": We reduce the total electricity required by reducing the number of infrastructure components running."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": Depending on the solution used it might also reduce the number of physical infrastructure components used.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"Suppose you offer an service level objective (SLO) for availability for your serivce. Engineering teams target to fulfill this objective and will try to exceed this service level objective. In some cases engineering teams tend to strive for very sophisticated solutions to not run into any danger of falling below the SLO.\nHigh availabilty comes often for the cost of additional resources used, in the case of hot stand-by desings even with full duplication of infrastructure where half of the infrastructur is not even used.\nIdeally you validate the business reason for a specific SLO target and use it to design a solution that matches business requirements with a reasonable design for reliabilty & availability."),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This can impact the end user experience negativly because you are working towards a specifc SLO instead of highest availability."),(0,n.kt)("li",{parentName:"ul"},"This can reduce overall cloud cost because you will use less resources.")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Uptime"},"Uptime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Availability_(system)"},"Availability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Service-level_objective"},"Service Level Objective (SLO)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/energy-efficiency/"},"Energy Efficiency Principle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/hardware-efficiency/"},"Hardware Efficiency Principle"))))}p.isMDXComponent=!0}}]);