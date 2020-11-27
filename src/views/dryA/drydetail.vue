<template>
  <div>
      <header><button class="btn btn-danger" @click="$router.go(-1)">返回</button></header>
      <div class="drydetail">
          <div><img :src="drygoodsinfo.pic"/></div>
          <div>
              <p>{{drygoodsinfo.name}}</p>
              <p style="color:red">￥{{drygoodsinfo.originalPrice}}</p>
              <button class="btn btn-danger" style="width:100%">加入购物车</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id: "",
      drygoodsinfo: []
    };
  },
  created() {
    //   接受传递过来的参数
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getdrygoods();
  },
  computed: {},
  methods: {
    //   获取数据
    getdrygoods() {
      // 配置axios，获取json数据
      this.$axios
        .post("https://api.it120.cc/small4/shop/goods/detail?id=" + this.id)
        .then(res => {
          console.log(res.data);
          this.drygoodsinfo = res.data.basicInfo;
        });
    }
  }
};
</script>

<style scoped>
header {
  padding: 20px;
}
.drydetail {
  width: 100%;
  display: flex;
}
.drydetail > div {
  width: 48%;
  margin: 1%;
}
.drydetail img {
  width: 100%;
}
</style>
