webpackJsonp([37],{1325:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var A=e(36),i=e.n(A),o=e(89),r=e.n(o),a=e(1326),c=function(t,n){var A=r()({},n);return new i.a(function(n){e.i(a.a)({headers:{"Content-Type":"multipart/form-data"},method:"post",url:window.REQUEST_URL+t,params:A}).then(function(t){n(t.data)})})}},1326:function(t,n,e){"use strict";var A=e(36),i=e.n(A),o=e(90),r=e.n(o),a=e(308),c=r.a.create({baseURL:e.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});c.interceptors.request.use(function(t){return t.headers.token=a.a.getters.getuser.userid,t},function(t){i.a.reject(t)}),n.a=c},1395:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"d",function(){return r}),e.d(n,"c",function(){return a}),e.d(n,"e",function(){return c});var A=e(1325),i=function(t){return e.i(A.a)("student/bxzt",t)},o=function(t){return e.i(A.a)("student/gmbx",t)},r=function(t){return e.i(A.a)("student/txyzm",t)},a=function(t){return e.i(A.a)("student/yzm",t)},c=function(t){return e.i(A.a)("student/fqgmbx",t)}},1508:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var A=e(1395);n.default={name:"rxzb-bxgm-fqgm-jh1",data:function(){return{txyzmPopu:!1,txyzmUrl:"",ticket:"",result:"",txyzm:"",qsxx:this.$store.getters.getqsxx,yzm:""}},watch:{txyzm:function(t,n){var i=this;4==t.length&&e.i(A.c)({pj:this.ticket,yzm:this.txyzm,sjh:this.qsxx.jzdh}).then(function(t){"40001"==t.code?(i.result=1,setTimeout(function(){i.txyzm="",i.txyzmPopu=!1},1e3)):i.result=2})}},methods:{showTxyzm:function(){var t=this;e.i(A.d)().then(function(n){t.txyzmUrl=n.content.url,t.ticket=n.content.ticket}),this.txyzmPopu=!0},fsyzm:function(){},refresh:function(){this.showTxyzm()},close:function(){this.txyzmPopu=!1},tjsq:function(){var t=this;if(!this.yzm)return this.$Toast("请输入验证码"),!1;e.i(A.e)({yzm:this.yzm,id:this.$store.getters.getHjid}).then(function(n){"40001"==n.code?(t.$Toast("已放弃购买"),t.$router.go(-2)):t.$Toast("提交失败")})}}}},1621:function(t,n,e){n=t.exports=e(1322)(!0),n.push([t.i,".bgcolor[data-v-772bf5c7]{position:fixed;top:0;bottom:0;width:100%;border-top:.01rem solid #f2f2f2;background:#f7f7f7}.bgcolor .wrap[data-v-772bf5c7]{background:#fff;padding:0 .12rem}.bgcolor .wrap p[data-v-772bf5c7]{font-size:.13rem;line-height:.13rem}.bgcolor .wrap p[data-v-772bf5c7]:first-of-type{color:#555;font-family:PingFang-SC-Bold;font-weight:700;padding:.25rem 0 .08rem}.bgcolor .wrap p[data-v-772bf5c7]:nth-of-type(2){color:#999;font-family:PingFang-SC-Medium;font-weight:Medium}.bgcolor .wrap p[data-v-772bf5c7]:nth-of-type(3){font-family:PingFang-SC-Bold;font-weight:700;color:#555;font-size:.2rem;padding:.14rem 0 .34rem;line-height:.2rem}.bgcolor .wrap .checkCode[data-v-772bf5c7]{height:.3rem;padding-bottom:.12rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:.01rem solid #ececec}.bgcolor .wrap .checkCode input[data-v-772bf5c7]{font-family:PingFang-SC-Regular;font-weight:Regular;font-size:.2rem;outline:none;border:0;color:#555}.bgcolor .wrap .checkCode .sendCode[data-v-772bf5c7]{width:.8rem;height:.3rem;background:#3da8f5;border-radius:.14rem;font-family:PingFang-SC-Bold;font-weight:700;color:#fff;font-size:.11rem;line-height:.3rem;text-align:center;margin-right:.12rem}.bgcolor .wrap .success[data-v-772bf5c7]{width:100%;height:.5rem}.bgcolor .wrap .success p[data-v-772bf5c7]{font-family:PingFang-SC-Medium;font-size:.11rem;font-weight:Medium;height:.11rem;line-height:.11rem;color:#fe4124;padding-top:.1rem}.bgcolor .tijiaoHui[data-v-772bf5c7]{color:#999;border-radius:.06rem;border:.01rem solid #cfcfcf}.bgcolor .tijiao[data-v-772bf5c7],.bgcolor .tijiaoHui[data-v-772bf5c7]{width:calc(100% - .24rem);margin-top:.2rem;text-align:center;line-height:.46rem;height:.46rem;font-size:.17rem;font-family:PingFang-SC-Medium;font-weight:Medium;margin:.2rem auto}.bgcolor .tijiao[data-v-772bf5c7]{color:#fff;border-radius:.06rem;background:#3da8f5;-webkit-box-shadow:.01rem .01rem .02rem rgba(85,178,245,.5);box-shadow:.01rem .01rem .02rem rgba(85,178,245,.5)}.txyzm[data-v-772bf5c7]{position:fixed;top:0;bottom:0;color:#2184c5;background:rgba(0,0,0,.2);width:100%;z-index:999}.txyzm>div[data-v-772bf5c7]{position:absolute;background:#fff;width:70%;padding-bottom:.3rem;margin:0 auto;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:5px}.txyzm>div input[data-v-772bf5c7]{outline:none}.txyzm>div .txyzm-header[data-v-772bf5c7]{padding:.1rem;background:#f6f8f9;border-top-radius:5px}.txyzm>div .txyzm-content[data-v-772bf5c7]{padding:.1rem 0}.txyzm>div .txyzm-content>.txyzm-content-img[data-v-772bf5c7]{display:inline-block;width:1rem;height:.26rem;vertical-align:middle}.txyzm>div .txyzm-content>.txyzm-content-img>img[data-v-772bf5c7]{width:100%}.txyzm>div .txyzm-content>.txyzm-content-input[data-v-772bf5c7]{display:inline-block;margin-left:.2rem;width:1rem;border:1px solid #2184c5;border-radius:3px;vertical-align:middle}.txyzm>div .txyzm-content>.txyzm-content-input input[data-v-772bf5c7]{width:100%}","",{version:3,sources:["D:/yxxt-jdxy/src/pages/student/component/rxzb/bxgm/rxzb-bxgm-fqgm-jh1.vue"],names:[],mappings:"AACA,0BACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,gCAAkC,AAClC,kBAAoB,CACrB,AACD,gCACE,gBAAiB,AACjB,gBAAmB,CACpB,AACD,kCACE,iBAAmB,AACnB,kBAAqB,CACtB,AACD,gDACE,WAAY,AACZ,6BAA8B,AAC9B,gBAAkB,AAClB,uBAA2B,CAC5B,AACD,iDACE,WAAY,AACZ,+BAAgC,AAChC,kBAAoB,CACrB,AACD,iDACE,6BAA8B,AAC9B,gBAAkB,AAClB,WAAY,AACZ,gBAAkB,AAClB,wBAA2B,AAC3B,iBAAoB,CACrB,AACD,2CACE,aAAe,AACf,sBAAwB,AACxB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,kCAAqC,CACtC,AACD,iDACE,gCAAiC,AACjC,oBAAqB,AACrB,gBAAkB,AAClB,aAAc,AACd,SAAU,AACV,UAAY,CACb,AACD,qDACE,YAAc,AACd,aAAe,AACf,mBAAoB,AACpB,qBAAuB,AACvB,6BAA8B,AAC9B,gBAAkB,AAClB,WAAY,AACZ,iBAAmB,AACnB,kBAAoB,AACpB,kBAAmB,AACnB,mBAAsB,CACvB,AACD,yCACE,WAAY,AACZ,YAAe,CAChB,AACD,2CACE,+BAAgC,AAChC,iBAAmB,AACnB,mBAAoB,AACpB,cAAgB,AAChB,mBAAqB,AACrB,cAAe,AACf,iBAAoB,CACrB,AACD,qCAME,WAAY,AAIZ,qBAAuB,AACvB,2BAA8B,CAE/B,AACD,uEAbE,0BAA4B,AAC5B,iBAAmB,AACnB,kBAAmB,AACnB,mBAAqB,AACrB,cAAgB,AAEhB,iBAAmB,AACnB,+BAAgC,AAChC,mBAAoB,AAGpB,iBAAoB,CAiBrB,AAfD,kCAME,WAAY,AAIZ,qBAAuB,AAEvB,mBAAoB,AACpB,4DAAiE,AACzD,mDAAyD,CAClE,AACD,wBACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,cAAe,AACf,0BAA4B,AAC5B,WAAY,AACZ,WAAa,CACd,AACD,4BACE,kBAAmB,AACnB,gBAAiB,AACjB,UAAW,AACX,qBAAuB,AACvB,cAAe,AACf,QAAS,AACT,SAAU,AACV,uCAAyC,AACjC,+BAAiC,AACzC,iBAAmB,CACpB,AACD,kCACE,YAAc,CACf,AACD,0CACE,cAAgB,AAChB,mBAAoB,AACpB,qBAAuB,CACxB,AACD,2CACE,eAAkB,CACnB,AACD,8DACE,qBAAsB,AACtB,WAAY,AACZ,cAAgB,AAChB,qBAAuB,CACxB,AACD,kEACE,UAAY,CACb,AACD,gEACE,qBAAsB,AACtB,kBAAoB,AACpB,WAAY,AACZ,yBAA0B,AAC1B,kBAAmB,AACnB,qBAAuB,CACxB,AACD,sEACE,UAAY,CACb",file:"rxzb-bxgm-fqgm-jh1.vue",sourcesContent:["\n.bgcolor[data-v-772bf5c7] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 0.01rem solid #f2f2f2;\n  background: #f7f7f7;\n}\n.bgcolor .wrap[data-v-772bf5c7] {\n  background: #fff;\n  padding: 0 0.12rem;\n}\n.bgcolor .wrap p[data-v-772bf5c7] {\n  font-size: 0.13rem;\n  line-height: 0.13rem;\n}\n.bgcolor .wrap p[data-v-772bf5c7]:nth-of-type(1) {\n  color: #555;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  padding: 0.25rem 0 0.08rem;\n}\n.bgcolor .wrap p[data-v-772bf5c7]:nth-of-type(2) {\n  color: #999;\n  font-family: PingFang-SC-Medium;\n  font-weight: Medium;\n}\n.bgcolor .wrap p[data-v-772bf5c7]:nth-of-type(3) {\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #555;\n  font-size: 0.2rem;\n  padding: 0.14rem 0 0.34rem;\n  line-height: 0.2rem;\n}\n.bgcolor .wrap .checkCode[data-v-772bf5c7] {\n  height: 0.3rem;\n  padding-bottom: 0.12rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 0.01rem solid #ececec;\n}\n.bgcolor .wrap .checkCode input[data-v-772bf5c7] {\n  font-family: PingFang-SC-Regular;\n  font-weight: Regular;\n  font-size: 0.2rem;\n  outline: none;\n  border: 0;\n  color: #555;\n}\n.bgcolor .wrap .checkCode .sendCode[data-v-772bf5c7] {\n  width: 0.8rem;\n  height: 0.3rem;\n  background: #3da8f5;\n  border-radius: 0.14rem;\n  font-family: PingFang-SC-Bold;\n  font-weight: bold;\n  color: #fff;\n  font-size: 0.11rem;\n  line-height: 0.3rem;\n  text-align: center;\n  margin-right: 0.12rem;\n}\n.bgcolor .wrap .success[data-v-772bf5c7] {\n  width: 100%;\n  height: 0.5rem;\n}\n.bgcolor .wrap .success p[data-v-772bf5c7] {\n  font-family: PingFang-SC-Medium;\n  font-size: 0.11rem;\n  font-weight: Medium;\n  height: 0.11rem;\n  line-height: 0.11rem;\n  color: #fe4124;\n  padding-top: 0.1rem;\n}\n.bgcolor .tijiaoHui[data-v-772bf5c7] {\n  width: calc(100% - 0.24rem);\n  margin-top: 0.2rem;\n  text-align: center;\n  line-height: 0.46rem;\n  height: 0.46rem;\n  color: #999;\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Medium;\n  font-weight: Medium;\n  border-radius: 0.06rem;\n  border: 0.01rem solid #cfcfcf;\n  margin: 0.2rem auto;\n}\n.bgcolor .tijiao[data-v-772bf5c7] {\n  width: calc(100% - 0.24rem);\n  margin-top: 0.2rem;\n  text-align: center;\n  line-height: 0.46rem;\n  height: 0.46rem;\n  color: #fff;\n  font-size: 0.17rem;\n  font-family: PingFang-SC-Medium;\n  font-weight: Medium;\n  border-radius: 0.06rem;\n  margin: 0.2rem auto;\n  background: #3da8f5;\n  -webkit-box-shadow: 0.01rem 0.01rem 0.02rem rgba(85,178,245,0.5);\n          box-shadow: 0.01rem 0.01rem 0.02rem rgba(85,178,245,0.5);\n}\n.txyzm[data-v-772bf5c7] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  color: #2184c5;\n  background: rgba(0,0,0,0.2);\n  width: 100%;\n  z-index: 999;\n}\n.txyzm >div[data-v-772bf5c7] {\n  position: absolute;\n  background: #fff;\n  width: 70%;\n  padding-bottom: 0.3rem;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 5px;\n}\n.txyzm >div input[data-v-772bf5c7] {\n  outline: none;\n}\n.txyzm >div .txyzm-header[data-v-772bf5c7] {\n  padding: 0.1rem;\n  background: #f6f8f9;\n  border-top-radius: 5px;\n}\n.txyzm >div .txyzm-content[data-v-772bf5c7] {\n  padding: 0.1rem 0;\n}\n.txyzm >div .txyzm-content >.txyzm-content-img[data-v-772bf5c7] {\n  display: inline-block;\n  width: 1rem;\n  height: 0.26rem;\n  vertical-align: middle;\n}\n.txyzm >div .txyzm-content >.txyzm-content-img >img[data-v-772bf5c7] {\n  width: 100%;\n}\n.txyzm >div .txyzm-content >.txyzm-content-input[data-v-772bf5c7] {\n  display: inline-block;\n  margin-left: 0.2rem;\n  width: 1rem;\n  border: 1px solid #2184c5;\n  border-radius: 3px;\n  vertical-align: middle;\n}\n.txyzm >div .txyzm-content >.txyzm-content-input input[data-v-772bf5c7] {\n  width: 100%;\n}"],sourceRoot:""}])},1695:function(t,n,e){var A=e(1621);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);e(1323)("0691852b",A,!0,{})},1779:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bgcolor"},[e("div",{staticClass:"wrap"},[e("p",[t._v("自愿放弃购买保险，需亲属审核并同意协议")]),t._v(" "),e("p",[t._v("验证码将发送至您亲人的手机，请向您的亲属询问验证码")]),t._v(" "),e("p",[e("span",{staticClass:"qsxm"},[t._v(t._s(t.qsxx?t.qsxx.qsxm:""))]),t._v(" "),e("span",{staticClass:"phoneNum"},[t._v(t._s(t.qsxx?t.qsxx.jzdh:""))])]),t._v(" "),e("div",{staticClass:"checkCode"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],attrs:{type:"text",name:"",placeholder:"请输入验证码"},domProps:{value:t.yzm},on:{input:function(n){n.target.composing||(t.yzm=n.target.value)}}}),t._v(" "),e("div",{staticClass:"sendCode",on:{click:t.showTxyzm}},[t._v("发送验证码")])])]),t._v(" "),e("div",{staticClass:"tijiaoHui",on:{click:t.tjsq}},[t._v("提交")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.txyzmPopu,expression:"txyzmPopu"}],staticClass:"txyzm",on:{click:t.close}},[e("div",{on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"txyzm-header"},[t._v("\n\t\t\t\t\t请输入图形验证码\n\t\t\t\t")]),t._v(" "),e("div",{staticClass:"txyzm-content"},[e("span",{staticClass:"txyzm-content-img textCenter"},[e("img",{attrs:{src:t.txyzmUrl}}),t._v(" "),e("div",{staticClass:"mt10 ft-12",on:{click:t.refresh}},[t._v("点击图片刷新")])]),t._v(" "),e("span",{staticClass:"txyzm-content-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.txyzm,expression:"txyzm"}],domProps:{value:t.txyzm},on:{input:function(n){n.target.composing||(t.txyzm=n.target.value)}}})]),t._v(" "),1===t.result?e("div",{staticClass:"mt40 textCenter ft-12"},[t._v("验证信息成功")]):2===t.result?e("div",{staticClass:"mt40 textCenter ft-12"},[t._v("验证信息失败")]):t._e()])])])])},staticRenderFns:[]}},308:function(t,n,e){"use strict";var A=e(8),i=e(9);A.default.use(i.a);var o=new i.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(t,n){t.user=n},saveTime:function(t,n){t.pickerValue=n},savewsxxPage1:function(t,n){t.wsxxPage1=n},savewsxxPage2:function(t,n){t.wsxxPage2=n},savehjid:function(t,n){t.hjid=n},saveqsxx:function(t,n){t.qsxx=n},saveWsxxDate:function(t,n){t.getWsxxData=n}},actions:{},getters:{getHjid:function(t){return t.hjid},getqsxx:function(t){return t.qsxx},getuser:function(t){return t.user}}});n.a=o},528:function(t,n,e){function A(t){e(1695)}var i=e(4)(e(1508),e(1779),A,"data-v-772bf5c7",null);t.exports=i.exports}});
//# sourceMappingURL=37.310914aa461ef2bbbb5a.js.map