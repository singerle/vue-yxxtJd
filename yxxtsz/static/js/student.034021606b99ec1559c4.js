webpackJsonp([100],{1200:function(t,e){},1275:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.name}},[n("keep-alive",[n("router-view",{staticClass:"router-view"})],1)],1)],1)},staticRenderFns:[]}},155:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__=__webpack_require__(36),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__=__webpack_require__(89),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__),__WEBPACK_IMPORTED_MODULE_2_better_scroll__=__webpack_require__(202),__WEBPACK_IMPORTED_MODULE_3_axios__=__webpack_require__(90),__WEBPACK_IMPORTED_MODULE_3_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__),__WEBPACK_IMPORTED_MODULE_4_mint_ui__=__webpack_require__(31),__WEBPACK_IMPORTED_MODULE_4_mint_ui___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mint_ui__),defaultImg=__webpack_require__(292);Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},__webpack_exports__.a={install:function install(Vue,options){var _vm=Vue.prototype;Vue.myGlobalMethod=function(){},Vue.loadXMLString=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes},Vue.directive("handleImg",{bind:function(t,e,n,a){t&&Vue.nextTick(function(){var n=t;Vue.prototype.$imgSp(n,e.value,t.className),window.addEventListener("orientationchange",function(){Vue.prototype.$imgSp(n,e.value,t.className)})})}}),Vue.directive("handleImgTX",{bind:function(t,e,n,a){t&&Vue.nextTick(function(){var n=t;Vue.prototype.$imgSp(n,e.value,t.className,"tx"),window.addEventListener("orientationchange",function(){Vue.prototype.$imgSp(n,e.value,t.className,"tx")})})}}),Vue.directive("Scroll",{bind:function(t,e,n,a){t&&Vue.nextTick(function(){new __WEBPACK_IMPORTED_MODULE_2_better_scroll__.a(t,{probeType:3,scrollY:!0,startX:0,startY:0,hasVerticalScroll:!0,click:!0})})}}),Vue.directive("initScroll",{componentUpdated:function(t,e,n,a){var o=document.getElementsByClassName("getmore")[0],i=document.getElementsByClassName("btnMore")[0],l=document.getElementsByClassName("noMore")[0];o&&(n.context.dataP.length<=0?o.style.display="none":n.context.dataP.length>0&&(o.style.display="block",i.style.display="block",l.style.display="none"))},bind:function(t,e,n,a){t&&(Vue.prototype.$scroll=new __WEBPACK_IMPORTED_MODULE_2_better_scroll__.a(t,{probeType:3,scrollY:!0,bounce:!0,click:!0}),Vue.prototype.$nextTick(function(){var e=Vue.loadXMLString('<div class="getmore"><span class="btnMore">查看更多</span><span class="imgloading"><img src="../../../static/img/loading.gif">正在加载更多...</span><span class="noMore">我也是有底线的...</span></div>');t.childNodes[0].appendChild(e[0]);var a=document.getElementsByClassName("getmore")[0],o=document.getElementsByClassName("btnMore")[0],i=document.getElementsByClassName("imgloading")[0],l=document.getElementsByClassName("noMore")[0];if(!a)return!1;a.style.display="none",n.context.dataP.length>=Vue.prototype.$pagesize?(a.style.display="block",o.style.display="block"):n.context.dataP.length>0&&(a.style.display="block",l.style.display="block"),o.addEventListener("click",function(){l.style.display="none",o.style.display="none",i.style.display="block";var t=Vue.prototype.$getData(n.context.path,n.context.more);t&&t.then(function(t){var e=t.data;"40001"==e.code?(e.content.forEach(function(t,e){n.context.dataP.push(t)}),e.content.length>=Vue.prototype.$pagesize?setTimeout(function(){o.style.display="block",i.style.display="none",l.style.display="none"},500):setTimeout(function(){o.style.display="none",i.style.display="none",l.style.display="block"},500)):setTimeout(function(){o.style.display="none",i.style.display="none",l.style.display="block"},500)})}),Vue.prototype.$scroll.on("touchEnd",function(t){if(t.y<this.maxScrollY-30&&(l.style.display="none",o.style.display="none",i.style.display="block",n.context.path)){var e=Vue.prototype.$getData(n.context.path,n.context.more);e&&e.then(function(t){var e=t.data;"40001"==e.code?(e.content.forEach(function(t,e){n.context.dataP.push(t)}),Vue.prototype.$page+=1,e.content.length>=Vue.prototype.$pagesize?setTimeout(function(){o.style.display="block",i.style.display="none",l.style.display="none"},500):setTimeout(function(){o.style.display="none",i.style.display="none",l.style.display="block"},500)):setTimeout(function(){o.style.display="none",i.style.display="none",l.style.display="block"},500)})}})}))},update:function(t,e){Vue.nextTick(function(){Vue.prototype.$scroll&&Vue.prototype.$scroll.refresh()})}}),Vue.mixin({created:function(){}}),Vue.prototype.$axios=__WEBPACK_IMPORTED_MODULE_3_axios___default.a,Vue.prototype.$scroll="",Vue.prototype.$tx="../static/img/st/phb_1.png",Vue.prototype.$photo=defaultImg,Vue.prototype.$page=2,Vue.prototype.$pagesize=8,Vue.prototype.$pageInit=function(t){Vue.prototype.$page=2},Vue.prototype.$setPage=function(t){Vue.prototype.$page=2},Vue.prototype.$setPagesize=function(t){Vue.prototype.$pagesize=t},Vue.prototype.$initScroll=function(t){Vue.prototype.$scroll=new __WEBPACK_IMPORTED_MODULE_2_better_scroll__.a(t,{probeType:3,scrollY:!0,bounce:!0,click:!0})},Vue.prototype.$hidGetMore=function(){var t=document.getElementsByClassName("getmore")[0];t&&(t.style.display="none")},Vue.prototype.$showGetMore=function(){var t=document.getElementsByClassName("getmore")[0];t&&(t.style.display="block")},Vue.prototype.$GetDateDiff=function(t){return t=t.replace(/\-/g,"/")},Vue.prototype.$getDate=function(t){return t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8)+" "+t.substring(8,10)+":"+t.substring(10,12)},Vue.prototype.$getData=function(t,e){var n,a=Vue.prototype;if(t){var o=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(a.$getIdentity(),e);n=new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function(e){__WEBPACK_IMPORTED_MODULE_3_axios___default()({method:"get",url:t+"?page="+a.$page+"&pagesize="+a.$pagesize,params:o}).then(function(t){e(t)})})}return n},Vue.prototype.$getDataApi=function(t,e){var n=__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({},e);return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function(e){__WEBPACK_IMPORTED_MODULE_3_axios___default()({method:"post",url:window.REQUEST_URL+t,params:n}).then(function(t){e(t)})})},Vue.prototype.$togo=function(t,e){var n=this;if(t){for(var a,o=n.$router.options.routes,i=0;i<o.length;i++)if(t.indexOf(o[i].path)>-1){a=!0,n.$router.push({path:t,query:{data:e}});break}a||(window.location.href=t)}},Vue.prototype.$MessageBox=function(t){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_mint_ui__.MessageBox)("提示",t)},Vue.prototype.$Toast=function(t){__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_mint_ui__.Toast)({message:t,duration:2e3,position:"bottom"})},Vue.prototype.$Indicator=function(){__WEBPACK_IMPORTED_MODULE_4_mint_ui__.Indicator.open({text:"提交中",spinnerType:"fading-circle"})},Vue.prototype.$IndicatorClose=function(){},Vue.prototype.$getIdentity=function(path,data){var userinfo=sessionStorage.getItem("userinfo");if(userinfo)return eval("("+userinfo+")");alert("您的身份信息过期请从进！！！")},Vue.prototype.$delClass=function(t,e){if(t.length){for(var n=0;n<t.length;n++)if(this.$hasClass(t[n],e)){var a=new RegExp("(\\s|^)"+e+"(\\s|$)");t[n].className=t[n].className.replace(a," ")}}else if(this.$hasClass(t,e)){var a=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(a," ")}},Vue.prototype.$hasClass=function(t,e){var n;return t.className&&(n=t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))),n},Vue.prototype.$addClass=function(t,e){this.$hasClass(t,e)||(t.className+=" "+e)},Vue.prototype.$isInArray=function(t,e){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1},Vue.prototype.$autoPic=function(t){var e=t.currentTarget,n=e.parentNode;n.style.position="relative",n.style.overflow="hidden";var a=e.clientWidth/e.clientHeight,o=n.clientWidth/n.clientHeight;e.style="",a>o?(e.style.position="absolute",e.style.height="100%",e.style.left="50%",e.style.transform="translateX(-50%)"):(e.style.position="absolute",e.style.width="100%",e.style.top="50%",e.style.transform="translateY(-50%)")},Vue.prototype.$autoPicSwpie=function(t,e,n){var a=t.currentTarget,o=a.parentNode,i=o.parentNode.childNodes;if(o.style.position="relative",o.style.overflow="hidden",a.clientWidth/a.clientHeight>o.clientWidth/o.clientHeight){if(a.style.position="absolute",a.style.height="100%",a.style.left="50%",a.style.transform="translateX(-50%)",0==n||n==i.length-3){i[i.length-1].style.position="relative",i[i.length-1].style.overflow="hidden";var l;0==n?l=i[i.length-1].getElementsByTagName("img")[0]:n==i.length-3&&(l=i[0].getElementsByTagName("img")[0]),l.style.position="absolute",l.style.height="100%",l.style.left="50%",l.style.transform="translateX(-50%)"}}else if(a.style.position="absolute",a.style.width="100%",a.style.top="50%",a.style.transform="translateY(-50%)",0==n||n==i.length-3){i[i.length-1].style.position="relative",i[i.length-1].style.overflow="hidden";var l;0==n?l=i[i.length-1].getElementsByTagName("img")[0]:n==i.length-3&&(l=i[0].getElementsByTagName("img")[0]),l.style.position="absolute",l.style.width="100%",l.style.top="50%",l.style.transform="translateY(-50%)"}},Vue.prototype.$imgSp=function(t,e,n,a){Vue.nextTick(function(){t.style.position="relative",t.style.overflow="hidden";var o=t.clientWidth/t.clientHeight,i=e||Vue.prototype.$tx,l=new Image;if(l.src=i,l.onerror="tx"==a?function(){l.src=Vue.prototype.$tx}:function(){l.src=Vue.prototype.$photo},n?(t.getElementsByClassName(n).length>0&&t.removeChild(t.getElementsByClassName(n)[0]),l.className=n):(t.getElementsByClassName("bannerImg").length>0&&t.removeChild(t.getElementsByClassName("bannerImg")[0]),l.className="bannerImg"),l.complete){l.width/l.height>=o?(l.setAttribute("style","display: block;position: absolute;height: 100%;top:0;left: 50%;transform: translate(-50%,0);-ms-transform: translate(-50%,0);-o-tranform: translate(-50%,0);-webkit-transform: translate(-50%,0);-moz-transform: translate(-50%,0);z-index:0;"),t.appendChild(l)):(l.setAttribute("style","display: block; position: absolute; width: 100%;top: 50%;left:0;transform: translate(0,-50%);-ms-transform: translate(0,-50%);-o-tranform: translate(0,-50%);-webkit-transform: translate(0,-50%);-moz-transform: translate(0,-50%);z-index:0;"),t.appendChild(l))}else l.onload=function(){l.width/l.height>=o?(l.setAttribute("style","display: block;position: absolute;height: 100%;top:0;left: 50%;transform: translate(-50%,0);-ms-transform: translate(-50%,0);-o-tranform: translate(-50%,0);-webkit-transform: translate(-50%,0);-moz-transform: translate(-50%,0);z-index:0;"),t.appendChild(l)):(l.setAttribute("style","display: block; position: absolute; width: 100%;top: 50%;left:0;transform: translate(0,-50%);-ms-transform: translate(0,-50%);-o-tranform: translate(0,-50%);-webkit-transform: translate(0,-50%);-moz-transform: translate(0,-50%);z-index:0;"),t.appendChild(l))}})}}}},156:function(t,e,n){"use strict";var a=n(8),o=n(122);a.default.use(o.a),e.a=new o.a({routes:[{path:"/dyxw",name:"dyxw",component:function(t){return n.e(27).then(function(){var e=[n(540)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"单页新闻"}},{path:"/csLogin",name:"csLogin",component:function(t){return n.e(48).then(function(){var e=[n(485)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"测试登录"}},{path:"/lbxwIndex",name:"lbxwIndex",component:function(t){return n.e(18).then(function(){var e=[n(542)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"列表多页新闻"}},{path:"/wjdc",name:"wjdc",component:function(t){return n.e(30).then(function(){var e=[n(525)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"问卷调查"}},{path:"/lbxwDetail",name:"lbxwDetail",component:function(t){return n.e(34).then(function(){var e=[n(541)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"列表多页新闻详情页"}},{path:"/mycode",name:"mycode",component:function(t){return n.e(40).then(function(){var e=[n(521)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"显示个人身份码"}},{path:"/myinfo",name:"myinfo",component:function(t){return n.e(32).then(function(){var e=[n(522)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"学生个人信息页面"}},{path:"/szqs",name:"szqs",component:function(t){return n.e(35).then(function(){var e=[n(539)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"所在寝室"}},{path:"/xcbdPopup",name:"xcbdPopup",component:function(t){return n.e(44).then(function(){var e=[n(479)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"弹出二维码"}},{path:"/wsxxQsxx",name:"wsxxQsxx",component:function(t){return n.e(4).then(function(){var e=[n(535)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"完善信息-亲属信息"}},{path:"/wsxxCdxx",name:"wsxxCdxx",component:function(t){return n.e(5).then(function(){var e=[n(534)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"完善信息-曾读学校"}},{path:"/noticeDetail",name:"noticeDetail",component:function(t){return n.e(39).then(function(){var e=[n(523)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"通知公告详情页"}},{path:"/noticeList",name:"noticeList",component:function(t){return n.e(2).then(function(){var e=[n(207)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"通知公告列表页"}},{path:"/noticeXq",name:"noticeXq",component:function(t){return n.e(2).then(function(){var e=[n(207)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"通知公告详情页"}},{path:"/rxzbBxgm",name:"rxzbBxgm",component:function(t){return n.e(0).then(function(){var e=[n(208)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-保险购买页面"}},{path:"/bxgmComplete",name:"bxgmComplete",component:function(t){return n.e(38).then(function(){var e=[n(486)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-保险购买完成后显示的页面"}},{path:"/bxgmFqgm",name:"bxgmFqgm",component:function(t){return n.e(3).then(function(){var e=[n(203)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-放弃购买保险要显示的页面"}},{path:"/bxgmFqgmJh1",name:"bxgmFqgmJh1",component:function(t){return n.e(37).then(function(){var e=[n(528)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-确认放弃购买保险后的交互页面"}},{path:"/bxgmYgm",name:"bxgmYgm",component:function(t){return n.e(86).then(function(){var e=[n(529)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-成功放弃购买保险显示的页面"}},{path:"/bxgmxz",name:"bxgmxz",component:function(t){return n.e(87).then(function(){var e=[n(527)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备-新添加今天阅读页面"}},{path:"/bdlcXcjf",name:"bdlcXcjf",component:function(t){return n.e(1).then(function(){var e=[n(206)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"报道流程-现场缴费缴费大厅页面"}},{path:"/indexLqtzs",name:"indexLqtzs",component:function(t){return n.e(42).then(function(){var e=[n(517)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"首页跳到录取通知书页面"}},{path:"/yindaoye",name:"yindaoye",component:function(t){return n.e(83).then(function(){var e=[n(487)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"引导页"}},{path:"/jfdt",name:"jfdt",component:function(t){return n.e(41).then(function(){var e=[n(520)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"缴费大厅"}},{path:"/jfdtEwm",name:"jfdtEwm",component:function(t){return n.e(72).then(function(){var e=[n(519)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"缴费大厅弹出的二维码界面"}},{path:"/dztzs",name:"dztzs",component:function(t){return n.e(43).then(function(){var e=[n(516)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"首页点击图标显示的电子通知书"}},{path:"/dztz",name:"dztz",component:function(t){return n.e(88).then(function(){var e=[n(515)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"电子通知书"}},{path:"/popup",name:"popup",component:function(t){return n.e(91).then(function(){var e=[n(478)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"弹出窗口组件化"}},{path:"/test",name:"test",component:function(t){return n.e(89).then(function(){var e=[n(514)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"随机测试组件用"}},{path:"/cdxxInfo",name:"cdxxInfo",component:function(t){return n.e(90).then(function(){var e=[n(483)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"曾读学校信息组件"}},{path:"/qsxxInfo",name:"qsxxInfo",component:function(t){return n.e(13).then(function(){var e=[n(484)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"亲属信息组件"}},{path:"/index",name:"index",component:function(t){return n.e(7).then(function(){var e=[n(518)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"迎新系统"}},{path:"/lstdSqyy",name:"lstdSqyy",component:function(t){return n.e(29).then(function(){var e=[n(530)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"申请原因"}},{path:"/rxzb",name:"rxzb",component:function(t){return n.e(84).then(function(){var e=[n(533)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学准备"},children:[{path:"/rxzb/aqzscs",name:"aqzscs",component:function(t){return n.e(31).then(function(){var e=[n(524)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"安全知识测试"}},{path:"/rxzb/wsxx",name:"wsxx",component:function(t){return n.e(8).then(function(){var e=[n(536)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"完善信息"}},{path:"/rxzb/bxgm",name:"bxgm",component:function(t){return n.e(0).then(function(){var e=[n(208)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"保险购买"}},{path:"/rxzb/bxgmaqxy",name:"bxgmaqxy",component:function(t){return n.e(3).then(function(){var e=[n(203)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"保险购买安全协议"}},{path:"/rxzb/lstd",name:"lstd",component:function(t){return n.e(21).then(function(){var e=[n(532)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"绿色通道"}},{path:"/lstdRead",name:"lstdRead",component:function(t){return n.e(85).then(function(){var e=[n(531)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"新增的绿色通道静态信息展示页面"}},{path:"/rxzb/bdjt",name:"bdjt",component:function(t){return n.e(28).then(function(){var e=[n(526)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"报道交通"}},{path:"/rxzb/zjlg",name:"zjlg",component:function(t){return n.e(19).then(function(){var e=[n(538)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"走进理工"}},{path:"/rxzb/zjlg/detail",name:"zjlgDetail",component:function(t){return n.e(36).then(function(){var e=[n(537)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"走进理工详情页"}}]},{path:"/bdlc",name:"bdlc",component:function(t){return n.e(92).then(function(){var e=[n(508)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"首页报道流程"},children:[{path:"/bdlc/xcbd",name:"xcbd",component:function(t){return n.e(22).then(function(){var e=[n(513)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"现场报道"}},{path:"/bdlc/ssbl",name:"ssbl",component:function(t){return n.e(23).then(function(){var e=[n(512)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"宿舍办理"}},{path:"/bdlc/xcjf",name:"xcjf",component:function(t){return n.e(1).then(function(){var e=[n(206)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"现场缴费"}},{path:"/bdlc/rxjy",name:"rxjy",component:function(t){return n.e(45).then(function(){var e=[n(511)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"入学教育"}},{path:"/bdlc/jlsy",name:"jlsy",component:function(t){return n.e(20).then(function(){var e=[n(510)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"军旅生涯"}},{path:"/bdlc/jlsy/jxsj",name:"jxsj",component:function(t){return n.e(46).then(function(){var e=[n(509)];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"军训时间"}}]}]})},292:function(t,e,n){t.exports=n.p+"static/img/default.422fedf.png"},308:function(t,e,n){"use strict";var a=n(8),o=n(9);a.default.use(o.a);var i=new o.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(t,e){t.user=e},saveTime:function(t,e){t.pickerValue=e},savewsxxPage1:function(t,e){t.wsxxPage1=e},savewsxxPage2:function(t,e){t.wsxxPage2=e},savehjid:function(t,e){t.hjid=e},saveqsxx:function(t,e){t.qsxx=e},saveWsxxDate:function(t,e){t.getWsxxData=e}},actions:{},getters:{getHjid:function(t){return t.hjid},getqsxx:function(t){return t.qsxx},getuser:function(t){return t.user}}});e.a=i},468:function(t,e){},473:function(t,e,n){function a(t){n(1200)}var o=n(4)(n(633),n(1275),a,"data-v-75f90cb7",null);t.exports=o.exports},56:function(t,e){},633:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{name:"register",map:{}}},watch:{$route:function(t,e){this.map[t.path]||(this.map[t.path]=+new Date+1),this.map[e.path]||(this.map[e.path]=+new Date),this.map[t.path]>this.map[e.path]?this.name="slide-forward":this.name="slide-back"}}}},656:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),o=n(9),i=n(473),l=n.n(i),s=n(156),r=n(88),c=(n.n(r),n(31)),u=n.n(c),p=n(56),m=(n.n(p),n(469)),_=n.n(m),h=n(468),d=(n.n(h),n(155)),f=n(308),y=n(470),b=n.n(y);a.default.use(o.a),a.default.use(d.a),a.default.use(u.a),a.default.use(_.a),a.default.use(b.a),a.default.config.productionTip=!1,s.a.beforeEach(function(t,e,n){t.query.userid&&f.a.commit("SetUserInfo",t.query),n()}),new a.default({el:"#app",router:s.a,store:f.a,render:function(t){return t(l.a)}})},88:function(t,e){}},[656]);
//# sourceMappingURL=student.034021606b99ec1559c4.js.map