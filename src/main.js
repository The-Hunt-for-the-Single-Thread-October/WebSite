import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from "bootstrap-vue";
import io from 'socket.io-client';

Vue.prototype.$io = io('51.91.8.97:4002');

Vue.use(BootstrapVue)
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),
    methods:{
        makeToast(errorMsg) {
            this.$root.$bvToast.toast(errorMsg, {
                title: "⚠ Erreur !",
                variant: "danger",
                noCloseButton: true
            })
        }
    }
}).$mount('#app')
