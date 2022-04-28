<template>
  <div class="counters">
    <v-title-block title="Սարքերի հաշվիչ"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
export default {
  name: "counters",
  components: {VTitleBlock}
}
</script>

<style scoped>
.counters > div{
  margin-left: 26px;
  margin-right: 25px;
}
</style>