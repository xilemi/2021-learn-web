import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import index from '../components/index.vue'
import test from '../components/test.vue'
Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const routes=[
    {
        path:'/index',
        name:'index',
        component:index,
    },
   {
       path:'/test',
       name:'test',
       component:test,
   }

]
const router=new VueRouter({
    routes,
})
export default router;