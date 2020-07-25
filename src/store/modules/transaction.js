// import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        type_trans: [
            "Nội bộ",
            "Liên Ngân Hàng"
        ],
        partner_bank: [
            "ACB",
            "SCB",
            "DongA"
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
        
    },

    actions: {
        
    }
})
