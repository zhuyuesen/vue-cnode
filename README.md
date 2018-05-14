# vue-cnode-zys

> A Vue.js project

使用  $router.push 跳转组件时，刷新页面报错了，因为在页面取不到传过来的参数了，怎么解决？？


方法一：
	你在用 vue-router 跳转的时候可以把参数写进 query 里this.$router.push({name:'articleDetail, query:{articleId: articleId}});

	这样你的 url 就会像 http://xxx.xxx.xxx/articleDetail?articleId=123，这样无论你怎么刷新 articleId 都不会丢失

	然后在你的 init 方法里 可以用 this.articleId = this.$route.query.articleId; 来获取id

方法二：
	如果要用 params 传参的话，可能需要在你的路由路径里也加上这个参数，比如你用

	this.$router.push({name:'articleDetail, params:{articleId: articleId}});跳转，那么在路由里就要这样写

	routes: [
	    {
	      path: '/articleDetail/:articleId',
	      name: 'articleDetail'
	    }
	  ]
	path: '/articleDetail/:articleId',里的 :articleId 是必须要有的


	具体的可以参考 Vue-router 命名路由