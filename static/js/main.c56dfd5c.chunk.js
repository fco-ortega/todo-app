(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(1),s=o.n(c),n=o(7),a=o.n(n),i=(o(13),o(3)),l=(o(14),o(8)),d=o(0),r=function(t){var e=t.todos,o=t.setTodos,c=t.inputText,s=t.setInputText,n=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:c,onChange:function(t){s(t.target.value)},type:"text",className:"todo-input",placeholder:"agregar tarea"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),o([].concat(Object(l.a)(e),[{text:c,completed:!1,id:1e3*Math.random()}])),s("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){n(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"Ver Todos"}),Object(d.jsx)("option",{value:"completed",children:"Completados"}),Object(d.jsx)("option",{value:"uncompleted",children:"Incompletos"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.todo,c=t.todos,s=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(o.completed?"completed":""),children:e}),Object(d.jsx)("button",{onClick:function(){s(c.map((function(t){return t.id===o.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{onClick:function(){s(c.filter((function(t){return t.id!==o.id})))},className:"trash-btn",children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{text:t.text,todo:t,todos:e,setTodos:o,filteredTodos:c},t.id)}))})})};var f=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),o=e[0],s=e[1],n=Object(c.useState)([]),a=Object(i.a)(n,2),l=a[0],u=a[1],j=Object(c.useState)("all"),f=Object(i.a)(j,2),p=f[0],m=f[1],O=Object(c.useState)([]),x=Object(i.a)(O,2),h=x[0],g=x[1];Object(c.useEffect)((function(){T()}),[]),Object(c.useEffect)((function(){v(),N()}),[l,p]);var v=function(){switch(p){case"completed":g(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":g(l.filter((function(t){return!1===t.completed})));break;default:g(l)}},N=function(){localStorage.setItem("todos",JSON.stringify(l))},T=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Todo App"})}),Object(d.jsx)(r,{todos:l,setTodos:u,inputText:o,setInputText:s,setStatus:m}),Object(d.jsx)(b,{todos:l,setTodos:u,filteredTodos:h})]})},p=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),s(t),n(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.c56dfd5c.chunk.js.map