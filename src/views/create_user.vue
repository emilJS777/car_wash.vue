<template>
  <div class="create_user">
    <v-title-block title="Ստեղծել կոդ" sub_title="ստեղծել 20 նիշ ունեցող կոդ" />
    <v-generation-code-block/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VGenerationCodeBlock from "@/components/create_user/v-generation-code-block";
export default {
  name: "create_user",
  components: {VTitleBlock, VGenerationCodeBlock}
}
</script>

<style scoped>
.create_user{
  background-color: #FCF9F9;
  min-height: 100vh;
}
</style>