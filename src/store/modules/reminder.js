import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        reminders: [],
        account_of_reminder: [],
        account_of_debt: [],
        partner_bank: [
            "ACB",
            "SCB",
            "DongA"
        ],
    },

    getters: {
        allReminders (state) {
            return state.reminders
        },
        partnerBanks (state) {
            return state.partner_bank
        },
        getRemindersTypeSend (state) {
            let arr = [];
            if (state.reminders) {
                state.reminders.forEach(reminder => {
                    if (reminder.typeReminder == 'send') {
                        arr.push(reminder.reminderName + '-' + reminder.cardNumber)
                    }
                });
            }
            return arr;
        },
        getAccountOfReminder (state) {
            return state.account_of_reminder
        },
        getAccountOfDebt (state) {
            return state.account_of_debt
        },
        getRemindersTypeDebt (state) {
            let arr = [];
            if (state.reminders) {
                state.reminders.forEach(reminder => {
                    if (reminder.typeReminder == 'debt') {
                        arr.push(reminder.reminderName + '-' + reminder.cardNumber)
                    }
                });
            }
            return arr;
        },
    },

    mutations: {
        SET_REMINDERS (state, reminders) {
            state.reminders = reminders
        },
        NEW_REMINDER (state, reminder) {
            if (!state.reminders) {
                state.reminders = reminder
            } else {
                state.reminders.push(reminder)
            }
        },
        SET_ACCOUNT_OF_REMINDER (state, account_of_reminder) {
            state.account_of_reminder = account_of_reminder
        },
        SET_ACCOUNT_OF_DEBT (state, account_of_debt) {
            state.account_of_debt = account_of_debt
        },
        UPDATE_REMINDERS () {}
    },

    actions: {
        async getAllReminders({ commit }) {
            let response = await axios.get('get-reminders/0');
            commit('SET_REMINDERS', response.data.data.account)
        },
        async addReminder({ commit }, form ) {
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
            commit('NEW_REMINDER', response.data.data.account[0])
        },
        async getAccountReminderByCardNumber({ commit }, cardNumber) {
            let response = await axios.get('get-reminders/1/' + cardNumber);
            commit('SET_ACCOUNT_OF_REMINDER', response.data.data.account[0])
        },
        async getAccountDebtByCardNumber({ commit }, cardNumber) {
            let response = await axios.get('get-reminders/2/' + cardNumber);
            commit('SET_ACCOUNT_OF_DEBT', response.data.data.account[0])
        },
        async updateReminder({ commit }, form) {
            await axios.post('update-reminder', {
                action: 'UPDATE',
                reminderId: form.reminderId,
                cardNumber: form.cardNumber,
                nameReminisce: form.reminderName
            })

            commit('UPDATE_REMINDERS');
        },
        async removeReminder({ commit }, form) {
            await axios.post('update-reminder', {
                action: 'DELETE',
                reminderId: form.reminderId,
                cardNumber: form.cardNumber,
                nameReminisce: form.reminderName
            })

            commit('UPDATE_REMINDERS');
        }
    }
})
