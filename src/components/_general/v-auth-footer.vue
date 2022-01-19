<template>
  <div class="auth_footer">
    <div class="top_block">
      <div class="left_block">
        <img src="@/assets/logo/logo2.png" alt="">
      </div>

      <div class="right_block">
        <div>
          <ul>
            <li>Աջակցության գիծ</li>
            <li><img src="@/assets/icon/phone.png" alt=""><span>044 55 66 77</span></li>
          </ul>

        </div>
        <div>
          <ul>
            <li><a href="#">Ծառայություններ</a></li>
            <li><a href="#">Մեր մասին</a></li>
          </ul>
        </div>
      </div>
    </div>


    <div class="bottom_block">
      <div class="left_block">
        <span>
          By signing up you are agreeing to get mails and ubdates. You may unsubscribe at any time.
        </span>
      </div>

      <div class="right_block">
        <span>© 2021 Company  LLP. All Rights Reserved.   Privacy Policy Legal Notice</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-auth-footer"
}
</script>

<style scoped>
.auth_footer{
  margin-top: 110px;
  padding-bottom: 25px;
}
.top_block{
  display: grid;
  grid-template-columns: 3fr 2fr;
}
.bottom_block{
  display: grid;
  grid-template-columns: 338px 1fr;
  padding-top: 9px;
}
.top_block > .right_block > div{
  display: inline-block;
}
.top_block > .right_block > div:last-child{
  margin-left: 56px;
}
.top_block{
  padding-bottom: 10px;
  border-bottom: 1px solid#343434;
}
span, li{
  font-size: 15px;
}
li{
  color: #343434;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
li > img{
  margin-right: 6px;
}
li > span{
  color: #736D6D;
}
a{
  color: inherit;
}

.bottom_block span{
  color: #999;
}
.bottom_block > .right_block{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>