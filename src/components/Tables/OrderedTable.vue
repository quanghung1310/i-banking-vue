<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Ngày mở">{{ item.start_date }}</md-table-cell>
        <md-table-cell md-label="Thời hạn">{{ item.expired }}</md-table-cell>
        <md-table-cell md-label="Số tiền">{{ item.money }}</md-table-cell>
        <md-table-cell md-label="Lãi xuất">{{ item.rate }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
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
          id: 1,
          start_date: "01-01-2020",
          expired: "6 tháng",
          money: "$100,000",
          rate: "5%"
        },
        {
          id: 2,
          start_date: "01-01-2020",
          expired: "6 tháng",
          money: "$100,000",
          rate: "5%"
        },
        {
          id: 3,
          start_date: "01-01-2020",
          expired: "6 tháng",
          money: "$100,000",
          rate: "5%"
        },
        {
          id: 4,
          start_date: "01-01-2020",
          expired: "6 tháng",
          money: "$100,000",
          rate: "5%"
        }
      ]
    };
  }
};
</script>
