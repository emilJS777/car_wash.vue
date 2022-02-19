<template>
  <div class="table_block content_block">
      <h3 class="content_title">Առցանց կարգավիճակ</h3>
      <div class="table">
<!--        HEAD-->
        <div class="thead">
          <div class="th">Օգտանուն</div>
          <div class="th">Կոդ</div>
          <div class="th">Ստեղծման ամսաթիվ</div>
          <div class="th">Կարգավիճակ</div>
          <div class="th"></div>
        </div>
<!--        BODY-->
        <div class="tbody">
          <div class="tr"  v-for="item in this.tickets" :key="item.id" >
            <div class="td">
              <span v-if="item.user_name">{{item.user_name}}</span>
              <span v-else>-</span>
            </div>

            <div class="td" :title="item.code">{{ item.code }}</div>

            <div class="td">{{ item.expiration_date }}</div>

            <div class="td content_center">
              <img src="@/assets/icon/signalGreen.png" v-if="item.active">
              <img src="@/assets/icon/signalRed.png" v-else>
            </div>
            <div class="td deactivate">
              <div @click="ticket_active_update(item.id)">
                <img src="@/assets/icon/deactivate.png" alt="" v-if="item.active">
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                <span v-if="item.active">Դեակտիվացնել</span>
                <span v-else>Ակտիվացնել</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "v-tickets-table",
  data(){
    return{
      tickets: []
    }
  },
  methods: {
    ticket_active_update(ticket_id){
      this.$store.dispatch("ticket/update_ticket", ticket_id).then(data => {
        if(data.success){
          this.tickets.forEach(item => {
            item.id === ticket_id ? item.active = data.obj.active : null
          })
        }
      })
    }
  },
  mounted(){
    // GET TICKET BY ENGINEER AND USER IF EXIST ESSIGN TICKET USER NAME
    this.$store.dispatch("ticket/get_tickets").then(() => {
      this.$store.getters["ticket/GET_TICKETS"].forEach(item => {
          if(item.user_id) {
            this.$store.dispatch("user/get_user_by_id", item.user_id).then(data => {
              item.user_name = data.obj.name
              this.tickets.push(item)
            })
          }
          else{
            this.tickets.push(item)
          }
      })
    })
  }
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1fr 1fr 2fr 1fr .5fr;
}

</style>
