import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import account from './modules/account'
import reminder from './modules/reminder'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },

  mutations: {
  },

  actions: {
  },
  
  modules: {
    auth,
    account,
    reminder
  }
})
