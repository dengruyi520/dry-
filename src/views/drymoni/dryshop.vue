<template>
  
      <drygood :drygoods="drygoods" 
      @delete="(index)=>{drygoods.splice(index,1 )}"/>
</template>

<script>
import drygood from "./drygood"
export default {
  name: '',
  data() {
    return {
        drygoods:[]
    };
  },
  mounted(){
      this.getdrygoods();
  },
  components:{
      drygood
  },
  computed:{
  },
  methods: {
      getdrygoods(){
          this.$axios.get("/static/goods.json").then(res=>{
              console.log(res.result);
              this.drygoods = res.result;
          })
      },
    //   drydel(index){
    //       this.drygoods.splice(index,1)
    //   }
  },
};
</script>

<style scoped>

</style>
