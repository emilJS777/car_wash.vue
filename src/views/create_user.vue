<template>
  <div class="create_user">
    <v-title-block title="Ստեղծել կոդ" sub_title="ստեղծել 20 նիշ ունեցող կոդ" />
    <v-generation-code-block/>
    <v-tickets-table class="table"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VGenerationCodeBlock from "@/components/create_user/v-generation-code-block";
import VTicketsTable from "@/components/create_user/v-tickets-table";
export default {
  name: "create_user",
  components: {VTitleBlock, VGenerationCodeBlock, VTicketsTable}
}
</script>

<style scoped>
.create_user{
  min-height: 100vh;
}
.create_user > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
</style>
