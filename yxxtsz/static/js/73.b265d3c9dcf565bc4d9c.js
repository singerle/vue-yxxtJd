webpackJsonp([73],{1330:function(e,r,t){"use strict";t.d(r,"b",function(){return o}),t.d(r,"a",function(){return a});var o=/^[A-Za-z0-9\u4e00-\u9fa5]+$/,a=function(e,r,t){o.test(r)||t(new Error("请输入中文、英文、或者数字")),t()}},1336:function(e,r,t){"use strict";function o(e,r,o){var a={processId:e,pageNum:r,pageSize:o};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/permission/showGroups",method:"post",data:a})}function a(e){var r={groupId:e};return r=h.a.stringify(r),t.i(m.a)({url:v.a+"/enroll/permission/deleteGroup",method:"post",data:r})}function n(e,r,o){var a={groupId:e,newName:r,processId:o};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/permission/updateGroup",method:"post",data:a})}function i(e,r){var o={processId:e,groupName:r};return o=h.a.stringify(o),t.i(m.a)({url:v.a+"/enroll/permission/addPermissionGroup",method:"post",data:o})}function s(e,r){var o={enrollId:e,groupId:r};return o=h.a.stringify(o),t.i(m.a)({url:v.a+"/enroll/sceneAndApplication/selectBycd",method:"post",data:o})}function l(e,r,o){var a={enrollId:e,groupId:r,roleId:o};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/role/setUp",data:a,method:"post"})}function u(e,r,o){var a={groupId:e,pageNum:r,pageSize:o};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/permission/showmembers",method:"post",data:a})}function c(e,r){var o={userId:e,groupId:r};return o=h.a.stringify(o),t.i(m.a)({url:v.a+"/enroll/permission/deletemembers",method:"post",data:o})}function d(e,r,o){var a={id:e,groupId:r,employeeNumber:o};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/permission/addmember",method:"post",data:a})}function p(e,r){var o={enrollId:r,groupId:e};return o=h.a.stringify(o),t.i(m.a)({url:v.a+"/enroll/role/selectByDept",method:"post",data:o})}function f(e,r,o){var a={list:o,enrollId:e,groupId:r};return a=h.a.stringify(a),t.i(m.a)({url:v.a+"/enroll/role/insertRange",method:"post",data:a})}r.j=o,r.k=a,r.e=n,r.i=i,r.f=s,r.g=l,r.b=u,r.a=c,r.h=d,r.d=p,r.c=f;var m=t(200),g=t(201),h=t.n(g),v=t(199)},1554:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(16),a=t.n(o),n=t(1336),i=t(9),s=t(1330);r.default={data:function(){return{show:!1,form:{teacherId:""},rules:{teacherId:[{required:!0,message:"权限组名称不能为空",trigger:"blur"},{validator:s.a,trigger:"blur"}]}}},methods:{submit:function(e){var r=this;this.$refs[e].validate(function(e){if(e){if(!r.teacherItem.enrollLogicId||""===r.teacherItem.enrollLogicId)return void r.$router.push({path:"/yingxin/process"});var o=r.loading();t.i(n.i)(r.teacherItem.enrollLogicId,r.form.teacherId).then(function(e){o.close(),e=e.data,"200"===e.state?(r.MessageSuccess(e.message),r.goBack()):r.MessageError(e.message)}).catch(function(e){o.close(),r.MessageError()})}})},goBack:function(){this.$router.push({path:"/yingxin/teacher"})}},computed:a()({},t.i(i.b)(["teacherItem"]))}},1743:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-container",[t("el-header",[t("el-row",{staticClass:"vue-header"},[t("el-col",[t("span",{staticClass:"vue-title"},[e._v("新增权限组")])])],1)],1),e._v(" "),t("el-main",[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"权限组名称",prop:"teacherId"}},[t("el-row",[t("el-col",{attrs:{span:6}},[t("el-input",{attrs:{type:"text",placeholder:"请输入权限组名称","auto-complete":"off",maxlength:"20"},model:{value:e.form.teacherId,callback:function(r){e.$set(e.form,"teacherId",r)},expression:"form.teacherId"}})],1),e._v(" "),t("el-col",{attrs:{span:10,offset:1}},[t("span",{staticStyle:{color:"#999999"}},[e._v("限20字符内中英文数字")])])],1)],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submit("form")}}},[e._v("添加")]),e._v(" "),t("el-button",{on:{click:e.goBack}},[e._v("返回")])],1)],1)],1)],1)],1),e._v(" "),t("el-footer")],1)},staticRenderFns:[]}},572:function(e,r,t){var o=t(4)(t(1554),t(1743),null,null,null);e.exports=o.exports}});
//# sourceMappingURL=73.b265d3c9dcf565bc4d9c.js.map