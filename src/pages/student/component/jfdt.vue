<!-- 缴费大厅 -->
<template>
	<div class="bdlc-xcjf">
    	<div class="top">
    		<div class="text">
    			<p>应交金额（元）</p>
    			<p>已交金额（元）</p>
    		</div>
    		<div class="money">
    			<p>{{total}}</p>
    			<p>{{yijiaoqian}}</p>
    		</div>
    	</div>
    	<div class="detail">
    		<ul>
    			<li>
    				<span>费用名称</span>
    				<span>应交金额</span>
    				<span>已交金额</span>
    				<span>欠费金额</span>
    			</li>
    			<li v-for="(item,index) in info">
    				<span>{{item.fymc}}</span>
    				<span>{{item.yjfy}}</span>
    				<span>{{item.yjje}}</span>
    				<span>{{item.qfje}}</span>
    			</li>
    		</ul>
    	</div>
    	<div class="prement">
    		<h3>新同学：你好！</h3>
			<!-- <p>
				<span style="display:inline-block;text-indent: 2em">欢迎加入重庆机电职业技术学院！</span>
	    	</p> -->
			<p>
				<span style="display:inline-block;text-indent: 2em">欢迎加入重庆商务职业学院！</span>
	    	</p>
    		<!-- <p>
				<span style="display:inline-block;text-indent: 2em">欢迎加入重庆邮电大学移通学院，当你看到本页面缴费数据后即可进行缴费，学校为你提供以下2种缴费方式：</span>
				</br>
				1. 我院新生实行网上缴费，学生在8月1日后登陆学院官网缴纳费用。</br>
				登陆“重庆邮电大学移通学院”官网---公共服务---学费缴纳</br>
				2. 办理生源地贷款学生需到报到现场核实贷款信息后缴纳剩余费用（不要在网上缴纳），自主网上缴费不成功的同学也可进行现场缴费（费时费力，需排队，不推荐）
	    	</p> -->
    	</div>
<!-- 		<div class="qwjf">
			<router-link to="/jfdtEwm">
				<span>前往缴费</span>
			</router-link>
  		</div> -->
	</div>
</template>

<script>
import {getJfdtData} from '@/pages/student/api/jfdt.js'
export default {
	name: 'bdlc-xcjf',
	data(){
		return {
			info:[
				{fymc:"学费",yjfy:'4000.2',yjje:'500.5',qfje:3500,hjje:0,jffs:"现场"},
				{fymc:"书费",yjfy:500,yjje:200,qfje:100,hjje:0,jffs:"现场"},
				{fymc:"伙食费",yjfy:2000,yjje:'0',qfje:1000,hjje:0,jffs:"现场"},
				{fymc:"补课费",yjfy:'1000',yjje:0,qfje:1000,hjje:0,jffs:"现场"},
				{fymc:"聚餐费",yjfy:250,yjje:299.6,qfje:0,hjje:0,jffs:"现场"},
				{fymc:"住宿费",yjfy:1250,yjje:0,qfje:1250,hjje:0,jffs:"现场"}
				]
		}
	},
	computed:{
		total(){
			return this.computed(this.info,'yjfy')
			// var sum = 0
			// for(var i = 0;i < this.info.length;i++){
			// 	sum += this.info[i].yjfy
			// }
			// if(sum>=1000){
			// 	var str = sum.toString()
			// 	sum = Math.floor(sum/1000) + "," + str.substring(str.length-3)
			// }
			// if(sum.toString().indexOf('.')==-1){
			// 	return sum==0?0:sum+".00"
			// }else{
			// 	return sum==0?0:sum
			// }
		},
		yijiaoqian(){
			return this.computed(this.info,'yjje')
			// var sum = 0
			// for(var i = 0;i < this.info.length;i++){
			// 	sum += this.info[i].yjje
			// }
			// if(sum>=1000){
			// 	var str = sum.toString()
			// 	sum = Math.floor(sum/1000) + "," + str.substring(str.length-3)
			// }
			// if(sum.toString().indexOf('.')==-1){
			// 	return sum==0?0:sum+".00"
			// }else{
			// 	return sum==0?0:sum
			// }
		}
	},
	methods:{
		getData(){
			// getJfdtData().then((res) => {
			// 	console.log(res);
			// 	if(res.code==='40001'){
			// 		console.log(res.message)
			// 		this.info = res.content
			// 	}else{
			// 		console.log('data error')
			// 	}
			// })
		},
		// computed(dataArr,key){//封装一个求和处理函数，例如和为123456789显示为123456,789.00   10000.56显示为10,000.56
		// 	var sum = 0
		// 	for(var i = 0;i < dataArr.length;i++){
		// 		sum += Number(dataArr[i][key])
		// 	}
		// 	if(sum>=1000){
		// 		var str = sum.toString()
		// 		sum = Math.floor(sum/1000) + "," + str.substring(str.length-3)
		// 	}
		// 	if(sum.toString().indexOf('.')==-1){
		// 		return sum==0?0:sum+".00"
		// 	}else{
		// 		return sum==0?0:Number(sum).toFixed(2) //(这里对结果做简单处理，更为精确的做法不应该是这样的)取两位小数是因为计算机在计算浮点数时可能有误差，例如带小数点后两位的数进行计算有时会得出小数点后非常多位的数
		// 	}
		// }
		computed(dataArr,key){//封装一个求和处理函数，例如和为123456789显示为123456,789.00   10000.56显示为10,000.56
			var sum = 0
			for(var i = 0;i < dataArr.length;i++){
				sum += Number(dataArr[i][key])
			}
			if(sum>=1000){
				if(sum.toString().indexOf('.')==-1){
					return sum==0?0:sum+".00"
				}else{
					sum = sum.toFixed(2)
					sum = Math.floor(sum/1000) + "," + sum.substring(sum.length-6)
					return sum==0?0:sum
				}
			}else{
				if(sum.toString().indexOf('.')==-1){
					return sum==0?0:sum+".00"
				}else{
					return sum==0?0:sum.toFixed(2) //(这里对结果做简单处理，更为精确的做法不应该是这样的)取两位小数是因为计算机在计算浮点数时可能有误差，例如带小数点后两位的数进行计算有时会得出小数点后非常多位的数
				}
			}
		}
	},
	created(){
		this.getData()
	}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.bdlc-xcjf
		position:fixed
		bottom:0
		top:0
		width:100%
		background:#f7f7f7
		overflow:auto
		padding-bottom:2rem
		.top
			padding:0 .12rem
			background:#3FB4FF
			text-align:center
			.text
				display:flex
				font-family:PingFang-SC-Bold
				font-size:.16rem
				font-weight:bold
				color:rgba(255,255,255,.7)
				padding:.14rem 0
				p
					width:50%
			.money
				display:flex
				font-family:PingFang-SC-Medium
				font-size:.3rem
				color:#fff
				padding-bottom:.3rem
				p
					width:50%
		.detail
			margin-top:.1rem
			background:#fff
			ul
				li
					font-family:PingFang-SC-Medium
					color:#333
					font-size:.13rem
					height:.44rem
					text-align:center
					display:flex
					align-items:center
					border-bottom:.01rem solid #F5F5F5
					span
						width:25%
				li:first-child
					font-size:.14rem
					font-family:PingFang-SC-Bold
					span
						font-weight:bold
				li:last-child
					border:0
		.prement
			padding:0 .12rem
			h3
				color:#333
				font-family:PingFang-SC-Bold
				font-weight:bold
				font-size:.16rem
				margin:.3rem 0 .07rem
			p
				font-family:PingFang-SC-Medium
				font-size:.13rem
				line-height:.24rem
		.qwjf
			width:calc(100% - 2 * .57rem)
			background:#3DA8F5
			height:.46rem
			border-radius:.23rem
			margin:0 auto
			text-align:center
			font-size:.17rem
			margin-top:.2rem
			span
				color:#fff
				line-height:.45rem
</style>