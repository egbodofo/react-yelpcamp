(window.webpackJsonpyelcamp=window.webpackJsonpyelcamp||[]).push([[5],{73:function(e,t,a){e.exports={Register:"Register__Register__2YmeK"}},77:function(e,t,a){"use strict";a.r(t);var n=a(13),s=a(14),r=a(16),o=a(15),l=a(17),c=a(0),i=a.n(c),u=a(10),m=a(25),d=a.n(m),h=a(73),p=a.n(h),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).handleUsernameChange=function(e){a.setState({username:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,password:a.state.password};d.a.post("http://localhost:4000/users",t).then(function(e){e.data?(localStorage.setItem("token",e.data.token),a.setState({redirect:!0})):console.log("Login Error")}).catch(function(e){console.log(e.response)})},a.state={username:"",password:"",redirect:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?i.a.createElement(u.a,{to:"/campgrounds"}):sessionStorage.getItem("data")?i.a.createElement(u.a,{to:"/campgrounds"}):i.a.createElement("div",{className:p.a.Register},i.a.createElement("h2",null,"Register"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",null,i.a.createElement("input",{type:"text",placeholder:"username",value:this.state.username,onChange:this.handleUsernameChange})),i.a.createElement("div",null,i.a.createElement("input",{type:"password",placeholder:"password",value:this.state.password,onChange:this.handlePasswordChange})),i.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(c.Component);t.default=g}}]);
//# sourceMappingURL=5.2527abfa.chunk.js.map