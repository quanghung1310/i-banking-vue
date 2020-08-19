import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '@/views/Layout/DashboardLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import AccountList from '@/views/AccountList.vue'
import ReceiverList from '@/views/ReceiverList.vue'
import Transaction from '@/views/Transaction.vue'
import DebtRemind from '@/views/DebtRemind.vue'
import History from '@/views/History.vue'
import Login from '@/views/Login.vue'
import ChangePassword from '@/views/ChangePassword.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "account",
        name: "Danh Sách Tài Khoản",
        component: AccountList
      },
      {
        path: "receiver",
        name: "Danh Sách Người Nhận",
        component: ReceiverList
      },
      {
        path: "transaction",
        name: "Chuyển Khoản",
        component: Transaction
      },
      {
        path: "history",
        name: "Lịch sử giao dịch",
        component: History
      },
      {
        path: "debt-reminder",
        name: "Quản Lý Nhắc Nợ",
        component: DebtRemind
      },
      {
        path: "change-password",
        name: "Đổi mật khẩu",
        component: ChangePassword
      },
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      guest: true
    }
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "forgot-password",
    meta: {
      guest: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "nav-item active"
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user == 'ADMIN'){
                  next()
              }
              else{
                  next({ name: 'dashboard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('token') == null){
          next()
      }
      else{
          next({ name: 'dashboard'})
      }
  }else {
      next()
  }
})

export default router
