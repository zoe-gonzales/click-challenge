(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{id:1,file:"one",name:"Rubber Soul"},{id:2,file:"two",name:"Please Please Me"},{id:3,file:"three",name:"Rubber Soul"},{id:4,file:"four",name:"Help!"},{id:5,file:"five",name:"St. Peppers"},{id:6,file:"six",name:"Let It Be"},{id:7,file:"seven",name:"One"},{id:8,file:"eight",name:"Yellow Submarine"},{id:9,file:"nine",name:"Abby Road"},{id:10,file:"ten",name:"A Hard Day's Night"},{id:11,file:"eleven",name:"Live at the BBC"},{id:12,file:"twelve",name:"With the Beatles"}]},18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),i=a(10),o=a(16),s=a(11),m=a(17),u=a(29);a(23);function d(e){return r.a.createElement("img",{src:e.source,alt:e.name,onClick:e.handler})}function f(e){return r.a.createElement(u.a,null,e.list.map(function(t){return r.a.createElement(d,{key:t.id,id:t.id,name:t.name,handler:function(){return e.handler(t.id)},source:"./images/".concat(t.file,".jpg")})}))}var p=a(30),h=a(31),E=a(32);a(26);function g(){return r.a.createElement("div",null,r.a.createElement(p.a,{className:"heading",fluid:!0},r.a.createElement(u.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(E.a,{sm:"1"}),r.a.createElement(E.a,{sm:"10"},r.a.createElement("h5",{className:"display-4 text-center"},r.a.createElement("span",{className:"beatles"},"The Beatles")," click challenge!"),r.a.createElement("p",{className:"lead text-center"},"Click an album cover to start the game. To gain points, only click each one once.")),r.a.createElement(E.a,{sm:"1"})))))}a(27);function v(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"userScores"},r.a.createElement(E.a,{sm:"4"}),r.a.createElement(E.a,{sm:"2"},r.a.createElement("h4",{className:"lead text-center"},"Your points: ",r.a.createElement("span",{className:"beatles-score"},e.currentScore))),r.a.createElement(E.a,{sm:"2"},r.a.createElement("h4",{className:"lead text-center"},"Top score: ",r.a.createElement("span",{className:"beatles-score"},e.topScore))),r.a.createElement(E.a,{sm:"4"}))))}var S=a(14),b=a.n(S),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={score:"",topScore:"",images:a.props.images},a.handleClick=function(e){var t=a.state.images.filter(function(t){if(t.id===e){var n=a.state.score,r=a.state.topScore;return t.clicked?(a.setState({score:0}),n>r&&a.setState({topScore:n}),a.state.images.map(function(e){return e.clicked?(e.clicked=!1,e):e}),t):(++n>r&&a.setState({topScore:n}),a.setState({score:n}),t.clicked=!0)}return t}),n=b()(t,{copy:!0});a.setState({images:n})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(f,{list:a.state.images,handler:a.handleClick}),r.a.createElement(v,{currentScore:a.state.score,topScore:a.state.topScore}))},a}return Object(m.a)(t,e),t}(n.Component),k=a(15);var N=function(){return r.a.createElement(w,{images:k})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.4a8ebded.chunk.js.map