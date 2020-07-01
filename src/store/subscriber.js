import store from '@/store'
import axios from 'axios'

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload.access_token}`
                localStorage.setItem('token', JSON.stringify(mutation.payload))
            } else {
                console.log(123);
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            break;
    }
})