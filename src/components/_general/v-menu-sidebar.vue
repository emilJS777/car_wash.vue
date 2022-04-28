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
        <li v-bind:class="this.$route.name === 'companies' ? 'active' : ''">
          <router-link to="/companies">
            <img src="@/assets/icon/company.png" alt="">
            Ավտոլվացման կետեր
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
        </li>
        <li v-if="this.profile.role_name === 'owner'" v-bind:class="this.$route.name === 'counters' ? 'active' : ''">
          <router-link to="/counters">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
              <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
            </svg>
            Սարքերի հաշվիչ
          </router-link>
        </li>
        <li v-if="this.profile.role_name === 'owner'" v-bind:class="this.$route.name === 'devices' ? 'active' : ''">
          <router-link to="/devices">
            <img src="@/assets/icon/devices.png" alt="">
            Սարքեր
          </router-link>
        </li>
        <li v-if="this.profile.role_name === 'owner'" v-bind:class="this.$route.name === 'payments' ? 'active' : ''">
          <router-link to="/payments">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
            </svg>
            Վճարումներ
          </router-link>
        </li>


<!--        GENERAL-->
        <li @click="logout">
            <router-link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
              </svg>
              Դուրս գալ
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
  }),
  methods:{
    logout(){
      localStorage.setItem('access', null)
      localStorage.setItem('refresh', null)
      window.location.reload()
    }
  }
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
ul img, ul svg{
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
