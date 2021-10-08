(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},19:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,d,u,s=t(0),b=t.n(s),l=t(10),j=t.n(l),m=(t(19),t(9)),p=t(4),x=t(11),O=t.n(x),f=t(2),h=t(3),g=h.a.form(r||(r=Object(f.a)(["\n  border: 5px solid #21ce3b;\n  width: 400px;\n  margin: 0 auto;\n  padding: 25px 15px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),v=h.a.label(a||(a=Object(f.a)(["\n  margin-bottom: 25px;\n"]))),S=h.a.input(c||(c=Object(f.a)(["\n  border: 3px solid #48dca9;\n  border-radius: 5px;\n  width: 300px;\n  margin-left: 15px;\n  &:focus {\n    background-color: #47dca9;\n  }\n"]))),y=h.a.button(o||(o=Object(f.a)(["\n  border-color: aliceblue;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #47dca9;\n  width: 95px;\n  &:focus {\n    border-color: #21ce3b;\n  }\n"]))),w=t(1);function C(e){var n=e.onSubmit,t=Object(s.useState)(""),r=Object(p.a)(t,2),a=r[0],c=r[1],o=Object(s.useState)(""),i=Object(p.a)(o,2),d=i[0],u=i[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":c(r);break;case"number":u(r);break;default:return}};return Object(w.jsxs)(g,{onSubmit:function(e){e.preventDefault();var t={id:O.a.generate(),name:a,number:d};n(t),c(""),u("")},children:[Object(w.jsxs)(v,{children:["Name",Object(w.jsx)(S,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,value:a})]}),Object(w.jsxs)(v,{children:["Number",Object(w.jsx)(S,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,value:d})]}),Object(w.jsx)(y,{children:"Add contact"})]})}var k,A,N=h.a.ul(i||(i=Object(f.a)(["\n  list-style: none;\n"]))),J=h.a.li(d||(d=Object(f.a)(["\n  margin-bottom: 20px;\n"]))),z=h.a.button(u||(u=Object(f.a)(["\n  border-color: aliceblue;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #47dca9;\n  margin-left: 25px;\n  &:focus {\n    border-color: #21ce3b;\n  }\n"]))),D=function(e){var n=e.options,t=e.searchValue,r=e.onDelete;return Object(w.jsx)(N,{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var n=e.name,t=e.number,a=e.id;return Object(w.jsxs)(J,{children:[n,": ",t,Object(w.jsx)(z,{onClick:function(){return r(a)},children:"Delete"})]},a)}))})},E=h.a.input(k||(k=Object(f.a)(["\n  border: 3px solid #48dca9;\n  border-radius: 5px;\n  width: 300px;\n  margin-left: 15px;\n  &:focus {\n    background-color: #47dca9;\n  }\n"]))),I=function(e){var n=e.type,t=e.label,r=e.getSearchName;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h3",{children:"Find contacts by name"}),Object(w.jsx)(E,{type:n,onChange:r,placeholder:t})]})};I.defaultProps={type:"text"};var Z=h.a.div(A||(A=Object(f.a)(["\n  text-align: center;\n"]))),q=t(13);function B(){var e,n=Object(s.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:Object(m.a)(q)),t=Object(p.a)(n,2),r=t[0],a=t[1],c=Object(s.useState)(""),o=Object(p.a)(c,2),i=o[0],d=o[1];Object(s.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(r))}),[r]);return Object(w.jsxs)(Z,{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(C,{onSubmit:function(e){r.map((function(e){return e.name})).includes(e.name)?alert("".concat(e.name," is already in contacts")):a((function(n){return[e].concat(Object(m.a)(n))}))}}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(I,{getSearchName:function(e){d(e.target.value)},label:"Enter contact name"}),Object(w.jsx)(D,{options:r,searchValue:i,onDelete:function(e){a(r.filter((function(n){return n.id!==e})))}})]})}j.a.render(Object(w.jsx)(b.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.01501cda.chunk.js.map