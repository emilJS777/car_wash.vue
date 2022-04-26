<template>
  <div class="device_details">
    <div class="content">
      <div class="head">
        <h3>Մանրամասներ <span>&#x2715;</span></h3>
        <i><b>Սարք</b>: {{this.device.code}}</i>
      </div>

      <div class="body">
        <div class="row">
          <h4>Միացված:</h4>
          <span v-if="this.power_off_on">այո</span>
          <span v-else>ոչ</span>

          <label class="switch">
            <input type="checkbox" v-model="power_off_on"  @change="changePowerOffOn">
            <span class="slider"></span>
          </label>
        </div>

        <div class="row">
          <h4>Անվճար ռեժիմ:</h4>
          <span>այո</span>

          <label class="switch">
            <input type="checkbox" v-model="free_mode">
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-device-details",
  props: ["device"],
  data(){
    return{
      power_off_on: this.device.active,
      free_mode: false
    }
  },
  methods:{
    changePowerOffOn(){
      this.$store.dispatch("device/change_device_active", {id: this.device.id, active: this.power_off_on}).then(data => {
        if(data.success)
          this.power_off_on = data.obj.active
      })
    }
  }
}
</script>

<style scoped>
h3{
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  padding-top: 3px;
}
h3 > span{
  float: right;
  padding: 5px;
  cursor: pointer;
  line-height: .8;
  font-size: 20px;
}
.head{
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}
i{
  font-size: 10px;
}
.device_details{
  margin: 0 !important;
  position: fixed;
  background-color: rgba(248, 246, 246, 0.46);
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.content{
  padding: 15px;
  margin: 20px auto;
  background-color: #fff;
  width: 40%;
  -webkit-box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
  animation-name: content-show;
  animation-duration: .3s;
  position: relative;
}
.body{
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.row{
  display: grid;
  justify-content: center;
}
.row > span{
  font-style: italic;
  font-size: 12px;
  margin-bottom: 5px;
}

@keyframes content-show {
  from{
    margin-top: -150px;
  }
  to{
    margin-top: 20px;
  }
}


/*SWITCH TOGGLE*/
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #7294b0;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>