<template>
  <div class="table_block content_block">
    <div v-bind:class="profile.role_name === 'owner' ? 'table owner-table' : 'table'">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Օգտատեր</div>
        <div class="th">կոդ</div>
        <div class="th" v-if="profile.role_name == 'owner'"><span>Ջւր</span></div>
        <div class="th" v-if="profile.role_name == 'owner'"><span>Փրփուր</span></div>
        <div class="th">Թարմացւմ</div>
        <div class="th">Կարգավիճակ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="device in devices" :key="device.id">
          <div class="td">
            <span v-for="device_id_owner_name in device_id_owner_name_arr" :key="device_id_owner_name.device_id">
              {{ device_id_owner_name.device_id === device.id ? device_id_owner_name.owner_name : ''}}
            </span>
          </div>
          <div class="td">
            <span>{{ device.code }}</span>
          </div>

          <div class="td" v-if="profile.role_name == 'owner'">
            <span v-bind:class="device.water ? 'success' : 'err'">{{ device.water ? 'Կա' : 'Չկա' }}</span>
          </div>
          <div class="td" v-if="profile.role_name == 'owner'">
            <span v-bind:class="device.lather ? 'success' : 'err'">{{ device.lather ? 'Կա' : 'Չկա' }}</span>
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
import {mapState} from "vuex"
export default {
  name: "v-devices-table",
  computed: mapState({
    profile: state => state.auth.PROFILE
  }),
  data(){
    return{
      devices: [],
      device_id_owner_name_arr: [],
    }
  },
  mounted(){
    // IF PATH QUERY OWNER ID GET DEVICES ONLY FOR ThiS OWNER
    if(this.$route.query.owner_id)
      this.get_device_ids_by_owner_id(parseInt(this.$route.query.owner_id))

    // ELSE GET ALL DEVICES
    else
      this.get_device_ids()
  },
  methods:{
    get_device_ids_by_owner_id(owner_id){
      this.$store.dispatch("device/get_device_ids_by_owner_id", owner_id).then(data => {
        data.obj.forEach(device_id => {
          this.get_device_by_id(device_id)
          this.get_device_content_by_device_id(device_id)
        })
      })
    },
    get_device_ids(){
      this.$store.dispatch("device/get_device_ids").then(data => {
        data.obj.forEach(device_id => {
          this.get_device_by_id(device_id)
        })
      })
    },
    get_device_by_id(device_id){
      this.$store.dispatch("device/get_device_by_id", device_id).then(data => {
        this.devices.push(data.obj)
        this.get_user_by_id(data.obj.id, data.obj.owner_id)
        console.log(data.obj)
        // EMIT DEVICES COUNT
        this.$emit("device_length", this.devices.length)
      })
    },
    get_user_by_id(device_id, user_id){
      this.$store.dispatch("user/get_user_by_id", user_id).then(data => {
        this.device_id_owner_name_arr.push({device_id: device_id, owner_name: data.obj.name})
      })
    }
  }
}
</script>

<style scoped>
  .table > .thead, .table > .tbody > .tr{
    grid-template-columns: .3fr .3fr .4fr .2fr;
  }
  .owner-table > .thead, .owner-table > .tbody > .tr{
    grid-template-columns: .3fr .3fr .2fr .2fr .4fr .2fr;
  }

  .table > .tbody > .tr > .td:last-child{
    overflow: initial;
  }
  .success{
    color: #0c7329;
  }
  .err{
    color: brown;
  }
</style>