<template>
  <div class="drycontainer">
    <button class="btn" @click="$router.go(-1)">返回</button>
     <h3 v-html="dryarticle.title"></h3>
     <div><img :src="dryarticle.pic" style="width:100%"></div>
     <div v-html="dryarticle.content"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id:0,
      dryarticle:{}
    };
  },
  created(){
    // params 传参，接受传递的参数
    this.id = this.$route.params.id;
  },
  
  mounted() {
    //   
    // 获取商品详情的接口，请求线上接口 通过id来查询
    this.$axios.get("https://api.it120.cc/small4/cms/news/detail?id="+this.id).then(res=>{
      console.log(res.data);
      this.dryarticle = res.data;//把请求过来的数据进行赋值
    })
  },
  computed: {},
  methods:{}
};
</script>

<style scoped>
.drycontainer{
  width: 800px;
  margin: 80px auto;
}

</style>
