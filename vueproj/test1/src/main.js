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
