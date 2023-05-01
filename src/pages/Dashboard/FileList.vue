<template>
    <Card>
        <base-table :data="rows" thead-classes="text-primary">
            <template slot-scope="{row}">
                <base-button @click="getFile(row.key)">Download</base-button>
                <td class="td-actions text-right">
                    <p class="title">{{ row.metadata.name }}</p>
                    <p class="text-muted">{{ row.metadata.extension }}</p>
                    <p class="text-muted">{{ row.key }}</p>
                </td>
            </template>
        </base-table>
    </Card>
</template>
<script>
import { BaseTable } from "@/components";
import { getSpecificFile } from '../../external/data';
import Card from "../../components/Cards/Card.vue";
export default {
    components: {
        BaseTable,
        Card
    },
    props: {
        rows: [],
    }, methods: {
        getFile(key) {
            getSpecificFile(key)
        }
    }
}
</script>
<style></style>
  