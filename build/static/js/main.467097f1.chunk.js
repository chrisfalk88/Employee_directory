(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{35:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var s=n(5),r=n(0),a=n.n(r),c=n(21),o=n.n(c),i=(n(35),n(11)),l=n(22),h=n(23),j=n(29),d=n(28),u=n(27),m=n(7),b=n(24),p=n.n(b),O={getUsers:function(){return p.a.get("https://randomuser.me/api/?results=100&nat=us")}},x=n(25),f=n(26);var g=function(){return Object(s.jsx)(x.a,{fluid:!0,children:Object(s.jsxs)(f.a,{children:[Object(s.jsx)("h1",{children:"Employee Tracking System v. 2.7"}),Object(s.jsx)("p",{children:"something something something something"})]})})},y=(n(54),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",ogEmployees:[],employees:[]},e.handleInputChange=function(t){var n,s=t.target.value,r=t.target.name,a=e.state.ogEmployees.filter((function(e){return e.name.first.toLowerCase().startsWith(s.toLowerCase())||e.name.last.toLowerCase().startsWith(s.toLowerCase())}));e.setState((n={},Object(i.a)(n,r,s),Object(i.a)(n,"employees",a),n))},e.handleFormSubmit=function(e){e.preventDefault()},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.getUsers().then((function(t){console.log(t.data),e.setState({ogEmployees:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(g,{}),Object(s.jsx)(m.a,{onSubmit:this.handleFormSubmit,children:Object(s.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(m.a.Label,{children:"Search"}),Object(s.jsx)(m.a.Control,{type:"text",placeholder:"Search for a person",onChange:this.handleInputChange,name:"search",value:this.state.search})]})}),Object(s.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"First Name"}),Object(s.jsx)("th",{children:"Last Name"}),Object(s.jsx)("th",{children:"Username"})]})}),Object(s.jsx)("tbody",{children:this.state.employees.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t+1}),Object(s.jsx)("td",{children:e.name.first}),Object(s.jsx)("td",{children:e.name.last}),Object(s.jsx)("td",{children:e.login.username})]},t)}))})]})]})}}]),n}(r.Component));n(58);o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.467097f1.chunk.js.map