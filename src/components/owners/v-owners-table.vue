<template>
  <div class="table_block content_block">
    <h3 class="content_title">Աշխատակիցների ցանկ</h3>
    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Անուն Ազգանուն</div>
        <div class="th">Օգտանուն</div>
        <div class="th">Կարգավիճակ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="owner in this.owners" :key="owner.id">
          <div class="td">
            <span>{{owner.first_name}} {{owner.last_name}}</span>
          </div>
          <div class="td">
            <span>{{owner.name}}</span>
          </div>
          <div class="td">
            <img src="@/assets/icon/signalGreen.png" v-if="owner.active">
            <img src="@/assets/icon/signalRed.png" v-else>
          </div>
          <div class="td">
            <div class="menu">
              <img src="@/assets/icon/menu_min.png" alt="">
              <ul>
                <li @click="add_device_page(owner.id)"> <img src="@/assets/icon/device_add.png" alt=""> Ավելացնել սարք </li>
                <li @click="devices_by_owner_id(owner.id)"> <img src="@/assets/icon/devices_all.png" alt=""> Դիտել սարքը </li>

                <li @click="add_company_page(owner.id)"> <img src="@/assets/icon/device_add.png" alt=""> Ավելացնել ավտոլվացման կետ </li>
                <li @click="companies_by_owner_id(owner.id)"> <img src="@/assets/icon/devices_all.png" alt=""> Դիտել ավտոլվացման կետ </li>
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
  name: "v-owners-table",
  data(){
    return{
      owners: []
    }
  },
  mounted(){
    this.$store.dispatch("ticket/get_tickets").then(() => {
      this.$store.getters["ticket/GET_TICKETS"].forEach(ticket => {
        if(ticket.user_id){
          this.$store.dispatch("user/get_user_by_id", ticket.user_id).then(data => {
            data.obj.active = ticket.active;
            this.owners.push(data.obj)
          })
        }
          // this.get_user_by_id(ticket.user_id, ticket.active)
      })
    })
  },
  methods:{
    // add device page
    add_device_page(owner_id){
      this.$router.push({path: '/add_device?owner_id='+owner_id})
    },
    // add company page
    add_company_page(owner_id){
      this.$router.push({path: '/add_company?owner_id='+owner_id})
    },
    // devices page by owner
    devices_by_owner_id(owner_id){
      this.$router.push({path: '/devices?owner_id='+owner_id})
    },
    // companies page by owner id
    companies_by_owner_id(owner_id){
      this.$router.push({path: '/companies?owner_id='+owner_id})
    }
  }
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1fr 1fr 1fr .2fr;
}
.table > .tbody > .tr > .td:last-child{
  overflow: initial;
}
</style>
