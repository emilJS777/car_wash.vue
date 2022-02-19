<template>
  <div class="devices">
    <v-title-block title="Սարքեր" :sub_title="'ներկայիս քանակն է '+this.deviceLength "/>
    <v-devices-table class="table" @deviceLength="(len)=>this.deviceLength = len"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VDevicesTable from "@/components/devices/v-devices-table";
export default {
name: "devices",
  components: {VDevicesTable, VTitleBlock},
  data(){
    return{
      deviceLength: 0
    }
  }
}
</script>

<style scoped>
.devices > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
</style>