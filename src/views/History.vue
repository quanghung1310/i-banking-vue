<template>
    <div class="content">
        <div class="md-layout">
            <div
                class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
            >
                <md-card>
                <md-card-header data-background-color="blue">
                    <h4 class="title">Lịch sử</h4>
                </md-card-header>
                <md-card-content>
                    <history-table table-header-color="green"></history-table>
                </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
import { HistoryTable } from "@/components";

export default {
    components: {
        HistoryTable
    }
};
</script>
