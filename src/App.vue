<template>
  <div id="app">
    <v-auth-header/>
    <div v-bind:class="this.$route.path === '/sign_in' || this.$route.path === '/sign_up' ? 'page auth_page' : 'page'">
      <v-menu-sidebar v-if="this.$route.path !== '/sign_in' && this.$route.path !== '/sign_up'"/>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
import VAuthHeader from "@/components/_general/v-auth-header";
import VMenuSidebar from "@/components/_general/v-menu-sidebar";
export default {
  name: 'App',
  components: {VAuthHeader, VMenuSidebar}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
.msg_err{
  color: darkred;
  font-size: 12px;
}
.page{
  padding-left: 180px;
  padding-right: 180px;
}
.auth_page{
  display: flex;
}
</style>
