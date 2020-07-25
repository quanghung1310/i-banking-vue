import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MaterialDashboard from "./material-dashboard";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Chartist from "chartist";

require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:1111'

Vue.config.productionTip = false
Vue.prototype.$Chartist = Chartist;

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

new Vue({
  router,
  store,
  data: {
    Chartist: Chartist
  },
  render: h => h(App)
}).$mount('#app')

// store.dispatch('auth/attempt', JSON.parse(localStorage.getItem('token'))).then(() => {
  
// })

