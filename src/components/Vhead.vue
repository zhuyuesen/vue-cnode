<template>
	<div class="head">
		<img src="../assets/menu.png" class="head-menu" @click="show">
		<span class="name">VUE - cnode</span>
	</div>
</template>
<script>
	export default{
		name:"Vhead",
		methods:{
			show:function(){
				console.log(666);
				this.$emit('sm');
			}
		}
	}
</script>
<style>
	.head{
		height: 100px;
		line-height: 100px;
		text-align: center;
		position: relative;
		padding: 0 30px;
		font-size: 18px; /*no*/
	}
	.head-menu{
		width: 40px;
		left: 30px;
		top: 30px;
		position: absolute;
	}
</style>