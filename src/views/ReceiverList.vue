<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <receiver-form data-background-color="blue"></receiver-form>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Danh sách</h4>
          </md-card-header>
          <md-card-content>
            <reminder-table table-header-color="blue"></reminder-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ReminderTable, ReceiverForm } from "@/components";

export default {
  components: {
    ReceiverForm,
    ReminderTable,
  }
};
</script>
