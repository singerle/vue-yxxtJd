webpackJsonp([99],{124:function(t,e,n){"use strict";function a(t,e){s.a.set(t,e)}function i(t){return s.a.get(t)}function o(t){s.a.remove(t)}e.b=a,e.a=i,e.c=o;var r=n(432),s=n.n(r)},147:function(t,e,n){function a(t){n(286)}var i=n(4)(n(210),n(294),a,"data-v-0c48d462",null);t.exports=i.exports},148:function(t,e,n){function a(t){n(287)}var i=n(4)(n(211),n(295),a,"data-v-12cc8d03",null);t.exports=i.exports},149:function(t,e,n){function a(t){n(290)}var i=n(4)(n(212),n(298),a,"data-v-c4c5885c",null);t.exports=i.exports},150:function(t,e,n){function a(t){n(289)}var i=n(4)(null,n(297),a,"data-v-87d95f84",null);t.exports=i.exports},151:function(t,e,n){function a(t){n(288)}var i=n(4)(n(213),n(296),a,"data-v-5f7c0aa9",null);t.exports=i.exports},197:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),i=n.n(a),o=n(87),r=n(74),s=n(66),u=(n.n(s),n(124)),c=["/login"];o.a.beforeEach(function(t,e,a){t.query.userId&&r.a.commit("SET_TOKEN",t.query.userId),n.i(u.a)("token")?"/login"===t.path?a({path:"/"}):0===r.a.getters.roles.length?r.a.dispatch("FetchUserInfo").then(function(e){e?r.a.dispatch("GenerateRoutes",{data:r.a.getters.roles,rolesStatis:r.a.getters.rolesStatis}).then(function(){o.a.addRoutes(r.a.getters.activeRouter),a(i()({},t))}):(s.Message.error("拉取用户信息失败!"),r.a.dispatch("FedLogout").then(function(){a({path:"/login"})}))}).catch(function(t){s.Message.error("拉取用户信息失败!请重新登录++++++"),r.a.dispatch("FedLogout").then(function(){a({path:"/login"})})}):a():-1!==c.indexOf(t.path)?a():a("/login")})},199:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a="http://222.179.134.204:8081"},200:function(t,e,n){"use strict";var a=n(36),i=n.n(a),o=n(89),r=n.n(o),s=n(74),u=n(66),c=(n.n(u),r.a.create({baseURL:n.i({NODE_ENV:"production"}).BASE_API,timeout:1e4}));c.interceptors.request.use(function(t){return s.a.getters.token&&(t.headers.token=s.a.getters.token),t},function(t){i.a.reject(t)}),c.interceptors.response.use(function(t){return t.headers.code?"200"===t.headers.code?t:(u.MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录","确定登出",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then(function(){s.a.dispatch("FedLogout").then(function(){location.reload()})}),i.a.reject(new Error("后台返回格式不对"))):t},function(t){n.i(u.Message)({message:"访问出错",type:"error",duration:5e3}),i.a.reject(t)}),e.a=c},210:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(150),i=n.n(a),o=n(148),r=n.n(o),s=n(149),u=n.n(s);e.default={components:{mainOa:i.a,asideOa:r.a,headerOa:u.a}}},211:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),i=n.n(a),o=n(9);e.default={created:function(){},mounted:function(){},updated:function(){},data:function(){return{zIndex:"/dashboard"}},computed:i()({},n.i(o.b)(["routers","roles"])),methods:{handleOpen:function(t,e){},handleClose:function(t,e){},selectItem:function(t,e){this.zIndex=t,this.$router.push({path:t})}}}},212:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),i=n.n(a),o=n(9);e.default={computed:i()({},n.i(o.b)(["name","avatar"])),methods:{logout:function(){var t=this;this.$store.dispatch("FedLogout").then(function(){t.$router.push({path:"/login"})})}}}},213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),i=n.n(a),o=n(9);e.default={data:function(){return{login:{name:"admin",password:"123456"},loading:!1,rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:i()({handleLogin:function(){var t=this;this.$refs.login.validate(function(e){e&&(t.loading=!0,t.Login(t.login).then(function(e){t.loading=!1,e?t.$router.push("/"):t.MessageError("用户名或者密码错误")}).catch(function(){t.loading=!1}))})}},n.i(o.d)(["Login"])),mounted:function(){}}},214:function(t,e,n){"use strict";function a(t){var e=t.name,a=t.password,i={userName:e,userPassword:a};return i=s.a.stringify(i),n.i(o.a)({url:u.a+"/enroll/background/login",method:"post",data:i})}function i(){return n.i(o.a)({url:u.a+"/enroll/background/getRoles",method:"post"})}e.a=a,e.b=i;var o=n(200),r=n(201),s=n.n(r),u=n(199)},215:function(t,e,n){t.exports=function(t){return function(){return n(306)("./"+t+".vue")}}},216:function(t,e,n){"use strict";var a={token:function(t){return t.user.token},name:function(t){return t.user.name},avatar:function(t){return t.user.avatar},roles:function(t){return t.user.roles},routers:function(t){return t.permission.routers},activeRouter:function(t){return t.permission.addRouters},rolesStatis:function(t){return t.user.rolesStatis},manage:function(t){return t.manage.manage},statis:function(t){return t.statis.statis},index:function(t){return t.statis.index},busInfo:function(t){return t.statis.info},update:function(t){return t.statis.update},appName:function(t){return t.yingxin.appName},authGroupName:function(t){return t.yingxin.authGroupName},newsid:function(t){return t.news.newsid},teacher:function(t){return t.teacher.teacher}};e.a=a},217:function(t,e,n){"use strict";var a=n(41),i=n.n(a),o=n(50),r={state:{manage:{}},mutations:i()({},o.g,function(t,e){t.manage=e})};e.a=r},218:function(t,e,n){"use strict";var a=n(41),i=n.n(a),o=n(50),r={state:{newsid:""},mutations:i()({},o.b,function(t,e){t.newsid=e})};e.a=r},219:function(t,e,n){"use strict";function a(t,e,n){var a=[];if(1===t)return e;if(!n.includes(!0))return[];for(var i=n.indexOf(!0),o=0;o<e.length;o++)if(e[o].roles){a.push(e[o]);break}for(var r=0;r<a.length;r++)(e[r].path="/yingxin")&&(a[r].children[0].redirect=a[r].path+"/"+a[r].children[0].path+"/"+a[r].children[0].children[i].path);return a}var i=n(36),o=n.n(i),r=n(87),s={state:{routers:r.b,addRouters:[]},mutations:{SET_ROUTER:function(t,e){t.addRouters=e,t.routers=r.b.concat(e)}},actions:{GenerateRoutes:function(t,e){var n=t.commit,i=e.data,s=e.rolesStatis,u=1*i[0],c=a(u,r.c,s);return new o.a(function(t){n("SET_ROUTER",c),t(!0)})}}};e.a=s},220:function(t,e,n){"use strict";var a,i=n(41),o=n.n(i),r=n(50),s={state:{statis:{},index:"0",info:{},update:!0},mutations:(a={},o()(a,r.c,function(t,e){t.statis=e}),o()(a,r.d,function(t,e){t.index=e}),o()(a,r.e,function(t,e){t.info=e}),o()(a,r.f,function(t,e){t.update=e}),a)};e.a=s},221:function(t,e,n){"use strict";var a=n(41),i=n.n(a),o=n(90),r=n.n(o),s=n(50),u={state:{teacher:{}},mutations:i()({},s.a,function(t,e){t.teacher=r()(t.teacher,e)})};e.a=u},222:function(t,e,n){"use strict";var a,i=n(36),o=n.n(i),r=n(41),s=n.n(r),u=n(50),c=n(214),d=n(124),l={state:{token:n.i(d.a)("token"),name:n.i(d.a)("name"),avatar:n.i(d.a)("avatar"),roles:[],rolesStatis:[]},mutations:(a={},s()(a,u.h,function(t,e){t.token=e,n.i(d.b)("token",e)}),s()(a,u.i,function(t,e){n.i(d.b)("name",e),t.name=e}),s()(a,u.j,function(t,e){n.i(d.b)("avatar",e),t.avatar=e}),s()(a,u.k,function(t,e){t.roles=e}),s()(a,u.l,function(t,e){t.rolesStatis=e}),a),actions:{Login:function(t,e){var a=t.commit;e.name;return new o.a(function(t,i){n.i(c.a)(e).then(function(e){e=e.data,"200"===e.state?(a("SET_TOKEN",e.data.token),t(!0)):t(!1)}).catch(function(t){i(t)})})},FetchUserInfo:function(t){var e=t.commit;t.state;return new o.a(function(t,a){n.i(c.b)().then(function(n){n=n.data,"200"===n.state?(e("SET_NAME",n.data.name),e("SET_AVATAR",n.data.avatar),e("SET_ROLES",n.data.roles),e("SET_ROLES_STATIS",n.data.statis),t(!0)):t(!1)}).catch(function(t){a(t)})})},FedLogout:function(t){var e=t.commit;return new o.a(function(t){e("SET_TOKEN",""),n.i(d.c)("token"),e("SET_ROLES",[]),t()})}}};e.a=l},223:function(t,e,n){"use strict";var a={state:{appItem:"",authGroupName:"",processItem:"",teacherItem:"",ruxueItem:"",ruxueSiteState:"",newinfo:{}},getters:{appItem:function(t){return t.appItem},processItem:function(t){return t.processItem},teacherItem:function(t){return t.teacherItem},ruxueItem:function(t){return t.ruxueItem},ruxueState:function(t){return t.ruxueState},ruxueSiteState:function(t){return t.ruxueSiteState},newinfo:function(t){return t.newinfo}},mutations:{appItem:function(t,e){t.appItem=e},saveAppName:function(t,e){t.appName=e},saveauthGroupName:function(t,e){t.authGroupName=e},processItem:function(t,e){t.processItem=e},teacherItem:function(t,e){t.teacherItem=e},ruxueItem:function(t,e){t.ruxueItem=e},ruxueState:function(t,e){t.ruxueState=e},ruxueSiteState:function(t,e){t.ruxueSiteState=e},set_new_info:function(t,e){t.newinfo=e}}};e.a=a},286:function(t,e){},287:function(t,e){},288:function(t,e){},289:function(t,e){},290:function(t,e){},293:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAjCAYAAADPPrcpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzNTg1QkEyNkUxQzExRTg5NDY3ODM3NkQyOEVFRUQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzNTg1QkEzNkUxQzExRTg5NDY3ODM3NkQyOEVFRUQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODM1ODVCQTA2RTFDMTFFODk0Njc4Mzc2RDI4RUVFRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODM1ODVCQTE2RTFDMTFFODk0Njc4Mzc2RDI4RUVFRDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz52gTS7AAACyklEQVR42uyZTUhVQRTH7y0fWmZRRt9fREggBFZEiZuyCCqSKKKylYvciLaIWrmyTQRFtIpoXUGEtAiKgoKgiIQIMjTdVIZkRY8otG7v9T80j8bhzHnX9573Xt69B37gPXPGmfefuTNn5rrZbNYJ0XaDm2Ce4R8CjWAsyM7McMK1VkYIsnWgOejOhC3GXKGsKm5iRMoSMSIkhtR+RZzEWA2ahPJNQXfIxdZKgiwGlZr/FxgFGUu9w2rr0+09uAa+MfG0Y7SDZeq5Bhy07CS6vQaftedPoBsMWNo4DzYXMMg/wVWaivfATibgGdjG+JtUbmAb7U7GfxvsEDpDyc4bMBus0fz1wmCYdgG0qRxlxKcIFWpQXbDBycpWTUmZQacQ38vEExmhzhCo02KPgj9CfJ+ljWHQD1KWchuHcv8433RKlWidcYUymkmD2vN10CvEzxT8L8DvKfbtlqoXia11wKfPj2UKrNcfFTG+ML6xgPvgRTnpCvr0WJdkoP/zmcZQsrwAR7rZyJ04WwpO5CZFuYrxEKwwXjs3rge1nBCXQa0a9F35FuZyXjP6QBf4qrbcB5bsOBZiPGZ2pUdxFeM74xtPLndCus+YFUCfbTtgjY9zlVuMGNWMb44Qv0BY2UtlXBt0sTzf8C1n4lYVI0YD49sqxK9nOnWgxGJQorTR8B1nRn0/WGL4OgqZcjk7C55qh6ljYK8QT7PmLjgNPqos8Nw0vCp0IdUDhtXgnDEWSE8NynNwxfl3W7ZHCWQ98dK1HyUiC4WgNHgJVoK1Jf5RadW2Z/j3gTt+skZjp2gB98FFNVtSPuvSHcgNEmM7/jii5fG0CG5xJl+/mUZXa6fAuyJPmB+cyXeculU5U/uQlC72tOtavrVWqh+6yFLvJLgUl611ArwV6o3GLc/whLKJJOlKMtBEjHyvghc3Mej7xQ/G/wo8KUcx/gowAL21YQxIhNL9AAAAAElFTkSuQmCC"},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{staticStyle:{padding:"0"}},[n("header-oa")],1),t._v(" "),n("el-container",[n("el-aside",{staticStyle:{background:"#224B95",width:"140px"}},[n("aside-oa")],1),t._v(" "),n("el-main",{staticStyle:{padding:"0","margin-top":"5px"}},[n("main-oa")],1)],1)],1)},staticRenderFns:[]}},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{textColor:"#fff","default-active":t.zIndex,backgroundColor:"#224B95","active-text-color":"#fff"},on:{select:t.selectItem}},[t._l(t.routers,function(e){return[e.hidden||e.noDropdown||e.code===t.roles[0]?t._e():n("el-menu-item",{key:e.path,staticClass:"item",attrs:{index:e.redirect?e.redirect:e.path+"/"+e.children[0].path}},[n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),!e.hidden&&e.noDropdown?n("el-submenu",{key:e.path,staticClass:"item",attrs:{index:e.name}},[n("template",{slot:"title"},[n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])]),t._v(" "),n("el-menu-item-group",[t._l(e.children,function(a){return[a.role!==t.roles[0]?n("el-menu-item",{key:a,attrs:{index:e.path+"/"+a.path}},[n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(a.name))])]):t._e()]})],2)],2):t._e()]})],2)],1)},staticRenderFns:[]}},296:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container"},[a("el-form",{ref:"login",staticClass:"login-form",attrs:{model:t.login,"label-position":"left",rules:t.rules}},[a("h2",{staticClass:"title"},[t._v("迎新管理系统")]),t._v(" "),a("div",{staticClass:"container"},[a("img",{staticClass:"logo",attrs:{src:n(293),alt:""}}),t._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("i",{staticClass:"icon iconfont icon-user"}),t._v(" "),a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:t.login.name,callback:function(e){t.$set(t.login,"name",e)},expression:"login.name"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("i",{staticClass:"icon iconfont icon-mima"}),t._v(" "),a("el-input",{attrs:{type:"password","auto-complete":"off"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleLogin(e):null}},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"login-btn",staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return t.handleLogin(e)}}},[t._v("登陆")])],1)],1)])],1)},staticRenderFns:[]}},297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},staticRenderFns:[]}},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("img",{attrs:{src:"/yxxt/static/logo.png",alt:""}}),t._v(" "),n("el-dropdown",{staticClass:"el-dropdown"},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"avatar",attrs:{src:t.avatar}}),t._v("\n      "+t._s(t.name)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销")])],1)],1)],1)},staticRenderFns:[]}},306:function(t,e,n){function a(t){var e=i[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var i={"./dashboard/index.vue":[543,71],"./home.vue":[147],"./introductoryPages/index.vue":[544,70],"./layout/aside.vue":[148],"./layout/header.vue":[149],"./layout/main.vue":[150],"./login.vue":[151],"./manage/addManage.vue":[545,69],"./manage/addmember.vue":[546,68],"./manage/index.vue":[547,81],"./manage/list.vue":[548,67],"./manage/manageRange.vue":[549,54],"./manage/manageSet.vue":[550,53],"./manage/member.vue":[551,66],"./newsPublicity/addedNews.vue":[552,14],"./newsPublicity/header.vue":[488,80],"./newsPublicity/index.vue":[553,17],"./newsPublicity/newsCentral.vue":[489,65],"./statis/business.vue":[554,11],"./statis/business/businessContent.vue":[490,79],"./statis/business/businessSelect.vue":[491,47],"./statis/business/businfo.vue":[555,25],"./statis/business/businfoWrapper.vue":[492,78],"./statis/comb.vue":[556,6],"./statis/comb/combCon.vue":[493,77],"./statis/comb/combSel.vue":[494,52],"./statis/statis.vue":[557,76],"./statis/synthesis.vue":[558,16],"./statis/synthesis/synContent.vue":[495,75],"./statis/synthesis/synSelect.vue":[496,51],"./statis/traffic.vue":[559,13],"./statis/traffic/trafficCon.vue":[497,74],"./statis/traffic/trafficSel.vue":[498,50],"./yingxin/addProcess.vue":[560,64],"./yingxin/index.vue":[561,63],"./yingxin/news/addMultiNews.vue":[562,10],"./yingxin/news/addSingleNews.vue":[563,9],"./yingxin/news/index.vue":[564,15],"./yingxin/news/multiNewsHeader.vue":[499,62],"./yingxin/news/multinewsCentral.vue":[500,61],"./yingxin/ruxue.vue":[565,73],"./yingxin/ruxue/addapp.vue":[566,26],"./yingxin/ruxue/app.vue":[567,93],"./yingxin/ruxue/dragList.vue":[501,33],"./yingxin/ruxue/editapp.vue":[568,60],"./yingxin/ruxue/process.vue":[569,24],"./yingxin/site.vue":[570,94],"./yingxin/teacher.vue":[571,59],"./yingxin/teacherOff/addAuth.vue":[572,92],"./yingxin/teacherOff/addmember.vue":[573,58],"./yingxin/teacherOff/authConfig.vue":[574,49],"./yingxin/teacherOff/authGroupEdit.vue":[575,57],"./yingxin/teacherOff/authority.vue":[576,56],"./yingxin/teacherOff/member.vue":[577,55]};a.keys=function(){return Object.keys(i)},t.exports=a,a.id=306},50:function(t,e,n){"use strict";n.d(e,"i",function(){return a}),n.d(e,"h",function(){return i}),n.d(e,"j",function(){return o}),n.d(e,"k",function(){return r}),n.d(e,"l",function(){return s}),n.d(e,"g",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return l}),n.d(e,"d",function(){return m}),n.d(e,"b",function(){return f}),n.d(e,"a",function(){return p});var a="SET_NAME",i="SET_TOKEN",o="SET_AVATAR",r="SET_ROLES",s="SET_ROLES_STATIS",u="SET_MANAGE_ID",c="SET_STATIS_OPTIONS",d="SET_INFO",l="SET_UPDATE",m="SET_INDEX",f="SET_NEWS_ID",p="SET_TEACHER"},74:function(t,e,n){"use strict";var a=n(8),i=n(9),o=n(222),r=n(216),s=n(219),u=n(217),c=n(220),d=n(299),l=(n.n(d),n(223)),m=n(218),f=n(221);a.default.use(i.a);var p=new i.a.Store({modules:{user:o.a,permission:s.a,manage:u.a,statis:c.a,yingxin:l.a,news:m.a,teacher:f.a},getters:r.a,plugins:[]});e.a=p},87:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"c",function(){return d});var a=n(8),i=n(122),o=n(147),r=n.n(o),s=n(151);n.n(s);a.default.use(i.a);var u=n(215),c=[{path:"/login",name:"login",hidden:!0,component:u("login")},{path:"/",name:"主页",redirect:"/dashboard",component:r.a,children:[{path:"dashboard",component:u("dashboard/index")}]},{path:"/yingxin",name:"迎新配置",roles:!0,component:r.a,children:[{path:"process",component:u("yingxin/index")},{path:"addProcess",component:u("yingxin/addProcess")},{path:"ruxue",component:u("yingxin/ruxue"),children:[{path:"/",component:u("yingxin/ruxue/app")},{path:"process",component:u("yingxin/ruxue/process")}]},{path:"addapp",component:u("yingxin/ruxue/addapp")},{path:"teacher",component:u("yingxin/teacher")},{path:"member",component:u("yingxin/teacherOff/member")},{path:"editapp",component:u("yingxin/ruxue/editapp")},{path:"addmember",component:u("yingxin/teacherOff/addmember")},{path:"authority",component:u("yingxin/teacherOff/authority")},{path:"addAuth",component:u("yingxin/teacherOff/addAuth")},{path:"authConfig",component:u("yingxin/teacherOff/authConfig")},{path:"authGroupEdit",component:u("yingxin/teacherOff/authGroupEdit")},{path:"singleNews",component:u("yingxin/news/addSingleNews")},{path:"multiNews",component:u("yingxin/news/index")},{path:"addMultiNews",component:u("yingxin/news/addMultiNews")}]}],d=[{path:"/newsPublicity",name:"新闻公示",component:r.a,children:[{path:"news",component:u("newsPublicity/index")},{path:"addedNews",name:"新增新闻",component:u("newsPublicity/addedNews")}]},{path:"/statis",name:"数据统计",component:r.a,roles:!0,children:[{path:"index",component:u("statis/statis"),redirect:"/statis/index/synthesis",children:[{path:"synthesis",name:"综合统计",component:u("statis/synthesis")},{path:"business",name:"业务数据查询",component:u("statis/business")},{path:"comb",name:"组合查询",component:u("statis/comb")},{path:"businfo",name:"基本信息",component:u("statis/business/businfo")},{path:"traffic",name:"交通信息",component:u("statis/traffic")}]}]},{path:"/manage",name:"权限管理",component:r.a,children:[{path:"index",component:u("manage/index"),redirect:"/manage/index/list",children:[{path:"list",name:"列表",component:u("manage/list")},{path:"add",name:"新增权限组",component:u("manage/addManage")},{path:"member",name:"成员管理",component:u("manage/member")},{path:"addmember",name:"新增成员",component:u("manage/addmember")},{path:"manageset",name:"权限设置",component:u("manage/manageSet")},{path:"range",name:"权限范围",component:u("manage/manageRange")}]}]},{path:"/introductoryPages",name:"引导页配置",component:r.a,children:[{path:"upload",component:u("introductoryPages/index")}]}];e.a=new i.a({routes:c})}},[197]);
//# sourceMappingURL=permission.8c2b40e0876190256af5.js.map