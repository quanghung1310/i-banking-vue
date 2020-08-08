<template>
	<div>
		<md-table :table-header-color="tableHeaderColor">
		<md-table-row slot="md-table-row">
			<md-table-head>Tên tài khoản</md-table-head>
			<md-table-head>Số tiền</md-table-head>
			<md-table-head>Nội dung</md-table-head>
			<md-table-head></md-table-head>
		</md-table-row>
		<md-table-row slot="md-table-row" v-for="debt in allDebts" :key="debt.reminderId">
			<md-table-cell>{{ debt.partnerName }}</md-table-cell>
			<md-table-cell>{{ debt.amount }}</md-table-cell>
			<md-table-cell>{{ debt.content }}</md-table-cell>
			<md-table-cell>
				<md-button class="md-just-icon md-simple md-info">
					<md-icon>notifications</md-icon>
					<md-tooltip md-direction="top">Nhắc nợ</md-tooltip>
				</md-button>
				<md-button class="md-just-icon md-simple md-danger">
					<md-icon>close</md-icon>
					<md-tooltip md-direction="top">Xóa</md-tooltip>
				</md-button>
			</md-table-cell>
		</md-table-row>
		</md-table>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "debt-table",
	props: {
		tableHeaderColor: {
		type: String,
		default: ""
		}
	},
	computed: {
        ...mapGetters({
            allDebts: 'debt/allDebts'
        })
	},
	methods: {
		...mapActions({
			getAllReminders: 'reminder/getAllReminders',
			getDebts: 'debt/getDebts',
		}),
	},
	created() {
		this.getAllReminders();
		this.getDebts();
	}
};
</script>
