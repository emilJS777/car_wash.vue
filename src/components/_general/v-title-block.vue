<template>
  <div class="title_block">
    <h3>{{this.title}}</h3>
    <span>{{ this.sub_title }}</span>
  </div>
</template>

<script>
export default {
  name: "v-title-block",
  props: ['title', 'sub_title']
}
</script>

<style scoped>
.title_block{
  padding-left: 248px;
  padding-bottom: 11px;
  border-bottom: 1px solid#BABABA;
}
h3{
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  padding-top: 3px;
}
span{
  font-size: 12px;
  color: #736D6D;
}
</style>