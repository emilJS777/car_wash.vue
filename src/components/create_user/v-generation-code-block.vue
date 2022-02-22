<template>
  <div class="generation_code_block content_block">
    <div class="form_block">
      <div>
        <input type="text" placeholder="Ստանալ կոդը" :value="new_ticket_code" disabled>
        <button @click="generate_code"><img src="@/assets/icon/generate_code.png" alt=""></button>
      </div>
      <div>
        <input type="text" placeholder="Ավելացնել էլ․ հասցե" v-model="email">
      </div>

      <v-msg-response :msg="this.msg"/>
    </div>

    <div class="btn_block">
      <button @click="clear_all">Ջնջել ամբողջը</button>
      <button @click="this.create_email_and_send_ticket_code">Ուղարկել կոդը</button>
    </div>
  </div>
</template>

<script>
import VMsgResponse from "@/components/_general/v-msg-response";
import msgMixin from "@/mixins/msgMixin";
export default {
  name: "v-generation-code-block",
  components: {VMsgResponse},
  mixins: [msgMixin],
  data(){
    return{
      new_ticket_code: null,
      email: null,
      new_ticket_id: null,
    }
  },
  methods: {
    generate_code(){
      this.$store.dispatch("ticket/create_ticket").then(data => {
        if(data.success) {
          this.new_ticket_code = data.obj.code
          this.new_ticket_id = data.obj.id
        }
      })
    },
    clear_all(){
      this.$store.dispatch("ticket/delete_ticket", this.new_ticket_id).then(data => {
        if(data.success){
          this.email = null
          this.new_ticket_id = null
          this.new_ticket_code = null
        }
      })
    },
    create_email_and_send_ticket_code(){
      this.$store.dispatch("email/create_email_by_ticket_id",
          {ticket_id: this.new_ticket_id, address: this.email}).then(data => {
        if(!data.success)
          this.set_msg(data.success, data.obj.msg)
        else
          this.send_ticket_code_by_email_id(data.obj.id)
      })
    },
    send_ticket_code_by_email_id(email_id){
      this.$store.dispatch("email/send_ticket_code_by_email_id", email_id).then(data => {
        this.set_msg(data.success, data.obj.msg)
        if(data.success)
          this.clear_all()
      })
    }
  }
}
</script>

<style scoped>
.generation_code_block{
  margin-top: 16px;
  padding: 25px;
}
.form_block{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 14px;
}
.form_block > div{
  border: 1px solid #BABABA;
  border-radius: 3px;
  padding: 8px 15px;
  position: relative;
}
input{
  background-color: initial;
  outline: 0;
  border: 0;
  font-size: 13px;
  color: #736D6D;
  width: 100%;
}
.form_block button{
  position: absolute;
  top: 8px;
  border: 0;
  outline: 0;
  background-color: initial;
  cursor: pointer;
  right: 8px;
}
.btn_block{
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.btn_block button{
  padding: 9px 24px;
  background-color: #343434;
  font-size: 13px;
  color: #fafafa;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  margin-left: 23px;
}
</style>