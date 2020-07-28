<template>
    <div class="content">
        <div class="md-layout">
            <div
                class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"  background
            >
                <md-steppers :md-active-step.sync="active" md-linear>
                <md-step id="first" md-label="Chuyển khoản" :md-done.sync="first" data-background-color="blue">
                    <form>
                        <md-card>
                            <md-card-content>
                                <div class="md-layout">
                                <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
                                    <md-autocomplete
                                    class="search"
                                    v-model="selectedType"
                                    :md-options="types"
                                    required
                                    >
                                    <label>Loại chuyển khoản</label>
                                    </md-autocomplete>
                                </div>
                                <template v-if="selectedType == 'Liên Ngân Hàng'">
                                <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
                                    <md-autocomplete
                                    class="search"
                                    v-model="selectedBank"
                                    :md-options="banks"
                                    required
                                    >
                                    <label>Ngân hàng</label>
                                    </md-autocomplete>
                                </div>
                                </template>
                                <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
                                    <md-autocomplete
                                    class="search"
                                    v-model="selectedReminder"
                                    :md-options="getRemindersTypeSend"
                                    @md-selected="getAccount"
                                    >
                                    <label>Tài khoản gợi nhớ</label>
                                    </md-autocomplete>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                    <label>Tên tài khoản</label>
                                    <template v-if="getAccountOfReminder != []">
                                        <md-input v-model="getAccountOfReminder.cardName" required disabled></md-input>
                                    </template>
                                    <template v-else>
                                        <md-input required></md-input>
                                    </template>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                    <label>Số tài khoản</label>
                                    <md-input type="text" v-model="getAccountOfReminder.cardNumber" required></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33">
                                    <md-field>
                                    <label>Số tiền</label>
                                    <md-input type="number" required></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-small-size-100 md-size-33 md-autocomplete">
                                    <md-autocomplete
                                    class="search"
                                    v-model="selectedFee"
                                    :md-options="typeFee"
                                    required
                                    >
                                    <label>Người tính phí</label>
                                    </md-autocomplete>
                                </div>
                                <div class="md-layout-item md-size-100">
                                    <md-field maxlength="5">
                                    <label>Nội dung</label>
                                    <md-textarea required></md-textarea>
                                    </md-field>
                                </div>
                                </div>
                            </md-card-content>
                        </md-card>
                    <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Tiếp tục</md-button>
                    </form>
                </md-step>

                <md-step id="second" md-label="OTP" :md-error="secondStepError" :md-done.sync="second">
                    <div style="display: flex; flex-direction: row;">
                        <v-otp-input
                        inputClasses="otp-input"
                        :numInputs="6"
                        separator="-"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        :shouldAutoFocus="true"
                        />
                    </div>
                    <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Tiếp tục</md-button>
                    <!-- <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button> -->
                </md-step>

                <md-step id="third" md-label="Xác nhận" :md-done.sync="third">
                    <p>Giao dịch thành công</p>
                    <md-button class="md-raised md-primary" @click="setDone('third')">Xác nhận</md-button>
                </md-step>
                </md-steppers>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
    },
    data: () => ({
        active: 'first',
        first: false,
        second: false,
        third: false,
        secondStepError: null,
        selectedType: null,
        selectedBank: null,
        selectedReminder: null,
        typeFee: [
            'Người gửi',
            'Người nhận',
        ],
        selectedFee: null,
    }),
    computed: {
        ...mapGetters({
            types: 'transaction/typeTrans',
            banks: 'transaction/partnerBank',
            getRemindersTypeSend: 'reminder/getRemindersTypeSend',
            getAccountOfReminder: 'reminder/getAccountOfReminder'
        })
    },
    methods: {
        ...mapActions({
            getAllReminders: 'reminder/getAllReminders',
            getAccountReminderByCardNumber: 'reminder/getAccountReminderByCardNumber',
		}),
        setDone (id, index) {
            this[id] = true

            this.secondStepError = null

            if (index) {
            this.active = index
            }
        },
        setError () {
            this.secondStepError = 'This is an error!'
        },
        getAccount() {
            var res = this.selectedReminder.split("-");
            this.getAccountReminderByCardNumber(res[1]);
        },
        sendTransaction() {

        }
    },
	created() {
		this.getAllReminders();
	}
};
</script>
<style lang="scss">
    .otp-input {
        width: 40px;
        height: 40px;
        padding: 5px;
        margin: 0 10px;
        font-size: 20px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        text-align: center;
        &.error {
        border: 1px solid red !important;
        }
    }
    .otp-input::-webkit-inner-spin-button,
    .otp-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
