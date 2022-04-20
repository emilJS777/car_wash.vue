<template>
  <div class="companies">
    <v-title-block title="Ավտոլվացման կետեր" :sub_title="'ներկայիս քանակն է '+this.companiesLength "/>
    <v-companies-table class="table"  @companies_length="(len)=>this.companiesLength = len"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VCompaniesTable from "@/components/companies/v-companies-table";
export default {
  name: "companies",
  components: {VTitleBlock, VCompaniesTable},
  data(){
    return{
      companiesLength: 0
    }
  }
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