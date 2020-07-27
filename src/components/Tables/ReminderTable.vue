<template>
	<div>
		<md-table :table-header-color="tableHeaderColor">
		<md-table-row slot="md-table-row">
			<md-table-head>Tên gợi nhớ</md-table-head>
			<md-table-head>Số tài khoản</md-table-head>
			<md-table-head></md-table-head>
		</md-table-row>
		<md-table-row slot="md-table-row" v-for="reminder in reminders" :key="reminder.reminderId">
			<md-table-cell md-label="Họ tên">{{ reminder.cardName }}</md-table-cell>
			<md-table-cell md-label="Số tài khoản">{{ reminder.cardNumber }}</md-table-cell>
			<md-table-cell>
				<md-button class="md-just-icon md-simple md-primary">
					<md-icon>edit</md-icon>
				</md-button>
				<md-button class="md-just-icon md-simple md-danger">
					<md-icon>close</md-icon>
				</md-button>
			</md-table-cell>
		</md-table-row>
		</md-table>
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
	computed: {
        ...mapGetters({
            reminders: 'reminder/reminders'
        })
	},
	methods: {
		...mapActions({
			getReminders: 'reminder/getReminders'
		})
	},
	created() {
		this.getReminders();
	}
};
</script>
