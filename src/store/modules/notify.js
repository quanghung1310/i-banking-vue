import axios from 'axios'

export default ({
    namespaced: true,

    state: {
        notifications: [],
    },

    getters: {
        allNotifications (state) {
            return state.notifications
        },
        amountNotifications (state) {
            return Object.keys(state.notifications).length
        }
    },

    mutations: {
        SET_NOTIFICATIONS (state, notifications) {
            state.notifications = notifications
        },
        UPDATE_NOTIFICATION() {},
    },

    actions: {
        async getNotifications({ commit }) {  
            let response = await axios.get('notification');
            let listNotifiesNotSeen = [];
            if (response.data.data.notifies) {
                response.data.data.notifies.forEach(notify => {
                    if (notify.seen === false) {
                        listNotifiesNotSeen.push(notify)
                    }
                });
            }
            commit('SET_NOTIFICATIONS', listNotifiesNotSeen)
        },

        async seenNotification({ commit }, id) {
            await axios.post('seen-notification', {
                notifyId: id
            });

            commit('UPDATE_NOTIFICATION')
        }
    }
})
