webpackJsonp([51],{1327:function(e,t,a){"use strict";function n(e,t,n,r){var i={enrollYear:e,state:t,pageNum:n,pageSize:r};i=w.a.stringify(i);var o=N.a+"/enroll/configuration/listByConditions";return a.i(S.a)({url:o,method:"post",data:i})}function r(){var e=N.a+"/enroll/configuration/getAllEnrollYear";return a.i(S.a)({url:e,method:"post"})}function i(e){return e<10?"0"+e:e}function o(e){var t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),l=t.getMinutes(),s=t.getSeconds();return a+"-"+i(n)+"-"+i(r)+" "+i(o)+":"+i(l)+":"+i(s)}function l(e){e.beginTime=o(e.beginTime),e.endTime=o(e.endTime),e.originType=e.originType.join(","),e=w.a.stringify(e);var t=N.a+"/enroll/configuration/insertSelective";return a.i(S.a)({url:t,method:"post",data:e})}function s(e){e.beginTime=o(e.beginTime),e.endTime=o(e.endTime),e.originType=e.originType.join(","),e=w.a.stringify(e);var t=N.a+"/enroll/configuration/update";return a.i(S.a)({url:t,method:"post",data:e})}function u(e,t){var n={enrollLogicId:e,state:t},r=N.a+"/enroll/configuration/stateChange";return n=w.a.stringify(n),a.i(S.a)({url:r,method:"post",data:n})}function c(e){var t={enrollLogicId:e},n=N.a+"/enroll/configuration/delete";return t=w.a.stringify(t),a.i(S.a)({url:n,method:"post",data:t})}function d(e,t){var n={enrollId:e,taskType:t};n=w.a.stringify(n);var r=N.a+"/enroll/enrollAndApplication/listByEnrolmentAllocation";return a.i(S.a)({url:r,method:"post",data:n})}function p(e,t){var n={enrollId:e,taskType:t};n=w.a.stringify(n);var r=N.a+"/enroll/sceneAndApplication/listByEnrolmentAllocation";return a.i(S.a)({url:r,method:"post",data:n})}function f(e,t){var n={enrollId:e,type:t};n=w.a.stringify(n);var r=N.a+"/enroll/applicationBasic/listConfigure";return a.i(S.a)({url:r,method:"post",data:n})}function m(e,t,n){var r={enrollName:e,applicationId:t,enrollId:n};r=w.a.stringify(r);var i=N.a+"/enroll/enrollAndApplication/add";return a.i(S.a)({url:i,method:"post",data:r})}function g(e,t,n){var r={applicationName:e,applicationId:t,enrollId:n};r=w.a.stringify(r);var i=N.a+"/enroll/sceneAndApplication/add";return a.i(S.a)({url:i,method:"post",data:r})}function v(e){var t={eaaLogicId:e};t=w.a.stringify(t);var n=N.a+"/enroll/enrollAndApplication/delete";return a.i(S.a)({url:n,method:"post",data:t})}function A(e){var t={saaLogicId:e};t=w.a.stringify(t);var n=N.a+"/enroll/sceneAndApplication/delete";return a.i(S.a)({url:n,method:"post",data:t})}function h(e){var t={eaaLogicId:e};t=w.a.stringify(t);var n=N.a+"/enroll/enrollAndApplication/selectById";return a.i(S.a)({url:n,method:"post",data:t})}function b(e){var t={saaLogicId:e};t=w.a.stringify(t);var n=N.a+"/enroll/sceneAndApplication/selectById";return a.i(S.a)({url:n,method:"post",data:t})}function y(e,t,n,r,i,o,l){var s={eaaLogicId:e,enrollName:t,eaaRevoke:n,type:r,bulletinLogicId:i,bulletinTitle:o,bulletinText:l};s=w.a.stringify(s);var u=N.a+"/enroll/enrollAndApplication/updateApplication";return a.i(S.a)({url:u,method:"post",data:s})}function x(e,t,n,r,i,o,l){var s={saaId:e,applicationName:t,eaaRevoke:n,type:r,bulletinLogicId:i,bulletinTitle:o,bulletinText:l};s=w.a.stringify(s);var u=N.a+"/enroll/sceneAndApplication/updateApplication";return a.i(S.a)({url:u,method:"post",data:s})}function B(e,t){var n={enrollId:e,type:t},r=N.a+"/enroll/processLevel/info";return n=w.a.stringify(n),a.i(S.a)({url:r,method:"post",data:n})}function I(e,t,n){var r={enrollId:e,type:t,hierarchy:n};r=w.a.stringify(r);var i=N.a+"/enroll//processLevel/save";return a.i(S.a)({data:r,url:i,method:"post"})}function C(e,t,n,r){var i={eaaId:e,bulletinUrl:t,bulletinTitle:n,bulletinText:r};i=w.a.stringify(i);var o=N.a+"/enroll/bulletin/add";return a.i(S.a)({method:"post",url:o,data:i})}function _(e){var t={bulletinLogicId:e};t=w.a.stringify(t);var n=N.a+"/enroll/bulletin/selectById";return a.i(S.a)({method:"post",url:n,data:t})}function k(e,t,n,r){var i={bulletinLogicId:e,bulletinUrl:t,bulletinTitle:n,bulletinText:r};i=w.a.stringify(i);var o=N.a+"/enroll/bulletin/update";return a.i(S.a)({method:"post",url:o,data:i})}function T(e,t){var n={eaaId:e,showRange:t};n=w.a.stringify(n);var r=N.a+"/enroll/bulletin/showRange";return a.i(S.a)({method:"post",url:r,data:n})}t.t=n,t.u=r,t.v=l,t.w=s,t.s=u,t.r=c,t.g=d,t.h=p,t.m=f,t.k=m,t.l=g,t.i=v,t.j=A,t.e=h,t.f=b,t.c=y,t.d=x,t.a=B,t.b=I,t.o=C,t.p=_,t.q=k,t.n=T;var S=a(200),L=a(201),w=a.n(L),N=a(199)},1330:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});var n=/^[A-Za-z0-9\u4e00-\u9fa5]+$/,r=function(e,t,a){n.test(t)||a(new Error("请输入中文、英文、或者数字")),a()}},1550:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1327),r=a(1330);t.default={data:function(){return{enrollName:"",title:"编辑",breadcrumb:"2018年夏季迎新配置",show:!1,ruxueSite:"",ruxueSiteState:"",eaaLogicId:"",form:{enrollName:"",eaaRevoke:"0",eaaLogicId:"",type:"0"},rules:{enrollName:[{required:!0,message:"应用名称不能为空",trigger:"blur"},{pattern:r.b,message:"仅限中英文数字输入"},{max:12,message:"限12个字符内",trigger:"blur"}]}}},methods:{getAppItem:function(){this.eaaLogicId=this.$store.getters.appItem.eaaId},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;1===t.ruxueSiteState?a.i(n.c)(t.form.eaaLogicId,t.form.enrollName,t.form.eaaRevoke,t.form.type).then(function(e){e=e.data,"200"===e.state?(t.MessageSuccess("编辑成功，将返回上一页面"),t.$router.push({path:"/yingxin/ruxue/"})):t.MessageError(e.message)}).catch(function(){t.MessageError()}):3===t.ruxueSiteState&&a.i(n.d)(t.form.eaaLogicId,t.form.enrollName,t.form.eaaRevoke,t.form.type).then(function(e){e=e.data,"200"===e.state?(t.MessageSuccess("编辑成功，将返回上一页面"),t.$router.push({path:"/yingxin/ruxue/"})):t.MessageError(e.message)}).catch(function(){t.MessageError()})})},goBack:function(){this.$router.push({path:"/yingxin/ruxue"})},cancelShow:function(){return 2===this.form.eaaRevoke},hasTitle:function(){var e=this;""===this.appName&&this.$alert("未获取到内容，将返回上一页面","错误提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/yingxin"})}})},judgeView:function(){this.getAppItem();var e=this.$store.getters.ruxueSiteState;this.ruxueSiteState=e,this.breadcrumb=this.$store.getters.ruxueItem.processName,1===e?(this.ruxueSite="入学配置",this._fetchAppInfo()):3===e&&(this.ruxueSite="现场配置",this._fetchSiteAppInfo())},_fetchAppInfo:function(){var e=this;a.i(n.e)(this.eaaLogicId).then(function(t){t=t.data,"200"===t.state?e.form=t.data.enrollAndApplication:e.MessageError(t.message)}).catch(function(){e.MessageError()})},_fetchSiteAppInfo:function(){var e=this;a.i(n.f)(this.eaaLogicId).then(function(t){t=t.data,"200"===t.state?e.form=t.data.enrollAndApplication:e.MessageError(t.message)}).catch(function(){e.MessageError()})}},mounted:function(){this.judgeView(),this.hasTitle()}}},1582:function(e,t,a){t=e.exports=a(1322)(!0),t.push([e.i,".vue-header[data-v-20c53593]{padding-top:21px;padding-bottom:15px}.vue-header p[data-v-20c53593]{color:#555;font-size:18px;font-weight:700;display:inline-block;font-family:MicrosoftYaHei-Bold}.vue-header .crumbs[data-v-20c53593]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}","",{version:3,sources:["D:/yxxt-jdxy/src/pages/yxCms/view/yingxin/ruxue/editapp.vue"],names:[],mappings:"AACA,6BACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,+BACE,WAAY,AACZ,eAAgB,AAChB,gBAAkB,AAClB,qBAAsB,AACtB,+BAAiC,CAClC,AACD,qCACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB",file:"editapp.vue",sourcesContent:["\n.vue-header[data-v-20c53593] {\n  padding-top: 21px;\n  padding-bottom: 15px;\n}\n.vue-header p[data-v-20c53593] {\n  color: #555;\n  font-size: 18px;\n  font-weight: bold;\n  display: inline-block;\n  font-family: MicrosoftYaHei-Bold;\n}\n.vue-header .crumbs[data-v-20c53593] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}"],sourceRoot:""}])},1656:function(e,t,a){var n=a(1582);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(1323)("4712296e",n,!0,{})},1737:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("el-row",{staticClass:"vue-header"},[a("el-col",[a("p",[e._v(e._s(e.enrollName))]),e._v(" "),a("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/yingxin/process"}}},[e._v(e._s(e.breadcrumb))]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/yingxin/ruxue"}}},[e._v(e._s(e.ruxueSite))]),e._v(" "),"编辑"===e.title?a("el-breadcrumb-item",[e._v("编辑")]):e._e()],1)],1)],1)],1),e._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:14}},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"应用名称",prop:"enrollName"}},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{type:"text","auto-complete":"off",maxlength:"12",disabled:""},model:{value:e.form.enrollName,callback:function(t){e.$set(e.form,"enrollName",t)},expression:"form.enrollName"}})],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("span",{staticStyle:{color:"#999999"}},[e._v("中英文数字，限12个字符内")])])],1)],1),e._v(" "),"2"!==e.form.eaaRevoke?a("el-form-item",{attrs:{label:"是否撤销"}},[a("el-radio-group",{model:{value:e.form.eaaRevoke,callback:function(t){e.$set(e.form,"eaaRevoke",t)},expression:"form.eaaRevoke"}},[a("el-radio",{attrs:{label:"0"}},[e._v("否")]),e._v(" "),a("el-radio",{attrs:{label:"1"}},[e._v("是")])],1)],1):e._e(),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit("form")}}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)],1)],1),e._v(" "),a("el-footer")],1)},staticRenderFns:[]}},568:function(e,t,a){function n(e){a(1656)}var r=a(4)(a(1550),a(1737),n,"data-v-20c53593",null);e.exports=r.exports}});
//# sourceMappingURL=51.46faf256665358798005.js.map