<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Tài khoản thanh toán</h4>
          </md-card-header>
          <md-card-content>
            <payment-table table-header-color="green"></payment-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="blue">
            <h4 class="title">Tài khoản tích kiệm</h4>
          </md-card-header>
          <md-card-content>
            <saving-table table-header-color="green"></saving-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PaymentTable, SavingTable } from "@/components";

export default {
  components: {
    PaymentTable,
    SavingTable
  }
};
</script>
