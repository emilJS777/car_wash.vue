<template>
  <div class="engineers">
    <v-title-block title="Ինժեներներ"/>
    <v-engineers-table class="table"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VEngineersTable from "@/components/engineers/v-engineers-table";
export default {
  name: "engineers",
  components: {VEngineersTable, VTitleBlock}
}
</script>

<style scoped>
.engineers > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
</style>