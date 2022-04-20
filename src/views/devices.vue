<template>
  <div class="devices">
    <v-title-block title="Սարքեր" :sub_title="'ներկայիս քանակն է '+this.deviceLength "/>
    <v-devices-table class="table" @device_length="(len)=>this.deviceLength = len"
                     @device_details="(device_id)=>this.device_details.device_id = device_id"/>

    <v-title-block title="մանրամասներ"
                   :sub_title="'Սարք '+this.device_details.device_id"
                   style="margin-top: 15px;"
                   v-if="this.device_details.device_id"/>
    <v-device-details style="margin-top: 30px"
                      v-if="this.device_details.device_id"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VDevicesTable from "@/components/devices/v-devices-table";
import VDeviceDetails from "@/components/devices/v-device-details";
export default {
name: "devices",
  components: {VDeviceDetails, VDevicesTable, VTitleBlock},
  data(){
    return{
      deviceLength: 0,
      device_details: {
        device_id: null
      }
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