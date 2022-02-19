<template>
  <div class="home">
    <v-title-block title="Գլխավոր" sub_title="Անձնական տվյալներ"/>

    <div class="profile_block content_block">
      <div class="profile_field">
        <label>Օգտանուն։</label>
        <input class="input_content" type="text" disabled v-model="profile.user_name">
      </div>
      <div class="profile_field">
        <label>Անուն։</label>
        <input class="input_content" type="text" disabled v-model="profile.first_name">
      </div>
      <div class="profile_field">
        <label>Ազգանուն։</label>
        <input class="input_content" type="text" disabled v-model="profile.last_name">
      </div>
      <div class="profile_field">
        <label>Օգտագործողի կարգավիճակ։</label>
        <input class="input_content" type="text" disabled v-model="profile.role_name">
      </div>
    </div>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import {mapState} from "vuex";
export default {
  name: "home",
  components: {VTitleBlock},
  computed: mapState({
    profile: state => state.auth.PROFILE
  })
}
</script>

<style scoped>

.home > div{
  margin-left: 26px;
}
.profile_block{
  padding: 22px 25px;
  margin-top: 20px;
}
.profile_block > div{
  display: grid;
  align-items: center;
  grid-template-columns: auto 506px;
  grid-gap: 5px;
  margin-bottom: 12px;
}
label{
  font-size: 14px;
  color: #343434;
  font-weight: 500;
}
input{

}
</style>