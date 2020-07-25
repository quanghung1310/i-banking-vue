<template>
    <div class="content">
        <div class="md-layout">
            <div
                class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <transaction-form></transaction-form>
            </div>
        </div>
    </div>
</template>
<script>
import { TransactionForm } from "@/components";

export default {
  components: {
    TransactionForm,
  }
};
</script>
<style></style>
