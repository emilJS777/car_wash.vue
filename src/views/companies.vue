<template>
  <div class="companies">
    <v-title-block title="Կազմակերպություններ" sub_title="ներկայիս քանակն է  20"/>
    <v-companies-table class="table"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VCompaniesTable from "@/components/companies/v-companies-table";
export default {
  name: "companies",
  components: {VCompaniesTable, VTitleBlock}
}
</script>

<style scoped>
.companies > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
</style>