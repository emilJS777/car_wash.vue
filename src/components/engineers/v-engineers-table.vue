<template>
  <div class="table_block content_block">
    <h3 class="content_title">Աշխատակիցների ցանկ</h3>

    <div class="table">
      <!--        HEAD-->
      <div class="thead">
        <div class="th">Ամուն ազգանուն</div>
        <div class="th">Օգտանուն</div>
        <div class="th">Էլ․ հասցե</div>
        <div class="th">Կարգավիճակ</div>
      </div>
      <!--        BODY-->
      <div class="tbody">
        <div class="tr" v-for="item in engineers" :key="item.id">
          <div class="td">
            <span>{{item.first_name}} {{item.last_name}}</span>
          </div>
          <div class="td">
            <span>{{item.name}}</span>
          </div>
          <div class="td">
            <span>-</span>
          </div>
          <div class="td">
            <img src="@/assets/icon/signalGreen.png" v-if="item.active">
            <img src="@/assets/icon/signalRed.png" v-else>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-engineers-table",
  data(){
    return{
      engineers: []
    }
  },
  mounted() {
    this.$store.dispatch("ticket/get_engineer_tickets").then(data => {
      data.obj.forEach(ticket => {
        if(ticket.user_id){
          this.$store.dispatch("user/get_user_by_id", ticket.user_id).then(data => {
            if(data.success) {
              data.obj.active = ticket.active
              this.engineers.push(data.obj)
            }
          })
        }
      })
    })
  }
}
</script>

<style scoped>
.table > .thead, .table > .tbody > .tr{
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
}
</style>