<template>
	<h1>文章列表页</h1>
</template>
<script>
	export default{
		 created:function(){
			console.log("created 执行了")
			this.hide()
		},
		methods:{
			hide:function(){
				this.$emit("hide")
			}
		}
	}
</script>