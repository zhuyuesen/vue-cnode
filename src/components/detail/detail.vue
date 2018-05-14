<template>
  <div class="detail">
    <div class="title">{{data.title}}</div>
    <div class="art-info">
    	<span class="art-author-name">{{data.author.loginname}}</span>
      <span class="view-num">{{data.visit_count}}次浏览</span>
    </div>
    <div class="con" v-html="data.content">

    </div>

    <!-- 评论列表 -->
    <div class="comment-box">
      <div class="cmt-tit">{{data.replies.length}}条评论</div>
      <div class="cmt-con">
        <div class="cmt-item" v-for="item in data.replies">
          <div class="item-head">
            <img v-bind:src="item.author.avatar_url" class="cmt-user-head">
            <span class="cmt-user-name">{{item.author.loginname}}</span>
          </div>
          <div class="item-con" v-html="item.content">
          </div>
        </div>
      </div>
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
      	content:"",
        replies:[
          {

          }
        ],
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
  .title{
    font-size: 22px;/*no*/
    margin-bottom: 20px;
  }

  .art-info{
    color: #666;
    margin-bottom: 20px;
  }
  .con{
    margin-bottom: 40px;
  }
  .con p {
    line-height: 45px;
  }

  /*评论*/
  .comment-box{

  }
  .cmt-tit{
    height: 80px;
    box-sizing: border-box;
    padding: 0 30px;
    background: #eee;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .cmt-con{

  }
  .cmt-item{
    border-bottom: 1px solid #eee;
  }
  .item-head{
    display: flex;
    height: 80px;
    align-items: center;
    /*padding: 0 20px;*/
    box-sizing: border-box;
  }

  .cmt-user-head{
    width: 30px;
    margin-right: 10px;
  }

  .item-con{
    padding:20px 0;
  }

  .item-con img{
    max-width: 100%;
  }
</style>
