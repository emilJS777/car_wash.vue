<template>
  <div class="auth_header">
<!--    LOGO-->
    <div class="left_block">
      <img src="@/assets/logo/logo.png" alt="">
    </div>
<!--    NAVIGATION MENU-->
    <div class="center_block">
      <nav>
        <ul>
          <li><a href="#">Մեր մասին</a></li>
          <li><a href="#">Կոնտակտներ</a></li>
          <li><a href="#">Ծառայություններ</a></li>
        </ul>
      </nav>
<!--      AUTH AND LANG-->
    </div>
    <div class="right_block">
      <div v-if="this.$router.patch === '/sign_in' || this.$router.patch === '/sign_up'">
        <router-link to="/sign_in">Մուտք</router-link>
        <router-link to="/sign_up">Գրանցում</router-link>
      </div>

      <div v-else class="home_block">
        <router-link to="/home" v-bind:class="this.$router.path === '/home' ? 'active' : ''">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>
          Գլխավոր էջ
        </router-link>
      </div>


      <div class="select">
        <div class="option">
          <img src="@/assets/logo/arm.png" alt="">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "v-auth-header"
}
</script>

<style scoped>
.auth_header{
  padding: 10px 180px;
  display: grid;
  grid-template-columns: 1fr 6fr 2fr;
  grid-gap: 1em;
}
.center_block{
  display: flex;
  align-items: center;
  justify-content: center;
}
nav{
  width: max-content;
}
li{
  display: inline-block;
  margin-left: 50px;
}
li:first-child{
  margin-left: 0;
}
a{
  color: #343434;
}

.right_block, .right_block > div.home_block{
  display: flex;
  align-items: center;
  justify-content: center;
}
.right_block, .right_block > div.home_block > a > img{
  margin-right: 5px;
}
.right_block div:not(.select){
  width: max-content;
}
.right_block a{
  padding: 8px 4px;
  border-bottom: 1px solid #C3BCBC;
  margin-right: 15px;
}
.right_block a.router-link-active{
  color: #374AF0 !important;
}
.right_block > .home_block > a{
  border-bottom: 0;
}
.right_block >div >a:last-child{
  margin-right: 0;
}
.select{
  background-color: #EBE9E9;
  padding: 4px 12px;
  width: 55px;
  margin-top: 5px;
  margin-left: 54px;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
}
.select:before{
  content: '';
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 10px;
  height: 7px;
  background-image: url("../../assets/icon/arrow.png");
  background-repeat: no-repeat;
}
.select, .option{
  display: flex;
  align-items: center;
}
</style>