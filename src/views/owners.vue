<template>
  <div class="owners">
    <v-title-block title="Սեփականատերեր"/>
    <v-owners-table class="table"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VOwnersTable from "@/components/owners/v-owners-table";
export default {
  name: "owners",
  components: {VOwnersTable, VTitleBlock}
}
</script>

<style scoped>
.owners > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
</style>