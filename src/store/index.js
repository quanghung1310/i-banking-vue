import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import account from './modules/account'

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
    account
  }
})
