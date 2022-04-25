<template>
  <div class="table_block content_block">
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Սարք</div>
        <div class="th">Գինը</div>
        <div class="th">Վճարման տեսակ</div>
        <div class="th">Ժամ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="payment in payments" :key="payment.id">
          <div class="td">
            <span>{{ payment.device_code }}</span>
          </div>
          <div class="td">
            <span>{{ payment.price }} {{ payment.currency }}</span>
          </div>
          <div class="td">
            <span>{{ payment.type }}</span>
          </div>
          <div class="td">
            <span>{{ payment.creation_date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-payments-table",
  props: ["payments"]
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.table > .tbody > .tr > .td:last-child{
  overflow: initial;
}
</style>