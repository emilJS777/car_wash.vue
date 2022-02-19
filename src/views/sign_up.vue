<template>
  <div class="registration auth">

    <div class="auth_block">
      <form class="form_block" @submit="this.sendForm">
        <h3>Ստեղծել նոր հաշիվ</h3>

        <input type="text" placeholder="Օգտանուն*" v-model="form.name">

        <input type="text" placeholder="Անուն*" v-model="form.first_name">

        <input type="text" placeholder="Ազգանուն*" v-model="form.last_name">

        <input type="password" placeholder="Գաղտնաբառ*" v-model="form.password">

        <input type="password" placeholder="Կրկնել գաղտնաբառը*" v-model="form.confirm_password">

        <input type="text" placeholder="Գեներացված կոդ" v-model="form.ticket_code">

        <v-msg-response :msg="this.msg"/>

        <button>Գրանցում</button>
      </form>

      <div class="img_block">
        <img src="@/assets/img/login_main.jpg" alt="">
      </div>
    </div>

    <v-auth-footer/>
  </div>
</template>

<script>
import VAuthFooter from "@/components/_general/v-auth-footer";
import msgMixin from "@/mixins/msgMixin";
import VMsgResponse from "@/components/_general/v-msg-response";
export default {
  name: "sign_up",
  components: {VMsgResponse, VAuthFooter},
  mixins: [msgMixin],
  data(){
    return{
      form: {
        name: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
        ticket_code: ''
      }
    }
  },
  methods: {
    sendForm(e){
      e.preventDefault()

      if(this.form.password !== this.form.confirm_password)
        this.set_msg(false, 'passwords do not match')
      else{
        this.$store.dispatch("user/create_user", this.form).then(data => {
          if(!data.success)
            this.set_msg(data.success, data.obj.msg)
          else
            this.$router.push({name: 'sign_in'})
        })
      }
    }
  }
}
</script>

<style src="@/assets/css/auth.css" scoped>

</style>