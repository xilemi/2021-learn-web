/* import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import test1 from '@/components/test1'
Vue.use(Router)
const router = new VueRouter({
  routes: [
    {
      path:'/',
      name:'test1',
      component:test1
    }
  ]
})
export default router