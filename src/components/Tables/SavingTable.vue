<template>
  <div>
    <md-table :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row">
            <md-table-head>ID</md-table-head>
            <md-table-head>Ngày mở</md-table-head>
            <md-table-head>Thời hạn</md-table-head>
            <md-table-head>Số tiền</md-table-head>
            <md-table-head>Lãi xuất</md-table-head>
        </md-table-row>
        <md-table-row slot="md-table-row" v-for="account in accountSavings" :key="account.id">
            <md-table-cell>{{ account.id }}</md-table-cell>
            <md-table-cell>{{ account.openDate }}</md-table-cell>
            <md-table-cell>{{ account.closeDate }}</md-table-cell>
            <md-table-cell>${{ account.balance }}</md-table-cell>
            <md-table-cell>{{ account.rate }}%</md-table-cell>
        </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "saving-table",
    props: {
        tableHeaderColor: {
            type: String,
            default: ""
        }
    },
    computed: {
        ...mapGetters({
            accountSavings: 'account/accountSaving'
        })
    },
};
</script>
