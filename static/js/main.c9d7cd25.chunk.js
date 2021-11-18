(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),l=a(30),i=a.n(l),r=(a(37),a(38),a(18)),o=a(2),d=a(5),m=a(6),j=a(4),h=a(11),b=a(10),u=a(14),p=a.n(u),O="https://spring-boot-api-java.herokuapp.com/api/v1/employees",f=new(function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,[{key:"getEmployees",value:function(){return p.a.get(O)}},{key:"createEmployee",value:function(e){return p.a.post(O,e)}},{key:"getEmployeeById",value:function(e){return p.a.get(O+"/"+e)}},{key:"updateEmployee",value:function(e,t){return p.a.put(O+"/"+t,e)}},{key:"deleteEmployee",value:function(e){return p.a.delete(O+"/"+e)}}]),e}()),y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={employees:[]},n.addEmployee=n.addEmployee.bind(Object(j.a)(n)),n.editEmployee=n.editEmployee.bind(Object(j.a)(n)),n.deleteEmployee=n.deleteEmployee.bind(Object(j.a)(n)),n}return Object(m.a)(a,[{key:"viewEmployee",value:function(e){this.props.history.push("/view-employee/".concat(e))}},{key:"deleteEmployee",value:function(e){f.deleteEmployee(e).then((function(e){window.location.reload()}))}},{key:"editEmployee",value:function(e){this.props.history.push("/update-employee/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;f.getEmployees().then((function(t){e.setState({employees:t.data})}))}},{key:"addEmployee",value:function(){this.props.history.push("/add-employee")}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"text-center",children:"Employees List"}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("button",{className:"btn btn-primary",onClick:this.addEmployee,children:"Add Employee"})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"First name"}),Object(n.jsx)("th",{children:"Last name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"Actions"})]})}),Object(n.jsx)("tbody",{children:this.state.employees.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.firstName}),Object(n.jsx)("td",{children:t.lastName}),Object(n.jsx)("td",{children:t.email}),Object(n.jsxs)("td",{children:[Object(n.jsx)("button",{onClick:function(){return e.editEmployee(t.id)},className:"btn btn-success",children:"Update"}),Object(n.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteEmployee(t.id)},className:"btn btn-danger",children:"Delete"}),Object(n.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return e.viewEmployee(t.id)},className:"btn btn-info",children:"View"})]})]},t.id)}))})]})})]})}}]),a}(s.Component),N=Object(o.f)(y),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("header",{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:"/",className:"navbar-brand",children:"Employee Management App"})})})})})}}]),a}(s.Component),x=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{className:"text-muted",children:"All Rights Reserved 2020"})})})}}]),a}(s.Component),g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).saveEmployee=function(e){e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email};console.log("employee =>"+JSON.stringify(t)),f.createEmployee(t).then((function(e){n.props.history.push("/employees")}))},n.changeFirstNameHandler=function(e){n.setState({firstName:e.target.value})},n.changeLastNameHandler=function(e){n.setState({lastName:e.target.value})},n.changeEmailHandler=function(e){n.setState({email:e.target.value})},n.state={firstName:"",lastName:"",email:""},n.changeFirstNameHandler=n.changeFirstNameHandler.bind(Object(j.a)(n)),n.changeLastNameHandler=n.changeLastNameHandler.bind(Object(j.a)(n)),n.changeEmailHandler=n.changeEmailHandler.bind(Object(j.a)(n)),n.saveEmployee=n.saveEmployee.bind(Object(j.a)(n)),n}return Object(m.a)(a,[{key:"cancel",value:function(){this.props.history.push("/employees")}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[Object(n.jsx)("h3",{className:"text-center",children:"Add Employee"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"First name: "}),Object(n.jsx)("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.changeFirstNameHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Last name: "}),Object(n.jsx)("input",{placeholder:"First Name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.changeLastNameHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email: "}),Object(n.jsx)("input",{placeholder:"Email",name:"email",className:"form-control",value:this.state.email,onChange:this.changeEmailHandler})]}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.saveEmployee,children:"Save"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancel"})]})})]})})})}}]),a}(s.Component),E=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).updateEmployee=function(e){e.preventDefault();var t={firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email};console.log("employee =>"+JSON.stringify(t)),f.updateEmployee(t,n.state.id).then((function(e){n.props.history.push("/employees")}))},n.changeFirstNameHandler=function(e){n.setState({firstName:e.target.value})},n.changeLastNameHandler=function(e){n.setState({lastName:e.target.value})},n.changeEmailHandler=function(e){n.setState({email:e.target.value})},n.state={id:n.props.match.params.id,firstName:"",lastName:"",email:""},n.changeFirstNameHandler=n.changeFirstNameHandler.bind(Object(j.a)(n)),n.changeLastNameHandler=n.changeLastNameHandler.bind(Object(j.a)(n)),n.changeEmailHandler=n.changeEmailHandler.bind(Object(j.a)(n)),n.updateEmployee=n.updateEmployee.bind(Object(j.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getEmployeeById(this.state.id).then((function(t){var a=t.data;e.setState({firstName:a.firstName,lastName:a.lastName,email:a.email})}))}},{key:"cancel",value:function(){this.props.history.push("/employees")}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[Object(n.jsx)("h3",{className:"text-center",children:"Update Employee"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"First name: "}),Object(n.jsx)("input",{placeholder:"First Name",name:"firstName",className:"form-control",value:this.state.firstName,onChange:this.changeFirstNameHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Last name: "}),Object(n.jsx)("input",{placeholder:"First Name",name:"lastName",className:"form-control",value:this.state.lastName,onChange:this.changeLastNameHandler})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email: "}),Object(n.jsx)("input",{placeholder:"Email",name:"email",className:"form-control",value:this.state.email,onChange:this.changeEmailHandler})]}),Object(n.jsx)("button",{className:"btn btn-success",onClick:this.updateEmployee,children:"Save"}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancel"})]})})]})})})}}]),a}(s.Component),k=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,employee:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.getEmployeeById(this.state.id).then((function(t){e.setState({employee:t.data})}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"card col-md-6 offset-md-3",children:[Object(n.jsx)("h3",{className:"text-center",children:" View Employee Details"}),Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("label",{className:"font-weight-bold",children:" Employee First Name:\xa0 "}),Object(n.jsxs)("div",{children:[" ",this.state.employee.firstName]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("label",{className:"font-weight-bold",children:" Employee Last Name:\xa0 "}),Object(n.jsxs)("div",{children:[" ",this.state.employee.lastName]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("label",{className:"font-weight-bold",children:" Employee Email:\xa0 "}),Object(n.jsxs)("div",{children:[" ",this.state.employee.email]})]})]})]})]})}}]),a}(s.Component);var C=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)(v,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(n.jsx)(o.a,{path:"/employees",component:N}),Object(n.jsx)(o.a,{path:"/add-employee",component:g}),Object(n.jsx)(o.a,{path:"/update-employee/:id",component:E}),Object(n.jsx)(o.a,{path:"/view-employee/:id",component:k}),Object(n.jsx)(N,{})]})}),Object(n.jsx)(x,{})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};a(61);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),H()}},[[62,1,2]]]);
//# sourceMappingURL=main.c9d7cd25.chunk.js.map