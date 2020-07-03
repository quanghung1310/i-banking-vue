import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '@/views/Layout/DashboardLayout.vue'
// import store from '@/store'
import Dashboard from '@/views/Dashboard.vue'
import AccountList from '@/views/AccountList.vue'
import ReceiverList from '@/views/ReceiverList.vue'
import Transaction from '@/views/Transaction.vue'
import DebtRemind from '@/views/DebtRemind.vue'
import History from '@/views/History.vue'

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
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "nav-item active"
})

export default router
