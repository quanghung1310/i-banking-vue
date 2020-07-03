import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '@/views/Layout/DashboardLayout.vue'
// import store from '@/store'
import Dashboard from '@/views/Dashboard.vue'

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
