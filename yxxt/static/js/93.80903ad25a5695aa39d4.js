webpackJsonp([93],{1327:function(t,e,a){"use strict";function i(t,e,i,n){var r={enrollYear:t,state:e,pageNum:i,pageSize:n};r=B.a.stringify(r);var l=M.a+"/enroll/configuration/listByConditions";return a.i(k.a)({url:l,method:"post",data:r})}function n(){var t=M.a+"/enroll/configuration/getAllEnrollYear";return a.i(k.a)({url:t,method:"post"})}function r(t){return t<10?"0"+t:t}function l(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate(),l=e.getHours(),o=e.getMinutes(),s=e.getSeconds();return a+"-"+r(i)+"-"+r(n)+" "+r(l)+":"+r(o)+":"+r(s)}function o(t){t.beginTime=l(t.beginTime),t.endTime=l(t.endTime),t.originType=t.originType.join(","),t=B.a.stringify(t);var e=M.a+"/enroll/configuration/insertSelective";return a.i(k.a)({url:e,method:"post",data:t})}function s(t){t.beginTime=l(t.beginTime),t.endTime=l(t.endTime),t.originType=t.originType.join(","),t=B.a.stringify(t);var e=M.a+"/enroll/configuration/update";return a.i(k.a)({url:e,method:"post",data:t})}function u(t,e){var i={enrollLogicId:t,state:e},n=M.a+"/enroll/configuration/stateChange";return i=B.a.stringify(i),a.i(k.a)({url:n,method:"post",data:i})}function p(t){var e={enrollLogicId:t},i=M.a+"/enroll/configuration/delete";return e=B.a.stringify(e),a.i(k.a)({url:i,method:"post",data:e})}function c(t,e){var i={enrollId:t,taskType:e};i=B.a.stringify(i);var n=M.a+"/enroll/enrollAndApplication/listByEnrolmentAllocation";return a.i(k.a)({url:n,method:"post",data:i})}function d(t,e){var i={enrollId:t,taskType:e};i=B.a.stringify(i);var n=M.a+"/enroll/sceneAndApplication/listByEnrolmentAllocation";return a.i(k.a)({url:n,method:"post",data:i})}function h(t,e){var i={enrollId:t,type:e};i=B.a.stringify(i);var n=M.a+"/enroll/applicationBasic/listConfigure";return a.i(k.a)({url:n,method:"post",data:i})}function f(t,e,i){var n={enrollName:t,applicationId:e,enrollId:i};n=B.a.stringify(n);var r=M.a+"/enroll/enrollAndApplication/add";return a.i(k.a)({url:r,method:"post",data:n})}function g(t,e,i){var n={applicationName:t,applicationId:e,enrollId:i};n=B.a.stringify(n);var r=M.a+"/enroll/sceneAndApplication/add";return a.i(k.a)({url:r,method:"post",data:n})}function m(t){var e={eaaLogicId:t};e=B.a.stringify(e);var i=M.a+"/enroll/enrollAndApplication/delete";return a.i(k.a)({url:i,method:"post",data:e})}function v(t){var e={saaLogicId:t};e=B.a.stringify(e);var i=M.a+"/enroll/sceneAndApplication/delete";return a.i(k.a)({url:i,method:"post",data:e})}function y(t){var e={eaaLogicId:t};e=B.a.stringify(e);var i=M.a+"/enroll/enrollAndApplication/selectById";return a.i(k.a)({url:i,method:"post",data:e})}function S(t){var e={saaLogicId:t};e=B.a.stringify(e);var i=M.a+"/enroll/sceneAndApplication/selectById";return a.i(k.a)({url:i,method:"post",data:e})}function x(t,e,i,n,r,l,o){var s={eaaLogicId:t,enrollName:e,eaaRevoke:i,type:n,bulletinLogicId:r,bulletinTitle:l,bulletinText:o};s=B.a.stringify(s);var u=M.a+"/enroll/enrollAndApplication/updateApplication";return a.i(k.a)({url:u,method:"post",data:s})}function A(t,e,i,n,r,l,o){var s={saaId:t,applicationName:e,eaaRevoke:i,type:n,bulletinLogicId:r,bulletinTitle:l,bulletinText:o};s=B.a.stringify(s);var u=M.a+"/enroll/sceneAndApplication/updateApplication";return a.i(k.a)({url:u,method:"post",data:s})}function I(t,e){var i={enrollId:t,type:e},n=M.a+"/enroll/processLevel/info";return i=B.a.stringify(i),a.i(k.a)({url:n,method:"post",data:i})}function b(t,e,i){var n={enrollId:t,type:e,hierarchy:i};n=B.a.stringify(n);var r=M.a+"/enroll//processLevel/save";return a.i(k.a)({data:n,url:r,method:"post"})}function _(t,e,i,n){var r={eaaId:t,bulletinUrl:e,bulletinTitle:i,bulletinText:n};r=B.a.stringify(r);var l=M.a+"/enroll/bulletin/add";return a.i(k.a)({method:"post",url:l,data:r})}function T(t){var e={bulletinLogicId:t};e=B.a.stringify(e);var i=M.a+"/enroll/bulletin/selectById";return a.i(k.a)({method:"post",url:i,data:e})}function w(t,e,i,n){var r={bulletinLogicId:t,bulletinUrl:e,bulletinTitle:i,bulletinText:n};r=B.a.stringify(r);var l=M.a+"/enroll/bulletin/update";return a.i(k.a)({method:"post",url:l,data:r})}function $(t,e){var i={eaaId:t,showRange:e};i=B.a.stringify(i);var n=M.a+"/enroll/bulletin/showRange";return a.i(k.a)({method:"post",url:n,data:i})}e.t=i,e.u=n,e.v=o,e.w=s,e.s=u,e.r=p,e.g=c,e.h=d,e.m=h,e.k=f,e.l=g,e.i=m,e.j=v,e.e=y,e.f=S,e.c=x,e.d=A,e.a=I,e.b=b,e.o=_,e.p=T,e.q=w,e.n=$;var k=a(200),L=a(201),B=a.n(L),M=a(199)},1548:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1327);e.default={data:function(){return{ruxueSiteState:"",viewState:!0,ruxueItem:{},appSel:0,allAppSel:[{id:0,name:"全部类型"},{id:1,name:"通过型"},{id:2,name:"选择型"},{id:3,name:"阅读型"},{id:4,name:"现场型"}],tableData:[]}},methods:{change:function(){1===this.ruxueSiteState?this._fetchAllApp():2===this.ruxueSiteState?this._fetchAllApp():3===this.ruxueSiteState||this.ruxueSiteState},addapp:function(){this.$router.push({path:"/yingxin/addapp"})},_fetchAllApp:function(){var t=this;a.i(i.g)(this.ruxueItem.enrollLogicId,this.appSel).then(function(e){e=e.data,"200"===e.state?t.tableData=e.data:t.$MessageError(e.message)}).catch(function(t){})},_fetchSiteApp:function(){var t=this;a.i(i.h)(this.ruxueItem.enrollLogicId,this.appSel).then(function(e){e=e.data,"200"===e.state?t.tableData=e.data:t.$MessageError(e.message)}).catch(function(t){})},_delRuxueApp:function(t){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(n){a.i(i.i)(t).then(function(t){t=t.data,"200"===t.state?(e.MessageSuccess("删除操作成功"),e._fetchAllApp()):e.MessageError(t.message)}).catch(function(){e.MessageError()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},_delSceneApp:function(t){var e=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.i(i.j)(t).then(function(t){t=t.data,"200"===t.state?(e.MessageSuccess("删除操作成功"),e._fetchSiteApp()):e.MessageError(t.message)}).catch(function(){e.MessageError()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},del:function(t){1===this.ruxueSiteState?this._delRuxueApp(t.eaaId):3===this.ruxueSiteState&&this._delSceneApp(t.eaaId)},goBack:function(){this.$router.push({path:"/yingxin/process"})},edit:function(t){1===this.ruxueSiteState?0===t.type?(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/editapp"})):1===t.type?(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/singleNews"})):2===t.type&&(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/multiNews"})):3===this.ruxueSiteState&&(0===t.type?(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/editapp"})):1===t.type?(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/singleNews"})):2===t.type&&(this.$store.commit("appItem",t),this.$router.push({path:"/yingxin/multiNews"})))},judgeView:function(){var t=this.$store.getters.ruxueSiteState;this.ruxueSiteState=t,""===t?(this.MessageError("未获取到数据，为您跳回到上一页面"),this.$router.push({path:"/yingxin"})):1===t?(this.viewState=!0,this.getruxueItem(),this._fetchAllApp()):2===t?(this.getruxueItem(),this._fetchAllApp(),this.viewState=!1):3===t?(this.viewState=!0,this.getruxueItem(),this._fetchSiteApp()):4===t&&(this.viewState=!1,this.getruxueItem(),this._fetchSiteApp())},getruxueItem:function(){this.ruxueItem=this.$store.getters.ruxueItem}},mounted:function(){this.judgeView()}}},1739:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticStyle:{"margin-top":"35px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.change},model:{value:t.appSel,callback:function(e){t.appSel=e},expression:"appSel"}},t._l(t.allAppSel,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-col",{attrs:{span:3,offset:13}},[t.viewState?a("el-button",{on:{click:t.addapp}},[t._v("新增应用")]):t._e()],1)],1)],1),t._v(" "),a("el-main",{staticStyle:{padding:"20px"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:!0}},[a("el-table-column",{attrs:{align:"center",prop:"applicationName",label:"应用名",width:"600"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"taskType",label:"应用类型",width:"600"}}),t._v(" "),t.viewState?a("el-table-column",{attrs:{align:"center",label:"操作栏"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.edit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.del(e.row)}}},[t._v("删除")])]}}])}):t._e()],1)],1),t._v(" "),a("el-footer",[a("el-col",{attrs:{span:4,offset:10}},[a("el-button",{attrs:{type:"primary"},on:{click:t.goBack}},[t._v("返回")])],1)],1)],1)},staticRenderFns:[]}},567:function(t,e,a){var i=a(4)(a(1548),a(1739),null,null,null);t.exports=i.exports}});
//# sourceMappingURL=93.80903ad25a5695aa39d4.js.map