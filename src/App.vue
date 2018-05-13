<template>
  <div id="app">
    <div class="page-shade" v-if="showMenu" @click="hideMenufn"></div>
    <!-- 头部 -->
    <Vhead @sm="showMenufn"></Vhead>
    <!-- 左侧菜单 -->
  	<Vmenu v-if="showMenu" @hide="hide"></Vmenu>	

    <router-view @hide="hideMenufn" />
  </div>
</template>

<script>
import Vhead from './components/Vhead'
import Vmenu from './components/Vmenu/Vmenu.vue'
export default {
  name: 'App',
  components:{
  	Vmenu,Vhead
  },
  data(){
    return{
      showMenu:false
    }
  },
  methods:{
    showMenufn:function(){
      console.log("执行了")
      this.showMenu = true;
    },
    hideMenufn:function(){
      this.showMenu = false;
    },
    hide:function(){
      this.showMenu = false;
    },
  },
  created:function(){
    console.log("created 执行了")
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.page-shade{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0,0,0,0.6);
}
</style>
