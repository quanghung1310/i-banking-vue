<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <remind-debt-form></remind-debt-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-100">
          <nav-tabs-card>
            <template slot="content">
              <md-tabs class="md-info" md-alignment="fixed">
                <md-tab id="tab-debt" md-label="Người nợ" md-icon="list">
                  <debt-table></debt-table>
                </md-tab>

                <md-tab id="tab-remind-debt" md-label="Nhắc nợ" md-icon="notifications">
                  <remind-debt-table></remind-debt-table>
                </md-tab>
              </md-tabs>
            </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import { RemindDebtForm, NavTabsCard, DebtTable, RemindDebtTable } from "@/components";

export default {
  components: {
    RemindDebtForm,
    NavTabsCard,
    DebtTable,
    RemindDebtTable,
  }
};
</script>
