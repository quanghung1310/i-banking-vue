<template>
	<div>
		<md-table :table-header-color="tableHeaderColor">
		<md-table-row slot="md-table-row">
			<md-table-head>Tên tài khoản</md-table-head>
			<md-table-head>Số tiền</md-table-head>
			<md-table-head>Nội dung</md-table-head>
			<md-table-head></md-table-head>
		</md-table-row>
		<md-table-row slot="md-table-row" v-for="debt in allRemindedDebts" :key="debt.reminderId">
			<md-table-cell>{{ debt.partnerName }}</md-table-cell>
			<md-table-cell>{{ debt.amount }}</md-table-cell>
			<md-table-cell>{{ debt.content }}</md-table-cell>
			<md-table-cell>
				<md-button class="md-just-icon md-simple md-danger" @click="pay(debt); showDialog = true">
					<md-icon>payment</md-icon>
					<md-tooltip md-direction="top">Trả nợ</md-tooltip>
				</md-button>
			</md-table-cell>
		</md-table-row>
		</md-table>
		<md-dialog :md-active.sync="showDialog">
			<md-dialog-title>Thanh toán</md-dialog-title>
				<md-content class="md-elevation-3">
					<md-field>
					<md-select v-model="formDialog.typeFee" placeholder="Loại phí">
						<md-option value="Người nhận">Người nhận</md-option>
						<md-option value="Người gửi">Người gửi</md-option>
					</md-select>
					</md-field>

					<md-field>
						<label>Nội dung</label>
						<md-input v-model="formDialog.content"></md-input>
					</md-field>
				</md-content>
			<md-dialog-actions>
				<md-button class="md-info" @click="showDialog = false">Đóng</md-button>
				<md-button class="md-info" @click="confirmPayDebt(formDialog); showDialog = false">Xác nhận</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "remind-debt-table",
	props: {
		tableHeaderColor: {
		type: String,
		default: ""
		}
	},
	data: () => ({
		showDialog: false,
		formDialog: {
			debtId: '',
			content: '',
			typeFee: '',
		},
	}),
	computed: {
        ...mapGetters({
            allRemindedDebts: 'debt/allRemindedDebts'
        })
	},
	methods: {
		...mapActions({
			getRemindedDebts: 'debt/getRemindedDebts',
			payDebt: 'debt/payDebt',
			notification: "addNotification",
		}),
		pay(debt) {
			console.log(debt)
			this.formDialog.debtId = debt.id;
		},
		confirmPayDebt(form) {
			console.log(form)
			this.payDebt(form).then(() => {
				this.notification({
					type: "success",
					message: "Chuyển khoản thành công",
				});
			}).catch(() => {
				this.notification({
					type: "danger",
					message: "Thất bại",
				});
			})
		}
	},
	created() {
		this.getRemindedDebts();
	}
};
</script>
