<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Họ tên">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Số tài khoản">{{ item.account_number }}</md-table-cell>
        <md-table-cell md-label="Ngày hết hạn">{{ item.expired }}</md-table-cell>
        <md-table-cell md-label="Số dư">{{ item.salary }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
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
          salary: "$36,738",
          account_number: "123456789",
          expired: "01-01-2020"
        }
      ]
    };
  }
};
</script>
