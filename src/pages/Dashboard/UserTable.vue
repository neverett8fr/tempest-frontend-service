<template>
  <base-table :data="table.data" :columns="table.columns" thead-classes="text-primary">
  </base-table>
</template>
<script>
import { BaseTable } from "@/components";
export default {
  components: {
    BaseTable
  },
  computed: {
    table() {
      console.log(this.$t('analytics.usersTable'))
      return this.$t('analytics.usersTable');
    }
  }
}
</script>
<style></style>
