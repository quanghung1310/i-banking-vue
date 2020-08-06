import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        debts: [],
    },

    getters: {
        allDebts (state) {
            return state.debts
        },
    },

    mutations: {
        SET_DEBTS (state, debts) {
            state.debts = debts
        },
        NEW_DEBT (state, debt) {
            if (!state.debts) {
                state.debts = debt
            } else {
                state.debts.push(debt)
            }
        },
    },

    actions: {
        async addDebt({ commit }, form ) {  
            let response = await axios.post('create-debtor', {
                cardNumber: form.cardNumber,
                amount: form.amount,
                content: form.content
            });
            commit('NEW_DEBT', response.data.data.debts[0])
        },
        async getDebts({ commit }) {
            let response = await axios.get('get-debts/1/1');
            commit('SET_DEBTS', response.data.data.debts)
        }
    }
})
