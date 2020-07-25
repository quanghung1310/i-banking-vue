import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        reminders: [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                numberCard: 123456,
                bank: "ACB"
            },
            {
                id: 2,
                name: 'Nguyễn Văn B',
                numberCard: 123456,
                bank: "ACB"
            },
            {
                id: 3,
                name: 'Nguyễn Văn C',
                numberCard: 123456,
                bank: "ACB"
            },
            {
                id: 4,
                name: 'Nguyễn Văn D',
                numberCard: 123456,
                bank: "ACB"
            },
        ],
    },

    getters: {
        reminders (state) {
            return state.reminders
        }
    },

    mutations: {
        setReminders (state, reminders) {
            state.reminders = reminders
        }
    },

    actions: {
        async getReminders({ commit }) {
            let response = await axios.get('reminders');
            commit('setAccountPayment', response.data)
        },
    }
})
