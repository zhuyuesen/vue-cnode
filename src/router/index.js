import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import list from '@/components/list/list'
import about from '@/components/about'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    }, 
    {
      path: '/about',
      name: 'list',
      component: about
    }, 
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
