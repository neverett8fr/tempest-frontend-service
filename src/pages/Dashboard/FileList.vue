<template>
    <Card>
        <base-table :data="rows" thead-classes="text-primary">
            <template slot-scope="{row}">
                <base-button @click="temp({ row })">Download</base-button>
                <td class="td-actions text-right">
                    <p class="title">{{ row.name }}</p>
                    <p class="text-muted">{{ row.extension }}</p>
                </td>
            </template>
        </base-table>
    </Card>
</template>
<script>
import { BaseTable } from "@/components";
import Card from "../../components/Cards/Card.vue";
export default {
    components: {
        BaseTable,
        Card
    },
    props: {
        rows: [],
    }, methods: {
        temp(row) {
            console.log(row.row.name)
        }
    }
}
</script>
<style></style>
  