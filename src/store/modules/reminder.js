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
        partner_bank: [
            "ACB",
            "SCB",
            "DongA"
        ],
    },

    getters: {
        reminders (state) {
            return state.reminders
        },
        partnerBanks (state) {
            return state.partner_bank
        }
    },

    mutations: {
        setReminders (state, reminders) {
            state.reminders = reminders
        },
        newReminder (state, reminder) {
            state.reminders.unshift(reminder)
        }
    },

    actions: {
        async getReminders({ commit }) {
            let response = await axios.get('reminders');
            commit('setReminders', response.data)
        },
        async addReminder({ commit }, form ) {
            console.log(form);
            let type;
            if (form.selectedTypes == 'Chuyển Tiền') {
                type = 1;
            } else {
                type = 2
            }
            let response = await axios.post('create-reminder', {
                nameReminisce: form.remindName,
                cardNumber: form.cardNumber,
                type: type,
                merchantId: 2
            });
            commit('newReminder', response.data)
        },
    }
})
