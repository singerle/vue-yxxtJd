webpackJsonp([56],{1335:function(e,a,t){"use strict";function n(e,a,n){var r={processId:e,pageNum:a,pageSize:n};return r=C.a.stringify(r),t.i(g.a)({url:f.a+"/enroll/permission/showGroups",method:"post",data:r})}function r(e){var a={groupId:e};return a=C.a.stringify(a),t.i(g.a)({url:f.a+"/enroll/permission/deleteGroup",method:"post",data:a})}function i(e,a){var n={groupId:e,newName:a};return n=C.a.stringify(n),t.i(g.a)({url:f.a+"/enroll/roleManage/delete",method:"post",data:n})}function o(e,a){var n={processId:e,groupName:a};return n=C.a.stringify(n),t.i(g.a)({url:f.a+"/enroll/permission/addPermissionGroup",method:"post",data:n})}function c(e,a){var n={enrollId:e,groupId:a};return n=C.a.stringify(n),t.i(g.a)({url:f.a+"/enroll/sceneAndApplication/selectBycd",method:"post",data:n})}function d(e,a,n){var r={enrollId:e,groupId:a,roleId:n};return r=C.a.stringify(r),t.i(g.a)({url:f.a+"/enroll/role/setUp",data:r,method:"post"})}function s(e,a,n){var r={groupId:e,pageNum:a,pageSize:n};return r=C.a.stringify(r),t.i(g.a)({url:f.a+"/enroll/permission/showmembers",method:"post",data:r})}function l(e,a){var n={userId:e,groupId:a};return n=C.a.stringify(n),t.i(g.a)({url:f.a+"/enroll/permission/deletemembers",method:"post",data:n})}function A(e,a,n){var r={id:e,groupId:a,employeeNumber:n};return r=C.a.stringify(r),t.i(g.a)({url:f.a+"/enroll/permission/addmember",method:"post",data:r})}function p(e,a){var n={enrollId:a,groupId:e};return n=C.a.stringify(n),t.i(g.a)({url:f.a+"/enroll/role/selectByDept",method:"post",data:n})}function h(e,a,n){var r={list:n,enrollId:e,groupId:a};return r=C.a.stringify(r),t.i(g.a)({url:f.a+"/enroll/role/insertRange",method:"post",data:r})}a.j=n,a.k=r,a.e=i,a.i=o,a.f=c,a.g=d,a.b=s,a.a=l,a.h=A,a.d=p,a.c=h;var g=t(200),m=t(201),C=t.n(m),f=t(199)},1557:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(309),r=t.n(n),i=t(16),o=t.n(i),c=t(9),d=t(1335);a.default={data:function(){return{dataall:[{id:999,label:"全部",checked:[]}],data:[]}},computed:o()({},t.i(c.b)(["teacher","teacherItem"])),methods:{goBack:function(){this.$router.push({path:"/yingxin/teacher"})},save:function(){var e=this,a=this.loading();t.i(d.c)(this.teacherItem.enrollLogicId,this.teacher.groupId,encodeURI(r()(this.data))).then(function(t){a.close(),t=t.data,"200"===t.state?e.MessageSuccess(t.message):e.MessageError(t.message)}).catch(function(){a.close(),e.MessageError()})},_fetchRange:function(){var e=this;if(!this.teacher.groupName||""===this.teacher.groupName)return void this.goBack();var a=this.loading();t.i(d.d)(this.teacher.groupId,this.teacherItem.enrollLogicId).then(function(t){a.close(),t=t.data,"200"===t.state?(e.data=t.data,e.dataall[0].checked=e.isAllCheck(e.data)):e.MessageError(t.message)}).catch(function(t){a.close(),e.MessageError()})},operate:function(e,a){var t=e.parent.data;Array.isArray(t)?this.dataall[0].checked=this.setparent(t):(t.checked=this.setparent(t.children),this.dataall[0].checked=this.setparent(this.data)),a.children&&a.children.length>0&&(0===a.checked.length?this.setCheck(a.children,[]):1===a.checked.length?"1"===a.checked[0]?this.setCheck(a.children,["1"]):this.setCheck(a.children,["2"]):this.setCheck(a.children,["1","2"]))},changeall:function(e){0===e.checked.length?this.setCheck(this.data,[]):1===e.checked.length?"1"===e.checked[0]?this.setCheck(this.data,["1"]):this.setCheck(this.data,["2"]):this.setCheck(this.data,["1","2"])},setparent:function(e){for(var a=0,t=0,n=0,r=0;r<e.length;r++)0===e[r].checked.length?e[r].children&&n++:1===e[r].checked.length?e[r].children?(n++,"1"===e[r].checked[0]?a++:t++):"1"===e[r].checked[0]?a++:t++:2===e[r].checked.length&&(a++,t++,n++);return a===e.length&&t===n?["1","2"]:a<e.length&&t===n?["2"]:a<e.length&&t<n?[]:a===e.length&&t<n?["1"]:void 0},setCheck:function(e,a){var t=this;e.forEach(function(e){e.children?e.checked=a:1===a.length?"1"===a[0]?e.checked=["1"]:e.checked=[]:2===a.length?e.checked=["1"]:e.checked=[],e.children&&e.children.length>0&&t.setCheck(e.children,a)})},isAllCheck:function(e){for(var a=0,t=0,n=0;n<e.length;n++){if(0===e[n].checked.length)return[];2===e[n].checked.length?(a++,t++):"1"===e[n].checked[0]?a++:t++}return a===e.length&&t===e.length?["1","2"]:a===e.length&&t<e.length?["1"]:a<e.length&&t===e.length?["2"]:a<e.length&&t<e.length?[]:void 0}},mounted:function(){this._fetchRange()}}},1597:function(e,a,t){a=e.exports=t(1322)(!0),a.push([e.i,".manage-wrapper[data-v-4108754c]{padding:0 11px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.manage-wrapper .header[data-v-4108754c]{border-bottom:1px solid #2184c5;padding:20px 0}.manage-wrapper .header .crumbs[data-v-4108754c]{display:inline-block;position:relative;top:2px;left:11px;font-size:10px;border-left:2px solid #a7a7a7;padding-left:10px}.manage-wrapper .header .header-item[data-v-4108754c]{display:inline-block;font-size:15px}.manage-wrapper .header .h-left[data-v-4108754c]{float:left}.manage-wrapper .header .h-right[data-v-4108754c]{float:right;padding:5px;border:1px solid #2184c5;border-radius:3px;color:#2184c5;cursor:pointer;margin-right:5px}.manage-wrapper .header .title[data-v-4108754c]{color:#555;font-weight:700}.manage-wrapper .list-content[data-v-4108754c]{padding:0;margin-top:10px}.manage-wrapper .list-content .item .click[data-v-4108754c]{cursor:pointer;padding:5px}.manage-wrapper .manage-content[data-v-4108754c]{padding:0;margin-top:10px}.manage-wrapper .manage-content .head-wrapper[data-v-4108754c]{display:-webkit-box;display:-ms-flexbox;display:flex}.manage-wrapper .manage-content .head-wrapper .head-bg[data-v-4108754c]{text-align:center;height:45px;line-height:45px;background-color:#f1f3f7;font-size:18px;font-weight:700}.manage-wrapper .manage-content .head-wrapper .head-bg.head-r[data-v-4108754c]{width:900px}.manage-wrapper .manage-content .head-wrapper .head-bg.head-l[data-v-4108754c]{-webkit-box-flex:1;-ms-flex:1;flex:1}.manage-wrapper .manage-content .custom-tree-node[data-v-4108754c]{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding-right:8px}.manage-wrapper .manage-content .custom-tree-node .node-item[data-v-4108754c]{display:-webkit-box;display:-ms-flexbox;display:flex}.manage-wrapper .manage-content .custom-tree-node .node-item.node-item-left[data-v-4108754c]{-webkit-box-flex:1;-ms-flex:1;flex:1}.manage-wrapper .manage-content .custom-tree-node .node-item.node-item-right[data-v-4108754c]{width:900px;padding-left:80px;-webkit-box-sizing:border-box;box-sizing:border-box}.manage-wrapper .footer[data-v-4108754c]{text-align:right}","",{version:3,sources:["D:/yxxt-ytxy/src/pages/yxCms/view/yingxin/teacherOff/authority.vue"],names:[],mappings:"AACA,iCACE,eAAgB,AAChB,8BAA+B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,yCACE,gCAAiC,AACjC,cAAgB,CACjB,AACD,iDACE,qBAAsB,AACtB,kBAAmB,AACnB,QAAS,AACT,UAAW,AACX,eAAgB,AAChB,8BAA+B,AAC/B,iBAAmB,CACpB,AACD,sDACE,qBAAsB,AACtB,cAAgB,CACjB,AACD,iDACE,UAAY,CACb,AACD,kDACE,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,cAAe,AACf,eAAgB,AAChB,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,eAAkB,CACnB,AACD,+CACE,UAAW,AACX,eAAiB,CAClB,AACD,4DACE,eAAgB,AAChB,WAAa,CACd,AACD,iDACE,UAAW,AACX,eAAiB,CAClB,AACD,+DACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,wEACE,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,yBAA0B,AAC1B,eAAgB,AAChB,eAAkB,CACnB,AACD,+EACE,WAAa,CACd,AACD,+EACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,mEACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,eAAgB,AAChB,iBAAmB,CACpB,AACD,8EACE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,6FACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,8FACE,YAAa,AACb,kBAAmB,AACnB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,yCACE,gBAAkB,CACnB",file:"authority.vue",sourcesContent:["\n.manage-wrapper[data-v-4108754c] {\n  padding: 0 11px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n.manage-wrapper .header[data-v-4108754c] {\n  border-bottom: 1px solid #2184c5;\n  padding: 20px 0;\n}\n.manage-wrapper .header .crumbs[data-v-4108754c] {\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  left: 11px;\n  font-size: 10px;\n  border-left: 2px solid #a7a7a7;\n  padding-left: 10px;\n}\n.manage-wrapper .header .header-item[data-v-4108754c] {\n  display: inline-block;\n  font-size: 15px;\n}\n.manage-wrapper .header .h-left[data-v-4108754c] {\n  float: left;\n}\n.manage-wrapper .header .h-right[data-v-4108754c] {\n  float: right;\n  padding: 5px;\n  border: 1px solid #2184c5;\n  border-radius: 3px;\n  color: #2184c5;\n  cursor: pointer;\n  margin-right: 5px;\n}\n.manage-wrapper .header .title[data-v-4108754c] {\n  color: #555;\n  font-weight: bold;\n}\n.manage-wrapper .list-content[data-v-4108754c] {\n  padding: 0;\n  margin-top: 10px;\n}\n.manage-wrapper .list-content .item .click[data-v-4108754c] {\n  cursor: pointer;\n  padding: 5px;\n}\n.manage-wrapper .manage-content[data-v-4108754c] {\n  padding: 0;\n  margin-top: 10px;\n}\n.manage-wrapper .manage-content .head-wrapper[data-v-4108754c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.manage-wrapper .manage-content .head-wrapper .head-bg[data-v-4108754c] {\n  text-align: center;\n  height: 45px;\n  line-height: 45px;\n  background-color: #f1f3f7;\n  font-size: 18px;\n  font-weight: bold;\n}\n.manage-wrapper .manage-content .head-wrapper .head-bg.head-r[data-v-4108754c] {\n  width: 900px;\n}\n.manage-wrapper .manage-content .head-wrapper .head-bg.head-l[data-v-4108754c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.manage-wrapper .manage-content .custom-tree-node[data-v-4108754c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n.manage-wrapper .manage-content .custom-tree-node .node-item[data-v-4108754c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.manage-wrapper .manage-content .custom-tree-node .node-item.node-item-left[data-v-4108754c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.manage-wrapper .manage-content .custom-tree-node .node-item.node-item-right[data-v-4108754c] {\n  width: 900px;\n  padding-left: 80px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.manage-wrapper .footer[data-v-4108754c] {\n  text-align: right;\n}"],sourceRoot:""}])},1671:function(e,a,t){var n=t(1597);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(1323)("932875f0",n,!0,{})},1754:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-container",{staticClass:"manage-wrapper"},[t("el-header",{staticClass:"header"},[t("span",{staticClass:"title header-item h-left"},[e._v("权限范围")]),e._v(" "),t("el-breadcrumb",{staticClass:"crumbs",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[e._v("迎新配置")]),e._v(" "),t("el-breadcrumb-item",[e._v("教师办公设置")]),e._v(" "),t("el-breadcrumb-item",[e._v(e._s(e.teacher.groupName))]),e._v(" "),t("el-breadcrumb-item",[e._v("权限范围")])],1)],1),e._v(" "),t("el-main",{staticClass:"manage-content"},[t("el-row",{staticClass:"head-wrapper"},[t("div",{staticClass:"head-bg head-l"},[e._v("操作范围")]),e._v(" "),t("div",{staticClass:"head-bg head-r"},[e._v("操作")])]),e._v(" "),e.data.length>0?t("el-tree",{attrs:{data:e.dataall,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.node,r=a.data;return t("span",{staticClass:"custom-tree-node"},[t("span",{staticClass:"node-item node-item-left"},[e._v(e._s(n.label))]),e._v(" "),t("span",{staticClass:"node-item node-item-right"},[t("el-checkbox",{attrs:{label:"1"},on:{change:function(a){e.changeall(r)}},model:{value:r.checked,callback:function(a){e.$set(r,"checked",a)},expression:"data.checked"}},[e._v("可操作")]),e._v(" "),t("el-checkbox",{attrs:{label:"2"},on:{change:function(a){e.changeall(r)}},model:{value:r.checked,callback:function(a){e.$set(r,"checked",a)},expression:"data.checked"}},[e._v("可分配")])],1)])}}])}):e._e(),e._v(" "),t("el-tree",{attrs:{data:e.data,"expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(a){var n=a.node,r=a.data;return t("span",{staticClass:"custom-tree-node"},[t("span",{staticClass:"node-item node-item-left"},[e._v(e._s(n.label))]),e._v(" "),t("span",{staticClass:"node-item node-item-right"},[t("el-checkbox",{attrs:{label:"1"},on:{change:function(a){e.operate(n,r)}},model:{value:r.checked,callback:function(a){e.$set(r,"checked",a)},expression:"data.checked"}},[e._v("可操作")]),e._v(" "),t("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:r.children,expression:"data.children"}],attrs:{label:"2"},on:{change:function(a){e.operate(n,r)}},model:{value:r.checked,callback:function(a){e.$set(r,"checked",a)},expression:"data.checked"}},[e._v("可分配")])],1)])}}])})],1),e._v(" "),t("el-footer",[t("el-row",[t("el-col",{attrs:{offset:10,span:2}},[t("el-button",{on:{click:e.goBack}},[e._v("返回")])],1),e._v(" "),t("el-col",{attrs:{span:2}},[t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]}},576:function(e,a,t){function n(e){t(1671)}var r=t(4)(t(1557),t(1754),n,"data-v-4108754c",null);e.exports=r.exports}});
//# sourceMappingURL=56.3b73f514cff475554a07.js.map