<template>
	<div>
		<h1>文章列表页</h1>
		<div class="art-list">
			<div class="art-item" v-for="item in list" @click="test(item)">
				<img v-bind:src="item.author.avatar_url" class="art-author-head">
				<span class="art-title">{{item.title}}</span>
				<span class="last-reply-time">{{item.last_reply_at | filterTime}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		 created:function(){
			console.log("created 执行了")
			this.hide()
		},
		computed:{
			// filterTimer:function(time){
			// 	var date = new Date(time);
			// 	const year = date.getFullYear()
			//   const month = date.getMonth() + 1
			//   const day = date.getDate()
			//   const hour = date.getHours()
			//   const minute = date.getMinutes()
			//   const second = date.getSeconds()

			//   return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
			// },
			// formatTime:function(date){
			//   const year = date.getFullYear()
			//   const month = date.getMonth() + 1
			//   const day = date.getDate()
			//   const hour = date.getHours()
			//   const minute = date.getMinutes()
			//   const second = date.getSeconds()

			//   return [year, month, day].map(this.formatNumber).join('/') + ' ' + [hour, minute, second].map(this.formatNumber).join(':')
			// },

			// formatNumber:function(n){
			//   n = n.toString()
			//   return n[1] ? n : '0' + n
			// },
		},
		methods:{
			hide:function(){
				this.$emit("hide");
				this.getData()
			},
			getData(){
				this.axios.get('https://cnodejs.org/api/v1/topics').then((response) => {
					console.log(response.data)
					this.list = response.data.data;
				})
			},
			formatNumber:function(n){
			  n = n.toString()
			  return n[1] ? n : '0' + n
			},
			test:function(e){
				// console.log(e);
				// console.log(this.$router);
				 // this.$router.go('/detail');
				 let id = e.id
				 this.$router.push({name:'detail',params:{id:id}})
			},
		},
		filters:{
			filterTime:function(time){
				var date = new Date(time);
				const year = date.getFullYear()
				console.log("year-->",year);
				const month = date.getMonth() + 1
				const day = date.getDate()
				const hour = date.getHours()
				const minute = date.getMinutes()
				const second = date.getSeconds()

				function formatNumber(n){
				  n = n.toString()
				  return n[1] ? n : '0' + n
				}

			  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
			},
		}
	}
</script>
<style type="text/css">
	.art-item{
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
	}

	.art-author-head{
		width: 40px;
	}
	.art-title{
		width: 400px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>