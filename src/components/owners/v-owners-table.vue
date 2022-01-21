<template>
  <div class="table_block content_block">
    <h3 class="content_title">Աշխատակիցների ցանկ</h3>
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Կազմակերպության անվանում</div>
        <div class="th">Օգտանուն</div>
        <div class="th">Կոդ</div>
        <div class="th">Կարգավիճակ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr">
          <div class="td">
            <span>asda</span>
          </div>
          <div class="td">
            <span>asda</span>
          </div>
          <div class="td">
            <span>asda</span>
          </div>
          <div class="td">
            <span>asda</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-owners-table"
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1.8fr 1fr 1fr 1fr;
}
</style>