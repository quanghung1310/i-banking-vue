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
				<md-button class="md-just-icon md-simple md-danger" @click="remove(debt);showDialog = true">
					<md-icon>close</md-icon>
					<md-tooltip md-direction="top">Xóa</md-tooltip>
				</md-button>
			</md-table-cell>
		</md-table-row>
		</md-table>
		<md-dialog-prompt
		:md-active.sync="showDialog"
		v-model="formDialog.content"
		md-title="Nội dung"
		md-input-maxlength="30"
		md-input-placeholder="Nội dung..."
		md-confirm-text="Xác nhân" 
		md-cancel-text="Đóng"
		@md-confirm="confirmRemove(formDialog)"
		/>
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
	data: () => ({
		showDialog: false,
		formDialog: {
			id: '',
			content: '',
		}
	}),
	computed: {
        ...mapGetters({
			allDebts: 'debt/allDebts',
        })
	},
	methods: {
		...mapActions({
			getAllReminders: 'reminder/getAllReminders',
			getDebts: 'debt/getDebts',
			removeDebt: 'debt/removeDebt',
		}),

		remove(debt) {
			console.log(debt);
			this.formDialog.id = debt.id;
		},

		confirmRemove(form) {
			console.log(form)
			this.removeDebt(form).then(() => {
				this.$router.go()
			}).catch(() => {
				console.log("Faild")
			})
		}
	},
	created() {
		this.getAllReminders();
		this.getDebts();
	}
};
</script>
