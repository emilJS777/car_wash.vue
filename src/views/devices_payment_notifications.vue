<template>
  <div class="payment_notifications">
    <v-title-block title="Ծանուցումներ" sub_title="Ծանուցում սարքերի շահույթի մասին"/>
    <v-devices-payment-notifications class="notifications"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VDevicesPaymentNotifications from "@/components/notifications/v-devices-payment-notifications";
export default {
  name: "devices_payment_notifications.vue",
  components: {VDevicesPaymentNotifications, VTitleBlock}
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