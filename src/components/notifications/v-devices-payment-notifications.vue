<template>
  <div class="devices_payment_notifications content_block">
<!--    <div class="notification" v-for="payment in device_payments" :key="payment.id">-->
<!--      <p>-->
<!--        <span class="date">{{payment.creation_date}} </span>-->

<!--        <span v-for="device_code_payment_id in devices_code_payment_id" :key="device_code_payment_id.payment_id">-->
<!--          {{ device_code_payment_id.payment_id === payment.id ? device_code_payment_id.device_code : '' }}-->
<!--        </span>-->

<!--        կոդով սարքի հաշվին մուտք է գործել-->

<!--        <span class="price">{{ payment.price }}</span>-->

<!--        {{payment.currency}}-->
<!--      </p>-->
<!--    </div>-->

    <h3 v-if="device_payments.length < 1">Ծանուցումներ չկան</h3>

  </div>
</template>

<script>
export default {
  name: "v-devices-payment-notifications",
  data(){
    return{
      device_payments: [],
      devices_code_payment_id: []
    }
  },
  mounted() {
    // this.$store.dispatch("device_payment/get_device_payment_ids").then(data => {
    //   data.obj.forEach(payment_id => {
    //     this.get_device_payment_by_id(payment_id)
    //   })
    // })
  },
  methods:{
    async get_device_payment_by_id(payment_id){
      const data = await this.$store.dispatch("device_payment/get_device_payment_by_id", payment_id)
      this.device_payments.push(data.obj)
      this.$emit("set_total", data.obj.price)
      await this.get_device_code_by_id(data.obj.device_id, data.obj.id)
    },
    async get_device_code_by_id(device_id, payment_id){
      const data = await this.$store.dispatch("device/get_device_by_id", device_id)
      this.devices_code_payment_id.push({device_code: data.obj.code, payment_id: payment_id})
    },
  }
}
</script>

<style scoped>
  .devices_payment_notifications{
    min-height: 500px;
  }
  .notification{
    background-color: #F1EFEF;
    padding: 9px 16px;
    min-height: 50px;
    margin-bottom: 8px;
    border: 1px solid #BABABA;
    border-left: 0;
    border-right: 0;
    display: flex;
    align-items: center;
  }
  p{
    font-size: 13px;
    margin-bottom: 0;
  }
  span{
    color: #266ddb;
    font-weight: bold;
  }
  span.price{
    color: #0c7329;
  }
  span.date{
    font-style: italic;
    color: #736D6D;
    font-weight: initial;
  }
  h3{
    color: #bebebe;
    padding: 5px;
    text-align: center;
  }
</style>