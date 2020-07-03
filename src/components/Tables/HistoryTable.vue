<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Họ tên">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Số tài khoản">{{ item.card_number }}</md-table-cell>
        <md-table-cell md-label="Ngày gửi">{{ item.created_at }}</md-table-cell>
        <md-table-cell md-label="Số tiền">{{ item.money }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "history-table",
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
          card_number: "123456789",
          money: "$10,000",
          created_at: "01-01-2020"
        }
      ]
    };
  }
};
</script>
