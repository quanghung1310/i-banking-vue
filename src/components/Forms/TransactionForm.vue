<template>
    <form>
        <md-card>
            <md-card-header data-background-color="blue">
                <h4 class="title">Chuyển khoản</h4>
            </md-card-header>

            <md-card-content>
                <div class="md-layout">
                <div class="md-layout-item md-small-size-100 md-size-50 md-autocomplete">
                    <md-autocomplete
                    class="search"
                    v-model="selectedType"
                    :md-options="types"
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
                    >
                    <label>Ngân hàng</label>
                    </md-autocomplete>
                </div>
                </template>
                <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                    <label>Tên tài khoản</label>
                    <md-input disabled></md-input>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                    <label>Số tài khoản</label>
                    <md-input type="text"></md-input>
                    </md-field>
                </div>
                <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                    <label>Số tiền</label>
                    <md-input type="number"></md-input>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-100">
                    <md-field maxlength="5">
                    <label>Nội dung</label>
                    <md-textarea></md-textarea>
                    </md-field>
                </div>
                <div class="md-layout-item md-size-100 text-right">
                    <md-button class="md-raised md-success">Xác nhận</md-button>
                </div>
                </div>
            </md-card-content>
        </md-card>
    </form>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: "transaction-form",
    props: {
        dataBackgroundColor: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            selectedType: null,
            selectedBank: null
        };
    },
    computed: {
        ...mapGetters({
            types: 'transaction/typeTrans',
            banks: 'transaction/partnerBank'
        })
    },
};
</script>
<style></style>
