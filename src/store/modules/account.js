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
        setAccountPayment (state, account_payment) {
            state.account_payment = account_payment
        },

        setAccountSaving (state, account_saving) {
            state.account_saving = account_saving
        },
    },

    actions: {
        async getAccountPayment({ commit }) {
            let response = await axios.get('get-accounts/payment');
            commit('setAccountPayment', response.data.data.accounts[0])
        },
        async getAccountSaving({ commit }) {
            let response = await axios.get('get-accounts/saving');
            commit('setAccountSaving', response.data.data.accounts)
        },
    }
})
