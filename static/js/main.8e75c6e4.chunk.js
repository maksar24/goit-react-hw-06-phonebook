(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var r,c,a,o,i=t(0),b=t.n(i),u=t(12),d=t.n(u),l=t(8),s=t(19),j=(t(32),t(18)),p=t(4),O=t(5),f=O.a.form(r||(r=Object(p.a)(["\n  border: 5px solid #21ce3b;\n  width: 400px;\n  margin: 0 auto;\n  padding: 25px 15px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),m=O.a.label(c||(c=Object(p.a)(["\n  margin-bottom: 25px;\n"]))),x=O.a.input(a||(a=Object(p.a)(["\n  border: 3px solid #48dca9;\n  border-radius: 5px;\n  width: 300px;\n  margin-left: 15px;\n  &:focus {\n    background-color: #47dca9;\n  }\n"]))),h=O.a.button(o||(o=Object(p.a)(["\n  border-color: aliceblue;\n  border-radius: 5px;\n  cursor: pointer;\n  background-color: #47dca9;\n  width: 95px;\n  &:focus {\n    border-color: #21ce3b;\n  }\n"]))),g=t(20),v=t.n(g),y=t(6),k={add:Object(y.b)("contacts/add",(function(e,n){return{payload:{id:v.a.generate(),name:e,number:n}}})),remove:Object(y.b)("contacts/remove",(function(e){return{payload:e}})),filter:Object(y.b)("contacts/filter")},C=t(1);var w,A,S,z,D=Object(l.b)(null,(function(e){return{onSubmit:function(n,t){return e(k.add(n,t))}}}))((function(e){var n=e.onSubmit,t=Object(i.useState)(""),r=Object(j.a)(t,2),c=r[0],a=r[1],o=Object(i.useState)(""),b=Object(j.a)(o,2),u=b[0],d=b[1],l=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":d(r);break;default:return}};return Object(C.jsxs)(f,{onSubmit:function(e){e.preventDefault(),n(c,u),a(""),d("")},children:[Object(C.jsxs)(m,{children:["Name",Object(C.jsx)(x,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l,value:c})]}),Object(C.jsxs)(m,{children:["Number",Object(C.jsx)(x,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l,value:u})]}),Object(C.jsx)(h,{children:"Add contact"})]})})),J=O.a.ul(w||(w=Object(p.a)(["\n  list-style: none;\n"]))),P=O.a.li(A||(A=Object(p.a)(["\n  margin-bottom: 20px;\n"]))),Z=O.a.button(S||(S=Object(p.a)(["\n  border-color: aliceblue;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #47dca9;\n  margin-left: 25px;\n  &:focus {\n    border-color: #21ce3b;\n  }\n"]))),q=Object(l.b)((function(e){var n=e.contacts,t=n.filter;return{options:n.items.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}}),(function(e){return{onDelete:function(n){return e(k.remove(n))}}}))((function(e){var n=e.options,t=e.onDelete;return Object(C.jsx)(J,{children:n.map((function(e){var n=e.name,r=e.number,c=e.id;return Object(C.jsxs)(P,{children:[n,": ",r,Object(C.jsx)(Z,{onClick:function(){return t(c)},children:"Delete"})]},c)}))})})),B=O.a.input(z||(z=Object(p.a)(["\n  border: 3px solid #48dca9;\n  border-radius: 5px;\n  width: 300px;\n  margin-left: 15px;\n  &:focus {\n    background-color: #47dca9;\n  }\n"]))),E=function(e){var n=e.type,t=e.label,r=e.value,c=e.onChange;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h3",{children:"Find contacts by name"}),Object(C.jsx)(B,{type:n,onChange:c,placeholder:t,value:r})]})};E.defaultProps={type:"text"};var F,L=Object(l.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(n){return e(k.filter(n.target.value))}}}))(E),M=O.a.div(F||(F=Object(p.a)(["\n  text-align: center;\n"])));function N(){return Object(C.jsxs)(M,{children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(D,{}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(L,{label:"Enter contact name"}),Object(C.jsx)(q,{})]})}var G,I=t(14),T=t(7),$=t(21),H=t.n($),K=t(22),Q=t.n(K),R=t(15),U=t(2),V=Object(y.c)([],(G={},Object(R.a)(G,k.add,(function(e,n){var t=n.payload;return e.map((function(e){return e.name})).includes(t.name)?(alert("".concat(t.name," is already in contacts")),e):[t].concat(Object(I.a)(e))})),Object(R.a)(G,k.remove,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),G)),W=Object(y.c)("",Object(R.a)({},k.filter,(function(e,n){return n.payload}))),X=Object(U.b)({items:V,filter:W}),Y={key:"contacts",storage:H.a,blacklist:["filter"]},_=[].concat(Object(I.a)(Object(y.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),[Q.a]),ee=Object(y.a)({reducer:{contacts:Object(T.g)(Y,X)},middleware:_,devTools:!1}),ne={store:ee,persistor:Object(T.h)(ee)};d.a.render(Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(l.a,{store:ne.store,children:Object(C.jsx)(s.PersistGate,{loading:null,persistor:ne.persistor,children:Object(C.jsx)(N,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8e75c6e4.chunk.js.map