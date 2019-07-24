import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import store from './store/index'
import router from './router'
import Utils from './helper/Utils'
import Sesstions from './helper/Sesstions'
import Filters from './helper/Filters'

Vue.config.productionTip = false
Vue.prototype.Utils = Utils
Vue.prototype.Sesstions = Sesstions

//过滤器
Object.keys(Filters).forEach(key => {
  Vue.filter(key, Filters[key])
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
