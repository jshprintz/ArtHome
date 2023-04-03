(this["webpackJsonpart-home"]=this["webpackJsonpart-home"]||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(19),s=n.n(i),c=(n(80),n(6)),o=n(8),a=(n(81),n(53)),l=n(9),j=n(3),d=n(43),u=n.n(d),b=n(2);function h(e){return Object(b.jsx)("span",{className:"error",children:e.error})}function g(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var O={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:g,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=g();return e?JSON.parse(atob(e.split(".")[1])).user:null}},p="/api/users/";var m={signup:function(e){return fetch(p+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return O.setToken(t)}))},logout:function(){O.removeToken()},login:function(e){return fetch(p+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return O.setToken(t)}))},getUser:function(){return O.getUserFromToken()}};n(85);function x(e,t){return e===t}function f(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),i=n[0],s=n[1],d=Object(r.useState)({username:"",email:"",password:"",passwordConf:"",bio:""}),g=Object(c.a)(d,2),O=g[0],p=g[1],f=Object(r.useState)(""),v=Object(c.a)(f,2),w=v[0],y=v[1],k=Object(o.g)();function S(e){p(Object(j.a)(Object(j.a)({},O),{},Object(l.a)({},e.target.name,e.target.value)))}function C(){return(C=Object(a.a)(u.a.mark((function t(n){var r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),x(O.password,O.passwordConf)){t.next=3;break}return t.abrupt("return",s({message:"Passwords Must Match!",passwordError:!0}));case 3:for(i in s({message:"",passwordError:!1}),(r=new FormData).append("photo",w),O)r.append(i,O[i]);return t.prev=7,t.next=10,m.signup(r);case 10:e.handleSignUpOrLogin(),k("/"),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(7),console.log(t.t0),s({message:t.t0.message,passwordError:!1});case 18:case"end":return t.stop()}}),t,null,[[7,14]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{id:"signup-page",children:[Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)("a",{href:"/",className:"large-font-size centered white-back login-title",children:"Art Home"})}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"medium-font-size",color:"grey",textAlign:"center",children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username",value:O.username,onChange:S,required:!0}),Object(b.jsx)("input",{type:"email",name:"email",placeholder:"email",value:O.email,onChange:S,required:!0}),Object(b.jsx)("input",{error:i.passwordError,name:"password",type:"password",placeholder:"password",value:O.password,onChange:S,required:!0}),Object(b.jsx)("input",{error:i.passwordError,name:"passwordConf",type:"password",placeholder:"Confirm Password",value:O.passwordConf,onChange:S,required:!0}),Object(b.jsx)("textarea",{label:"bio",name:"bio",placeholder:"Tell us more about yourself...",value:O.bio,onChange:S}),Object(b.jsx)("input",{type:"file",name:"photo",placeholder:"upload image",accept:"image/png, image/jpeg",onChange:function(e){console.log(e.target.files," < - this is e.target.files!"),y(e.target.files[0])}}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"Signup"}),i.message?Object(b.jsx)(h,{error:i.message}):null]})]})}var v=n(33);n(86);function w(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),i=n[0],s=n[1],d=Object(r.useState)({email:"",password:""}),g=Object(c.a)(d,2),O=g[0],p=g[1],x=Object(o.g)();function f(e){p(Object(j.a)(Object(j.a)({},O),{},Object(l.a)({},e.target.name,e.target.value)))}function w(){return(w=Object(a.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,m.login(O);case 4:e.handleSignUpOrLogin(),x("/"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0,"<--ERROR IN LOGIN PAGE"),s(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{id:"login-page",children:[Object(b.jsxs)("div",{className:"centered",children:[Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"/",className:"large-font-size centered white-back login-title",children:"ART HOME"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{color:"grey",textAlign:"center",children:"Log in to your account"}),Object(b.jsxs)("form",{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(b.jsx)("input",{type:"email",name:"email",placeholder:"email",value:O.email,onChange:f,required:!0}),Object(b.jsx)("input",{name:"password",type:"password",placeholder:"password",value:O.password,onChange:f,required:!0}),Object(b.jsx)("button",{color:"grey",fluid:!0,size:"large",type:"submit",className:"btn",children:"Login"})]}),Object(b.jsxs)(v.b,{to:"/signup",children:["New to us? ",Object(b.jsx)(v.b,{to:"/signup",children:"Sign Up"})]}),i?Object(b.jsx)(h,{error:i}):null]})}var y=n(66),k=n(24),S=n(50),C=n(22),N=n(67);n(87);var L=function(e){var t=e.loggedUser,n=e.handleLogout;return Object(b.jsx)(S.a,{fixed:"top",id:"nav-bar",children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(S.a.Brand,{href:"#home",children:Object(b.jsx)(C.a,{id:"logo-nav",src:"https://i.imgur.com/G4eja1w.png",alt:"logo"})}),Object(b.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(b.jsxs)(k.a,{className:"me-auto",children:[Object(b.jsx)(k.a.Link,{href:"#logo-details",children:"Specialities"}),Object(b.jsx)(k.a.Link,{href:"#design-details-buffer",children:"Styles"}),Object(b.jsx)(k.a.Link,{href:"#story-containor-buffer",children:"Story"}),Object(b.jsx)(k.a.Link,{href:"#reviews-containor",children:"Testimonials"})]}),Object(b.jsx)(k.a,{children:t?Object(b.jsx)(k.a.Link,{onClick:n,children:Object(b.jsx)(C.a,{src:null===t||void 0===t?void 0:t.photoUrl,alt:"profile pic",className:"profile-pic",roundedCircle:!0})}):Object(b.jsx)(k.a.Link,{href:"/login",children:Object(b.jsx)(N.a,{size:36,className:"icons"})})})]})]})})},T=n(68);n(92);var U=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(T.a,{id:"alert-bar",variant:"warning",children:["Find out your style TODAY!",Object(b.jsxs)("button",{href:"#",id:"alert-btn",children:[" ","Click Here for your FREE Style Quiz!"]})]},"warning")})},E=n(32);n(93);var I=function(){return Object(b.jsx)("div",{id:"carousel-container",children:Object(b.jsx)("div",{id:"carousel-settings",children:Object(b.jsxs)(E.a,{fade:!0,children:[Object(b.jsxs)(E.a.Item,{children:[Object(b.jsx)(C.a,{rounded:"true",className:"d-block w-100 carousel-img",src:"https://i.imgur.com/r4hPZ72.png",alt:"First slide"}),Object(b.jsxs)(E.a.Caption,{children:[Object(b.jsx)("h3",{children:"First slide label"}),Object(b.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(b.jsxs)(E.a.Item,{children:[Object(b.jsx)(C.a,{rounded:"true",className:"d-block w-100 carousel-img",src:"https://i.imgur.com/O9HDEHO.png",alt:"Second slide"}),Object(b.jsxs)(E.a.Caption,{children:[Object(b.jsx)("h3",{children:"Second slide label"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(b.jsxs)(E.a.Item,{children:[Object(b.jsx)(C.a,{rounded:"true",className:"d-block w-100 carousel-img",src:"https://i.imgur.com/giTthQw.png",alt:"Third slide"}),Object(b.jsxs)(E.a.Caption,{children:[Object(b.jsx)("h3",{children:"Third slide label"}),Object(b.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})})};n(94);var F=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"profile-pic-container",children:[Object(b.jsx)(C.a,{id:"profile-pic",roundedCircle:"true",thumbnail:"true",src:"https://i.imgur.com/Xpio4Xs.jpg",alt:"Profile Picture"}),"Here is my story.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I'm an amazing interior designer that you are going to want to hire right away! Browse through my site and admire my many projects. Take a style quiz to find out your style and to secretly give my your contact information. Most importantly, give me your money!!"]})})},z=n(72),A=n(45),P=n(69),H=n(71),q=n(70);n(95);function D(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1],s=function(){return i(!1)},o=function(){return i(!0)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"logo-container",children:[Object(b.jsx)("button",{href:"#",className:"icon-btn",children:Object(b.jsx)(P.a,{size:60,className:"icons",onClick:o})}),Object(b.jsx)("button",{href:"#",className:"icon-btn",children:Object(b.jsx)(q.a,{size:60,className:"icons",onClick:o})}),Object(b.jsx)("button",{href:"#",className:"icon-btn",children:Object(b.jsx)(H.a,{size:60,className:"icons",onClick:o})})]}),Object(b.jsxs)(A.a,{show:n,onHide:s,children:[Object(b.jsx)(A.a.Header,{closeButton:!0,children:Object(b.jsx)(A.a.Title,{children:"Modal heading"})}),Object(b.jsx)(A.a.Body,{children:"Woohoo, you're reading this text in a modal!"}),Object(b.jsx)(A.a.Footer,{children:Object(b.jsx)(z.a,{variant:"secondary",onClick:s,children:"Close"})})]})]})}n(96);function R(e){var t=e.imgAlt,n=e.imgSrc;return Object(b.jsxs)("div",{id:"design-card",children:[Object(b.jsx)("img",{id:"design-img",src:n,alt:t}),Object(b.jsx)("div",{id:"image-overlay",children:Object(b.jsx)("div",{id:"text",children:t})})]})}n(97);function B(){return Object(b.jsx)("div",{id:"design-containor",children:Object(b.jsxs)("div",{id:"design-card-containor",children:[Object(b.jsx)(R,{imgSrc:"https://i.imgur.com/9RkvEsL.png",imgAlt:"Farmhouse"}),Object(b.jsx)(R,{imgSrc:"https://i.imgur.com/3RsWuJO.png",imgAlt:"Nook"}),Object(b.jsx)(R,{imgSrc:"https://i.imgur.com/DKypIiQ.png",imgAlt:"Hallway Table"})]})})}n(98);function J(){return Object(b.jsx)("div",{id:"review-card"})}n(99);function M(){return Object(b.jsxs)("div",{id:"footer-container",children:[Object(b.jsx)("img",{src:"https://i.imgur.com/UicUhqA.png",alt:"logo",id:"footer-logo"}),Object(b.jsxs)("div",{id:"footer-text-container",children:[Object(b.jsx)("p",{children:"Privacy Policy"}),Object(b.jsx)("p",{children:"Careers"})]}),Object(b.jsx)("p",{children:"Copyright 2022"})]})}n(100);var W=function(e){var t=e.loggedUser,n=e.handleLogout;return Object(b.jsxs)("div",{id:"landing-page",children:[Object(b.jsx)(U,{}),Object(b.jsx)(L,{loggedUser:t,handleLogout:n}),Object(b.jsx)("div",{id:"home"}),Object(b.jsx)(I,{}),Object(b.jsx)("div",{id:"logo-details"}),Object(b.jsx)(D,{}),Object(b.jsx)("div",{id:"design-details-buffer"}),Object(b.jsx)("div",{id:"designs-details"}),Object(b.jsx)(B,{}),Object(b.jsx)("div",{id:"story-containor-buffer"}),Object(b.jsx)("div",{id:"story-containor",children:Object(b.jsx)("div",{id:"story",children:Object(b.jsx)(F,{})})}),Object(b.jsxs)("div",{id:"reviews-containor",children:[Object(b.jsx)(J,{}),Object(b.jsx)(J,{}),Object(b.jsx)(J,{}),Object(b.jsx)(J,{}),Object(b.jsx)(J,{})]}),Object(b.jsx)("div",{id:"footer-buffer"}),Object(b.jsx)(M,{})]})};n(101);var G=function(){var e=Object(o.g)(),t=Object(r.useState)(m.getUser()),n=Object(c.a)(t,2),i=n[0],s=n[1];function a(){s(m.getUser())}function l(){m.logout(),s(null),e("/")}return i?Object(b.jsx)("div",{id:"all-routes",children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(W,{loggedUser:i,handleLogout:l})}),Object(b.jsx)(o.b,{path:"/login",element:Object(b.jsx)(w,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/signup",element:Object(b.jsx)(f,{handleSignUpOrLogin:a})})]})}):Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",element:Object(b.jsx)(W,{loggedUser:i,handleLogout:l})}),Object(b.jsx)(o.b,{path:"/login",element:Object(b.jsx)(w,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/signup",element:Object(b.jsx)(f,{handleSignUpOrLogin:a})}),Object(b.jsx)(o.b,{path:"/*",element:Object(b.jsx)(o.a,{to:"/"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(v.a,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.38eeb6a8.chunk.js.map