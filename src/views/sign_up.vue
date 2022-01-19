<template>
  <div class="registration">

    <div class="auth_block">
      <form class="form_block" @submit="this.sendForm">
        <h3>Ստեղծել նոր հաշիվ</h3>

        <input type="text" placeholder="Օգտանուն*" v-model="form.name">

        <input type="text" placeholder="Անուն*" v-model="form.first_name">

        <input type="text" placeholder="Ազգանուն*" v-model="form.last_name">

        <input type="password" placeholder="Գաղտնաբառ*" v-model="form.password">

        <input type="password" placeholder="Կրկնել գաղտնաբառը*" v-model="form.confirm_password">

        <input type="text" placeholder="Գեներացված կոդ" v-model="form.ticket_code">

        <span v-if="this.msg" class="msg_err">{{this.msg}}</span>

        <button>Գրանցում</button>
      </form>

      <div class="img_block">
        <img src="@/assets/img/login_main.jpg" alt="">
      </div>
    </div>

    <v-auth-footer/>
  </div>
</template>
login
<script>
import VAuthFooter from "@/components/_general/v-auth-footer";
export default {
  name: "sign_up",
  components: {VAuthFooter},
  data(){
    return{
      form: {
        name: '',
        first_name: '',
        last_name: '',
        password: '',
        confirm_password: '',
        ticket_code: ''
      },
      msg: null
    }
  },
  methods: {
    sendForm(e){
      e.preventDefault()

      if(this.form.password !== this.form.confirm_password)
        this.msg = 'passwords do not match'
      else{
        this.$store.dispatch("user/create_user", this.form).then(data => {
          this.msg = null
          if(!data.success)
            this.msg = data.obj.msg
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