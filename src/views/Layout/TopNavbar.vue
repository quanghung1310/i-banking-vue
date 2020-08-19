<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <!-- <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedBank"
              :md-options="banks"
            >
              <label>Tìm kiếm...</label>
            </md-autocomplete>
          </div> -->  
          <md-list>
            <md-list-item href="/">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Dashboard</p>
            </md-list-item>

            <li class="md-list-item">
              <a
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>notifications</md-icon>
                      <span class="notification"> {{ amountNotifications }}</span>
                      <p class="hidden-lg hidden-md">Notifications</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right dropdown-menu-size-50">
                      <li 
                        v-for="notify in allNotifications" 
                        :key="notify.id"
                        @click="seen(notify)"
                      >
                        <a>
                          <p>{{ notify.content }}</p>
                          <p>{{ notify.title }}</p>
                        </a>
                      </li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <li class="md-list-item">
              <a
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down>
                    <md-button
                      slot="title"
                      class="md-button md-just-icon md-simple"
                      data-toggle="dropdown"
                    >
                      <md-icon>person</md-icon>
                    </md-button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li><a href="/change-password">Đổi mật khẩu</a></li>
                      <li><a href="#" @click.prevent="signOut">Đăng xuất</a></li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
		formDialog: {
			debtId: '',
			content: '',
			typeFee: '',
		},
  }),
  computed: {
    ...mapGetters({
        amountNotifications: 'notify/amountNotifications',
        allNotifications: 'notify/allNotifications',
    })
	},
	methods: {
		...mapActions({
      signOutAction: 'auth/signOut',
      getNotifications: 'notify/getNotifications',
      seenNotification: 'notify/seenNotification',
		}),

		signOut() {
			this.signOutAction().then(() => {
				this.$router.replace({
					name: 'login'
				})
			})
    },
    
    seen(notify) {
      console.log(notify)
      this.seenNotification(notify.id)
      .catch(() => {
        console.log('Error')
      })
      .finally(() => {
        this.getNotifications();
      });
    }
  },
  created() {
    this.getNotifications();
  }
};
</script>

<style lang="css"></style>
