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
      <ul>
        <li v-if="this.role_name === 'admin'">
          <router-link to="/create_user">
            <img src="@/assets/icon/userAdd.png" alt="">
            Ստեղծել օգտատեր
          </router-link>
        </li>
        <li v-if="this.role_name === 'admin'">
          <a href="#">
            <img src="@/assets/icon/engineer.png" alt="">
            Ինժեներներներ
          </a>
        </li>
        <li v-if="this.role_name === 'admin'">
          <a href="#">
            <img src="@/assets/icon/owner.png" alt="">
            Սեփականատերեր
          </a>
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
    role_name: state => state.auth.PROFILE.role_name
  })
}
</script>

<style scoped>
.menu_sidebar{
  width: 222px;
  float: left;
  background-color: #343434;
  height: 100vh;
  padding-left: 12px;
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