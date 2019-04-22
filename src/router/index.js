import Vue from 'vue'
import Router from 'vue-router'

 import HelloVue from '@/components/HelloVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'HelloVue',
      component: HelloVue
    }
  ]
})
