(window.webpackJsonpyelcamp=window.webpackJsonpyelcamp||[]).push([[7],{76:function(e,t,o){"use strict";o.r(t);var n=o(13),a=o(14),c=o(16),l=o(15),r=o(26),i=o(17),u=o(0),s=o.n(u),d=o(10),g=function(e){function t(e){var o;return Object(n.a)(this,t),(o=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={redirect:!1},o.logout=o.logout.bind(Object(r.a)(o)),o}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidiMount",value:function(){localStorage.getItem("token")?console.log("Call User feed"):this.setState({redirect:!1})}},{key:"logout",value:function(){localStorage.setItem("token",""),localStorage.clear(),this.setState({redirect:!0})}},{key:"render",value:function(){return this.state.redirect?s.a.createElement(d.a,{to:"/login"}):s.a.createElement("div",null,s.a.createElement("button",{onClick:this.logout},"logout"))}}]),t}(u.Component);t.default=g}}]);
//# sourceMappingURL=7.cb4f1884.chunk.js.map