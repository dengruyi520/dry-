<template>
  <div>
    <drylist :dryz="list" :index="index" @delete="(ind)=>{list.splice(ind,1)}"/>
  </div>
</template>

<script>
import drylist from "./drylist";
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  computed: {},
  mounted() {
    this.getList();
  },
  // 注册组件
  components: {
    drylist
  },
  methods: {
    getList() {
      this.$axios.get("/static/data.json").then(res => {
        console.log(res.result.list); //有过滤器的可以不加data  
        this.list = res.result.list;
      });
    }
  }
};
</script>

<style scoped>
</style>
