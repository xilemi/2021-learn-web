import Vue from 'vue'
import Router from 'vue-router'
const search =()=>import ('../components/search')
const businessCard =()=>import ('../components/businessCard')
const jobOffers =()=>import ('../components/jobOffers')
const QA =()=> import ('../components/QA')
const offerDetails=()=> import ('../components/offerDetails')

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
const routes=[
  {
    path:'/',
    redirect:'/search'
  },
  {
    path:'/search',
    component:search,
    children:[
      {
        path:'businessCard',
        component:businessCard
      },
      {
        path:'jobOffers',
        component:jobOffers
      },
      {
        path:'QA',
        component:QA,
      },
      {
        path:'/offerDetails',
        component:offerDetails,
      },
    ]
  },
]
export default new Router({
  routes,
  mode:'history'
})