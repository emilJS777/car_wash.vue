<template>
  <div class="add_company">
    <v-title-block title="Ավելացնել ավտոլվացման կետ" :sub_title="'Օգտատեր '+owner.name " />
    <v-add-company/>
  </div>
</template>

<script>
import VTitleBlock from "@/components/_general/v-title-block";
import VAddCompany from "@/components/companies/v-add-company";
export default {
  name: "add_company",
  components: {VTitleBlock, VAddCompany},
  data(){
    return{
      owner: {
        name: null
      }
    }
  },

  mounted() {
    this.$store.dispatch("user/get_user_by_id", parseInt(this.$route.query.owner_id)).then(data => {
      this.owner = data.obj
    })
  }
}
</script>

<style scoped>
.add_company{
  min-height: 100vh;
}
.add_company > div{
  margin-left: 26px;
  margin-right: 25px;
}
</style>