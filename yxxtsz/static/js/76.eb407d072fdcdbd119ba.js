webpackJsonp([76],{1387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{rows:{type:Array,default:function(){return[]}},cols:{type:Array,default:function(){return[]}}},methods:{selItem:function(e){this.$emit("selItem",e)}}}},1425:function(e,t,n){t=e.exports=n(1322)(!0),t.push([e.i,".item[data-v-453fa31e]{color:#2184c5}.item span[data-v-453fa31e]{border-bottom:1px solid #2184c5;cursor:pointer}","",{version:3,sources:["D:/yxxt-jdxy/src/pages/yxCms/view/statis/synthesis/synContent.vue"],names:[],mappings:"AACA,uBACE,aAAe,CAChB,AACD,4BACE,gCAAiC,AACjC,cAAgB,CACjB",file:"synContent.vue",sourcesContent:["\n.item[data-v-453fa31e] {\n  color: #2184c5;\n}\n.item span[data-v-453fa31e] {\n  border-bottom: 1px solid #2184c5;\n  cursor: pointer;\n}"],sourceRoot:""}])},1445:function(e,t,n){var o=n(1425);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1323)("104490e1",o,!0,{})},1467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{directives:[{name:"show",rawName:"v-show",value:e.rows.length>0,expression:"rows.length>0"}],staticStyle:{width:"100%"},attrs:{data:e.rows,border:""}},e._l(e.cols,function(t){return n("el-table-column",{key:t.prop,attrs:{align:"center",prop:t.prop,label:t.label},scopedSlots:e._u([{key:"default",fn:function(o){return[n("p",{staticClass:"item",on:{click:function(n){e.selItem(o.row[t.prop])}}},[n("span",[e._v(e._s(o.row[t.prop].value))])])]}}])})}))},staticRenderFns:[]}},495:function(e,t,n){function o(e){n(1445)}var s=n(4)(n(1387),n(1467),o,"data-v-453fa31e",null);e.exports=s.exports}});
//# sourceMappingURL=76.eb407d072fdcdbd119ba.js.map