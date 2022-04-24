<template>
  <div class="payments">
    <v-title-block title="Վճարումներ"/>
    <v-filter-block class="filter" @filter="this.get_device_payments"/>
    <v-payments-table class="table" :payments="payments"/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VPaymentsTable from "@/components/payments/v-payments-table";
import VFilterBlock from "@/components/payments/v-filter-block";
export default {
  name: "payments",
  components: {VFilterBlock, VPaymentsTable, VTitleBlock},
  data(){
    return{
      payments: []
    }
  },
  methods: {
    get_device_payments(filter){
      this.payments = []

      this.$store.dispatch("device_payment/get_device_payment_ids", filter).then(data => {
        if(data.success)
          data.obj.forEach(payment_id => this.get_device_payment_by_id(payment_id))
      })
    },
    get_device_payment_by_id(payment_id){
      this.$store.dispatch("device_payment/get_device_payment_by_id", payment_id).then(data => {
        if(data.success){
          this.payments.push(data.obj)
        }
      })
    },
  }
}
</script>

<style scoped>
.payments > div{
  margin-left: 26px;
  margin-right: 25px;
}
.table{
  margin-top: 24px;
}
.filter{
  margin-top: 20px;
}
</style>