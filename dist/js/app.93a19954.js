(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/github-jobs/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07c9":function(t,e,a){},"12ae":function(t,e,a){t.exports=a.p+"img/loading.2df94b2c.gif"},"1b39":function(t,e,a){"use strict";var n=a("28f6"),o=a.n(n);o.a},"1e27":function(t,e,a){},"21bb":function(t,e,a){"use strict";var n=a("2dad"),o=a.n(n);o.a},"28f6":function(t,e,a){},"2aa4":function(t,e,a){},"2b9f":function(t,e,a){},"2dad":function(t,e,a){},"43bd":function(t,e,a){"use strict";var n=a("591f"),o=a.n(n);o.a},"48a1":function(t,e,a){"use strict";var n=a("7cf6"),o=a.n(n);o.a},"529b":function(t,e,a){t.exports=a.p+"img/no-image.8afc9440.png"},"56d7":function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"namespaced",(function(){return J})),a.d(n,"state",(function(){return B})),a.d(n,"mutations",(function(){return H})),a.d(n,"actions",(function(){return N})),a.d(n,"getters",(function(){return P}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrapper"},[a("router-view",{key:t.$route.fullPath})],1)])},r=[],i=(a("5c0b"),a("2877")),c={},l=Object(i["a"])(c,s,r,!1,null,null,null),u=l.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("GlobalSearch"),a("main",{staticClass:"main"},[a("MainSidebar"),a("div",{staticClass:"job-cards"},[t._l(t.job.jobs,(function(t){return a("JobCard",{key:t.id,attrs:{job:t}})})),a("Pagination",{attrs:{page:t.page}})],2)],1)],1)},b=[],f=(a("a9e3"),a("5530")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"Home"}}},[a("h1",{staticClass:"logo_title"},[a("span",{staticClass:"logo_title-bold"},[t._v("github")]),t._v(" jobs ")])])],1)},h=[],_={name:"Header"},v=_,g=(a("7afe"),Object(i["a"])(v,m,h,!1,null,"e7b07080",null)),j=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"global-search"},[a("form",{staticClass:"global-search-form"},[a("label",[a("i",{staticClass:"material-icons global-search-form__icon"},[t._v("work")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"global-search-form__text",attrs:{type:"text",placeholder:"Title, companies, expertise or benefits"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}})]),a("button",{staticClass:"global-search-form__button",attrs:{type:"button"},on:{click:t.processSearch}},[t._v(" Search ")])])])},C=[],x=a("2f62"),w=(a("7db0"),a("bc3a")),k=a.n(w),S=a("323e"),O=a.n(S),E=k.a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://jobs.github.com",withCredentials:!1,headers:{Accept:"application/json","Content-type":"application/json"}});E.interceptors.request.use((function(t){return O.a.start(),t})),E.interceptors.response.use((function(t){return O.a.done(),t}));var T={getJobs:function(t){return E.get("/positions.json",{params:Object(f["a"])({markdown:!1},t)})},getJobById:function(t){return E.get("/positions/"+t+".json",{params:{markdown:!1}})}},J=!0,B={jobs:[],job:{},hasNext:!1,page:1},H={SET_JOBS:function(t,e){t.jobs=e},SET_HAS_NEXT:function(t,e){t.hasNext=e},SET_JOB:function(t,e){t.job=e},SET_PAGE:function(t,e){t.page=e}},N={fetchJobs:function(t,e){var a=t.commit,n=t.state,o=e.params,s=void 0===o?{}:o;return s.page===n.page&&!s.reload&&!s.location&&n.jobs.length>0?n.jobs:T.getJobs(s).then((function(t){a("SET_JOBS",t.data),a("SET_PAGE",s.page),n.jobs.length<50?a("SET_HAS_NEXT",!1):a("SET_HAS_NEXT",!0)})).catch((function(t){alert("There was a problem fetching jobs: "+t.message)}))},fetchJob:function(t,e){var a=t.commit,n=t.getters,o=n.getJobById(e);return o?(a("SET_JOB",o),o):T.getJobById(e).then((function(t){return a("SET_JOB",t.data),t.data})).catch((function(t){alert("There was a problem fetching job: "+t.message)}))}},P={getJobById:function(t){return function(e){return t.jobs.find((function(t){return t.id===e}))}},hasNext:function(t){return t.hasNext}};o["a"].use(x["a"]);var $=new x["a"].Store({modules:{job:n}}),I={name:"GlobalSearch",data:function(){return{searchQuery:""}},methods:{processSearch:function(){$.dispatch("job/fetchJobs",{params:{search:this.searchQuery}})}}},q=I,M=(a("bbed"),Object(i["a"])(q,y,C,!1,null,"cda54548",null)),A=M.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"main-sidebar"},[a("CheckBox",{attrs:{checkvalue:"full_time",type:"checkbox",name:"type"}},[t._v("Full stack")]),a("h2",{staticClass:"sidebar-title"},[t._v("Location")]),a("form",{staticClass:"sidebar-search"},[a("label",[a("i",{staticClass:"material-icons sidebar-search__icon"},[t._v("public")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.params.location,expression:"params.location"}],staticClass:"sidebar-search__text",attrs:{type:"text",placeholder:"City, state, zip code or country"},domProps:{value:t.params.location},on:{input:[function(e){e.target.composing||t.$set(t.params,"location",e.target.value)},t.processSearch]}})])]),a("CheckBox",{attrs:{checkvalue:"London",type:"radio",name:"location"}},[t._v("London")]),a("CheckBox",{attrs:{checkvalue:"Amsterdam",type:"radio",name:"location"}},[t._v("Amsterdam")]),a("CheckBox",{attrs:{checkvalue:"New York",type:"radio",name:"location"}},[t._v("New York")]),a("CheckBox",{attrs:{checkvalue:"Berlin",type:"radio",name:"location"}},[t._v("Berlin")])],1)},L=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"search-criteria"},[a("input",{staticClass:"search-criteria__checkbox",attrs:{type:t.type,name:t.name},domProps:{value:t.checkvalue},on:{change:function(e){return t.checked(e)}}}),a("span",{staticClass:"search-criteria__icon"}),a("span",{staticClass:"search-criteria__title"},[t._t("default")],2)])},F=[],G=(a("b0c0"),{name:"CheckBox",data:function(){return{isFullOnly:!1}},props:{checkvalue:{type:String,default:""},name:{type:String,required:!0},type:{type:String,default:"radio"}},methods:{checked:function(t){var e={};"type"===t.target.name?(console.log(t.target.value),this.isFullOnly=!this.isFullOnly):e[this.name]=t.target.value,e.page=1,e.full_time=this.isFullOnly,e.reload=!0,e.checkNext=!1,console.log(e),$.dispatch("job/fetchJobs",{params:e})}}}),R=G,X=(a("d03b"),Object(i["a"])(R,Q,F,!1,null,null,null)),U=X.exports,Y={name:"MainSidebar",components:{CheckBox:U},data:function(){return{params:{}}},methods:{processSearch:function(){var t=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout((function(){$.dispatch("job/fetchJobs",{params:t.params})}),800)}}},z=Y,K=(a("1b39"),Object(i["a"])(z,D,L,!1,null,null,null)),V=K.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-link",{attrs:{to:{name:"job-show",params:{id:t.job.id}}}},[a("div",{staticClass:"job-card"},[a("img",{directives:[{name:"image-loader",rawName:"v-image-loader"}],staticClass:"job-card__image",attrs:{src:t.job.company_logo,alt:"Company\n  Image"}}),a("div",{staticClass:"job-card__content"},[a("h4",{staticClass:"job-card__company-name"},[t._v(t._s(t.job.company))]),a("h2",{staticClass:"job-card__position"},[t._v(t._s(t.job.title))]),a("div",{staticClass:"job-card-info"},[a("div",{staticClass:"job-card__type"},[a("span",[t._v(t._s(t.job.type))])]),a("div",{staticClass:"job-card__post"},[a("p",{staticClass:"job-card__city"},[a("i",{staticClass:"material-icons job-card__city-icon"},[t._v("public")]),a("span",[t._v(t._s(t.job.location))])]),a("p",{staticClass:"job-card__post-date"},[a("i",{staticClass:"material-icons job-card__post-date-icon"},[t._v("access_time")]),a("span",[t._v(t._s(t.postedDay))])])])])])])])],1)},Z=[],tt=new Date,et={name:"JobCard",props:{job:{type:Object,default:function(){return{company_logo:"test",company:"text",test:"Text tEtxt"}}}},computed:{postedDay:function(){var t=new Date(this.job.created_at),e=tt-t,a=Math.ceil(e/864e5);return a?a+(1===a?" day ago":" days ago"):"today"}}},at=et,nt=(a("48a1"),Object(i["a"])(at,W,Z,!1,null,null,null)),ot=nt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[1!==t.page?[a("router-link",{attrs:{to:{name:"Home",query:{page:t.page-1}},rel:"next"}},[a("div",{staticClass:"pagination__button"},[a("i",{staticClass:"material-icons"},[t._v("chevron_left")])])]),t.page>2?[a("router-link",{attrs:{to:{name:"Home",query:{page:1}},rel:"next"}},[a("div",{staticClass:"pagination__button"},[t._v(" 1 ")])])]:t._e(),a("router-link",{attrs:{to:{name:"Home",query:{page:t.page-1}},rel:"next"}},[a("div",{staticClass:"pagination__button"},[t._v(" "+t._s(t.page-1)+" ")])])]:t._e(),a("div",{staticClass:"pagination__button pagination__button-active"},[t._v(" "+t._s(t.page)+" ")]),t.hasNext?[a("router-link",{attrs:{to:{name:"Home",query:{page:t.page+1}},rel:"next"}},[a("div",{staticClass:"pagination__button"},[t._v(" "+t._s(t.page+1)+" ")])]),a("router-link",{attrs:{to:{name:"Home",query:{page:t.page+1}},rel:"next"}},[a("div",{staticClass:"pagination__button"},[a("i",{staticClass:"material-icons"},[t._v("chevron_right")])])])]:t._e()],2)},rt=[],it={name:"Pagination",props:{page:{type:Number,required:!0}},computed:Object(f["a"])({},Object(x["b"])({hasNext:"job/hasNext"}))},ct=it,lt=(a("5eaf"),Object(i["a"])(ct,st,rt,!1,null,null,null)),ut=lt.exports,pt=function(t,e){var a=t.query,n=parseInt(t.query.page)||1;a.page=n,$.dispatch("job/fetchJobs",{params:a}).then((function(){t.params.page=n,e()}))},dt={name:"Home",props:{page:{type:Number,required:!0}},components:{Header:j,GlobalSearch:A,MainSidebar:V,JobCard:ot,Pagination:ut},beforeRouteEnter:function(t,e,a){pt(t,a)},beforeRouteUpdate:function(t,e,a){pt(t,a)},computed:Object(f["a"])({},Object(x["c"])(["job"]))},bt=dt,ft=(a("21bb"),Object(i["a"])(bt,d,b,!1,null,null,null)),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"job-show"},[a("Header"),a("main",{staticClass:"main"},[a("InfoSidebar",{attrs:{how:t.job.how_to_apply}}),a("section",[a("div",{staticClass:"job-block"},[a("div",{staticClass:"job-header"},[a("h3",{staticClass:"job-title"},[t._v(t._s(t.job.title))]),a("div",{staticClass:"job-type"},[a("span",[t._v(t._s(t.job.type))])])]),a("p",{staticClass:"job-post-date"},[a("i",{staticClass:"material-icons job-card__post-date-icon"},[t._v("access_time")]),a("span",[t._v(t._s(t.postedDay))])]),a("div",{staticClass:"job-card job-block-card"},[a("img",{directives:[{name:"image-loader",rawName:"v-image-loader"}],staticClass:"job-block-image",attrs:{src:t.job.company_logo,alt:"Company Image"}}),a("div",{staticClass:"job-card__header"},[a("h4",{staticClass:"job-card__company-name"},[t._v(t._s(t.job.company))]),a("p",{staticClass:"job-card__city"},[a("i",{staticClass:"material-icons job-card__city-icon"},[t._v("public")]),a("span",[t._v(t._s(t.job.location))])])])]),a("div",{staticClass:"job-description",domProps:{innerHTML:t._s(t.job.description)}})])])],1)],1)},_t=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"info-sidebar"},[a("p",{staticClass:"go-back",on:{click:function(e){t.hasHistory()?t.$router.go(-1):t.$router.push("/")}}},[a("i",{staticClass:"material-icons"},[t._v("arrow_left")]),t._v(" Back to search ")]),a("h3",{staticClass:"how-to-apply"},[t._v("how to apply")]),a("p",{staticClass:"how-to-apply-info"},[a("span",{domProps:{innerHTML:t._s(t.how)}})])])},gt=[],jt={name:"InforSidebar",props:{how:{type:String,default:"Please, wait a moment..."}},methods:{hasHistory:function(){return window.history.length>2}}},yt=jt,Ct=(a("a6da"),Object(i["a"])(yt,vt,gt,!1,null,null,null)),xt=Ct.exports,wt=a("529b"),kt=a.n(wt),St=new Date,Ot={data:function(){return{noImage:kt.a}},props:{job:{type:Object,required:!0}},components:{InfoSidebar:xt,Header:j},computed:{postedDay:function(){var t=new Date(this.job.created_at),e=St-t,a=Math.ceil(e/864e5);return a?a+(1===a?" day ago":" days ago"):"today"},companyLogo:function(){return this.job.company_logo||this.noImage}}},Et=Ot,Tt=(a("43bd"),Object(i["a"])(Et,ht,_t,!1,null,null,null)),Jt=Tt.exports;o["a"].use(p["a"]);var Bt=[{path:"/",name:"Home",component:mt,props:!0},{path:"/job/:id",name:"job-show",component:Jt,props:!0,beforeEnter:function(t,e,a){$.dispatch("job/fetchJob",t.params.id).then((function(e){t.params.job=e,a()}))}}],Ht=new p["a"]({mode:"history",base:"/github-jobs/",routes:Bt,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}});Ht.beforeEach((function(t,e,a){O.a.start(),a()})),Ht.afterEach((function(){O.a.done()}));var Nt=Ht,Pt=(a("f5df1"),a("a5d8"),a("5aea"),a("12ae")),$t=a.n(Pt),It={bind:function(t,e){try{var a=e.value,n=$t.a,o=kt.a,s=new Image,r=n,i=o,c=t.src;a instanceof Object&&(r=a.imageLoader||n,i=a.noImage||o),s.src=c,t.src=r,s.onload=function(){t.src=c},s.onerror=function(){t.src=i}}catch(l){console.log(l)}}};o["a"].config.productionTip=!1,o["a"].directive("image-loader",It),new o["a"]({router:Nt,store:$,render:function(t){return t(u)}}).$mount("#app")},"591f":function(t,e,a){},"5aea":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),o=a.n(n);o.a},"5eaf":function(t,e,a){"use strict";var n=a("2aa4"),o=a.n(n);o.a},"7afe":function(t,e,a){"use strict";var n=a("9d5e"),o=a.n(n);o.a},"7cf6":function(t,e,a){},"9c0c":function(t,e,a){},"9d5e":function(t,e,a){},a6da:function(t,e,a){"use strict";var n=a("1e27"),o=a.n(n);o.a},bbed:function(t,e,a){"use strict";var n=a("2b9f"),o=a.n(n);o.a},d03b:function(t,e,a){"use strict";var n=a("07c9"),o=a.n(n);o.a}});
//# sourceMappingURL=app.93a19954.js.map