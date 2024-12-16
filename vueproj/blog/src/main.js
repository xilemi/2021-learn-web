// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.directive('rainbow',{
  bind(el,binging,vnode){
    el.style.color='#'+Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('theme',{
  bind(el,binging,vnode){
    if(binging.value=='wide'){
      el.style.maxWidth="1226px";
    }
    else if(binging.value=='narrow'){
      el.style.maxWidth="560px";
    }
    if(binging.arg=='column'){
      el.style.background="#ef6700"
      el.style.padding="20px"
    }
  }
})

Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
