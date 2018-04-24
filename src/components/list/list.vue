<template>
	<div>
		<h1>文章列表页</h1>
		<div class="art-list">
			<div class="art-item">
				<img src="" class="art-author-head">
				<span class="art-title"></span>
				<span class="last-reply-time"></span>
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
		methods:{
			hide:function(){
				this.$emit("hide")
			},
			getData(){
				this.axios.get('https://cnodejs.org/api/v1/topics').then((response) => {
					console.log(response.data)
					this.list = response.data.data;
				})
			}
		},
		created(){
			this.getData()
		}
	}
</script>