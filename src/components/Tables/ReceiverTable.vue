<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Họ tên">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Số tài khoản">{{ item.account_number }}</md-table-cell>
        <md-table-cell md-label="Ngân hàng">{{ item.bank }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "receiver-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Nguyễn Văn A",
          account_number: "123456789",
          bank: "ACB"
        }
      ]
    };
  }
};
</script>
