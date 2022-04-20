<template>
  <div class="table_block content_block">
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Անվանում</div>
        <div class="th">Սեփականատեր</div>
        <div class="th">հասցեն</div>
        <div class="th">Ժամկետ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="company in this.companies" :key="company.id">
          <div class="td">
            <span>{{ company.title }}</span>
          </div>
          <div class="td">
            <span>{{ company.user_name }}</span>
          </div>
          <div class="td">
            <span>{{ company.address }}</span>
          </div>
          <div class="td">
            <span>{{ company.creation_date }}</span>
          </div>
          <div class="td">
            <div class="menu">
              <img src="@/assets/icon/menu_min.png" alt="">
              <ul>
<!--                <li @click="add_device_page(company.id)"> <img src="@/assets/icon/device_add.png" alt=""> Ավելացնել սարք </li>-->
                <li @click="devices_by_car_wash_id(company.id)"> <img src="@/assets/icon/devices_all.png" alt=""> Դիտել սարքը </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-companies-table",
  data(){
    return{
      companies: []
    }
  },
  mounted() {
    if(this.$route.query.owner_id)
        this.getCompaniesIdsByOwner_id(this.$route.query.owner_id)
    else
      this.getCompaniesIds()


  },
  methods:{
    getCompaniesIdsByOwner_id(owner_id){
      this.$store.dispatch("companies/get_company_ids_by_owner_id", owner_id).then(data => {
        if(data.success)
          data.obj.forEach(company_id => {
            this.getCompanyById(company_id)
          })
      })
    },
    getCompaniesIds(){
      this.$store.dispatch("companies/get_companies").then(data => {
        if(data.success)
          data.obj.forEach(companyId => {
            this.getCompanyById(companyId)

            this.$emit("companies_length", data.obj.length)
          })
      })
    },
    getCompanyById(companyId){
      this.$store.dispatch("companies/get_companies_by_id", companyId).then(data => {
        console.log(data.obj)
        if(data.success)
          this.getOwnerById(data.obj, data.obj.owner_id)
      })
    },

    getOwnerById(company, owner_id){
      this.$store.dispatch("user/get_user_by_id", owner_id).then(data => {
        if(data.success)
          company.user_name = data.obj.name

        this.companies.push(company)
      })
    },
    devices_by_car_wash_id(car_wash_id){
      this.$router.push({path: '/devices?car_wash_id='+car_wash_id})
    }
  }
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1fr 1fr 1fr 1fr .4fr;
}
.table > .tbody > .tr > .td:last-child{
  overflow: initial;
}
</style>