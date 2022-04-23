<template>
  <div class="v-filter-block">
    <div>
      <label>Ավտոլվացման կետ</label>
      <select class="minimal" v-model="select_company" @change="this.changeCompany">
        <option :value="0" >Բոլոր</option>
        <option v-for="company in companies"
                :key="company.id"
                :value="company.id">
          {{company.title}} {{company.address}}
        </option>
      </select>
    </div>

    <div>
      <label>Սարք</label>
      <select class="minimal" v-model="select_device_id" @change="this.changeDevice">
        <option :value="0">Բոլոր</option>
        <option v-for="device in devices" :key="device.id" :value="device.id">
          {{ device.code }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-filter-block",
  data(){
    return{
      companies: [],
      devices: [],

      select_company: 0,
      select_device_id: 0
    }
  },
  mounted() {
    this.get_companies()
    this.get_devices()
    this.changeDevice()
  },
  methods: {
    // COMPANIES FILTER
    get_companies(){
      this.$store.dispatch("companies/get_companies").then(data => {
        data.success ? data.obj.forEach(company_id => this.get_company_by_id(company_id)) : null
      })
    },
    get_company_by_id(company_id) {
      this.$store.dispatch("companies/get_companies_by_id", company_id).then(data => {
        data.success ? this.companies.push(data.obj) : null
      })
    },
    changeCompany(){
      this.select_company === 0 ? this.get_devices() : this.get_devices_by_company_id(this.select_company)
      this.select_device_id = 0
      this.changeDevice()
    },

    // DEVICES FILTER
    get_devices(){
      this.devices = []
      this.$store.dispatch("device/get_device_ids").then(data => {
        data.success ? data.obj.forEach(device_id => this.get_device_by_id(device_id)) : null
      })
    },
    get_devices_by_company_id(company_id){
      this.devices = []
      this.$store.dispatch("device/get_device_ids_by_car_wash_id", company_id).then(data => {
        data.success ? data.obj.forEach(device_id => this.get_device_by_id(device_id)) : null
      })
    },
    get_device_by_id(device_id){
      this.$store.dispatch("device/get_device_by_id", device_id).then(data => {
        data.success ? this.devices.push(data.obj) : null
      })
    },
    changeDevice(){
      this.$emit("filter", {'device_id': this.select_device_id, 'company_id': this.select_company})
    }
  }
}
</script>

<style scoped>
.v-filter-block{
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}
label{
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}
</style>