<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/account">
        <md-icon>person</md-icon>
        <p>Danh sách tài khoản</p>
      </sidebar-link>
      <sidebar-link to="/receiver">
        <md-icon>content_paste</md-icon>
        <p>Danh sách người nhận</p>
      </sidebar-link>
      <sidebar-link to="/transaction">
        <md-icon>library_books</md-icon>
        <p>Chuyển khoản</p>
      </sidebar-link>
      <sidebar-link to="/debt-reminder">
        <md-icon>bubble_chart</md-icon>
        <p>Quản lý nhắc nợ</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/views/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data() {
    return {
      sidebarBackground: "blue",
      sidebarBackgroundImage: require("@/assets/img/sidebar-1.jpg")
    };
  }
};
</script>
