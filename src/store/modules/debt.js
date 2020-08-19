import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        debts: [],
        reminded_debts: [],
    },

    getters: {
        allDebts (state) {
            return state.debts
        },
        allRemindedDebts (state) {
            return state.reminded_debts
        }
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
        UPDATE_DEBT (){},
        SET_REMINDED_DEBTS (state, debts) {
            state.reminded_debts = debts
        }
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
        },
        async removeDebt({ commit }, form) {
            await axios.post('delete-debt', {
                debtId: form.id,
                content: form.content
            })
            commit('UPDATE_DEBT');
        },
        async getRemindedDebts({ commit }) {
            let response = await axios.get('get-debts/1/2');
            commit('SET_REMINDED_DEBTS', response.data.data.debts)
        },
        async payDebt({ commit }, form) {
            console.log(form);
            var type
            if (form.typeFee == 'Người gửi') {
                type = 1
            } else {
                type = 2
            }
            console.log(type)
            let response = await axios.post('pay-debt', {
                debtId: form.debtId,
                typeFee: type,
                content: form.content,
            })

            commit('UPDATE_DEBT');
            return response.data.data.transId;
        }
    }
})
