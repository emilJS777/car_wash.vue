<template>
  <div class="add_device">
    <v-title-block title=" Ավելացնել սարք" sub_title="" />
    <v-add-device/>
  </div>
</template>

<script>
import VAddDevice from "@/components/devices/v-add-device";
import VTitleBlock from "@/components/_general/v-title-block";
export default {
  name: "add_device",
  components: {VAddDevice, VTitleBlock}
}
</script>

<style scoped>
.add_device{
  min-height: 100vh;
}
.add_device > div{
  margin-left: 26px;
  margin-right: 25px;
}
</style>
