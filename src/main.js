import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MaterialDashboard from "./material-dashboard";
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

require('@/store/subscriber')

axios.defaults.baseURL = 'http://localhost:26112'

Vue.config.productionTip = false

Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// store.dispatch('auth/attempt', JSON.parse(localStorage.getItem('token'))).then(() => {
  
// })

