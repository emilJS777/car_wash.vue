<template>
  <div class="menu_sidebar">
    <div class="top">
      <div>
        <img src="@/assets/logo/logoMin.png" alt="">
      </div>
      <div>
        <img src="@/assets/icon/toggle.png" alt="">
      </div>
    </div>

<!--    MENU BLOCK-->
    <div class="menu">
      <ul v-if="this.profile">
        <!--      NAVIGATION FOR ADMIN-->
        <li v-if="this.profile.role_name === 'admin'" v-bind:class="this.$route.name === 'create_user' ? 'active' : ''">
          <router-link to="/create_user">
            <img src="@/assets/icon/userAdd.png" alt="">
            Ստեղծել օգտատեր
          </router-link>
        </li>
        <li v-if="this.profile.role_name === 'admin'" v-bind:class="this.$route.name === 'owners' ? 'active' : ''">
          <router-link to="/owners">
            <img src="@/assets/icon/owner.png" alt="">
            Սեփականատերեր
          </router-link>
        </li>
        <li v-if="this.profile.role_name === 'admin'" v-bind:class="this.$route.name === 'devices' ? 'active' : ''">
          <router-link to="/devices">
            <img src="@/assets/icon/devices.png" alt="">
            Սարքեր
          </router-link>
        </li>

      <!--        NAVIGATION FOR OWNER-->
        <li v-if="this.profile.role_name === 'owner'" v-bind:class="this.$route.name === 'devices_payment_notifications' ? 'active' : ''">
          <router-link to="/devices_payment_notifications">
            <img src="@/assets/icon/notifications.png" alt="">
            Ծանուցումներ
          </router-link>
        <li v-if="this.profile.role_name === 'owner'" v-bind:class="this.$route.name === 'devices' ? 'active' : ''">
          <router-link to="/devices">
            <img src="@/assets/icon/devices.png" alt="">
            Սարքեր
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "v-menu-sidebar",
  computed: mapState({
    profile: state => state.auth.PROFILE
  })
}
</script>

<style scoped>
.menu_sidebar{
  width: 222px;
  background-color: #343434;
  min-height: 100%;
  padding-left: 12px;
  display: inline-block;
  padding-bottom: 15px;
}
.top{
  padding-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-right: 12px;
}
.top > div{
  display: flex;
  align-items: center;
}
.top > div:last-child{
  justify-content: flex-end;
  cursor: pointer;
}
.menu{
  margin-top: 42px;
}
ul img{
  margin-right: 10px;
}
ul li {
  margin-bottom: 17px;
  font-size: 14px;
  color: #fafafa;
  height: 35px;
  display: flex;
  align-items: center;
}
ul li.active{
  border-right: 6px solid #374AF0;
}
ul a{
  color: inherit;
  display: flex;
  align-items: center;
  font-weight: 400;
}
</style>
