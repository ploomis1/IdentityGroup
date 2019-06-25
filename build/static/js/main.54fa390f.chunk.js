(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){e.exports=n(70)},52:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(13),s=n.n(r),l=n(6),i=(n(51),n(52),n(8)),c=n(9),u=n(11),m=n(10),d=n(12),h=n(7),p=n.n(h),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).logout=function(){localStorage.removeItem("jwtToken"),window.location.reload()},n.state={books:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.defaults.headers.common.Authorization=localStorage.getItem("jwtToken"),p.a.get("/api/book").then(function(t){e.setState({books:t.data}),console.log(e.state.books)}).catch(function(t){401===t.response.status&&e.props.history.push("/login")})}},{key:"render",value:function(){return o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"panel panel-default"},o.a.createElement("div",{class:"panel-heading"},o.a.createElement("h3",{class:"panel-title"},"BOOK CATALOG \xa0",localStorage.getItem("jwtToken")&&o.a.createElement("button",{class:"btn btn-primary",onClick:this.logout},"Logout"))),o.a.createElement("div",{class:"panel-body"},o.a.createElement("table",{class:"table table-stripe"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"ISBN"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Author"))),o.a.createElement("tbody",null,this.state.books.map(function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(l.b,{to:"/show/".concat(e._id)},e.isbn)),o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.author))}))))))}}]),t}(a.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(30);var w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,o=n.password;p.a.post("/api/auth/login",{username:a,password:o}).then(function(t){localStorage.setItem("jwtToken",t.data.token),e.setState({message:""}),e.props.history.push("/")}).catch(function(t){401===t.response.status&&e.setState({message:"Login failed. Username or password not match"})})},e.state={username:"",password:"",message:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,a=e.message;return o.a.createElement("div",{class:"container"},o.a.createElement("form",{class:"form-signin",onSubmit:this.onSubmit},""!==a&&o.a.createElement("div",{class:"alert alert-warning alert-dismissible",role:"alert"},a),o.a.createElement("h2",{class:"form-signin-heading"},"Please sign in"),o.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email address"),o.a.createElement("input",{type:"email",class:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),o.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),o.a.createElement("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:n,onChange:this.onChange,required:!0}),o.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Login"),o.a.createElement("p",null,"Not a member? ",o.a.createElement(l.b,{to:"/register"},o.a.createElement("span",{class:"glyphicon glyphicon-plus-sign","aria-hidden":"true"})," Register here"))))}}]),t}(a.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChange=function(t){var n=e.state;n[t.target.name]=t.target.value,e.setState(n)},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,o=n.password;p.a.post("/api/auth/register",{username:a,password:o}).then(function(t){e.props.history.push("/login")})},e.state={username:"",password:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return o.a.createElement("div",{class:"container"},o.a.createElement("form",{class:"form-signin",onSubmit:this.onSubmit},o.a.createElement("h2",{class:"form-signin-heading"},"Register"),o.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email address"),o.a.createElement("input",{type:"email",class:"form-control",placeholder:"Email address",name:"username",value:t,onChange:this.onChange,required:!0}),o.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),o.a.createElement("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:n,onChange:this.onChange,required:!0}),o.a.createElement("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"Register")))}}]),t}(a.Component);s.a.render(o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(l.c,{exact:!0,path:"/",component:g}),o.a.createElement(l.c,{path:"/login",component:w}),o.a.createElement(l.c,{path:"/register",component:v}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");f?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):b(e)}),window.addEventListener("fetch",function(e){if(e.request.url.match("^.*(/api/).*$"))return!1})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.54fa390f.chunk.js.map