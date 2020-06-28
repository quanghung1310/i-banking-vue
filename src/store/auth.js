import axios from 'axios'

export default ({
  namespaced: true,

  state: {
      token: null,
      user: null,
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USER (state, user) {
      state.user = user
    }
  },

  actions: {
    async signIn({ dispatch }, auth) {
      let response = await axios.post('oauth/token', {
          username: auth.username,
          password: auth.password,
          grant_type: 'password',
          client_id: '5',
          client_secret: 'NYvbmSO5hw1MpaSghj84THgrzHHplTWwyYKW8u0V',
          provider: 'admins'
        });

      dispatch('attempt', response.data)
    },

    async attempt ({ commit }, token) {
      commit('SET_TOKEN', token)

      try {
        let response = await axios.get('api/admin/v1/me/profile', {
          headers: {
            'Authorization': 'Bearer ' + token.access_token
          }
        })

        commit('SET_USER', response.data)
      } catch (e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    }
  }
})
