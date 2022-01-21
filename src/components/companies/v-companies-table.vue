<template>
  <div class="table_block content_block">
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Անվանում</div>
        <div class="th">Սեփականատեր</div>
        <div class="th">Ժամկետ</div>
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
  name: "v-companies-table"
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>