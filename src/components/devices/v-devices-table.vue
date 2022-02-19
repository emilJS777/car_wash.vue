<template>
  <div class="table_block content_block">
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Օգտանուն</div>
        <div class="th">կոդ</div>
        <div class="th">Ստեղծման Ժամկետ</div>
        <div class="th">Կարգավիճակ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="device in devices" :key="device.id">
          <div class="td">
            <span>{{ device.owner_name }}</span>
          </div>
          <div class="td">
            <span>{{ device.code }}</span>
          </div>
          <div class="td">
            <span>{{ device.last_update }}</span>
          </div>
          <div class="td">
            <img src="@/assets/icon/signalGreen.png" v-if="device.active">
            <img src="@/assets/icon/signalRed.png" v-else>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-devices-table",
  data(){
    return{
      devices: []
    }
  },
  mounted(){
    let count = 0
    this.$store.dispatch("device/get_device_ids").then(data => {
      data.obj.forEach(device_id => {
        this.get_device_by_id(device_id)
        count++
      })

      // SET DEVICE LENGTH
      this.$emit("deviceLength", count)
    })
  },
  methods:{
    get_device_by_id(device_id){
      this.$store.dispatch("device/get_device_by_id", device_id).then(data => {
        this.get_user_by_id(data.obj, data.obj.owner_id)
      })
    },
    get_user_by_id(device, user_id){
      this.$store.dispatch("user/get_user_by_id", user_id).then(data => {
        device.owner_name = data.obj.name
        this.devices.push(device)
      })
    }
  }
}
</script>

<style scoped>
  .table > .thead, .table > .tbody > .tr{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .table > .tbody > .tr > .td:last-child{
    overflow: initial;
  }
</style>