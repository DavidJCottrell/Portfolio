(this.webpackJsonpdavidcottrell=this.webpackJsonpdavidcottrell||[]).push([[0],{155:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(3),r=n(4),s=n(6),o=n(5),c=(n(50),n(51),n(52),n(1)),l=n(46),d=n.n(l),h=n(2),j=n.n(h),b=window.THREE,f=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e,t,n,i,a,r=this,s=115,o=0,c=-400,l=0;function d(){window.scrollY<1e3&&(c=-(window.scrollY+500))}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?window.addEventListener("orientationchange",(function(){window.location.reload()})):(window.addEventListener("resize",(function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth-l,window.innerHeight)}),!1),l=20),this.init=function(){(e=new b.PerspectiveCamera(100,window.innerWidth/window.innerHeight,.1,2e3)).position.z=1800,t=new b.Scene,i=[];for(var s=2*Math.PI,o=new b.Geometry,c=new b.SpriteCanvasMaterial({color:16777215,program:function(e){e.beginPath(),e.arc(0,0,.4,0,s,!0),e.fill()}}),h=0,j=0;j<115;j++)for(var f=0;f<70;f++)(a=i[h++]=new b.Sprite(c)).position.x=60*j-3450,a.position.z=60*f-2100,t.add(a),h>0&&o.vertices.push(a.position);n=new b.CanvasRenderer,document.addEventListener("scroll",d),null==r.props.sizeX||null==r.props.sizeY?n.setSize(window.innerWidth-l,window.innerHeight):n.setSize(r.props.sizeX,r.props.sizeY)},this.init(),this.mount.appendChild(n.domElement),function r(){requestAnimationFrame(r),function(){n.setClearColor(0,1),e.position.x+=.05*(0-e.position.x),e.position.y+=.05*(-c-e.position.y),e.lookAt(t.position);for(var r=0,l=0;l<s;l++)for(var d=0;d<70;d++)(a=i[r++]).position.y=50*Math.sin(.3*(l+o))+50*Math.sin(.5*(d+o)),a.scale.x=a.scale.y=4*(Math.sin(.3*(l+o))+1)+4*(Math.sin(.5*(d+o))+1);n.render(t,e),o+=.07}()}()}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{ref:function(t){return e.mount=t}})}}]),n}(c.Component),p=(n(59),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"content",children:[this.props.about,this.props.projects,this.props.skills,this.props.footer]})}}]),n}(c.Component)),u=n(157);HTMLElement.prototype.pseudoStyle=function(e,t,n){var i="pseudoStyles",a=document.head||document.getElementsByTagName("head")[0],r=document.getElementById(i)||document.createElement("style");r.id=i;var s="clicked-project";return this.className+=" "+s,r.innerHTML+="\n."+s+":"+e+"{"+t+":"+n+"}",a.appendChild(r),this};var m=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).handleProjectClick=function(e){var t=e.target.parentElement.parentElement.getElementsByTagName("li")[0].getElementsByTagName("span")[0],n=e.target.parentElement.parentElement.getElementsByTagName("ul")[0];n.classList.toggle("expand"),i.shouldExpand?(n.classList.remove("fadeOutRight"),n.classList.add("fadeInLeft"),t.pseudoStyle("after","width","100%"),i.shouldExpand=!1):(n.classList.remove("fadeInLeft"),n.classList.add("fadeOutRight"),t.classList="project-text",i.shouldExpand=!0)},i.shouldExpand=!0,i}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.title,t=this.props.infoElements,n=this.props.delay;return Object(i.jsx)(j.a,{animateIn:"fadeInRight",delay:n,offset:0,children:Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("li",{children:Object(i.jsx)("span",{className:"project-text",onClick:this.handleProjectClick,children:e})}),Object(i.jsx)("ul",{className:"animated project-info",children:t.map((function(e,t){return Object(i.jsxs)("li",{children:[" ",e," "]},Object(u.a)())}))})]})})}}]),n}(c.Component),O=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.delay=0,Object(i.jsxs)("div",{className:"section",id:"Projects",children:[Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:this.delay,offset:0,children:Object(i.jsx)("h1",{children:"Projects"})}),Object(i.jsxs)(j.a,{animateIn:"fadeInRight",delay:this.delay+=100,offset:0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)(m,{title:"Wribbenhall School",infoElements:[Object(i.jsx)("p",{children:"This is the website I developed for a private special-education school. This was my second professional project and the first large application I had built with modern web development tools."}),Object(i.jsx)("p",{children:"As my employers essentially gave me complete creative freedom, I really enjoyed the creative element of this project."}),Object(i.jsx)("a",{href:"https://github.com/WribbenhallSchool/WribbenhallSchool.github.io",rel:"noreferrer",target:"_blank",children:" - View On GitHub"}),Object(i.jsx)("a",{href:"https://wribbenhallschool.co.uk/",rel:"noreferrer",target:"_blank",children:" - View Live Site"})],delay:this.delay+=100}),Object(i.jsx)(m,{title:"Conway's Game of Life",infoElements:[Object(i.jsx)("p",{children:"A simple implementation of Conway's Game of Life using C++ and SDL2."}),Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell/SDL2-Game-Of-Life",rel:"noreferrer",target:"_blank",children:" - View On GitHub"})],delay:this.delay+=100}),Object(i.jsx)(m,{title:"MNIST TensorFlow",infoElements:[Object(i.jsx)("p",{children:"After recently developing an interest in Machine Learning, I decided to begin learning TensorFlow and Machine Learning fundamentals. This is my first project using TensorFlow."}),Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell/MNIST-TensorFlow",rel:"noreferrer",target:"_blank",children:" - View On GitHub"})],delay:this.delay+=100}),Object(i.jsx)(m,{title:"2D Game and Game Engine",infoElements:[Object(i.jsx)("p",{children:"This project was developed as coursework for one of my first University Modules."}),Object(i.jsx)("p",{children:"The game was built from scratch using only Java's built-in graphics libraries."}),Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell/2D-Java-game",rel:"noreferrer",target:"_blank",children:" - View On GitHub"})],delay:this.delay+=100}),Object(i.jsx)(m,{title:"Flight Booking Application",infoElements:[Object(i.jsx)("p",{children:"This program was developed as a second year University group project. It was implemented in Java, following a provided list of system requirements."}),Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell/Wiki-Crawler",rel:"noreferrer",target:"_blank",children:" - View On GitHub"})],delay:this.delay+=100}),Object(i.jsx)(m,{title:"Wikipedia Crawler",infoElements:[Object(i.jsx)("p",{children:"A Python script that starts at a given Wikipedia page and travels to a specified number of randomly chosen links from each page it reaches."}),Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell/Wiki-Crawler",rel:"noreferrer",target:"_blank",children:" - View On GitHub"})],delay:this.delay+=100})]})]})}}]),n}(c.Component),y=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section",id:"About",children:[Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:0,offset:0,children:Object(i.jsx)("h1",{children:"About Me"})}),Object(i.jsxs)(j.a,{animateIn:"fadeInRight",delay:100,offset:0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:200,offset:0,children:Object(i.jsx)("p",{children:"I'm a second year Computer Science student at Birmingham City University, with a passion for learning new skills and developing interesting projects. I am constantly experimenting with new languages and technologies - enjoying the process of starting something new and adding to my skill set."})}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:300,offset:0,children:Object(i.jsx)("p",{children:"Outside of Computer Programming, I have been heavily invested in music - having started playing Guitar and Bass at an early age and started playing in bands not long after. I find song writing with other musicians to be a great creative outlet and usually aim to find a Programming project that also allows for a similar amount of creativity."})}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:400,offset:0,children:Object(i.jsx)("p",{style:{textAlign:"justify"},children:"For this reason, I primarily enjoy building web applications in my free time as they allow me to combine my creativity and techincal skills within the same project."})})]})}}]),n}(c.Component),g=n(47),x=(n(154),function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return this.data={datasets:[{data:[15,14,11,8,7,5,3,2],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#d8dde8","#72ff56","#ff56ab","#ff0000","#0a68ff"],borderColor:"#000000",label:"My dataset"}],labels:["JavaScript","CSS","Java","PHP","Python","C/C++","Swift","F#"]},this.options={plugins:{deferred:{xOffset:150,yOffset:"50%",delay:1100}},maintainAspectRatio:!1,tooltips:{callbacks:{label:function(e,t){return t.labels[e.index]}}}},Object(i.jsx)(g.Doughnut,{data:this.data,options:this.options,width:200,height:250})}}]),n}(c.Component)),v=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"section",id:"Skills",children:[Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:0,offset:0,children:Object(i.jsx)("h1",{children:"My Skills"})}),Object(i.jsxs)(j.a,{animateIn:"fadeInRight",delay:100,offset:0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(j.a,{animateIn:"fadeInRight",delay:200,offset:0,children:Object(i.jsx)("p",{children:"Although most of experiance is currently with web development, I am very eager to learn more about low-level programming and Machine Learning."})}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:300,offset:0,children:Object(i.jsx)("p",{children:"Experianced with -"})}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{animateIn:"fadeInLeft",delay:400,offset:0,children:Object(i.jsx)(x,{})})]})}}]),n}(c.Component),w=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsx)(j.a,{animateIn:"fadeInUp",delay:100,offset:0,children:Object(i.jsxs)("div",{className:"section",id:"Footer",children:[Object(i.jsx)("a",{href:"https://github.com/DavidJCottrell",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fab fa-github-square"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/david-c-b491b6106/",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fab fa-linkedin"})}),Object(i.jsx)("a",{href:"https://www.instagram.com/david_j_cottrell/",rel:"noreferrer",target:"_blank",children:Object(i.jsx)("i",{className:"fab fa-instagram-square"})})]})})}}]),n}(c.Component),I=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){window.scrollTo({top:0,behavior:"smooth"})}),250)}},{key:"render",value:function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)(j.a,{animateIn:"fadeIn",duration:1,children:Object(i.jsx)("h1",{children:"David Cottrell"})}),Object(i.jsx)(j.a,{animateIn:"fadeInUp",duration:1,delay:350,children:Object(i.jsx)("p",{children:"Student at Birmingham City University"})})]}),Object(i.jsx)(f,{amountX:115,amountY:70}),Object(i.jsx)(p,{about:Object(i.jsx)(y,{}),projects:Object(i.jsx)(O,{}),skills:Object(i.jsx)(v,{}),footer:Object(i.jsx)(w,{})})]})}}]),n}(c.Component),k=document.getElementById("root");d.a.render(Object(i.jsx)(I,{}),k)},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.54f44fde.chunk.js.map