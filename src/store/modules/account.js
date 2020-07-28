import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        account_payment: {

        },
        account_saving: [
            
        ],
    },

    getters: {
        accountPayment (state) {
            return state.account_payment
        },

        accountSaving (state) {
            return state.account_saving
        }
    },

    mutations: {
        SET_ACCOUNT_PAYMENT (state, account_payment) {
            state.account_payment = account_payment
        },

        SET_ACCOUNT_SAVING (state, account_saving) {
            state.account_saving = account_saving
        },
    },

    actions: {
        async getAccountPayment({ commit }) {
            let response = await axios.get('get-accounts/payment');
            commit('SET_ACCOUNT_PAYMENT', response.data.data.accounts[0])
        },
        async getAccountSaving({ commit }) {
            let response = await axios.get('get-accounts/saving');
            commit('SET_ACCOUNT_SAVING', response.data.data.accounts)
        },
    }
})
