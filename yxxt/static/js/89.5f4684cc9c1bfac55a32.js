webpackJsonp([89],{1373:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var s=[{code:1,value:"农业户口"},{code:2,value:"非农业户口"}],o=[],n=0;n<s.length;n++)o=o.concat(s[n].value);for(var i=[{code:10,value:"健康或良好"},{code:20,value:"一般或较弱"},{code:30,value:"有慢性病"},{code:40,value:"有慢性病"},{code:31,value:"心血管病"},{code:32,value:"脑血管病"},{code:33,value:"慢性呼吸系统病"},{code:34,value:"慢性消化系统病"},{code:35,value:"慢性肾炎"},{code:36,value:"结核病"},{code:37,value:"糖尿病"},{code:38,value:"神经或精神疾病"},{code:41,value:"癌症"},{code:49,value:"其他慢性病"},{code:60,value:"残疾"},{code:61,value:"视力残疾"},{code:62,value:"听力残疾"},{code:63,value:"言语残疾"},{code:64,value:"肢体残疾"},{code:65,value:"智力残疾"},{code:66,value:"精神残疾"},{code:67,value:"多重残疾"},{code:69,value:"其他残疾"}],c=[],n=0;n<i.length;n++)c=c.concat(i[n].value);for(var x=[{code:0,value:"未知血型"},{code:1,value:"A血型"},{code:2,value:"B血型"},{code:3,value:"AB血型"},{code:4,value:"O血型"},{code:5,value:"RH阳性血型"},{code:6,value:"RH阴性血型"},{code:7,value:"HLA血型"},{code:8,value:"未定血型"},{code:9,value:"其他血型"}],l=[],n=0;n<x.length;n++)l=l.concat(x[n].value);for(var r=[{code:10,value:"未婚"},{code:20,value:"已婚"},{code:21,value:"初婚"},{code:22,value:"再婚"},{code:23,value:"复婚"},{code:30,value:"丧偶"},{code:40,value:"离婚"},{code:90,value:"未说明的婚姻状况"}],d=[],n=0;n<r.length;n++)d=d.concat(r[n].value);for(var p=[{code:0,value:"无宗教信仰"},{code:10,value:"佛教"},{code:20,value:"喇嘛教"},{code:30,value:"道教"},{code:40,value:"天主教"},{code:50,value:"基督教"},{code:60,value:"东正教"},{code:70,value:"伊斯兰教"},{code:99,value:"其他"}],v=[],n=0;n<p.length;n++)v=v.concat(p[n].value);for(var A=[{code:1,value:"双亲健全"},{code:2,value:"孤儿"},{code:3,value:"单亲（父母一方去世）"},{code:4,value:"父母离异"},{code:5,value:"双亲有残疾"},{code:6,value:"本人残疾"},{code:7,value:"军烈属或优抚对象"},{code:8,value:"重病"},{code:9,value:"五保户"}],h=[],n=0;n<A.length;n++)h=h.concat(A[n].value);var u=["是","否"],A=["主干家庭","核心家庭","联合家庭","其他家庭"],b=["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"];e.default={name:"cdxx",data:function(){return{xmpy:"",cym:"",sg:"",tz:"",tc:"",errorMessage:"",jkzk:!1,hkxz:!1,xx:!1,hyzk:!1,zjxy:!1,drbgb:"",jtjg:!1,ccqj:!1,sfpkx:!1,FisShow:!1,obj:{jkzk:"",hkxz:"",xx:"",hyzk:"",zjxy:"",jtjg:"",ccqj:"",sfpkx:""},xxSlots:[{values:l,className:"slot1",textAlign:"center",defaultIndex:1}],jkzkSlots:[{values:c,className:"slot1",textAlign:"center",defaultIndex:1}],hkxzSlots:[{values:o,className:"slot1",textAlign:"center",defaultIndex:1}],hyzkSlots:[{values:d,className:"slot1",textAlign:"center",defaultIndex:1}],zjxySlots:[{values:v,className:"slot1",textAlign:"center",defaultIndex:1}],jtjgSlots:[{values:h,className:"slot1",textAlign:"center",defaultIndex:1}],ccqjSlots:[{values:b,className:"slot1",textAlign:"right",defaultIndex:1},{values:b,className:"slot2",textAlign:"left",defaultIndex:1}],sfpkxSlots:[{values:u,className:"slot1",textAlign:"center"}],toParent:!1}},methods:{sgyz:function(t){this.sg=t.target.value.replace(/[^\d]/g,""),0==this.sg&&(this.sg="")},tzyz:function(t){this.tz=t.target.value.replace(/[^\d]/g,""),0==this.tz&&(this.tz="")},xmpyyz:function(t){this.xmpy=t.target.value.replace(/[^a-z]/g,"")},sgyzBlur:function(){},tzyzBlur:function(){},confirm:function(t){this[t]=!1,this.obj[t]="ccqj"==t?this.$refs[t].values[0]+"—"+this.$refs[t].values[1]:this.$refs[t].values[0]},closepopu:function(t){this[t]=!1}},props:{value:Boolean,getSavedData:Object},watch:{value:function(){var t=this,e="请选择";if(""!=this.xmpy&&""!=this.cym&&this.sg<250&&this.sg>100&&this.tz>20&&this.tz<300&&""!=this.tc&&this.obj.jkzk!=e&&this.obj.hkxz!=e&&this.obj.xx!=e&&this.obj.hyzk!=e&&this.obj.zjxy!=e&&""!=this.drbgb&&this.obj.jtjg!=e&&this.obj.ccqj!=e&&this.obj.sfpkx!=e){var a='{"xmpy":"'+this.xmpy+'","cym":"'+this.cym+'","sg":"'+this.sg+'","tz":"'+this.tz+'","tc":"'+this.tc+'","jkzk":"'+this.obj.jkzk+'","hkxz":"'+this.obj.hkxz+'","xx":"'+this.obj.xx+'","hyzk":"'+this.obj.hyzk+'","zjxy":"'+this.obj.zjxy+'","drbgb":"'+this.drbgb+'","jtjg":"'+this.obj.jtjg+'","ccqj":"'+this.obj.ccqj+'","sfpkx":"'+this.obj.sfpkx+'"}';this.toParent=!0,this.$emit("childData",{zt:this.toParent,value:a})}else"请选择"!=this.obj.sfpkx&&""!=this.obj.sfpkx||(this.errorMessage="请选择是否贫困县"),"请选择"!=this.obj.ccqj&&""!=this.obj.ccqj||(this.errorMessage="请选择乘车区间"),"请选择"!=this.obj.jtjg&&""!=this.obj.jtjg||(this.errorMessage="请选择家庭结构"),""==this.drbgb&&(this.errorMessage="担任班干部不能为空"),"请选择"!=this.obj.zjxy&&""!=this.obj.zjxy||(this.errorMessage="请选择宗教信仰"),"请选择"!=this.obj.hyzk&&""!=this.obj.hyzk||(this.errorMessage="请选择婚姻状况"),"请选择"!=this.obj.xx&&""!=this.obj.xx||(this.errorMessage="请选择血型"),"请选择"!=this.obj.hkxz&&""!=this.obj.hkxz||(this.errorMessage="请选择户口性质"),"请选择"!=this.obj.jkzk&&""!=this.obj.jkzk||(this.errorMessage="请选择健康状况"),""==this.tc&&(this.errorMessage="特长不能为空"),(this.tz>300||this.tz<20)&&(this.errorMessage="体重单位是kg，且输入值应当大于20小于300"),(this.sg>250||this.sg<100)&&(this.errorMessage="身高单位是cm，且输入值应当大于100小于250"),""==this.cym&&(this.errorMessage="曾用名不能为空"),""==this.xmpy&&(this.errorMessage="姓名拼音不能为空"),this.FisShow=!this.FisShow,setTimeout(function(){t.FisShow=!t.FisShow},1e3),this.toParent=!1,this.$emit("childData",{zt:this.toParent,value:""})}},created:function(){if(1!=this.getSavedData.id){var t=this.getSavedData;this.cym=t.cym?t.cym:"",this.xmpy=t.xmpy?t.xmpy:"",this.sg=t.sg?t.sg:"",this.tz=t.tz?t.tz:"",this.tc=t.tc?t.tc:"",this.obj.jkzk=t.jkzk?t.jkzk:"请选择",this.obj.hkxz=t.hkxz?t.hkxz:"请选择",this.obj.xx=t.xx?t.xx:"请选择",this.obj.hyzk=t.hyzk?t.hyzk:"请选择",this.obj.zjxy=t.zjxy?t.zjxy:"请选择",this.drbgb=t.drbgb?t.drbgb:"",this.obj.jtjg=t.jtjg?t.jtjg:"请选择",this.obj.ccqj=t.ccqj?t.ccqj:"请选择",this.obj.sfpkx=t.sfpkx?t.sfpkx:"请选择"}},activated:function(){if(1!=this.getSavedData.id){var t=this.getSavedData;this.cym=t.cym?t.cym:"",this.xmpy=t.xmpy?t.xmpy:"",this.sg=t.sg?t.sg:"",this.tz=t.tz?t.tz:"",this.tc=t.tc?t.tc:"",this.obj.jkzk=t.jkzk?t.jkzk:"请选择",this.obj.hkxz=t.hkxz?t.hkxz:"请选择",this.obj.xx=t.xx?t.xx:"请选择",this.obj.hyzk=t.hyzk?t.hyzk:"请选择",this.obj.zjxy=t.zjxy?t.zjxy:"请选择",this.drbgb=t.drbgb?t.drbgb:"",this.obj.jtjg=t.jtjg?t.jtjg:"请选择",this.obj.ccqj=t.ccqj?t.ccqj:"请选择",this.obj.sfpkx=t.sfpkx?t.sfpkx:"请选择"}}}},1430:function(t,e,a){e=t.exports=a(1322)(!0),e.push([t.i,'.cdxx[data-v-92b51ee2]{border-top:.01rem solid #e9e9e9;margin-bottom:.1rem}.cdxx .xxxx[data-v-92b51ee2]{padding:0 .12rem;background:#fff}.cdxx .xxxx .seclect[data-v-92b51ee2]{border-bottom:.01rem solid #e9e9e9;font-size:.16rem;font-family:PingFang-SC-Medium;color:#333;line-height:.44rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:url("/yxxt/static/student-index-pictures/more-hui@2x.png") 100% no-repeat}.cdxx .xxxx .seclect span[data-v-92b51ee2]:last-child{font-size:.14rem;font-family:PingFang-SC-Medium;color:#333;margin-right:.15rem;min-width:1rem;text-align:right}.cdxx .xxxx .seclect[data-v-92b51ee2]:last-child{border-bottom:0}.cdxx .xxxx p[data-v-92b51ee2]{border-bottom:.01rem solid #e9e9e9;font-size:.16rem;font-family:PingFang-SC-Medium;color:#333;line-height:.44rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.cdxx .xxxx p input[data-v-92b51ee2]{outline:none;font-size:.14rem;font-family:PingFang-SC-Medium;color:#555;width:calc(100% - 1rem)}.cdxx .xxxx p span[data-v-92b51ee2]:first-child{width:.81rem}.cdxx .xxxx p span[data-v-92b51ee2]:last-child{width:.18rem;height:.18rem;background:url("/yxxt/static/student-index-pictures/delete-hui.png");background-size:.18rem}.cdxx .xxxx p[data-v-92b51ee2]:last-child{border-bottom:0}.cdxx .xxxx p:nth-of-type(9) span[data-v-92b51ee2]:first-child{width:1rem}.cdxx .xxxx p:nth-of-type(9) input[data-v-92b51ee2]{width:calc(100% - 1.19rem)}.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(6),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(7),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(8),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(9),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(10),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(12),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(13),.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(14){background:url("/yxxt/static/student-index-pictures/more-hui@2x.png") 100% no-repeat}.cdxx .xxxx p:nth-of-type(6) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(7) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(8) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(9) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(10) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(12) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(13) span[data-v-92b51ee2]:last-child,.cdxx .xxxx p:nth-of-type(14) span[data-v-92b51ee2]:last-child{font-size:.14rem;font-family:PingFang-SC-Medium;color:#333;margin-right:.15rem;background:none;width:auto;height:auto}.cdxx .xxxx p:nth-of-type(11) span[data-v-92b51ee2]:first-child{width:.97rem}.cdxx .xxxx p:nth-of-type(11) input[data-v-92b51ee2]{width:calc(100% - 1.16rem)}.cdxx .error[data-v-92b51ee2]{position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;width:calc(100% - .24rem);height:.4rem;border-radius:.06rem;background:rgba(0,0,0,.7);line-height:.4rem;text-align:center;font-size:.14rem;color:#fff}.cdxx .fade-enter-active[data-v-92b51ee2],.cdxx .fade-leave-active[data-v-92b51ee2]{-webkit-transition:opacity .5s;transition:opacity .5s}.cdxx .fade-enter[data-v-92b51ee2],.cdxx .fade-leave-to[data-v-92b51ee2]{opacity:0}.mint-popup[data-v-92b51ee2]{width:100%}.popupWidth>p[data-v-92b51ee2]{font-size:16px;padding:.1rem;text-align:center}',"",{version:3,sources:["D:/yxxt-ytxy/src/pages/student/component/common/rxzb-wsxx-cdxx-info.vue"],names:[],mappings:"AACA,uBACE,gCAAkC,AAClC,mBAAsB,CACvB,AACD,6BACE,iBAAmB,AACnB,eAAiB,CAClB,AACD,sCACE,mCAAqC,AACrC,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,mBAAqB,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,oFAA8F,CAC/F,AACD,sDACE,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,oBAAsB,AACtB,eAAgB,AAChB,gBAAkB,CACnB,AACD,iDACE,eAAiB,CAClB,AACD,+BACE,mCAAqC,AACrC,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,mBAAqB,AACrB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,qCACE,aAAc,AACd,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,uBAAyB,CAC1B,AACD,gDACE,YAAe,CAChB,AACD,+CACE,aAAe,AACf,cAAgB,AAChB,qEAAsE,AACtE,sBAAyB,CAC1B,AACD,0CACE,eAAiB,CAClB,AACD,+DACE,UAAY,CACb,AACD,oDACE,0BAA4B,CAC7B,AACD,oXAQE,oFAA8F,CAC/F,AACD,ofAQE,iBAAmB,AACnB,+BAAgC,AAChC,WAAY,AACZ,oBAAsB,AACtB,gBAAiB,AACjB,WAAY,AACZ,WAAa,CACd,AACD,gEACE,YAAe,CAChB,AACD,qDACE,0BAA4B,CAC7B,AACD,8BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,0BAA4B,AAC5B,aAAe,AACf,qBAAuB,AACvB,0BAA4B,AAC5B,kBAAoB,AACpB,kBAAmB,AACnB,iBAAmB,AACnB,UAAY,CACb,AACD,oFAEE,+BAAiC,AACjC,sBAAyB,CAC1B,AACD,yEAEE,SAAW,CACZ,AACD,6BACE,UAAY,CACb,AACD,+BACE,eAAgB,AAChB,cAAgB,AAChB,iBAAmB,CACpB",file:"rxzb-wsxx-cdxx-info.vue",sourcesContent:['\n.cdxx[data-v-92b51ee2] {\n  border-top: 0.01rem solid #e9e9e9;\n  margin-bottom: 0.1rem;\n}\n.cdxx .xxxx[data-v-92b51ee2] {\n  padding: 0 0.12rem;\n  background: #fff;\n}\n.cdxx .xxxx .seclect[data-v-92b51ee2] {\n  border-bottom: 0.01rem solid #e9e9e9;\n  font-size: 0.16rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  line-height: 0.44rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: url("/yxxt/static/student-index-pictures/more-hui@2x.png") right center no-repeat;\n}\n.cdxx .xxxx .seclect span[data-v-92b51ee2]:last-child {\n  font-size: 0.14rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  margin-right: 0.15rem;\n  min-width: 1rem;\n  text-align: right;\n}\n.cdxx .xxxx .seclect[data-v-92b51ee2]:last-child {\n  border-bottom: 0;\n}\n.cdxx .xxxx p[data-v-92b51ee2] {\n  border-bottom: 0.01rem solid #e9e9e9;\n  font-size: 0.16rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  line-height: 0.44rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.cdxx .xxxx p input[data-v-92b51ee2] {\n  outline: none;\n  font-size: 0.14rem;\n  font-family: PingFang-SC-Medium;\n  color: #555;\n  width: calc(100% - 1rem);\n}\n.cdxx .xxxx p span[data-v-92b51ee2]:first-child {\n  width: 0.81rem;\n}\n.cdxx .xxxx p span[data-v-92b51ee2]:last-child {\n  width: 0.18rem;\n  height: 0.18rem;\n  background: url("/yxxt/static/student-index-pictures/delete-hui.png");\n  background-size: 0.18rem;\n}\n.cdxx .xxxx p[data-v-92b51ee2]:last-child {\n  border-bottom: 0;\n}\n.cdxx .xxxx p:nth-of-type(9) span[data-v-92b51ee2]:nth-child(1) {\n  width: 1rem;\n}\n.cdxx .xxxx p:nth-of-type(9) input[data-v-92b51ee2] {\n  width: calc(100% - 1.19rem);\n}\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(6),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(7),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(8),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(9),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(10),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(12),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(13),\n.cdxx .xxxx p[data-v-92b51ee2]:nth-of-type(14) {\n  background: url("/yxxt/static/student-index-pictures/more-hui@2x.png") right center no-repeat;\n}\n.cdxx .xxxx p:nth-of-type(6) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(7) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(8) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(9) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(10) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(12) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(13) span[data-v-92b51ee2]:last-child,\n.cdxx .xxxx p:nth-of-type(14) span[data-v-92b51ee2]:last-child {\n  font-size: 0.14rem;\n  font-family: PingFang-SC-Medium;\n  color: #333;\n  margin-right: 0.15rem;\n  background: none;\n  width: auto;\n  height: auto;\n}\n.cdxx .xxxx p:nth-of-type(11) span[data-v-92b51ee2]:nth-child(1) {\n  width: 0.97rem;\n}\n.cdxx .xxxx p:nth-of-type(11) input[data-v-92b51ee2] {\n  width: calc(100% - 1.16rem);\n}\n.cdxx .error[data-v-92b51ee2] {\n  position: fixed;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: calc(100% - 0.24rem);\n  height: 0.4rem;\n  border-radius: 0.06rem;\n  background: rgba(0,0,0,0.7);\n  line-height: 0.4rem;\n  text-align: center;\n  font-size: 0.14rem;\n  color: #fff;\n}\n.cdxx .fade-enter-active[data-v-92b51ee2],\n.cdxx .fade-leave-active[data-v-92b51ee2] {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.cdxx .fade-enter[data-v-92b51ee2],\n.cdxx .fade-leave-to[data-v-92b51ee2] {\n  opacity: 0;\n}\n.mint-popup[data-v-92b51ee2] {\n  width: 100%;\n}\n.popupWidth >p[data-v-92b51ee2] {\n  font-size: 16px;\n  padding: 0.1rem;\n  text-align: center;\n}'],sourceRoot:""}])},1450:function(t,e,a){var s=a(1430);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(1323)("1d9b2634",s,!0,{})},1472:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cdxx"},[a("div",{staticClass:"xxxx"},[a("p",[a("span",[t._v("姓名拼音")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.xmpy,expression:"xmpy"}],style:""==t.xmpy?{color:"gray"}:{color:"#000"},attrs:{placeholder:"输入信息"},domProps:{value:t.xmpy},on:{input:[function(e){e.target.composing||(t.xmpy=e.target.value)},t.xmpyyz]}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.xmpy,expression:"xmpy!=''"}],on:{click:function(e){t.xmpy=""}}})]),t._v(" "),a("p",[a("span",[t._v("曾用名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cym,expression:"cym"}],style:""==t.cym?{color:"gray"}:{color:"#000"},attrs:{placeholder:"若没有填无"},domProps:{value:t.cym},on:{input:function(e){e.target.composing||(t.cym=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.cym,expression:"cym!=''"}],on:{click:function(e){t.cym=""}}})]),t._v(" "),a("p",[a("span",[t._v("身高")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sg,expression:"sg"}],style:""==t.sg?{color:"gray"}:{color:"#000"},attrs:{placeholder:"输入信息，单位：cm"},domProps:{value:t.sg},on:{input:[function(e){e.target.composing||(t.sg=e.target.value)},t.sgyz],blur:t.sgyzBlur}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.sg,expression:"sg!=''"}],on:{click:function(e){t.sg=""}}})]),t._v(" "),a("p",[a("span",[t._v("体重")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tz,expression:"tz"}],style:""==t.tz?{color:"gray"}:{color:"#000"},attrs:{placeholder:"输入信息，单位：kg"},domProps:{value:t.tz},on:{input:[function(e){e.target.composing||(t.tz=e.target.value)},t.tzyz],blur:t.tzyzBlur}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.tz,expression:"tz!=''"}],on:{click:function(e){t.tz=""}}})]),t._v(" "),a("p",[a("span",[t._v("特长")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tc,expression:"tc"}],style:""==t.tc?{color:"gray"}:{color:"#000"},attrs:{placeholder:"若没有填无"},domProps:{value:t.tc},on:{input:function(e){e.target.composing||(t.tc=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.tc,expression:"tc!=''"}],on:{click:function(e){t.tc=""}}})]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("健康状况")]),t._v(" "),a("span",{on:{click:function(e){t.jkzk=!0}}},[t._v(t._s(t.obj.jkzk?t.obj.jkzk:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("户口性质")]),t._v(" "),a("span",{on:{click:function(e){t.hkxz=!0}}},[t._v(t._s(t.obj.hkxz?t.obj.hkxz:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("血型")]),t._v(" "),a("span",{on:{click:function(e){t.xx=!0}}},[t._v(t._s(t.obj.xx?t.obj.xx:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("婚姻状况")]),t._v(" "),a("span",{on:{click:function(e){t.hyzk=!0}}},[t._v(t._s(t.obj.hyzk?t.obj.hyzk:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("宗教信仰")]),t._v(" "),a("span",{on:{click:function(e){t.zjxy=!0}}},[t._v(t._s(t.obj.zjxy?t.obj.zjxy:"请选择"))])]),t._v(" "),a("p",[a("span",[t._v("担任班干部")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.drbgb,expression:"drbgb"}],style:""==t.drbgb?{color:"gray"}:{color:"#000"},attrs:{placeholder:"若没有填无"},domProps:{value:t.drbgb},on:{input:function(e){e.target.composing||(t.drbgb=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=t.drbgb,expression:"drbgb!=''"}],on:{click:function(e){t.drbgb=""}}})]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("家庭结构")]),t._v(" "),a("span",{on:{click:function(e){t.jtjg=!0}}},[t._v(t._s(t.obj.jtjg?t.obj.jtjg:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("乘车区间")]),t._v(" "),a("span",{on:{click:function(e){t.ccqj=!0}}},[t._v(t._s(t.obj.ccqj?t.obj.ccqj:"请选择"))])]),t._v(" "),a("p",{staticClass:"seclect"},[a("span",[t._v("是否贫困县")]),t._v(" "),a("span",{on:{click:function(e){t.sfpkx=!0}}},[t._v(t._s(t.obj.sfpkx?t.obj.sfpkx:"请选择"))])])]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.jkzk,callback:function(e){t.jkzk=e},expression:"jkzk"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("jkzk")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("jkzk")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"jkzk",attrs:{slots:t.jkzkSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.hkxz,callback:function(e){t.hkxz=e},expression:"hkxz"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("hkxz")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("hkxz")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"hkxz",attrs:{slots:t.hkxzSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.xx,callback:function(e){t.xx=e},expression:"xx"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("xx")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("xx")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"xx",attrs:{slots:t.xxSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.hyzk,callback:function(e){t.hyzk=e},expression:"hyzk"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("hyzk")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("hyzk")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"hyzk",attrs:{slots:t.hyzkSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.zjxy,callback:function(e){t.zjxy=e},expression:"zjxy"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("zjxy")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("zjxy")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"zjxy",attrs:{slots:t.zjxySlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.jtjg,callback:function(e){t.jtjg=e},expression:"jtjg"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("jtjg")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("jtjg")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"jtjg",attrs:{slots:t.jtjgSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.ccqj,callback:function(e){t.ccqj=e},expression:"ccqj"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("ccqj")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("ccqj")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"ccqj",attrs:{slots:t.ccqjSlots,visibleItemCount:3}})],1)]),t._v(" "),a("mt-popup",{attrs:{position:"bottom"},model:{value:t.sfpkx,callback:function(e){t.sfpkx=e},expression:"sfpkx"}},[a("div",{staticClass:"popupWidth"},[a("p",[a("b",{staticClass:"fl",on:{click:function(e){t.closepopu("sfpkx")}}},[t._v("取消")]),t._v(" "),a("b",{staticClass:"fr",on:{click:function(e){t.confirm("sfpkx")}}},[t._v("确认")])]),t._v(" "),a("mt-picker",{ref:"sfpkx",attrs:{slots:t.sfpkxSlots,visibleItemCount:3}})],1)]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.FisShow,expression:"FisShow"}],staticClass:"error"},[t._v(t._s(t.errorMessage))])])],1)},staticRenderFns:[]}},483:function(t,e,a){function s(t){a(1450)}var o=a(4)(a(1373),a(1472),s,"data-v-92b51ee2",null);t.exports=o.exports}});
//# sourceMappingURL=89.5f4684cc9c1bfac55a32.js.map