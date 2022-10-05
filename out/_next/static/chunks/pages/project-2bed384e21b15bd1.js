(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6647:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return l(5847)}])},8840:function(e,t,l){"use strict";var i=l(5893),a=l(6782),s=l(7294),n=l(7219),r=l(8864);t.Z=function(e){var t=e.onChange,l=void 0===t?function(){}:t,c=e.required,o=void 0!==c&&c,d=e.options,u=e.defaultValue,p=void 0===u?"":u,x=e.id,h=d.findIndex((function(e){return e.value==p})),m=(0,s.useState)(-1==h?0:h),f=m[0],v=m[1],g=(0,s.useState)(!1),b=g[0],j=g[1],w=(0,a.Z)(),N=(0,s.useRef)(null);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full relative select-none ".concat(w?"cursor-default":"cursor-pointer"),children:[(0,i.jsxs)("div",{className:"w-full flex place-content-between place-items-center bg-transparent border-borderLight px-4 py-2 rounded hover:bg-light border hover:border-white z-10 hover:border-opacity-30 ",onClick:function(){return j(!b)},children:[(0,i.jsx)("p",{className:"text-white text-opacity-40 w-full",children:d[f].label}),(0,i.jsx)("div",{className:"text-xl text-white text-opacity-40",children:(0,i.jsx)(n.bTu,{})}),(0,i.jsx)("select",{className:"invisible w-0 h-0",onChange:l,required:o,ref:N,id:x,children:d.map((function(e){return(0,i.jsx)("option",{value:e.value,children:e.label},(0,r.Z)(64))}))})]}),(0,i.jsx)("div",{className:"absolute left-0 top-12 w-full bg-[#21172f] bg-cover rounded overflow-hidden ".concat(b?"":"hidden"),children:(0,i.jsx)("div",{className:"bg-light backdrop-blur-3xl",children:d.map((function(e,t){return(0,i.jsx)("div",{onClick:function(){j(!b),v(t),function(e){var t;N.current&&(N.current.options.selectedIndex=e),null===(t=N.current)||void 0===t||t.dispatchEvent(new Event("change",{bubbles:!0}))}(t)},className:"text-white text-opacity-60 hover:bg-primary px-3 py-2 hover:text-opacity-100 ".concat(t==f?"bg-primary text-opacity-100":""),children:e.label},(0,r.Z)(64))}))})})]})})}},851:function(e,t,l){"use strict";var i=l(5893);l(7294);t.Z=function(e){var t=e.bottomSquareSize,l=void 0===t?"small":t,a=e.height,s=void 0===a?450:a;return(0,i.jsxs)("div",{className:"w-full ".concat(300==s?"h-[300px]":350==s?"h-[350px]":400==s?"h-[400px]":450==s?"h-[450px]":""," flex flex-col place-items-center place-content-between bg-cardDark border border-borderLight pt-[54px] rounded-md px-12 lg:px-16"),children:[(0,i.jsxs)("div",{className:"w-full flex flex-col place-items-center",children:[(0,i.jsx)("div",{className:"w-full max-w-[160px] h-[26px] mb-3.5 rounded-full bg-[#212136]"}),(0,i.jsx)("div",{className:"w-full max-w-[96px] h-[26px] rounded-full bg-[#212136]"})]}),(0,i.jsx)("div",{className:"w-full ".concat("small"==l?"max-w-[192px]":""," h-7/12 rounded-tr-[20px] rounded-tl-[20px] bg-[#212136]")})]})}},2771:function(e,t,l){"use strict";var i=l(5893),a=l(5164),s=l(851),n=l(830);t.Z=function(e){var t=e.title,l=e.description,r=e.bottomSquareSize,c=void 0===r?"small":r,o=e.height,d=void 0===o?450:o;return(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)(s.Z,{bottomSquareSize:c,height:d}),(0,i.jsxs)("div",{className:"flex flex-col place-items-center text-center mt-10",children:[(0,i.jsx)("div",{className:"mb-2.5",children:(0,i.jsx)(n.Z,{value:t,textStyle:"ProjectTitle"})}),(0,i.jsx)("div",{className:"mb-9",children:(0,i.jsx)(n.Z,{value:l,textStyle:"ProjectDescription"})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)(a.Z,{value:"Detail",color:"white",radius:"pill",style:"outline",href:"/project/detail"})})]})]})}},5847:function(e,t,l){"use strict";l.r(t);var i=l(5893),a=l(9729),s=l(8840),n=l(9399),r=l(833),c=l(2771),o=l(4154),d=(l(7294),l(8864));t.default=function(){return(0,i.jsxs)(o.Z,{title:"Project - Lara Platform",children:[(0,i.jsxs)("section",{className:"flex flex-col items-center gap-5 md:flex-row md:justify-between",children:[(0,i.jsx)("aside",{className:"w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12","data-aos":"fade-right",children:(0,i.jsx)("div",{className:"text-center md:text-left",children:(0,i.jsx)(r.Z,{badge:"PROJECTS",title:"We have completed many amazing projects that you will not believe"})})}),(0,i.jsx)("aside",{className:"w-full min-w-[175px] md:w-fit","data-aos":"fade-left",children:(0,i.jsx)(s.Z,{options:[{label:"App",value:"app"},{label:"UI Design",value:"ui-design"},{label:"Other",value:"other"}]})})]}),(0,i.jsx)(n.Z,{}),(0,i.jsxs)("section",{className:"grid place-items-center gap-16",children:[(0,i.jsx)("div",{className:"w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5",children:[{title:"The Mobile App Landing Page",description:"A landing page for mobile app"},{title:"The Desktop App Landing Page",description:"A landing page for desktop app"},{title:"Simple Mobile Blog App",description:"A blog app on mobile platform"},{title:"Realtime Chat App UI Design",description:"A UI design for realtime chat app"}].map((function(e){return(0,i.jsx)("div",{className:"basis-full lg:basis-1/2","data-aos":"zoom-in-up",children:(0,i.jsx)(c.Z,{title:e.title,description:e.description})},(0,d.Z)(64))}))}),(0,i.jsx)(a.Z,{value:"Load More",color:"white",style:"light"})]})]})}},8864:function(e,t){"use strict";t.Z=function(e){for(var t=[],l=["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],i=0;i<e-1;i++){var a=Math.floor(Math.random()*l.length);t.push(l[a])}return t.join("")}}},function(e){e.O(0,[638,16,774,888,179],(function(){return t=6647,e(e.s=t);var t}));var t=e.O();_N_E=t}]);