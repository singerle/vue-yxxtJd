webpackJsonp([42],{1325:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(36),o=t.n(n),i=t(90),r=t.n(i),A=t(1326),l=function(e,a){var n=r()({},a);return new o.a(function(a){t.i(A.a)({headers:{"Content-Type":"multipart/form-data"},method:"post",url:window.REQUEST_URL+e,params:n}).then(function(e){a(e.data)})})}},1326:function(e,a,t){"use strict";var n=t(36),o=t.n(n),i=t(89),r=t.n(i),A=t(308),l=r.a.create({baseURL:t.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});l.interceptors.request.use(function(e){return e.headers.token=A.a.getters.getuser.userid,e},function(e){o.a.reject(e)}),a.a=l},1493:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(1564);a.default={name:"index-lqtzs",data:function(){return{datalist:"",info:"",ticket:"无",company:"无",isShow:""}},methods:{getData:function(){var e=this;t.i(n.a)().then(function(a){"40001"===a.code&&(e.info=a.content,e.datalist=a.content.Traces.reverse(),e.info.kddh&&(e.ticket=e.info.kddh),e.info.wlgs&&(e.company=e.info.wlgs))})},onCopy:function(e){var a=this;this.isShow=!0,setTimeout(function(){a.isShow=!1},2e3)},onError:function(e){alert("Failed to copy texts")}},created:function(){this.getData()}}},1564:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(1325),o=function(e){return t.i(n.a)("student/lqtzs",e)}},1591:function(e,a,t){a=e.exports=t(1322)(!0),a.push([e.i,".bgcolor[data-v-369b5a92]{position:fixed;top:0;bottom:0;width:100%;background:#f7f7f7;border-top:.01rem solid #e9e9e9;overflow:scroll}.bgcolor .main-info[data-v-369b5a92]{padding:0 .12rem;background:#fff}.bgcolor .main-info li[data-v-369b5a92]{font-size:.16rem;color:#999;font-family:PingFang-SC-Medium;line-height:.44rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:.01rem solid #e9e9e9}.bgcolor .main-info li span[data-v-369b5a92]:nth-of-type(2){color:#333;margin:0 .12rem}.bgcolor .main-info li span[data-v-369b5a92]:nth-of-type(3){font-size:.1rem;font-family:PingFang-SC-Bold;font-weight:700;color:#333;width:.52rem;line-height:.2rem;text-align:center;border:.01rem solid #cfcfcf}.bgcolor .main-info li button[data-v-369b5a92]:focus{outline:0}.bgcolor .main-info li[data-v-369b5a92]:last-child{border:0}.bgcolor .no-data[data-v-369b5a92]{margin-top:.75rem}.bgcolor .no-data img[data-v-369b5a92]{display:block;margin:0 auto .43rem}.bgcolor .no-data p[data-v-369b5a92]{font-family:PingFang-SC-Bold;font-weight:700;font-size:.15rem;color:#777;line-height:.15rem;text-align:center}.bgcolor .haveData[data-v-369b5a92]{margin-top:.1rem;background:#fff}.bgcolor .haveData ul[data-v-369b5a92]{width:calc(100% - .3rem);margin:0 auto}.bgcolor .haveData ul li[data-v-369b5a92]{position:relative}.bgcolor .haveData ul li .ball[data-v-369b5a92]{position:absolute;width:.08rem;height:.08rem;background:#cfcfcf;border-radius:50%;top:.25rem;left:-.03rem}.bgcolor .haveData ul li .leftborder[data-v-369b5a92]{border-left:.02rem solid #ececec}.bgcolor .haveData ul li .leftborder .content[data-v-369b5a92]{margin-left:.2rem;border-bottom:.01rem solid #ececec;color:#999;font-size:.14rem;line-height:.28rem;padding:.15rem 0}.bgcolor .haveData ul li .leftborder .content .time[data-v-369b5a92]{font-size:.12rem;line-height:.24rem}.bgcolor .haveData ul li:first-of-type .ball[data-v-369b5a92]{position:absolute;width:.16rem;height:.16rem;background:#3da8f5;border-radius:50%;top:.21rem;left:-.06rem}.bgcolor .haveData ul li:first-of-type .leftborder .content[data-v-369b5a92]{color:#3da8f5}.bgcolor .success[data-v-369b5a92]{position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;width:1.08rem;height:.4rem;border-radius:.06rem;background:rgba(0,0,0,.7);line-height:.4rem;text-align:center;font-size:.14rem;color:#fff}.bgcolor .fade-enter-active[data-v-369b5a92],.bgcolor .fade-leave-active[data-v-369b5a92]{-webkit-transition:opacity .5s;transition:opacity .5s}.bgcolor .fade-enter[data-v-369b5a92],.bgcolor .fade-leave-to[data-v-369b5a92]{opacity:0}","",{version:3,sources:["D:/yxxt-ytxy/src/pages/student/component/index-lqtzs.vue"],names:[],mappings:"AACA,0BACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,mBAAoB,AACpB,gCAAkC,AAClC,eAAiB,CAClB,AACD,qCACE,iBAAmB,AACnB,eAAiB,CAClB,AACD,wCACE,iBAAmB,AACnB,WAAY,AACZ,+BAAgC,AAChC,mBAAqB,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,kCAAqC,CACtC,AACD,4DACE,WAAY,AACZ,eAAkB,CACnB,AACD,4DACE,gBAAkB,AAClB,6BAA8B,AAC9B,gBAAkB,AAClB,WAAY,AACZ,aAAe,AACf,kBAAoB,AACpB,kBAAmB,AACnB,2BAA8B,CAC/B,AACD,qDACE,SAAW,CACZ,AACD,mDACE,QAAU,CACX,AACD,mCACE,iBAAoB,CACrB,AACD,uCACE,cAAe,AACf,oBAAuB,CACxB,AACD,qCACE,6BAA8B,AAC9B,gBAAkB,AAClB,iBAAmB,AACnB,WAAY,AACZ,mBAAqB,AACrB,iBAAmB,CACpB,AACD,oCACE,iBAAmB,AACnB,eAAiB,CAClB,AACD,uCACE,yBAA2B,AAC3B,aAAe,CAChB,AACD,0CACE,iBAAmB,CACpB,AACD,gDACE,kBAAmB,AACnB,aAAe,AACf,cAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,AACb,YAAe,CAChB,AACD,sDACE,gCAAmC,CACpC,AACD,+DACE,kBAAoB,AACpB,mCAAqC,AACrC,WAAY,AACZ,iBAAmB,AACnB,mBAAqB,AACrB,gBAAmB,CACpB,AACD,qEACE,iBAAmB,AACnB,kBAAqB,CACtB,AACD,8DACE,kBAAmB,AACnB,aAAe,AACf,cAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,WAAa,AACb,YAAe,CAChB,AACD,6EACE,aAAe,CAChB,AACD,mCACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,cAAe,AACf,aAAe,AACf,qBAAuB,AACvB,0BAA4B,AAC5B,kBAAoB,AACpB,kBAAmB,AACnB,iBAAmB,AACnB,UAAY,CACb,AACD,0FAEE,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,+EAEE,SAAW,CACZ",file:"index-lqtzs.vue",sourcesContent:["\n.bgcolor[data-v-369b5a92] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #f7f7f7;\n  border-top: 0.01rem solid #e9e9e9;\n  overflow: scroll;\n}\n.bgcolor .main-info[data-v-369b5a92] {\n  padding: 0 0.12rem;\n  background: #fff;\n}\n.bgcolor .main-info li[data-v-369b5a92] {\n  font-size: 0.16rem;\n  color: #999;\n  font-family: PingFang-SC-Medium;\n  line-height: 0.44rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 0.01rem solid #e9e9e9;\n}\n.bgcolor .main-info li span[data-v-369b5a92]:nth-of-type(2) {\n  color: #333;\n  margin: 0 0.12rem;\n}\n.bgcolor .main-info li span[data-v-369b5a92]:nth-of-type(3) {\n  font-size: 0.1rem;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #333;\n  width: 0.52rem;\n  line-height: 0.2rem;\n  text-align: center;\n  border: 0.01rem solid #cfcfcf;\n}\n.bgcolor .main-info li button[data-v-369b5a92]:focus {\n  outline: 0;\n}\n.bgcolor .main-info li[data-v-369b5a92]:last-child {\n  border: 0;\n}\n.bgcolor .no-data[data-v-369b5a92] {\n  margin-top: 0.75rem;\n}\n.bgcolor .no-data img[data-v-369b5a92] {\n  display: block;\n  margin: 0 auto 0.43rem;\n}\n.bgcolor .no-data p[data-v-369b5a92] {\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  font-size: 0.15rem;\n  color: #777;\n  line-height: 0.15rem;\n  text-align: center;\n}\n.bgcolor .haveData[data-v-369b5a92] {\n  margin-top: 0.1rem;\n  background: #fff;\n}\n.bgcolor .haveData ul[data-v-369b5a92] {\n  width: calc(100% - 0.3rem);\n  margin: 0 auto;\n}\n.bgcolor .haveData ul li[data-v-369b5a92] {\n  position: relative;\n}\n.bgcolor .haveData ul li .ball[data-v-369b5a92] {\n  position: absolute;\n  width: 0.08rem;\n  height: 0.08rem;\n  background: #cfcfcf;\n  border-radius: 50%;\n  top: 0.25rem;\n  left: -0.03rem;\n}\n.bgcolor .haveData ul li .leftborder[data-v-369b5a92] {\n  border-left: 0.02rem solid #ececec;\n}\n.bgcolor .haveData ul li .leftborder .content[data-v-369b5a92] {\n  margin-left: 0.2rem;\n  border-bottom: 0.01rem solid #ececec;\n  color: #999;\n  font-size: 0.14rem;\n  line-height: 0.28rem;\n  padding: 0.15rem 0;\n}\n.bgcolor .haveData ul li .leftborder .content .time[data-v-369b5a92] {\n  font-size: 0.12rem;\n  line-height: 0.24rem;\n}\n.bgcolor .haveData ul li:nth-of-type(1) .ball[data-v-369b5a92] {\n  position: absolute;\n  width: 0.16rem;\n  height: 0.16rem;\n  background: #3da8f5;\n  border-radius: 50%;\n  top: 0.21rem;\n  left: -0.06rem;\n}\n.bgcolor .haveData ul li:nth-of-type(1) .leftborder .content[data-v-369b5a92] {\n  color: #3da8f5;\n}\n.bgcolor .success[data-v-369b5a92] {\n  position: fixed;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 1.08rem;\n  height: 0.4rem;\n  border-radius: 0.06rem;\n  background: rgba(0,0,0,0.7);\n  line-height: 0.4rem;\n  text-align: center;\n  font-size: 0.14rem;\n  color: #fff;\n}\n.bgcolor .fade-enter-active[data-v-369b5a92],\n.bgcolor .fade-leave-active[data-v-369b5a92] {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.bgcolor .fade-enter[data-v-369b5a92],\n.bgcolor .fade-leave-to[data-v-369b5a92] {\n  opacity: 0;\n}"],sourceRoot:""}])},1665:function(e,a,t){var n=t(1591);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(1323)("34f1e23d",n,!0,{})},1748:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"bgcolor"},[t("ul",{staticClass:"main-info"},[t("li",[t("span",[e._v("快递公司")]),t("span",[e._v(e._s(e.company))])]),e._v(" "),t("li",[t("span",[e._v("快递单号")]),t("span",[e._v(e._s(e.ticket))]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.info.kddh,expression:"info.kddh"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.ticket,expression:"ticket",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{background:"rgb(255, 255, 255)",border:"1px solid #cfcfcf","padding-left":"12px","padding-right":"12px","-webkit-tap-highlight-color":"rgba(0, 0, 0, 0)","":"focus{outline:0"}},[e._v("复制")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.datalist.length||"undefined"==e.info.kddh,expression:"datalist.length == 0 || info.kddh == 'undefined'"}],staticClass:"no-data"},[t("img",{attrs:{src:"static/student-index-pictures/lqtzs-pic.png"}}),e._v(" "),t("p",[e._v("暂无数据，请及时更新~")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.datalist,expression:"datalist"}],staticClass:"haveData"},[t("ul",e._l(e.datalist,function(a,n){return t("li",[t("div",{staticClass:"ball"}),e._v(" "),t("div",{staticClass:"leftborder"},[t("div",{staticClass:"content"},[t("p",[e._v(e._s(a.AcceptStation))]),e._v(" "),t("p",{staticClass:"time"},[e._v(e._s(a.AcceptTime))])])])])}))]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"success"},[e._v("复制成功")])])],1)},staticRenderFns:[]}},308:function(e,a,t){"use strict";var n=t(8),o=t(9);n.default.use(o.a);var i=new o.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(e,a){e.user=a},saveTime:function(e,a){e.pickerValue=a},savewsxxPage1:function(e,a){e.wsxxPage1=a},savewsxxPage2:function(e,a){e.wsxxPage2=a},savehjid:function(e,a){e.hjid=a},saveqsxx:function(e,a){e.qsxx=a},saveWsxxDate:function(e,a){e.getWsxxData=a}},actions:{},getters:{getHjid:function(e){return e.hjid},getqsxx:function(e){return e.qsxx},getuser:function(e){return e.user}}});a.a=i},517:function(e,a,t){function n(e){t(1665)}var o=t(4)(t(1493),t(1748),n,"data-v-369b5a92",null);e.exports=o.exports}});
//# sourceMappingURL=42.e8fba09295f3513b23b6.js.map