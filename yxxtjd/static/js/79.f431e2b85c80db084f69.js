webpackJsonp([79],{1380:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(16),o=s.n(n),r=s(9);e.default={props:{rows:{type:Array,default:function(){return[]}},cols:{type:Array,default:function(){return[]}}},methods:o()({look:function(t){this._setInfo(t),this.$router.push({path:"/statis/index/businfo"})}},s.i(r.c)({_setInfo:"SET_INFO"}))}},1434:function(t,e,s){e=t.exports=s(1321)(!0),e.push([t.i,".btn[data-v-ed719d08]{color:#2184c5;border-bottom:1px solid #2184c5;cursor:pointer}","",{version:3,sources:["D:/yxxt-jdxy/src/pages/yxCms/view/statis/business/businessContent.vue"],names:[],mappings:"AACA,sBACE,cAAe,AACf,gCAAiC,AACjC,cAAgB,CACjB",file:"businessContent.vue",sourcesContent:["\n.btn[data-v-ed719d08] {\n  color: #2184c5;\n  border-bottom: 1px solid #2184c5;\n  cursor: pointer;\n}"],sourceRoot:""}])},1454:function(t,e,s){var n=s(1434);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(1322)("d7808522",n,!0,{})},1476:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-table",{directives:[{name:"show",rawName:"v-show",value:t.rows.length>0,expression:"rows.length>0"}],staticStyle:{width:"100%"},attrs:{data:t.rows,border:""}},[t._l(t.cols,function(t){return s("el-table-column",{key:t.prop,attrs:{align:"center",prop:t.prop,label:t.label}})}),t._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("p",{staticClass:"operate"},[s("span",{staticClass:"btn",on:{click:function(s){t.look(e.row)}}},[t._v("查看")]),t._v(" "),s("span",{staticClass:"btn"},[t._v("表单预览")])])]}}])})],2)},staticRenderFns:[]}},490:function(t,e,s){function n(t){s(1454)}var o=s(4)(s(1380),s(1476),n,"data-v-ed719d08",null);t.exports=o.exports}});
//# sourceMappingURL=79.f431e2b85c80db084f69.js.map