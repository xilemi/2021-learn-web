// 存放路由的配置
// 导入
import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import about from '../components/about'
// import user from '../components/user'
// 路由懒加载 利用箭头函数 实现需要时才加载所需要组件
const home=()=> import ('../components/home')
const homeNews=()=> import ('../components/homeNews')
const homeMessage=()=> import ('../components/homeMessage')
const about=()=> import ('../components/about')
const user=()=> import  ('../components/user')
const profile=()=> import ('../components/profile')
const userdata=()=> import('../components/userdata')

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
    
    meta:{
      title:'首页'
    },
    children:[
      // 孩子组件的path不要
      // {
      //    path:'',
      //    redirect:'homeNews'
      // },
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
    component:about,
    meta:{
      title:'关于'
    },
    
  },
  {
    path:'/user/:userid',
    component:user,
    meta:{
      title:'用户'
    },
    
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:'档案'
    }
  },
  {
    path:'/userdata',
    component:userdata,
    meta:{
      title:'userdata'
    }
  }
]
const router=  new Router({
  routes,
  // 改变模式将哈希改变为history
  mode:'history',
  linkActiveClass:'test',
})
// 前置守卫
/* router.beforeEach((to,from,next)=>{
  document.title=to.meta.title;
  // 点击下一个
  next()
  console.log(to);
}) */
// 后置钩子 没有next参数
router.afterEach((to,from)=>{
  document.title=to.matched[0].meta.title
})
export default router
