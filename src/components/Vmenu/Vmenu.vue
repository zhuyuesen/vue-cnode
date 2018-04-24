<template>
	<div class="Vmenu">
		<div class="link-box">
			<router-link to="/" class="menu-link" @click.native="hide">首页</router-link>
			<router-link to="/about" class="menu-link" @click.native="hide">关于</router-link>
			<router-link to="/login" class="menu-link" @click.native="hide">登录</router-link>
		</div>
	</div>
</template>
<style>
	.Vmenu{
		position: fixed;
		left: 0;
		width: 375px;
		height: 100%;
		top: 0;
		background: #fff;
		z-index: 4;
		box-sizing: border-box;
		padding-top: 50px;
	}
	.menu-link{
		display: inline-block;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;/*no*/
		color: #2196f3;
		border-bottom: 1px solid #f0f0f0;/*no*/
	}
</style>
<script>
	export default{
		name:'Vmenu',
		methods:{
			hide:function(){
				console.log("Vhead 的 hide 方法")
				this.$emit("hide")
			}
		}
	}
</script>