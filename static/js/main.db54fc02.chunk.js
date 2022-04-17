(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(5),n=a.n(o),l=(a(10),a(2)),i=(a(11),a(0)),r=function(){var e=Object(c.useState)({color:"white",backgroundColor:"black"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable dark mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container",style:a,children:[Object(i.jsx)("h2",{className:"my-3",children:"About us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("button",{className:"btn btn-dark my-3",id:"btn1",onClick:function(){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("Enable Light mode")):(s({color:"white",backgroundColor:"black"}),d("Enable Dark mode"))},children:r})]})};r.defaultProps={};var d=a(3),h=a.n(d),b=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item"})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark mode"})]})]})]})})})};b.prototype={title:h.a.string},b.defaultProps={};var j=b,m=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"textBox",rows:"8",value:s,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},onChange:function(e){console.log("used"),o(e.target.value)}})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.toUpperCase();o(e)},children:"Caps"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.toLowerCase();o(e)},children:"Lower Case"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){for(var e=s.toLowerCase().split(""),t=0;t<e.length;t+=2)e[t]=e[t].toUpperCase();var a=e.join("");o(a)},children:"Aletrnate case"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2 my-3",onClick:function(){var e=document.getElementById("textBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.split(/[ ]+/);o(e.join(" "))},children:"Handle space"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{children:"Text summary"}),Object(i.jsxs)("p",{children:[s.length>0?s.split(" ").length:0," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.length," minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter something in the textbox above to preview it here"})]})]})};m.prototype={heading:h.a.string},m.defaultProps={};var u=m,p=function(e){var t=function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:t(e.alert.type)}),": ",t(e.alert.message)]})})})};p.defaultProps={};var g=p;var x=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),r=n[0],d=n[1],h=function(e,t){d({message:e,type:t}),setTimeout((function(){d(null)}),3e3)},b=function(){"light"===a?(s("dark"),document.body.style.backgroundColor="black",h("dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",h("light mode has been enabled","success"))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{title:"TextUtils",mode:a,togglemode:b}),Object(i.jsx)(g,{alert:r}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(u,{heading:"Enter the text",mode:a,togglemode:b})})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.db54fc02.chunk.js.map