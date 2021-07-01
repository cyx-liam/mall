import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 安装toast插件
import toast from './components/common/toast/index';
Vue.use(toast)

Vue.config.productionTip = false
Vue.prototype.$but= new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
