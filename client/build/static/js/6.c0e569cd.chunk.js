(window.webpackJsonpyelcamp=window.webpackJsonpyelcamp||[]).push([[6],{80:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),r=a(16),s=a(15),o=a(17),i=a(0),l=a.n(i),u=a(25),m=a.n(u),p=a(26),d=a(10),h=a(2),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).delete=a.delete.bind(Object(p.a)(a)),a.state={redirect:!1},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"delete",value:function(){var e=this,t=localStorage.getItem("token");m.a.delete("http://localhost:4000/campgrounds/"+this.props.obj._id,{headers:{Authorization:"Bearer ".concat(t)}}).then(function(t){e.setState({redirect:!0})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(d.a,{to:"/campgrounds"}):l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"thumbnail"},l.a.createElement("img",{style:{width:"100%"},alt:"",className:"img-responsive",src:this.props.obj.image}),l.a.createElement("div",{className:"caption-full"},l.a.createElement("h5",{className:"pull-right"},"\u20a6",this.props.obj.price," /Night"),l.a.createElement("h3",{className:"font-italic"},this.props.obj.name),l.a.createElement("p",{className:"font-weight-bolder"},this.props.obj.description),l.a.createElement("p",null,l.a.createElement(h.b,{style:{marginRight:"10px"},to:"/campgrounds/"+this.props.obj._id+"/edit",className:"btn btn-primary"},"Edit"),l.a.createElement("button",{onClick:this.delete,className:"btn btn-danger"},"Delete")))))))}}]),t}(i.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={campground:null,user:""},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user"));this.setState({user:t}),m.a.get("http://localhost:4000/campgrounds/"+this.props.match.params.id).then(function(t){e.setState({campground:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){var e=this.state,t=e.campground,a=e.user;return t&&l.a.createElement(b,{obj:t,userId:a&&a._id,key:t._id})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},this.tabRow())}}]),t}(i.Component);t.default=g}}]);
//# sourceMappingURL=6.c0e569cd.chunk.js.map