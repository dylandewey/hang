(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),i=a(20),l=a.n(i),r=(a(66),a(6)),o=a(9),j=a(110),d=a(109),h=a(11),m=a(105),b=function(){var e=Object(h.b)().logout;return Object(n.jsx)(m.a,{onClick:function(){return e()},id:"qsLogoutBtn",variant:"dark",className:"btn-margin",children:"Log Out"})},u=function(){var e=Object(h.b)().loginWithRedirect;return Object(n.jsx)(m.a,{onClick:function(){return e()},id:"qsLoginBtn",variant:"light",className:"btn-margin",children:"Log In"})},x=(a(73),function(){return Object(n.jsxs)(j.a,{className:"ml-auto",children:[Object(n.jsx)(j.a.Link,{className:"navText",as:o.c,to:"/home",exact:!0,activeClassName:"router-link-exact-active",children:"Home"}),Object(n.jsx)(j.a.Link,{className:"navText",as:o.c,to:"/messages",exact:!0,activeClassName:"router-link-exact-active",children:"Messages"}),Object(n.jsx)(j.a.Link,{className:"navText",as:o.c,to:"/userProfile",exact:!0,activeClassName:"router-link-exact-active",children:"Profile"})]})}),O=function(){var e=Object(h.b)().isAuthenticated;return Object(n.jsx)(j.a,{className:"justify-content-end",children:e?Object(n.jsx)(b,{}):Object(n.jsx)(u,{})})},p=function(){return Object(n.jsxs)(d.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(n.jsx)(d.a.Brand,{className:"navText",href:"/home",to:"/home",children:"HANG"}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsx)(x,{}),Object(n.jsx)(O,{})]})]})},g=a(28),v=a(29),N=a(33),f=a(32),P=a(106),C=a(107),k=a(111),E=(a(80),a.p+"static/media/logowhite.ea390cf0.png"),T=function(e){Object(N.a)(a,e);var t=Object(f.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:E,alt:"logo"})}),Object(n.jsxs)(P.a,{children:[Object(n.jsx)(C.a,{children:Object(n.jsx)(o.b,{to:"/createHang",children:Object(n.jsx)(k.a,{className:"createHangBtn",style:{width:"16rem",height:"16rem"},children:Object(n.jsx)(k.a.Body,{children:Object(n.jsx)(k.a.Text,{className:"cardText",children:"CREATE HANG"})})})})}),Object(n.jsx)(C.a,{children:Object(n.jsx)(o.b,{to:"/joinHang",children:Object(n.jsx)(k.a,{className:"joinHangBtn",style:{width:"16rem",height:"16rem"},children:Object(n.jsx)(k.a.Body,{children:Object(n.jsxs)(k.a.Text,{className:"cardText",children:["JOIN",Object(n.jsx)("br",{}),"HANG"]})})})})})]})]})}}]),a}(s.Component),H=a(30),S=a(31),_=(a(81),a(22)),y=a.n(_),w=a(60),A=(a(98),function(){var e=c.a.useState(),t=Object(w.a)(e,2),a=(t[0],t[1]);c.a.useCallback((function(){y.a.get("api/hang").then((function(e){console.log(e),a(e.data)})).catch((function(e){console.log(e)}))}),[]);return y.a.get("api/hang").then((function(e){var t=e.data;a({hangs:t}),console.log(t)})),Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("ul",{})})}),L=function(e){Object(N.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),!function(e){var t=e.formErrors,a=Object(S.a)(e,["formErrors"]),n=!0;return Object.values(t).forEach((function(e){e.length>0&&(n=!1)})),Object.values(a).forEach((function(e){null===e&&(n=!1)})),n}(n.state)?console.error("FORM INVAILID - DISPLAY ERROR"):(console.log("\n                --Submitting--\n                Max Participants:  ".concat(n.state.maxParticipants,"\n                Event: ").concat(n.state.events,"\n                Skill Level: ").concat(n.state.skill,"\n                Location: ").concat(n.state.location,"\n                Time: ").concat(n.state.time,"\n                Details: ").concat(n.state.details,"\n                ")),y.a.post("api/hang",{participants:n.state.maxParticipants,event:n.state.events,skill:n.state.skill,location:n.state.location,time:n.state.time,details:n.state.details,eventDate:n.state.date}).then((function(e){console.log(e),window.location.href="/joinHang"})))},n.handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,s=t.value,c=n.state.formErrors;switch(console.log("Name: ",a),console.log("Value: ",s),a){case"maxParticipants":c.maxParticipants=s.length<1?"Must type a number of participants.":"";break;case"events":c.events=s.length<2?"Must input an event.":"";break;case"skill":c.skill=s.length<1?"Must input skill level.":"";break;case"location":c.location=s.length<3?"Must input at least 3 characters.":"";break;case"time":c.time=s.length<5?"Must input a full time.":"";break;case"details":c.details=s.length<1?"Must input at least 1 characters.":""}n.setState(Object(H.a)({formErrors:c},a,s),(function(){return console.log(n.state)}))},n.state={maxParticipants:null,events:null,skill:null,location:null,time:null,details:null,formErrors:{maxParticipants:"",events:"",skill:"",location:"",time:"",details:""}},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this.state.formErrors;return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("div",{className:"form-wrapper",children:[Object(n.jsx)("h1",{children:"Create Hang"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,noValidate:!0,children:[Object(n.jsxs)("div",{className:"maxParticipants",children:[Object(n.jsx)("label",{htmlFor:"maxParticipants",children:"Max Amount of Participants"}),Object(n.jsx)("input",{className:e.maxParticipants.length>0?"error":null,options:"Max Participants",type:"input",name:"maxParticipants",noValidate:!0,onChange:this.handleChange}),e.maxParticipants.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.maxParticipants})]}),Object(n.jsxs)("div",{className:"events",children:[Object(n.jsx)("label",{htmlFor:"events",children:"Event"}),Object(n.jsx)("input",{className:e.events.length>0?"error":null,placeholder:"Enter Event",type:"text",name:"events",noValidate:!0,onChange:this.handleChange}),e.events.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.events})]}),Object(n.jsxs)("div",{className:"skill",children:[Object(n.jsx)("label",{htmlFor:"skill",children:"Skill"}),Object(n.jsx)("input",{className:e.skill.length>0?"error":null,placeholder:"Skill Level",type:"text",name:"skill",noValidate:!0,onChange:this.handleChange}),e.skill.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.skill})]}),Object(n.jsxs)("div",{className:"time",children:[Object(n.jsx)("label",{htmlFor:"time",children:"Time"}),Object(n.jsx)("input",{className:e.time.length>0?"error":null,placeholder:"Enter Time",type:"time",name:"time",noValidate:!0,onChange:this.handleChange}),e.time.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.time})]}),Object(n.jsxs)("div",{className:"date",children:[Object(n.jsx)("label",{htmlFor:"date",children:"Date"}),Object(n.jsx)("input",{className:e.time.length>0?"error":null,placeholder:"Enter Date",type:"date",name:"date",noValidate:!0,onChange:this.handleChange}),e.time.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.date})]}),Object(n.jsxs)("div",{className:"location",children:[Object(n.jsx)("label",{htmlFor:"location",children:"Location"}),Object(n.jsx)("input",{className:e.location.length>0?"error":null,placeholder:"Enter Location",type:"text",name:"location",noValidate:!0,onChange:this.handleChange}),e.location.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.location})]}),Object(n.jsxs)("div",{className:"details",children:[Object(n.jsx)("label",{htmlFor:"details",children:"Details"}),Object(n.jsx)("input",{className:e.details.length>0?"error":null,placeholder:"Enter Details",type:"textarea",name:"details",noValidate:!0,onChange:this.handleChange}),e.details.length>0&&Object(n.jsx)("span",{className:"errorMessage",children:e.details})]}),Object(n.jsx)("div",{className:"createHang",children:Object(n.jsx)("button",{type:"submit",children:"Create Hang"})})]})]})})}}]),a}(s.Component),D=a(112);a(99);function M(){return Object(n.jsx)("div",{children:Object(n.jsxs)(k.a,{className:"messageBoard",children:[Object(n.jsx)(k.a.Header,{as:"h5",children:"(Current Opened Conversation) ~ (Picture)(Profile Name)"}),Object(n.jsx)(k.a.Body,{children:Object(n.jsxs)(k.a.Text,{children:[Object(n.jsxs)("div",{className:"messageSections",children:[Object(n.jsx)("div",{className:"converstions",children:Object(n.jsxs)(D.a,{children:[Object(n.jsx)("h4",{children:"Converstions"}),Object(n.jsx)(D.a.Item,{action:!0,children:"(Picture)(Profile Name)"}),Object(n.jsx)(D.a.Item,{action:!0,children:"(Picture)(Profile Name)"}),Object(n.jsx)(D.a.Item,{action:!0,children:"(Picture)(Profile Name)"}),Object(n.jsx)(D.a.Item,{action:!0,children:"(Picture)(Profile Name)"}),Object(n.jsx)(D.a.Item,{action:!0,children:"(Picture)(Profile Name)"})]})}),Object(n.jsxs)("div",{className:"chatWindow",children:[[{from:"user",msg:"Hello"}].map((function(e,t){return Object(n.jsx)("div",{className:"messageBubbles",children:Object(n.jsx)(k.a,{className:"messageBubbles",children:Object(n.jsx)("h6",{varient:"p",children:e.msg})})},t)})),Object(n.jsx)("div",{className:"chatBox"})]})]}),Object(n.jsx)("div",{className:"messageSections"})]})})]})})}var B=a(108),I=(a(100),function(){var e=Object(h.b)().user;return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)(B.a,{className:"mb-5 userProf",children:[Object(n.jsxs)(P.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:[Object(n.jsx)(C.a,{md:2,children:Object(n.jsx)("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(n.jsxs)(C.a,{md:!0,children:[Object(n.jsx)("h2",{className:"userName",children:e.nickname}),Object(n.jsx)("p",{className:"userName lead text-muted",children:e.email})]})]}),Object(n.jsx)("div",{className:"borderLine"}),Object(n.jsx)("h4",{className:"currentHangs",children:"Current Hangs"}),Object(n.jsx)("div",{className:"currentActivities",children:Object(n.jsx)(k.a,{children:Object(n.jsx)(k.a.Body,{children:"Current Hangs"})})}),Object(n.jsx)("h4",{className:"pastHangs",children:"Past Hangs"}),Object(n.jsx)("div",{className:"pastActivities",children:Object(n.jsx)(k.a,{children:Object(n.jsx)(k.a.Body,{children:"Past Hangs"})})})]})})}),R=(a(101),a(41)),F=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return Object(n.jsx)(r.a,Object(R.a)({render:function(e){var a=Object(h.c)(t,{});return Object(n.jsx)(a,Object(R.a)({},e))}},a))},V=function(){return Object(n.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(n.jsx)(p,{}),Object(n.jsxs)(r.c,{children:[Object(n.jsx)(F,{path:"/",exact:!0,component:T}),Object(n.jsx)(F,{path:"/home",component:T}),Object(n.jsx)(F,{path:"/createHang",component:L}),Object(n.jsx)(F,{path:"/joinHang",component:A}),Object(n.jsx)(F,{path:"/messages",component:M}),Object(n.jsx)(F,{path:"/userProfile",component:I})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);var W=function(e){var t=e.children;Object(r.f)();return Object(n.jsx)(h.a,{domain:"dev-x8xt02g4.us.auth0.com",clientId:"5wYhjyUVKRdlO5RLBuyMOpFmiQcO3xU1",redirectUri:window.location.origin,children:t})};Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_DOMAIN,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH0_CLIENT_ID;l.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(W,{children:Object(n.jsx)(V,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){},73:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.d2e91ec9.chunk.js.map