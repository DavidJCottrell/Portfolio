(this.webpackJsonpdavidcottrell=this.webpackJsonpdavidcottrell||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(3),s=n(4),c=n(6),r=n(5),o=(n(50),n(1)),d=n(46),j=n.n(d),l=window.THREE,h=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e,t,n,i,a,s=115,c=100,r=0,o=-500,d=0;function j(){window.scrollY<1e3&&(o=-(window.scrollY+500))}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(window.addEventListener("resize",(function(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth-d,window.innerHeight)}),!1),d=20),function(){(e=new l.PerspectiveCamera(100,window.innerWidth/window.innerHeight,.1,2e3)).position.z=1e3,t=new l.Scene,i=[];for(var s=2*Math.PI,c=new l.Geometry,r=new l.SpriteCanvasMaterial({color:16777215,program:function(e){e.beginPath(),e.arc(0,0,.4,0,s,!0),e.fill()}}),o=0,h=0;h<115;h++)for(var b=0;b<100;b++)(a=i[o++]=new l.Sprite(r)).position.x=80*h-4600,a.position.z=80*b-4e3,t.add(a),o>0&&c.vertices.push(a.position);n=new l.CanvasRenderer,document.addEventListener("scroll",j),n.setSize(window.innerWidth-d,window.innerHeight)}(),this.mount.appendChild(n.domElement),function d(){requestAnimationFrame(d),function(){n.setClearColor(0,1),e.position.x+=.05*(0-e.position.x),e.position.y+=.05*(-o-e.position.y),e.lookAt(t.position);for(var d=0,j=0;j<s;j++)for(var l=0;l<c;l++)(a=i[d++]).position.y=50*Math.sin(.3*(j+r))+50*Math.sin(.5*(l+r)),a.scale.x=a.scale.y=4*(Math.sin(.3*(j+r))+1)+4*(Math.sin(.5*(l+r))+1);n.render(t,e),r+=.07}()}()}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{ref:function(t){return e.mount=t}})}}]),n}(o.Component),b=(n(54),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Body",children:[this.props.projects,this.props.about,this.props.skills,Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),this.props.footer]})}}]),n}(o.Component)),u=n(2),O=n.n(u),m=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"growDiv",value:function(){var e=document.getElementById("grow");if(e.clientHeight)e.style.height=0;else{var t=document.querySelector(".measuringWrapper");e.style.height=t.clientHeight+"px"}document.getElementById("more-button").value="Read more"==document.getElementById("more-button").value?"Read less":"Read more"}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Section",id:"Projects",children:[Object(i.jsx)(O.a,{animateIn:"fadeInLeft",animateOnce:!0,children:Object(i.jsx)("h1",{children:"Projects"})}),Object(i.jsxs)(O.a,{animateIn:"fadeInRight",delay:200,animateOnce:!0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:400,animateOnce:!0,children:Object(i.jsx)("p",{style:{textAlign:"justify"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus asperiores aliquam praesentium possimus eveniet mollitia repudiandae"})}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:600,animateOnce:!0,children:Object(i.jsxs)("div",{className:"Project",onClick:this.growDiv,children:[Object(i.jsx)("div",{className:"hexagon hexagon1",children:Object(i.jsx)("div",{className:"hexagon-in1",children:Object(i.jsx)("div",{className:"hexagon-in2",children:Object(i.jsx)("p",{children:"ML"})})})}),Object(i.jsx)("br",{}),Object(i.jsx)("h3",{children:"Machine Learning"})]})}),Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:800,animateOnce:!0,children:Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("div",{className:"hexagon hexagon1",children:Object(i.jsx)("div",{className:"hexagon-in1",children:Object(i.jsx)("div",{className:"hexagon-in2",children:Object(i.jsx)("p",{children:"WD"})})})}),Object(i.jsx)("br",{}),Object(i.jsx)("h3",{children:"Web Development"})]})}),Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:1e3,animateOnce:!0,children:Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("div",{className:"hexagon hexagon1",children:Object(i.jsx)("div",{className:"hexagon-in1",children:Object(i.jsx)("div",{className:"hexagon-in2",children:Object(i.jsx)("p",{children:"C++"})})})}),Object(i.jsx)("br",{}),Object(i.jsx)("h3",{children:"C++ Projects"})]})}),Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:1e3,animateOnce:!0,children:Object(i.jsxs)("div",{className:"Project",children:[Object(i.jsx)("div",{className:"hexagon hexagon1",children:Object(i.jsx)("div",{className:"hexagon-in1",children:Object(i.jsx)("div",{className:"hexagon-in2",children:Object(i.jsx)("p",{children:"..."})})})}),Object(i.jsx)("br",{}),Object(i.jsx)("h3",{children:"Other Projects"})]})})]}),Object(i.jsx)("div",{id:"grow",children:Object(i.jsx)("div",{className:"measuringWrapper",children:Object(i.jsx)("div",{className:"text",children:"Here is some more text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae urna nulla. Vivamus a purus mi. In hac habitasse platea dictumst. In ac tempor quam. Vestibulum eleifend vehicula ligula, et cursus nisl gravida sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."})})})]})}}]),n}(o.Component),x=n.p+"static/media/me.ce45727d.jpeg",p=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Section",id:"About",children:[Object(i.jsx)(O.a,{animateIn:"fadeInLeft",animateOnce:!0,children:Object(i.jsx)("h1",{children:"About Me"})}),Object(i.jsxs)(O.a,{animateIn:"fadeInRight",delay:200,animateOnce:!0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsxs)(O.a,{animateIn:"fadeInRight",delay:400,animateOnce:!0,children:[Object(i.jsx)("img",{src:x,alt:"",id:"profileImg"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{style:{textAlign:"justify"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!"})]})]})}}]),n}(o.Component),f=n(47),A=(n(152),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.data={datasets:[{data:[15,13,8,7,6,5,2],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#d8dde8","#72ff56","#ff56ab","#ff0000"],borderColor:"#000000",label:"My dataset"}],labels:["JavaScript","Java","Python","C/C++","CSS","PHP","F#"]},this.options={plugins:{deferred:{xOffset:150,yOffset:"50%",delay:1100}},maintainAspectRatio:!1,tooltips:{callbacks:{label:function(e,t){return t.labels[e.index]}}}},Object(i.jsx)(f.Doughnut,{data:this.data,options:this.options,width:200,height:250})}}]),n}(o.Component)),v=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"Section",id:"Skills",children:[Object(i.jsx)(O.a,{animateIn:"fadeInLeft",animateOnce:!0,children:Object(i.jsx)("h1",{children:"My Skills"})}),Object(i.jsxs)(O.a,{animateIn:"fadeInRight",delay:200,animateOnce:!0,children:[Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)(O.a,{animateIn:"fadeInRight",delay:400,animateOnce:!0,children:Object(i.jsx)("p",{style:{textAlign:"justify"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!"})}),Object(i.jsx)("br",{}),Object(i.jsx)(O.a,{animateIn:"fadeInLeft",delay:400,animateOnce:!0,children:Object(i.jsx)("p",{style:{textAlign:"justify"},children:"Experiance with"})}),Object(i.jsx)("br",{}),Object(i.jsx)(O.a,{animateIn:"fadeInLeft",animateOnce:!0,delay:600,children:Object(i.jsx)(A,{})})]})}}]),n}(o.Component),g=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsx)(O.a,{animateIn:"fadeInUp",animateOnce:!0,children:Object(i.jsxs)("div",{className:"Section",id:"Footer",children:[Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAD4UlEQVRoge2ay28NcRTHP622KrTxLJXGO+2GVLUh0oUN2goSJN4JNmjtdFWRICJBwgKJv6BdiAVi4RVRuhBBhKqoR4tKvEI9bolWavG7V2/Hnd/5jd/MuIv5JGdzz2/O95w783vOQERERERERNqQEZJOHlACFAOjgeHx32PAR6AdeAx8DSmfQCgHDgO3gV9Av2B98baHgDn/Id9/IhvYAjxALlCyB8DmeMy0ZBXQiX2hTusAVoRYh0gBcB7/C3XaOWBsSDW5Ugm8JvhiE9YFzA+lshQsA3qEBIOwH6juEyrLgV7LxG2sF/WHh0Il/+fOOi1GCI93Ae59thV4FUBhr4CHGl+gA5nbaNwD5MbbzEItHmIWRX4DDgIz4zGHAd9d2p71UoCXpeUq4LSL7yJQ7fitCJX0euAtahX1GPgUN4BRcSsBKoDxQCPQgBqRk7kMLHTRXwGcMazDiGz0i4pjmmtHetDRtT2h0X+G4Yos0zCRjcBkjf+7xtdtqCG17dH4pqGeJBHTgncK/omGcWwoFPxSjsaUIw8ybX6JaXhkkMdsKYjJHV5j0EbXh/3CRGO1H0J30P+rzX6IGHJDyOWWrUAeamOuE6myFfFAjZBLHzDCRqBCEPhMuBv0HOCLkFOZLoDUh4sF/33UQj4sfqJOQnSU6JxSwWME/1vBHwTvBL82Z6ngPMGfI/iDYKjgz9c5pYL7BP84wR8EkqZ2fyAV/F7wFwj+IJAKjumcUsEfBP9U5CWfnxQCk4Q2b3ROqWBpUMoAFglt/KQGeUvbYSOQi/vGO2HXbAQ8Iq20epAHNZFmQaQfWGorYsBKgzyu+iG0z0DoHcKEb8kMVN+U8tjjh1iZgVA/qu9U+CHoYB7w0jCHUr9EWxyBvwB3UYdtyb/3AkfQn46YMh04jrx5Sdh1HzT/sM4R/BRqhM8HTqYQ7wOuALtQB29FBhpTUKPw3njyJq9Yk81k325MDvDEIXCBgUO3A0IyDQYaO4UYOmsngF3b4hRCl1B3Ogv3KaMds5OVIcBzlxiSuR3fWtOUQizxKE0AbqbwH/UQX3cU62aNNgVJFAAvHIJtDNzBTGAJairbjXoqsjzEr8dbsZ2EsJ6fhTrpSBau9Sn2VsyL/czAq5jAqWbw69JeoA77r4K2YVbsT9TTEypV/H2n24D9wCbUVFYPzPUQcztysd2Eu2EZxEzkD1m2eYhXK8TqwuCwXYfpqxY3WlF3sClAjQSNqGXuPZ/iWbOA1K9DdniIUZfi+qeEe/btiWxgLYMXIRs8XL8+6boW1Byfth+mOSlF7ZO9zMNZqI9VrPppRERERERERHryG6jMuXuZ+1OVAAAAAElFTkSuQmCC",alt:""})}),Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge3bTWgdVRjG8V+r7cZG7EJqa4xaxazcqFu1EUVUECLddSVi8LtVC11IpWpBQRd+xCLuXLiJGxcqbhQrCNGkC921C0tarIhI0pgawaR1ce69md7Mzdw5d2butOSBB+58vef9DzPnY865rOvy1oYKyhjAMG7DEK7BlsaxBcziNE7gOP6uIKdCtREjeAfHsIwLXXoJ03gbuxqxaqvtOIwZ3QNmeQZv4LoKOTI1iCNYVBxouxcxjh0VMaXqSuzFvPJA272AQ9hcAd9FulV4P6sCbfcUdpZO2dBunC0ZqBvPYbRkVs/JV+uW7fN4uSzYQzUA7OSDRcM+UwOoLO8rCna3ej3GnbysgHf6FqFy6DdMt57TQ+29SX+bnlhPCX2E3Nqfs6CjmBAGA/2Gzv0+Dwqjlm4LGEtcez3O9Bn4rJzd0CM5gv+Wcn0dmrAP0sDShl/b8XjmLVlRFWPqGD2hy1HWYfnv5lOJ6wfxe0SMMvx6FuxG8ePZ74VKq07N2EkZT+BIDZIs2vckAdvf4UfWuhuXqB5KbrQDj1SYSFW6r9OBAXF95umUWGMp542lnDfdKHMCjwlt+CZsayT6If6JyCnpJStfSS/SXZEBewGewJ1pySR0A77rEfqOZrDkIz2cUXAZ2iP019fSaTyAL3oop8WWBB7qIWCs/stx3h6hyYxRiy0JPBAZrChdi9txdYfj83g1MnYrZh2Ah/A1/sAv+BMf46qUcz/DuYgyUoH7oa3CsPJBKz2izXgSn1vdS1rEZC8FJoH7MYm1Fzd1OHY/Hk7ZfyainPnmj34D35txfFfKvsWIclKBT0UE6lVZ9UanCiyvWrV7Evh4QcHrqBZbO/By9bmUrmVhsh2r3+GfK0+nfB2TaMram6Vvq82lEn2T3GgH/rLCRKrSV8mNduCjwmeRy0Uz+CG5ox34Aj6tLJ3y9YnA1FJa13JcXONeN/2Lj7o9eVz/P7716ne7vzdhmqLKxSpFe07EUqeXapB4rJ/PC0uYcpyqQfJ5PYkrYoDhRvxVA4huPYubY2GbGnXpLHl4tFfYpp6uAVCWXygKtqmDNYDq5FeKhm3qWfV6vM/jxbJgmxpVjynRWQW+s1naqb9N1qTOH/9KU3P5cJULTRdwQOSypKK0A+/rfZZvLZ/De2q2Mn6bsKbipOJAf8Vrjdi11QZhmcFb+EmYn+0WcAk/4k3crYQVQlUsOdoi/IVnWJjr3Wr133hOCV8WTzT2rWtdkfofXktfghLNoOYAAAAASUVORK5CYII=",alt:""})})]})})}}]),n}(o.Component),y=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(o.Fragment,{children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{children:"David Cottrell"}),Object(i.jsx)("p",{children:"Student at Birmingham City University"})]}),Object(i.jsx)(h,{}),Object(i.jsx)("br",{}),Object(i.jsx)(b,{projects:Object(i.jsx)(m,{}),about:Object(i.jsx)(p,{}),skills:Object(i.jsx)(v,{}),footer:Object(i.jsx)(g,{})})]})}}]),n}(o.Component),C=document.getElementById("root");j.a.render(Object(i.jsx)(y,{}),C)},50:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.36006622.chunk.js.map