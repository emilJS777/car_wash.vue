<template>
  <div class="generation_code_block">
    <div class="form_block">
      <div>
        <input type="text" placeholder="Ստանալ կոդը" :value="new_code" disabled>
        <button @click="generate_code"><img src="@/assets/icon/generate_code.png" alt=""></button>
      </div>
      <div>
        <input type="text" placeholder="Ավելացնել էլ․ հասցե" v-model="email">
      </div>
    </div>

    <div class="btn_block">
      <button @click="clear_all">Ջնջել ամբողջը</button>
      <button>Ուղարկել կոդը</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-generation-code-block",
  data(){
    return{
      new_code: null,
      email: null,
      new_code_id: null
    }
  },
  methods: {
    generate_code(){
      this.$store.dispatch("ticket/create_ticket").then(data => {
        if(data.success) {
          this.new_code = data.obj.code
          this.new_code_id = data.obj.id
        }
      })
    },
    clear_all(){
      this.$store.dispatch("ticket/delete_ticket", this.new_code_id).then(data => {
        if(data.success){
          this.email = null
          this.new_code_id = null
          this.new_code = null
        }
      })
    }
  }
}
</script>

<style scoped>
.generation_code_block{
  background-color: #fbfbfb;
  margin-left: 248px;
  margin-right: 25px;
  margin-top: 16px;
  border-radius: 3px;
  box-shadow: 0px 0px 3px #BABABA;
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