<template>
  <div class="login auth">

    <div class="auth_block">
      <form class="form_block" @submit="this.sendForm">
        <h3>Մուտքագրեք տվյալները</h3>

        <input type="text" placeholder="Օգտանուն*" v-model="form.name">

        <input type="password" placeholder="Գաղտնաբառ*" v-model="form.password">

        <v-msg-response :msg="this.msg"/>

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
import msgMixin from "@/mixins/msgMixin";
import VMsgResponse from "@/components/_general/v-msg-response";
export default {
  name: "sign_in",
  mixins: [msgMixin],
  components: {VMsgResponse, VAuthFooter},
  data(){
    return{
      form:{
        name: '',
        password: ''
      }
    }
  },
  methods: {
    sendForm(e){
      e.preventDefault()
      this.$store.dispatch("auth/login", this.form).then(data => {
        if(!data.success)
          this.set_msg(data.success, data.obj.msg)
        else
          window.location.reload()
      })
    }
  }
}
</script>

<style src="@/assets/css/auth.css" scoped>

</style>