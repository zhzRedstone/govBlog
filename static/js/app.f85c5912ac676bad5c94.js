webpackJsonp([1],{"+92I":function(t,e){},"3Qof":function(t,e){},"59P+":function(t,e){},"7rLz":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("/5sW"),n=i("mvHQ"),a=i.n(n),o=i("EFqf"),r=i.n(o),c=i("V8mf"),l=i.n(c),u=(i("7rLz"),{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("div",{staticClass:"group"},[i("router-link",{staticClass:"item mdi mdi-arrow-left",style:t.style,attrs:{id:"back",to:t.to}}),t._m(0)],1),i("div",{staticClass:"group"},[i("div",{staticClass:"hidden",class:t.toggle?"show":""},t._l(t.separates,function(e,s){return i("router-link",{key:s,staticClass:"item",attrs:{to:e.path}},[t._v(t._s(e.title))])}),1),i("a",{staticClass:"item mdi mdi-menu",class:t.toggle?"rotate":"",on:{click:function(e){t.toggle=!t.toggle}}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"drop-down"},[e("span",{staticClass:"item mdi mdi-format-annotation-plus"}),e("span",{staticClass:"item mdi mdi-share-variant"})])}]});var d=i("VU/8")({name:"Menu",data:function(){return{style:{opacity:1,transform:"rotate(0deg)"},separates:this.config.separates,to:"/",toggle:!1}},created:function(){this.state(this.$route.name)},watch:{$route:function(t,e){this.state(t.name)}},methods:{cl:function(t){this.separate=t},state:function(t){return"Index"==t?(this.style.opacity=0,void(this.to="/")):"Archive"==t?(this.style.opacity=1,this.style.transform="rotate(0deg)",void(this.to="/")):(this.style.transform="rotate(90deg)",void(this.to="/archive"))}},props:["inside","config"]},u,!1,function(t){i("dApw")},null,null).exports,h={name:"Comments",data:function(){return{t:!0,comments:!1,login:!1}},created:function(){this.getComments()},methods:{getComments:function(){var t=[];fetch("https://api.github.com/repos/"+this.config.author+"/"+this.config.reop+"/issues/"+this.id+"/comments").then(function(t){return t.json()}).then(function(e){e.forEach(function(e){t.push({name:e.user.login,avatar:e.user.avatar_url,url:e.user.html_url,body:e.body})})}),this.comments=t}},watch:{update:function(){this.comments.push(this.update)}},props:["config","id","update"]},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"comments"}},[i("div",{staticClass:"comments-head"},[i("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"white",d:"M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7C5,5.89 5.9,5 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.9 12.75,23 12.5,23V23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15Z"}})]),t._v("  评论")]),t.comments?i("ol",{staticClass:"comment-list"},t._l(t.comments,function(e){return i("li",{staticClass:"comment-body comment-parent"},[i("div",{staticClass:"a-comment"},[i("div",{staticClass:"comment-element"},[i("div",{staticClass:"comment-container"},[i("div",{staticClass:"comment-author-avatar"},[i("a",{attrs:{href:e.url}},[i("img",{staticClass:"avatar",attrs:{src:e.avatar,alt:e.name,width:"55",height:"55"}})])]),i("div",{staticClass:"comment-author-info"},[i("div",{staticClass:"comments-meta"},[i("span",{staticClass:"comment-author-name"},[i("a",{attrs:{href:e.url,rel:"external nofollow"}},[t._v(t._s(e.name))])]),t._m(0,!0)]),i("div",{staticClass:"comment-content"},[i("p",[t._v(t._s(e.body))])])])])]),t._m(1,!0)])])}),0):t._e(),i("center")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"comment-time"},[this._v("啥时候？"),e("span",{staticClass:"detail-time"},[this._v(" · 到底啥时候？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"comment-reply"},[e("span",{staticClass:"mdi mdi-reply"})])}]};var g=i("VU/8")(h,m,!1,function(t){i("59P+")},null,null).exports,f=new r.a.Renderer;f.code=function(t,e){return'<pre><code class="hljs '+e+'">'+l.a.highlightAuto(t).value+"</code></pre>"},r.a.setOptions({renderer:f});var v={name:"Separates",data:function(){return{id:!1,blog:!1}},created:function(){var t=this,e=this;this.config.separates.forEach(function(i){(i.name=t.$route.name)&&(e.id=i.id)}),fetch("https://api.github.com/repos/"+e.config.author+"/"+e.config.reop+"/issues/"+e.id).then(function(t){return t.json()}).then(function(t){e.blog={title:t.title,body:r()(t.body)}})},components:{Comments:g},props:["config","login"]},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"screen page",attrs:{id:"page"}},[t.blog?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page-wrapper"},[i("div",{staticClass:"title"},[t._v(t._s(t.blog.title)),i("div",{staticClass:"meta"},[t._v("独立页面")])]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.blog.body)}}),i("Comments",{attrs:{config:t.config,id:t.id}})],1)]):t._e()])},staticRenderFns:[]};var _=i("VU/8")(v,p,!1,function(t){i("UGsN")},null,null).exports,C={author:"FireUnicornser",reop:"govBlog",title:"腐坏科技",subTitle:"哇，又不知道想干点啥了。。。",url:"https://www.godgov.cn/",oauth:{use:!0,url:"https://al.godgov.cn:25563/",client_id:"57e324589d9c66aab37e"},separates:[{title:"友链",name:"Friends",path:"/friends",id:"4"}],separatePage:function(){var t=[];return this.separates.forEach(function(e){t.push({path:e.path,name:e.name,component:_})}),t}},b=(i("3Qof"),i("+92I"),i("R5/K")),y=new r.a.Renderer;y.code=function(t,e){return'<pre><code class="hljs '+e+'">'+l.a.highlightAuto(t).value+"</code></pre>"},r.a.setOptions({renderer:y});var w={name:"IndexBlog",data:function(){var t={lists:!1,bg:"https://i.loli.net/2018/04/15/5ad2ca39da9bb.jpg",info:{articleCount:0,categoryCount:0,commentCount:0,avatar:!1},inside:{move:"",infoStyle:{opacity:0,left:0}},login:!1,loginuser:""};return t.config=C,t},components:{Menu:d},created:function(){this.getData(),this.login=this.$cookies.get("IndexBlog_Login"),this.login?this.getLoginUser():this.getToken()},methods:{getLoginUser:function(){var t=this;fetch("https://api.github.com/user?access_token="+t.login).then(function(t){return t.json()}).then(function(e){t.loginuser=e.login})},getToken:function(){var t=this;this.$url().hasOwnProperty("code")&&fetch(t.config.oauth.url,{method:"POST",body:a()({code:this.$url().code}),headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors"}).then(function(t){return t.json()}).then(function(e){e.state&&(t.login=e.token,t.$cookies.set("IndexBlog_Login",e.token,86400),t.getLoginUser())})},content:function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText},getData:function(){var t=this;fetch("https://api.github.com/users/"+t.config.author).then(function(t){return t.json()}).then(function(e){t.info.avatar=e.avatar_url}),fetch("https://api.github.com/repos/"+t.config.author+"/"+t.config.reop+"/issues?creator="+t.config.author).then(function(t){return t.json()}).then(function(e){var i=[],s=0;e.forEach(function(e,n){i.push({img:!1,title:e.title,id:e.number,labels:[],body:r()(e.body),content:t.content(r()(e.body)),author:e.user.login}),s+=e.comments,e.labels.forEach(function(t){i[n].labels.push({name:t.name,color:t.color})});var a=document.createElement("div");a.innerHTML=i[n].body;var o=a.querySelector("img");o&&(i[n].img=o.src,"hide"==o.alt&&(a.querySelector("img").parentNode.removeChild(o),i[n].body=a.innerHTML))}),t.lists=i,b.a.to(t.info,1,{articleCount:e.length,roundProps:["articleCount"]}),b.a.to(t.info,1,{commentCount:s,roundProps:["commentCount"]})}),fetch("https://api.github.com/repos/"+t.config.author+"/"+t.config.reop+"/labels").then(function(t){return t.json()}).then(function(e){b.a.to(t.info,1,{categoryCount:e.length,roundProps:["categoryCount"]})})}},watch:{$route:function(t,e){if("Index"!=e.name)return"Archive"==e.name?"Index"==t.name?void(this.inside.move="move-left"):void(this.inside.move="move-down"):void(this.inside.move="move-up");this.inside.move="move-right"}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"IndexBlog"}},[i("div",{staticClass:"bg",style:{backgroundImage:"url("+t.bg+")"}}),i("Menu",{attrs:{inside:t.inside,config:t.config}}),i("transition",{attrs:{name:t.inside.move}},[i("router-view",{attrs:{lists:t.lists,info:t.info,config:t.config,inside:t.inside,login:t.login,loginuser:t.loginuser}})],1)],1)},staticRenderFns:[]};var k=i("VU/8")(w,x,!1,function(t){i("YoGK")},null,null).exports,$=i("/ocq"),E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"screen index",attrs:{id:"index"}},[e("div",{staticStyle:{margin:"40vh auto","text-align":"center"}},[e("h1",{staticStyle:{"font-size":"2.3rem"}},[this._v(this._s(this.config.title))]),e("span",{staticStyle:{color:"#696969","font-size":"0.9rem"}},[this._v(this._s(this.config.subTitle))]),e("h3"),e("br"),e("router-link",{staticClass:"btn",attrs:{to:"/archive"}},[this._v("Explore Me")])],1)])},staticRenderFns:[]};var S=i("VU/8")({name:"Index",props:["config"]},E,!1,function(t){i("mRSH")},null,null).exports,L={name:"Archive",data:function(){return{date:new Date,infoStyle:{opacity:1}}},mounted:function(){document.getElementById("archive").addEventListener("scroll",this.handleScroll,!0),document.getElementById("archive").addEventListener("wheel",this.pageWheel,!0)},methods:{handleScroll:function(t){this.inside.infoStyle.left=document.getElementById("bar").scrollLeft},goPage:function(t){this.$router.push({path:"/page/"+t})},pageWheel:function(t){-0==t.deltaX&&document.getElementById("bar").scrollBy(t.deltaY,0)}},computed:{leftChannel:function(){return this.inside.infoStyle.left}},watch:{lists:function(){this.handleScroll()},leftChannel:function(t,e){this.infoStyle.opacity=(300-t)/300}},props:["lists","info","config","inside"]},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"screen archive",attrs:{id:"archive"}},[i("div",{staticClass:"archive-container",attrs:{id:"bar"}},[i("div",{staticClass:"author-info right-in-animation",style:t.infoStyle},[i("img",{staticClass:"avatar",attrs:{src:t.info.avatar,width:"100",height:"100"}}),i("div",{staticClass:"name"},[t._v(t._s(t.config.title))]),i("div",{staticClass:"desc"},[t._v(t._s(t.config.subTitle))]),i("div",{staticClass:"stat"},[i("div",{staticClass:"article-count"},[t._v(t._s(t.info.articleCount))]),i("div",{staticClass:"category-count"},[t._v(t._s(t.info.categoryCount))]),i("div",{staticClass:"comment-count"},[t._v(t._s(t.info.commentCount))])]),i("div",{staticClass:"social"}),i("div",{staticClass:"copyright"},[t._v("© "+t._s(t.config.title)+" - "+t._s(t.date.getFullYear())),t._m(0)])]),t.lists?i("div",{staticClass:"article-list"},t._l(t.lists,function(e){return e.img?i("div",{staticClass:"article-with-preview right-in-animation"},[i("div",{staticClass:"cover",on:{click:function(i){return t.goPage(e.id)}}},[i("div",{staticClass:"cover-image",style:{backgroundImage:"url("+e.img+")"}},[i("div",{staticClass:"title"},[t._v(t._s(e.title))])])]),i("div",{staticClass:"content",on:{click:function(i){return t.goPage(e.id)}}},[i("div",{staticClass:"text"},[t._v(t._s(e.content))])]),i("div",{staticClass:"meta"},[i("div",{staticClass:"group"},t._l(e.labels,function(e){return i("a",{staticClass:"category",style:{"background-color":"#"+e.color}},[t._v(t._s(e.name))])}),0),i("div",{staticClass:"group date"},[t._v(t._s(e.author))])])]):i("div",{staticClass:"article right-in-animation",style:e.style},[i("div",{staticClass:"title"},[i("router-link",{attrs:{to:"/page/"+e.id}},[t._v(t._s(e.title))]),i("div",{staticClass:"meta"},[t._l(e.labels,function(e){return i("a",{staticClass:"category",style:{"background-color":"#"+e.color}},[t._v(t._s(e.name))])}),t._v(t._s(e.author))],2)],1),i("div",{staticClass:"content",on:{click:function(i){return t.goPage(e.id)}}},[i("p",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(e.content))])])])}),0):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-info"},[e("a",{attrs:{href:"https://github.com/Archeb/Candy-Rebirth"}},[this._v("Theme")]),this._v("\nBy\n"),e("a",{attrs:{href:"https://qwq.moe/"}},[this._v("Archeb")]),this._v("\nTBy\n"),e("a",{attrs:{href:"https://godgov.cn/"}},[this._v("FireUnicornser")])])}]},I=i("VU/8")(L,H,!1,null,null,null).exports,P={name:"Page",data:function(){return{blog:!1,message:"",update:!1}},created:function(){this.lists&&this.changeList()},watch:{lists:function(){this.changeList()}},methods:{send:function(){if(this.login&&this.message.length>0){var t=this;fetch("https://api.github.com/repos/"+t.config.author+"/"+t.config.reop+"/issues/"+t.$route.params.id+"/comments?access_token="+t.login,{method:"POST",body:a()({body:t.message}),headers:new Headers({"Content-Type":"application/json"})}).then(function(t){return t.json()}).then(function(e){t.update={name:e.user.login,avatar:e.user.avatar_url,url:e.user.html_url,body:e.body}})}},changeList:function(){var t=this;this.lists.forEach(function(e){if(e.id==t.$route.params.id)return t.blog=e,!1})},logout:function(){this.$cookies.remove("IndexBlog_Login"),window.location.href=this.config.url+"#"+this.$route.path,location.reload()}},components:{Comments:g},props:["lists","config","login","loginuser"]},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"screen page",attrs:{id:"page"}},[t.blog?i("div",{staticClass:"page-container"},[i("div",{staticClass:"page-wrapper"},[t.blog.img?i("div",{staticClass:"cover"},[i("div",{staticClass:"cover-image",style:{backgroundImage:"url("+t.blog.img+")"}},[i("div",{staticClass:"title"},[t._v(t._s(t.blog.title)),i("div",{staticClass:"meta"},t._l(t.blog.labels,function(e){return i("a",{staticClass:"category",style:{"background-color":"#"+e.color}},[t._v(t._s(e.name))])}),0)])])]):i("div",{staticClass:"title"},[t._v(t._s(t.blog.title)),i("div",{staticClass:"meta"},t._l(t.blog.labels,function(e){return i("a",{staticClass:"category",style:{"background-color":"#"+e.color}},[t._v(t._s(e.name))])}),0)]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.blog.body)}}),i("Comments",{attrs:{config:t.config,id:t.$route.params.id,update:t.update}}),t.config.oauth.use?i("form",{attrs:{id:"comment-form",methods:"post",action:"#",role:"form"}},[i("div",{staticClass:"send-comment"},[i("div",{staticClass:"respond"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"textarea",attrs:{rows:"8",name:"body",placeholder:"来一发？",disabled:!t.login},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),i("a",{staticClass:"send",class:{dissend:!t.login},on:{click:t.send}},[i("svg",{staticStyle:{width:"50px",height:"20px"},attrs:{viewBox:"0 0 24 24"}},[i("path",{attrs:{fill:"#666666",d:"M2,21L23,12L2,3V10L17,12L2,14V21Z"}})])])])]),t.login?i("div",{staticClass:"extra"},[i("div",{staticClass:"text-info",staticStyle:{"background-color":"#20bf20",color:"white"}},[t._v("登录身份 "+t._s(t.loginuser)+" "),i("a",{staticStyle:{cursor:"pointer"},on:{click:t.logout}},[t._v("退登>>")])])]):i("div",{staticClass:"extra"},[i("div",{staticClass:"text-info",staticStyle:{"background-color":"#f0ad4e",color:"white"}},[t._v("请登录到 GITHUB 尊享评论功能 "),i("a",{attrs:{href:"https://github.com/login/oauth/authorize?client_id="+t.config.oauth.client_id+"&redirect_uri="+t.config.url+"#/page/"+t.$route.params.id}},[t._v("登录>>")])])])]):i("form",{attrs:{id:"comment-form",methods:"post",action:"#",role:"form"}},[i("div",{staticClass:"extrax extra"},[i("div",{staticClass:"text-info",staticStyle:{"background-color":"#aaaaaa",color:"white"}},[t._v("评论功能尚未开启，请到 "),i("a",{attrs:{href:"https://github.com/"+t.config.author+"/"+t.config.reop+"/issues/"+t.$route.params.id}},[t._v("这里评论>>")])])])])],1)]):t._e()])},staticRenderFns:[]};var T=i("VU/8")(P,V,!1,function(t){i("yju6")},null,null).exports;s.a.use($.a);var j=new $.a({routes:[{path:"/",name:"Index",component:S},{path:"/archive/",name:"Archive",component:I},{path:"/page/:id",name:"Page",component:T}].concat(C.separatePage())}),U=i("ppUw"),A=i.n(U);s.a.use(A.a),s.a.config.productionTip=!1,s.a.prototype.$url=function(){var t=decodeURIComponent(location.search),e=new Object;if(-1!=t.indexOf("?"))for(var i=t.substr(1).split("&"),s=0;s<i.length;s++)e[i[s].split("=")[0]]=unescape(i[s].split("=")[1]);return e},new s.a({el:"#indexblog",router:j,render:function(t){return t(k)}})},UGsN:function(t,e){},YoGK:function(t,e){},dApw:function(t,e){},mRSH:function(t,e){},yju6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f85c5912ac676bad5c94.js.map