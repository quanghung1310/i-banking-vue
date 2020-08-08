<template>
	<div>
		<md-table :table-header-color="tableHeaderColor">
		<md-table-row slot="md-table-row">
			<md-table-head>Tên gợi nhớ</md-table-head>
			<md-table-head>Số tài khoản</md-table-head>
			<md-table-head>Loại</md-table-head>
			<md-table-head></md-table-head>
		</md-table-row>
		<md-table-row slot="md-table-row" v-for="reminder in reminders" :key="reminder.reminderId">
			<md-table-cell md-label="Họ tên">{{ reminder.reminderName }}</md-table-cell>
			<md-table-cell md-label="Số tài khoản">{{ reminder.cardNumber }}</md-table-cell>
			<md-table-cell v-if="reminder.typeReminder == 'send'">Chuyển Tiền</md-table-cell>
			<md-table-cell v-else>Con nợ</md-table-cell>
			<md-table-cell>
				<md-button class="md-just-icon md-simple md-primary" @click="edit(reminder); showDialog = true">
					<md-icon>edit</md-icon>
				</md-button>
				<md-button class="md-just-icon md-simple md-danger" @click="remove(reminder)">
					<md-icon>close</md-icon>
				</md-button>
			</md-table-cell>
		</md-table-row>
		</md-table>
		<md-dialog :md-active.sync="showDialog">
			<md-dialog-title>Cập nhật</md-dialog-title>
				<md-content class="md-elevation-3">
					<md-field>
						<label>Tên gợi nhớ</label>
						<md-input v-model="formDialog.reminderName"></md-input>
					</md-field>

					<md-field>
						<label>Số tài khoản</label>
						<md-input v-model="formDialog.cardNumber"></md-input>
					</md-field>
				</md-content>
			<md-dialog-actions>
				<md-button class="md-info" @click="showDialog = false">Đóng</md-button>
				<md-button class="md-info" @click="update(formDialog); showDialog = false">Cập nhật</md-button>
			</md-dialog-actions>
		</md-dialog>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name: "receiver-table",
	props: {
		tableHeaderColor: {
		type: String,
		default: ""
		}
	},
	data: () => ({
		showDialog: false,
		formDialog: {
			reminderId: '',
			reminderName: '',
			cardNumber: ''
		}
	}),
	computed: {
        ...mapGetters({
            reminders: 'reminder/allReminders'
        })
	},
	methods: {
		...mapActions({
			getAllReminders: 'reminder/getAllReminders',
			updateReminder: 'reminder/updateReminder',
			removeReminder: 'reminder/removeReminder',
		}),
		edit(value) {
			this.formDialog.reminderName = value.reminderName;
			this.formDialog.cardNumber = value.cardNumber;
			this.formDialog.reminderId = value.reminderId;
		},
		update(form) {
			this.updateReminder(form).then(() => {
				this.$router.go()
			}).catch(() => {
				console.log("Faild")
			})
		},
		remove(reminder) {
			var form = {
				reminderName: reminder.reminderName,
				cardNumber: reminder.cardNumber,
				reminderId: reminder.reminderId,
			};

			this.removeReminder(form).then(() => {
				this.$router.go()
			}).catch(() => {
				console.log("Faild")
			})
		}
	},
	created() {
		this.getAllReminders();
	}
};
</script>
