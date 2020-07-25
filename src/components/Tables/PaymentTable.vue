<template>
  <div>
    <md-table :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row">
            <md-table-head>Họ tên</md-table-head>
            <md-table-head>Số tài khoản</md-table-head>
            <md-table-head>Ngày hết hạn</md-table-head>
            <md-table-head>Số dư</md-table-head>
        </md-table-row>
        <md-table-row slot="md-table-row">
            <md-table-cell md-label="Họ tên">{{ accountPayment.name }}</md-table-cell>
            <md-table-cell md-label="Số tài khoản">{{ accountPayment.numberCard }}</md-table-cell>
            <md-table-cell md-label="Ngày hết hạn">{{ accountPayment.closeDate }}</md-table-cell>
            <md-table-cell md-label="Số dư">${{ accountPayment.balance }}</md-table-cell>
        </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "payment-table",
    props: {
        tableHeaderColor: {
            type: String,
            default: ""
        }
    },
    computed: {
        ...mapGetters({
            accountPayment: 'account/accountPayment'
        })
    },
};
</script>
