// 存放路由的配置
// 导入
import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import about from '../components/about'
// import user from '../components/user'
const home=()=> import ('../components/home')
const homeNews=()=> import ('../components/homeNews')
const homeMessage=()=> import ('../components/homeMessage')
const about=()=> import ('../components/about')
const user=()=> import  ('../components/user')
const profile=()=> import ('../components/profile')

// 使用
Vue.use(Router)
// 创建对象
const routes=[
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    component:home,
    children:[
      // 孩子组件的path不要
      {
         path:'',
         redirect:'homeNews'
      },
      {
        path:'homeNews',
        component:homeNews
      },
      {
        path:'homeMessage',
        component:homeMessage,
      }
    ]
  },
  {
    path:'/about',
    component:about
  },
  {
    path:'/user/:userid',
    component:user
  },
  {
    path:'/profile',
    component:profile
  }
]
export default new Router({
  routes,
  // 改变模式将哈希改变为history
  mode:'history',
  linkActiveClass:'test'
})