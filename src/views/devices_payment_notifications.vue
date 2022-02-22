<template>
  <div class="payment_notifications">
    <v-title-block title="Ծանուցումներ" sub_title="Ծանուցում սարքերի շահույթի մասին. ընդհանուր" :bold="this.total_price"/>
    <v-devices-payment-notifications class="notifications" @set_total="(price) => this.total_price += parseFloat(price)"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VDevicesPaymentNotifications from "@/components/notifications/v-devices-payment-notifications";
export default {
  name: "devices_payment_notifications.vue",
  components: {VDevicesPaymentNotifications, VTitleBlock},
  data(){
    return{
      total_price: 0
    }
  }
}
</script>

<style scoped>
  .payment_notifications > div{
    margin-left: 26px;
    margin-right: 25px;
  }
  .notifications{
    margin-top: 24px;
  }
</style>