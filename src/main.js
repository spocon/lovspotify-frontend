import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Axios from "axios";

Vue.config.productionTip = false

Vue.use(BootstrapVue, IconsPlugin)
Vue.use(Axios)
new Vue({
    render: h => h(App),
}).$mount('#app')
