<template>
  <form @submit.prevent="submit">
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Người nhận</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Tên gợi nhớ</label>
              <md-input v-model="form.remindName" type="text"></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="form.selectedBank"
              :md-options="banks"
              >
              <label>Ngân hàng</label>
            </md-autocomplete>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Số tài khoản</label>
              <md-input v-model="form.cardNumber" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-autocomplete
              class="search"
              v-model="form.selectedTypes"
              :md-options="types"
              >
              <label>Loại</label>
            </md-autocomplete>
          </div>
          <md-progress-bar md-mode="indeterminate"/>
          <div class="md-layout-item md-size-100 text-right">
            <md-button type="submit" class="md-raised md-success">Thêm</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: "receiver-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      form: {
        remindName: '',
        selectedBank: '',
        cardNumber: '',
        selectedTypes: '',
      },
      types: [
        'Ghi Nợ',
        'Chuyển Tiền'
      ]
    };
  },
  methods: {
    ...mapActions({
      addReminder: 'reminder/addReminder',
    }),
    submit() {
      this.addReminder(this.form).then(() => {
        this.form.remindName = '';
        this.form.selectedBank = '';
        this.form.cardNumber = '';
        this.form.selectedTypes = '';
      });
    }
  },
};
</script>
<style></style>
