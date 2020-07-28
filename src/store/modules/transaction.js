import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        transactions: [],
        type_trans: [
            "Nội bộ",
            "Liên Ngân Hàng"
        ],
        partner_bank: [
            "DH Bank",
            "HHL Bank"
        ],
    },

    getters: {
        typeTrans (state) {
            return state.type_trans
        },
        partnerBank (state) {
            return state.partner_bank
        }
    },

    mutations: {
        SET_TRANSACTIONS (state, transactions) {
            state.transactions = transactions
        },
        NEW_TRANSACTION (state, transaction) {
            state.transactions.unshift(transaction)
        }
    },

    actions: {
        async createTransaction({ commit }, form) {
            let response = await axios.post('transaction', {
                form
            });

            commit('NEW_TRANSACTION', response.data.data);
        },
        async sendOTP(transId) {
            await axios.get('send-otp/payment/' + transId);
        }
    }
})
