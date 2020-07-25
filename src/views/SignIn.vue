<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="username">
        Username
      </label>

      <input class= "form-control" type="text" name="username" id="username" v-model="form.username">
    </div>

    <div class="form-group">
      <label for="password">
        Password
      </label>

      <input class="form-control" type="password" name="password" id="password" v-model="form.password">
    </div>

    <!-- <div class="form-group">
      <div class="g-recaptcha"
        data-sitekey="6LfD06sZAAAAAC7TAhk4w6zQRK8XGfZA9DJe8Ub6">
      </div>
    </div> -->

    <div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'sign-in',
  components: {
    //
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),

    submit() {
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: 'Dashboard'
        })
      })
        .catch(() => {
          this.$router.replace({
            name: 'sign-in'
          })
      });
    }
  }
}
</script>

<style scoped>

</style>
