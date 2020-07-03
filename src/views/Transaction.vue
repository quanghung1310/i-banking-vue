<template>
  <div class="content">
  <form>
    <md-card>
      <md-card-header data-background-color="blue">
        <h4 class="title">Chuyển khoản</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedType"
              :md-options="types"
            >
              <label>Loại chuyển khoản</label>
            </md-autocomplete>
          </div>
          <template v-if="selectedType == 'Liên ngân hàng'">
            <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedBank"
              :md-options="banks"
            >
              <label>Ngân hàng</label>
            </md-autocomplete>
          </div>
          </template>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Tên tài khoản</label>
              <md-input v-model="disabled" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Số tài khoản</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Số tiền</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Ghi chú</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Xác nhận</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
  </div>
</template>
<script>
export default {
  name: "transaction-form",
  data() {
    return {
      username: null,
      disabled: null,
      emailadress: null,
      lastname: null,
      firstname: null,
      address: null,
      city: null,
      country: null,
      code: null,
      aboutme: "",
      selectedBank: null,
      banks: [
        "ACB",
        "VCB",
        "DongA"
      ],
      selectedType: null,
      types: [
        "Nội bộ",
        "Liên ngân hàng"
      ]
    };
  }
};
</script>
<style></style>
