(this.webpackJsonpirenic=this.webpackJsonpirenic||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/irenic.dc4ab841.svg"},43:function(e,t,a){e.exports=a(91)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(38),r=a.n(l),i=(a(48),a(49),a(14)),o=a(1),m=(a(50),a(51),function(){return c.a.createElement("div",{className:"activity-box topics"},c.a.createElement("header",null,c.a.createElement("h4",null,"Topics")),c.a.createElement("div",{className:"activity-content"},c.a.createElement("div",{className:"topic"},c.a.createElement("p",null,"#SomeTopic")),c.a.createElement("div",{className:"topic"},c.a.createElement("p",null,"#SomeTopic")),c.a.createElement("div",{className:"topic"},c.a.createElement("p",null,"#SomeTopic")),c.a.createElement("div",{className:"topic"},c.a.createElement("p",null,"#SomeTopic"))))}),s=function(){return c.a.createElement("div",{className:"activity"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",placeholder:"search irenic.."})),c.a.createElement("div",{className:"activities"},c.a.createElement(m,null)))},u=a(9),p=a(8),E=a.n(p),h=a(13),d=a(39),v=a.n(d),f=a(40),g=a(19),b=Object(f.setupCache)({maxAge:9e5}),N=v.a.create({adapter:b.adapter}),w=new g.a,j="http://localhost:3000"===window.location.origin?"http://localhost:8000":window.location.origin;function O(){return(O=Object(h.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.get("token")){e.next=5;break}window.location.href="".concat(j,"/account/login"),e.next=15;break;case 5:return e.prev=5,e.next=8,N.get("".concat(j,"/auth/user"),{withCredentials:!0});case 8:return t=e.sent,e.abrupt("return",t.data);case 12:e.prev=12,e.t0=e.catch(5),window.location.href="".concat(j,"/account/login");case 15:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}var x=Object(n.createContext)({}),k=function(e){var t=e.children,a=Object(n.useState)(),l=Object(u.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){i(e)}))}),[]),c.a.createElement(x.Provider,{value:{user:r}},t)},y=a(41),S=a.n(y),C=function(e){var t=e.user;return t?c.a.createElement("div",{className:"profile-preview"},c.a.createElement("img",{src:t.profile_img,alt:"profilepicture"}),c.a.createElement("div",{className:"about"},c.a.createElement("h4",null,t.name),c.a.createElement("p",null,t.bio?t.bio:""),c.a.createElement("p",null,t.username))):c.a.createElement(c.a.Fragment,null)},P=function(e){var t=e.to,a=e.label,l=Object(o.g)(),r=Object(n.useState)(l.location.pathname),m=Object(u.a)(r,2),s=m[0],p=m[1];Object(n.useEffect)((function(){console.log(l),l.listen((function(e){var t=e.pathname;return p(t)}))}),[l]);return c.a.createElement("div",{className:s===t?"nav-link selected-nav-link":"nav-link"},c.a.createElement(i.b,{to:t},c.a.createElement("img",{src:{Home:["https://img.icons8.com/material-outlined/24/000000/home--v2.png","https://img.icons8.com/material/24/000000/home--v5.png"],Notifications:["https://img.icons8.com/material-outlined/24/000000/appointment-reminders.png","https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png"],Profile:["https://img.icons8.com/material-outlined/24/000000/user-male-circle.png","https://img.icons8.com/material/24/000000/user-male-circle--v1.png"]}[a][Number(s===t)],alt:""}),c.a.createElement("span",null,a)))},T=function(){var e=Object(n.useContext)(x).user;return c.a.createElement("div",{className:"nav"},c.a.createElement("header",null,c.a.createElement("img",{src:S.a,alt:"irenic"})),c.a.createElement("div",{className:"nav-links"},c.a.createElement(P,{to:"/home",label:"Home"}),c.a.createElement(P,{to:"/notifications",label:"Notifications"}),c.a.createElement(P,{to:"/profile",label:"Profile"})),c.a.createElement(C,{user:e}))},_=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0];t[1];return c.a.createElement("div",{className:"posts"},a.length?c.a.createElement(c.a.Fragment,null):c.a.createElement("div",{className:"no-posts"},c.a.createElement("img",{src:"https://img.icons8.com/material-sharp/24/000000/activity-feed-2.png",alt:""}),c.a.createElement("span",null,"No Posts yet")))},H=function(e){var t=e.profile_img,a=Object(n.useRef)(null),l=Object(n.useState)(0),r=Object(u.a)(l,2),i=r[0],o=r[1];return c.a.createElement("div",{className:"create-post"},c.a.createElement("form",null,c.a.createElement("img",{src:t,alt:"profile_img"}),c.a.createElement("div",{className:"compose"},c.a.createElement("textarea",{maxLength:255,ref:a,onChange:function(){a.current&&(a.current.style.height="0px",a.current.style.height=25+a.current.scrollHeight+"px",a.current.value=a.current.value.trimStart(),a.current.value.length<=255&&o(a.current.value.length))},placeholder:"what's going on?"}))),c.a.createElement("p",null,i>=10?i:c.a.createElement(c.a.Fragment,null)),c.a.createElement("button",{className:i>10?"":"disabled-post"},"Post"))},F=function(){var e=Object(n.useContext)(x).user;return c.a.createElement("div",{className:"feed"},c.a.createElement("header",null,c.a.createElement("h3",null,"Home")),c.a.createElement(H,{profile_img:null===e||void 0===e?void 0:e.profile_img}),c.a.createElement(_,null))},B=function(){return c.a.createElement("div",{className:"notification"},c.a.createElement("h4",null,"Title"),c.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat reprehenderit consequatur inventore aut voluptatum a."))},J=function(){return c.a.createElement("div",{className:"notifications"},c.a.createElement("header",null,c.a.createElement("h3",null,"Notifications")),c.a.createElement("div",{className:"notification-list"},c.a.createElement(B,null)))},L=function(){return c.a.createElement(i.a,{basename:"/irenic"},c.a.createElement("div",{className:"home"},c.a.createElement(T,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/home"},c.a.createElement(F,null),c.a.createElement(s,null)),c.a.createElement(o.b,{path:"/notifications"},c.a.createElement(J,null)),c.a.createElement(o.b,{exact:!0,path:"/"},c.a.createElement(o.a,{to:"/home"})))))};var W=function(){return Object(n.useEffect)((function(){})),c.a.createElement(k,null,c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.b3dab844.chunk.js.map