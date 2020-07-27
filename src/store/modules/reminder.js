import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        reminders: [

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
            let response = await axios.get('get-reminders/2');
            commit('setReminders', response.data.data.account)
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
            commit('newReminder', response.data.data.account[0])
        },
    }
})
