<template>
  <div id="app">
    <div class="page-shade"></div>
    <Vhead></Vhead>
  	<Vmenu></Vmenu>	
    <router-view/>
    <VVmenu></VVmenu>

  </div>
</template>

<script>
import Vhead from './components/Vhead'
import Vmenu from './components/Vmenu/Vmenu.vue'
import VVmenu from './components/VVmenu'
export default {
  name: 'App',
  components:{
  	Vmenu,VVmenu,Vhead
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
