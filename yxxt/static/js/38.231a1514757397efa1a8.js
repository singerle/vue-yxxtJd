webpackJsonp([38],{1325:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(36),r=n.n(a),A=n(90),i=n.n(A),s=n(1326),o=function(e,t){var a=i()({},t);return new r.a(function(t){n.i(s.a)({headers:{"Content-Type":"multipart/form-data"},method:"post",url:window.REQUEST_URL+e,params:a}).then(function(e){t(e.data)})})}},1326:function(e,t,n){"use strict";var a=n(36),r=n.n(a),A=n(89),i=n.n(A),s=n(308),o=i.a.create({baseURL:n.i({NODE_ENV:"production"}).BASE_API,timeout:1e4});o.interceptors.request.use(function(e){return e.headers.token=s.a.getters.getuser.userid,e},function(e){r.a.reject(e)}),t.a=o},1329:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(1325),r=function(e){return n.i(a.a)("/studentManage/completeProcess",e)}},1376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(31),r=(n.n(a),n(1329));t.default={name:"rxzb-bxgm-complete",props:["data"],created:function(){n.i(r.a)({pauId:this.$store.getters.getHjid})},methods:{message:function(){n.i(a.MessageBox)({title:"您是否确认自愿购买保险？",message:"一旦确认无法更改",showCancelButton:!1})}}}},1428:function(e,t,n){t=e.exports=n(1322)(!0),t.push([e.i,".wrap[data-v-7f44abb0]{position:fixed;top:0;bottom:0;width:100%;background:#f7f7f7;border-top:.01rem solid #e9e9e9}.wrap p[data-v-7f44abb0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:.8rem;font-size:.17rem;fotn-family:PingFang-SC-Medium;color:#333}.wrap p img[data-v-7f44abb0]{margin-right:.06rem;width:.18rem;height:.18rem}.wrap ul[data-v-7f44abb0]{background:#fff}.wrap ul li[data-v-7f44abb0]{width:calc(100% - .3rem);margin:0 auto;border-bottom:.01rem solid #e9e9e9;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:.44rem}.wrap ul li span[data-v-7f44abb0]:first-child{font-size:.16rem;color:#333}.wrap ul li span[data-v-7f44abb0]:last-child{font-size:.14rem;color:#999}.wrap ul li[data-v-7f44abb0]:last-child{border:0}.wrap .return[data-v-7f44abb0]{width:calc(100% - 2 * .57rem);background:#3da8f5;height:.46rem;border-radius:.23rem;margin:0 auto;text-align:center;font-size:.17rem;margin-top:.2rem}.wrap .return span[data-v-7f44abb0]{color:#fff;line-height:.45rem}","",{version:3,sources:["D:/yxxt-ytxy/src/pages/student/component/rxzb/bxgm/rxzb-bxgm-complete.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,mBAAoB,AACpB,+BAAkC,CACnC,AACD,yBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAe,AACf,iBAAmB,AACnB,+BAAgC,AAChC,UAAY,CACb,AACD,6BACE,oBAAsB,AACtB,aAAe,AACf,aAAgB,CACjB,AACD,0BACE,eAAiB,CAClB,AACD,6BACE,yBAA2B,AAC3B,cAAe,AACf,mCAAqC,AACrC,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAgB,CACjB,AACD,8CACE,iBAAmB,AACnB,UAAY,CACb,AACD,6CACE,iBAAmB,AACnB,UAAY,CACb,AACD,wCACE,QAAU,CACX,AACD,+BACE,8BAAgC,AAChC,mBAAoB,AACpB,cAAgB,AAChB,qBAAuB,AACvB,cAAe,AACf,kBAAmB,AACnB,iBAAmB,AACnB,gBAAmB,CACpB,AACD,oCACE,WAAY,AACZ,kBAAqB,CACtB",file:"rxzb-bxgm-complete.vue",sourcesContent:["\n.wrap[data-v-7f44abb0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #f7f7f7;\n  border-top: 0.01rem solid #e9e9e9;\n}\n.wrap p[data-v-7f44abb0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 0.8rem;\n  font-size: 0.17rem;\n  fotn-family: PingFang-SC-Medium;\n  color: #333;\n}\n.wrap p img[data-v-7f44abb0] {\n  margin-right: 0.06rem;\n  width: 0.18rem;\n  height: 0.18rem;\n}\n.wrap ul[data-v-7f44abb0] {\n  background: #fff;\n}\n.wrap ul li[data-v-7f44abb0] {\n  width: calc(100% - 0.3rem);\n  margin: 0 auto;\n  border-bottom: 0.01rem solid #e9e9e9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 0.44rem;\n}\n.wrap ul li span[data-v-7f44abb0]:first-child {\n  font-size: 0.16rem;\n  color: #333;\n}\n.wrap ul li span[data-v-7f44abb0]:last-child {\n  font-size: 0.14rem;\n  color: #999;\n}\n.wrap ul li[data-v-7f44abb0]:last-child {\n  border: 0;\n}\n.wrap .return[data-v-7f44abb0] {\n  width: calc(100% - 2 * 0.57rem);\n  background: #3da8f5;\n  height: 0.46rem;\n  border-radius: 0.23rem;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 0.17rem;\n  margin-top: 0.2rem;\n}\n.wrap .return span[data-v-7f44abb0] {\n  color: #fff;\n  line-height: 0.45rem;\n}"],sourceRoot:""}])},1448:function(e,t,n){var a=n(1428);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(1323)("d6bb87d4",a,!0,{})},1470:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[e._m(0),e._v(" "),n("ul",e._l(e.data,function(t,a){return n("li",[n("span",[e._v(e._s(t.fymc))]),n("span",[e._v(e._s(t.yjfy)+"元")])])})),e._v(" "),n("div",{staticClass:"return",on:{click:function(t){e.$router.go(-1)}}},[n("span",[e._v("返回首页")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("img",{attrs:{src:"static/student-index-pictures/bxgm-complete.png"}}),e._v(" "),n("span",[e._v("当前已自愿购买保险")])])}]}},308:function(e,t,n){"use strict";var a=n(8),r=n(9);a.default.use(r.a);var A=new r.a.Store({state:{user:"",hjid:"",qsxx:"",wsxxPage1:"",wsxxPage2:"",wsxxPage3:"",getWsxxData:""},mutations:{SetUserInfo:function(e,t){e.user=t},saveTime:function(e,t){e.pickerValue=t},savewsxxPage1:function(e,t){e.wsxxPage1=t},savewsxxPage2:function(e,t){e.wsxxPage2=t},savehjid:function(e,t){e.hjid=t},saveqsxx:function(e,t){e.qsxx=t},saveWsxxDate:function(e,t){e.getWsxxData=t}},actions:{},getters:{getHjid:function(e){return e.hjid},getqsxx:function(e){return e.qsxx},getuser:function(e){return e.user}}});t.a=A},486:function(e,t,n){function a(e){n(1448)}var r=n(4)(n(1376),n(1470),a,"data-v-7f44abb0",null);e.exports=r.exports}});
//# sourceMappingURL=38.231a1514757397efa1a8.js.map