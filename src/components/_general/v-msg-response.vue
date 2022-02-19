<template>
  <span v-bind:class="this.msg.success ? 'msg_success': 'msg_err'" v-if="this.msg.value">{{this.msg.value}}</span>
</template>

<script>
export default {
  name: "v-msg-response",
  props:['msg']
}
</script>

<style scoped>
  .msg_err{
    color: darkred;
    font-size: 12px;
  }
  .msg_success{
    color: green;
    font-size: 12px;
  }
</style>