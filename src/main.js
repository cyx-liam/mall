import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 安装fastclick解决移动端300ms点击延迟
import fastclick from 'fastclick';
fastclick.attach(document.body)

//安装vue-lazyload实现图片懒加载,图片src属性改为v-lazy
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload,{
  loading:require("./assets/img/common/cyx_img.png")
})

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
