import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Client } from 'colyseus.js'
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.prototype.$client = new Client("ws://localhost:2567")

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
