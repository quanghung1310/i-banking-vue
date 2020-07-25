<template>
	<div>
		<md-table v-model="users" :table-header-color="tableHeaderColor">
		<md-table-row slot="md-table-row">
			<md-table-head>Họ tên</md-table-head>
			<md-table-head>Số tài khoản</md-table-head>
			<md-table-head>Ngân hàng</md-table-head>
		</md-table-row>
		<md-table-row slot="md-table-row" v-for="reminder in reminders" :key="reminder.id">
			<md-table-cell md-label="Họ tên">{{ reminder.name }}</md-table-cell>
			<md-table-cell md-label="Số tài khoản">{{ reminder.numberCard }}</md-table-cell>
			<md-table-cell md-label="Ngân hàng">{{ reminder.bank }}</md-table-cell>
		</md-table-row>
		</md-table>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: "receiver-table",
	props: {
		tableHeaderColor: {
		type: String,
		default: ""
		}
	},
	
	computed: {
        ...mapGetters({
            reminders: 'reminder/reminders'
        })
    },
};
</script>
