webpackJsonp([70],{1525:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(1567);e.default={components:{},data:function(){return{title:"引导页配置",importFileUrl:a.a,imgArr:[],sizeForm:{condition:"0",type:[]},dialogImageUrl:"",dialogVisible:!1,fileList:[],fileArray:[],dialogTableVisible:!1}},methods:{onSubmit:function(){for(var t=this,e=0;e<this.fileArray.length;e++)this.imgArr[e]=this.fileArray[e].url;var o=this.imgArr.join(","),n={condition:this.sizeForm.condition,fileList:o},l=this.loading();i.i(a.b)(n).then(function(e){l.close(),e=e.data,"200"===e.state?t.MessageSuccess(e.message):t.msg=e.message}).catch(function(e){l.close(),t.MessageError()})},_fetchintroductory:function(){var t=this,e=this.loading();i.i(a.c)().then(function(i){e.close(),i=i.data,(i.state="200")?(t.fileArray=i.data.fileList,t.sizeForm.condition=i.data.condition):t.msg=i.message}).catch(function(i){e.close(),t.MessageError()})},uploadSuccess:function(t,e,i){var a=t.data;this.fileArray.push(a)},handleRemove:function(t,e){var i=this;this.fileArray.forEach(function(e,a){e.url===t.url&&i.fileArray.splice(a,1)})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(t,e){this.$message.warning("当前限制选择 6 个文件，本次选择了 "+t.length+" 个文件，当前已经选择了 "+e.length+" 个文件")}},created:function(){this._fetchintroductory()}}},1567:function(t,e,i){"use strict";function a(){var t={};return t=r.a.stringify(t),i.i(n.a)({url:s.a+"/enroll/bootPage/init",method:"post",data:t})}function o(t){var e={bootPageCondition:t.condition,bootPagePicture:t.fileList};return e=r.a.stringify(e),i.i(n.a)({url:s.a+"/enroll/bootPage/save",method:"post",data:e})}e.c=a,e.b=o,i.d(e,"a",function(){return d});var n=i(200),l=i(201),r=i.n(l),s=i(199),d=s.a+"/enroll/Resources/save"},1630:function(t,e,i){e=t.exports=i(1322)(!0),e.push([t.i,"div[name=introductoryPage][data-v-b3a8d642]{width:98%;margin:0 1%}.header-wrap[data-v-b3a8d642]{width:100%;height:49px;line-height:50px;font-size:14px;border-bottom:1px solid #2184c5}.header-wrap p[data-v-b3a8d642]{color:#555;font-weight:700;display:inline-block;font-family:MicrosoftYaHei-Bold}.content-wrap[data-v-b3a8d642]{padding:20px 0}.el-carousel__item img[data-v-b3a8d642]{color:#475669;margin:0 auto;margin-left:calc(50% - 250px);width:500px}.el-carousel__item[data-v-b3a8d642]:nth-child(2n){background-color:#99a9bf}.el-carousel__item[data-v-b3a8d642]:nth-child(odd){background-color:#d3dce6}.el-dialog__body[data-v-b3a8d642]{height:600px}","",{version:3,sources:["D:/yxxt-ytxy/src/pages/yxCms/view/introductoryPages/index.vue"],names:[],mappings:"AACA,4CACE,UAAW,AACX,WAAa,CACd,AACD,8BACE,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,+BAAiC,CAClC,AACD,gCACE,WAAY,AACZ,gBAAkB,AAClB,qBAAsB,AACtB,+BAAiC,CAClC,AACD,+BACE,cAAgB,CACjB,AACD,wCACE,cAAe,AACf,cAAe,AACf,8BAA+B,AAC/B,WAAa,CACd,AACD,kDACE,wBAA0B,CAC3B,AACD,mDACE,wBAA0B,CAC3B,AACD,kCACE,YAAc,CACf",file:"index.vue",sourcesContent:["\ndiv[name = 'introductoryPage'][data-v-b3a8d642] {\n  width: 98%;\n  margin: 0 1%;\n}\n.header-wrap[data-v-b3a8d642] {\n  width: 100%;\n  height: 49px;\n  line-height: 50px;\n  font-size: 14px;\n  border-bottom: 1px solid #2184c5;\n}\n.header-wrap p[data-v-b3a8d642] {\n  color: #555;\n  font-weight: bold;\n  display: inline-block;\n  font-family: MicrosoftYaHei-Bold;\n}\n.content-wrap[data-v-b3a8d642] {\n  padding: 20px 0;\n}\n.el-carousel__item img[data-v-b3a8d642] {\n  color: #475669;\n  margin: 0 auto;\n  margin-left: calc(50% - 250px);\n  width: 500px;\n}\n.el-carousel__item[data-v-b3a8d642]:nth-child(2n) {\n  background-color: #99a9bf;\n}\n.el-carousel__item[data-v-b3a8d642]:nth-child(2n+1) {\n  background-color: #d3dce6;\n}\n.el-dialog__body[data-v-b3a8d642] {\n  height: 600px;\n}"],sourceRoot:""}])},1704:function(t,e,i){var a=i(1630);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(1323)("efa9a4f2",a,!0,{})},1787:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{name:"introductoryPage"}},[i("div",{staticClass:"header-wrap"},[i("p",[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"content-wrap"},[i("el-form",{ref:"form",attrs:{model:t.sizeForm,"label-width":"120px",size:"mini"}},[i("el-form-item",{attrs:{label:"引导页条件"}},[i("el-select",{model:{value:t.sizeForm.condition,callback:function(e){t.$set(t.sizeForm,"condition",e)},expression:"sizeForm.condition"}},[i("el-option",{attrs:{label:"不使用",value:"0"}}),t._v(" "),i("el-option",{attrs:{label:"新生首次",value:"1"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"添加图片"}},[i("el-upload",{attrs:{action:t.importFileUrl,"file-list":t.fileArray,"list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,onSuccess:t.uploadSuccess,multiple:"",limit:6,"on-exceed":t.handleExceed}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),i("el-form-item",{attrs:{size:"large"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogTableVisible=!0}}},[t._v("预览")]),t._v(" "),i("el-dialog",{attrs:{title:"预览",visible:t.dialogTableVisible,width:"30%"},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[[i("el-carousel",{attrs:{trigger:"click","indicator-position":"outside",height:"600px"}},t._l(t.fileArray,function(t,e){return i("el-carousel-item",{key:e},[i("img",{staticStyle:{width:"500px",height:"600px"},attrs:{src:t.url,alt:""}})])}))],t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogTableVisible=!1}}},[t._v("关 闭")])],1)],2),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)])},staticRenderFns:[]}},544:function(t,e,i){function a(t){i(1704)}var o=i(4)(i(1525),i(1787),a,"data-v-b3a8d642",null);t.exports=o.exports}});
//# sourceMappingURL=70.9bbf71753618cc2fe87a.js.map