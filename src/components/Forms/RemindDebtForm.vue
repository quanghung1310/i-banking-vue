<template>
    <form @submit.prevent="submit">
        <md-card>
            <md-card-header data-background-color="blue">
                <h4 class="title">Tạo nhắc nợ</h4>
            </md-card-header>
            <md-card-content>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-100 md-autocomplete">
                        <md-autocomplete
                        class="search"
                        v-model="selectedReminder"
                        :md-options="getRemindersTypeDebt"
                        @md-selected="getAccount"
                        >
                        <label>Tài khoản gợi nhớ</label>
                        </md-autocomplete>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Tên tài khoản</label>
                        <md-input v-model="form.cardName" required disabled></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Số tài khoản</label>
                        <md-input v-model="form.cardNumber" required type="text" @change="getCardName"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-small-size-100 md-size-50">
                        <md-field>
                        <label>Số tiền</label>
                        <md-input v-model="form.amount" required type="number"></md-input>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100">
                        <md-field maxlength="5">
                        <label>Nội dung</label>
                        <md-textarea v-model="form.content" required></md-textarea>
                        </md-field>
                    </div>
                    <div class="md-layout-item md-size-100 text-right">
                        <md-button type="submit" class="md-raised md-success">Thêm</md-button>
                    </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "remind-debt-form",
    props: {
        dataBackgroundColor: {
            type: String,
            default: ""
        }
    },
    data: () => ({
        form: {
            cardName: null,
            cardNumber: null,
            amount: null,
            content: null,
        },
        selectedReminder: null,
    }),
    computed: {
        ...mapGetters({
            getRemindersTypeDebt: 'reminder/getRemindersTypeDebt',
            getAccountOfReminder: 'reminder/getAccountOfReminder',
            accountInfo: 'account/accountInfo',
        })
    },
    methods: {
        ...mapActions({
            getAllReminders: 'reminder/getAllReminders',
            getAccountReminderByCardNumber: 'reminder/getAccountReminderByCardNumber',
            notification: 'addNotification',
            addDebt: 'debt/addDebt',
            getAccountInfo: 'account/getAccountInfo',
        }),
        getAccount() {
            var res = this.selectedReminder.split("-");
            this.getAccountReminderByCardNumber(res[1]).then(() => {
                this.form.cardName = this.getAccountOfReminder.cardName;
                this.form.cardNumber = this.getAccountOfReminder.cardNumber;
            });
        },
        submit() {
            this.addDebt(this.form).then(() => {
                this.notification({
                    type: 'success',
                    message: 'Thành công.'
                });
                this.selectedReminder = '';
                this.form.amount = '';
                this.form.cardNumber = '';
                this.form.content = '';
                this.form.cardName = '';
            });
        },
        getCardName() {
            if (this.form.cardNumber !== '') {
                this.getAccountInfo(this.form.cardNumber).then(() => {
                    this.form.cardName = this.accountInfo.cardName;
                }).catch(() => {
                    this.form.cardName = '';
                });
            } else {
                this.form.cardName = '';
            }
        },
    },
    created() {
        this.getAllReminders();
    }
};
</script>
<style></style>
