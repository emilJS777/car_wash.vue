<template>
  <div class="login auth">

    <div class="auth_block">
      <form class="form_block" @submit="this.sendForm">
        <h3>Մուտքագրեք տվյալները</h3>

        <input type="text" placeholder="Օգտանուն*" v-model="form.name">

        <input type="password" placeholder="Գաղտնաբառ*" v-model="form.password">

        <span v-if="this.msg" class="msg_err">{{this.msg}}</span>

        <button>Մուտք գործել</button>
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
export default {
  name: "sign_in",
  components: {VAuthFooter},
  data(){
    return{
      form:{
        name: '',
        password: ''
      },
      msg: null
    }
  },
  methods: {
    sendForm(e){
      e.preventDefault()
      this.$store.dispatch("auth/login", this.form).then(data => {
        this.msg = null
        if(!data.success)
          this.msg = data.obj.msg
        else
          window.location.reload()
      })
    }
  }
}
</script>

<style src="@/assets/css/auth.css" scoped>

</style>