import axios from 'axios'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
    }
  },
  // 挂载路由
  router,
  render: h => h(App)
})
axios.all([axios({
  baseURL:'https://api.apiopen.top/musicRankingsDetails?type=1',
  timeout:50000,
  url:'/userdata'
}).then(axios.spread((res=>{
  console.log("res");
}))
)
  
])
// baseURL写接口地址
// url获取接口的内容
// timeout设置超时时间
