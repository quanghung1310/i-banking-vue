import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        account_payment: {
            id: 1,
            name: 'Nguyễn Văn A',
            numberCard: 0,
            balance: 0,
            closeDate: '2020-05-19'
        },
        account_saving: [
            {
                id: 1,
                openDate: '2020-01-01',
                closeDate: '2021-01-01',
                balance: 0,
                rate: 5,
            },
            {
                id: 2,
                openDate: '2020-01-01',
                closeDate: '2021-01-01',
                balance: 0,
                rate: 5,
            },
            {
                id: 3,
                openDate: '2020-01-01',
                closeDate: '2021-01-01',
                balance: 0,
                rate: 5,
            },
            {
                id: 4,
                openDate: '2020-01-01',
                closeDate: '2021-01-01',
                balance: 0,
                rate: 5,
            },
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
            let response = await axios.get('/payment');
            commit('setAccountPayment', response.data)
        },
        async getAccountSaving({ commit }) {
            let response = await axios.get('/saving');
            commit('setAccountSaving', response.data)
        },
    }
})
