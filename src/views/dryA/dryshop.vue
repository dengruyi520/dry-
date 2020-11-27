<template>
  <div class="drymain">
      <drygood :drygoods="drygoods" @delete="(index)=>{drygoods.splice(index,1)}"/>
      
  </div>
</template>

<script>
import drygood from "./drygood"
export default {
  name: "",
  data() {
    return {
      drygoods: []
    };
  },
  mounted() {
    this.getdrygoods();
  },
  computed: {},
  components:{
    drygood
  },
  methods: {
    //   获取数据
    getdrygoods() {
      this.$axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
        console.log(res);
        this.drygoods = res.data;
      });
    }
  }
};
</script>

<style scoped>

</style>
