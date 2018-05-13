<template>
  <div class="detail">
    <div class="title">{{data.title}}</div>
    <div class="art-info">
    	<span class="art-author-name">{{data.author.loginname}}</span>
    </div>
    <div class="con" v-html="data.content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      id:"",
      data:{
      	author:{
      		loginname:""
      	},
      	content:""
      },
    }
  },
  created:function(){
  	console.log("created 执行了")
  	console.log("this.$route.params",this.$route.params)
  	let id = this.$route.params.id;
  	this.id = id;
  	this.getDetailInfo()
  },
  methods:{
  	getDetailInfo:function(){
  		console.log(this.$data.id)
  		this.axios.get('https://cnodejs.org/api/v1/topic/'+this.$data.id).then((response) => {
			console.log(response.data)
			this.data = response.data.data;
		})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.detail{
		padding: 20px;
		box-sizing: border-box;
	}
	.con img{
		max-width: 100%;
	}
</style>
