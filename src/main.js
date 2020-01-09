import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Client } from 'colyseus.js'

Vue.prototype.$client = new Client("ws://localhost:2567")
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
