import Vue from 'vue'
import Router from 'vue-router'
import addblog from '../components/addblog.vue';
import showBlogs from '../components/showBlogs.vue';
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
 const routes=[
     {
       path:'/addblog',
       name:'addblog',
       comments:addblog
     },
     {
       path:'/showBlogs',
       name:'showBlogs',
       comments:showBlogs,
     }
 ]
 const router=new Router({
   routes,
 })
 export default router;
