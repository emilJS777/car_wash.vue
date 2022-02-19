<template>
  <div id="app">
    <v-auth-header :profile="profile"/>
    <div v-bind:class="!profile ? 'page auth_page' : 'page'">
      <v-menu-sidebar v-if="profile"/>
      <router-view class="router-view"/>
    </div>
  </div>
</template>

<script>
import VAuthHeader from "@/components/_general/v-auth-header";
import VMenuSidebar from "@/components/_general/v-menu-sidebar";
import {mapState} from "vuex";
export default {
  name: 'App',
  components: {VAuthHeader, VMenuSidebar},
  computed: mapState({
    profile: state => state.auth.PROFILE
  })
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

.page{
  margin-left: 180px;
  margin-right: 180px;
  background-color: #FCF9F9;
  min-height: 95vh;
  display: grid;
  grid-template-columns: 222px auto;
  padding-bottom: 15px;
}
.auth_page{
  display: flex;
  background-color: initial;
  justify-content: center;
}
.content_block{
  border-radius: 3px;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 3px #BABABA;
  margin-right: 22px;
}
.content_title{
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  padding-top: 25px;
  padding-left: 17px;
  padding-bottom: 17px;
}
.input_content{
  background-color: initial;
  border: 1px solid#bababa;
  border-radius: 3px;
  padding: 9px 10px;
  font-size: 13px;
  color: #736D6D;
}
/*TABLE*/
.table{
  min-height: 350px;
}
.table > .thead, .table > .tbody > .tr{
  background-color: #F8F7F7;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-size: 13px;
  color: #343434;
  display: grid;
  grid-gap: 1em;
}
.table > .tbody > .tr > .td{
  overflow: hidden;
  display: flex;
  align-items: center;
}
.table > .tbody > .tr > .td.deactivate{
  cursor: pointer;
  overflow: initial;
}
.table > .tbody > .tr > .td.deactivate > div{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.table > .tbody > .tr:nth-child(even){
  background-color: #F1EFEF;
}
.table .menu{
  cursor: pointer;
  position: relative;
}
.table .menu > ul{
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #fff;
  width: max-content;
  border: 1px solid#bababa;
  border-radius: 3px;
  padding: 12px 22px;
  display: none;
}
.table .menu:hover > ul{
  display: block;
}
.table .menu:hover > ul > li{
  display: flex;
  align-items: center;
  color: inherit;
}
.table .menu > ul > li:not(:last-child){
  margin-bottom: 8px;
}
.table .menu > ul > li  img{
  margin-right: 4px;
}
.deactivate > div{
  position: relative;
}
.deactivate > div > span{
  position: absolute;
  left: -5px;
  display: none;
}
.deactivate > div > img, .deactivate > div > svg{
  z-index: 2;
  color: green;
}
.deactivate > div:hover > span{
  display: block;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #bababa;
  padding: 4px 4px 4px 30px;
  z-index: 1;
}
/*TABLE END *******/
</style>
