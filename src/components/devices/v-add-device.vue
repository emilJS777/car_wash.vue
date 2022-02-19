<template>
  <div class="content_block">
    <div class="form_block">
      <label>Ավելացնել սարքաորման տվյալները</label>
      <v-msg-response :msg="this.msg"/>

      <div>
        <input type="text" placeholder="Լրացնել սարքի կոդը*" v-model="form.code">
      </div>
    </div>

    <div class="btn_block">
      <button @click="this.create_device">Գրանցել սարքը</button>
    </div>
  </div>
</template>

<script>
import msgMixin from "@/mixins/msgMixin"
import VMsgResponse from "@/components/_general/v-msg-response"
export default {
  name: "v-add-device",
  components: {VMsgResponse},
  mixins: [msgMixin],
  data(){
    return{
      form: {
        code: null,
        owner_id: parseInt(this.$route.query.owner_id)
      }
    }
  },

  methods:{
    create_device(){
      this.$store.dispatch("device/create_device", this.form).then(data => {
        this.set_msg(data.success, data.obj.msg)
      })
    }
  }
}
</script>

<style scoped>
.content_block{
  margin-top: 16px;
  padding: 25px;
}
.form_block{
  display: grid;
  grid-template-columns: 1fr;
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
