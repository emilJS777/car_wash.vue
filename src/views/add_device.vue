<template>
  <div class="add_device">
    <v-title-block title="Ավելացնել սարք" :sub_title="'Օգտատեր '+owner.name " />
    <v-add-device/>
  </div>
</template>

<script>
import VAddDevice from "@/components/devices/v-add-device";
import VTitleBlock from "@/components/_general/v-title-block";
export default {
  name: "add_device",
  components: {VAddDevice, VTitleBlock},
  data(){
    return{
      owner: null
    }
  },
  mounted() {
    this.$store.dispatch("user/get_user_by_id", parseInt(this.$route.query.owner_id)).then(data => {
      this.owner = data.obj
    })
  }
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
