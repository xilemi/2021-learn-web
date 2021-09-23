import Vue from 'vue'
import Router from 'vue-router'
import addblog from '../components/addblog.vue';
import showBlogs from '../components/showBlogs.vue';
import detailblog from '../components/detailblog.vue'
import eaditblog from '../components/editblog.vue'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
 const routes=[
     {
       path:'/addblog',
       name:'addblog',
       component:addblog
     },
     {
       path:'/',
       name:'showBlogs',
       component:showBlogs,
     },
     {
       path:'/detailblog',
       name:'detailblog',
       component:detailblog
     },
     {
       path:'/editblog',
       name:'editblog',
       component:eaditblog
     }

 ]
 const router=new Router({
   routes,
   mode:'history'
 })
 export default router;
