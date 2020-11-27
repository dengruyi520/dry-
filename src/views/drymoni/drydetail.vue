<template>
  <div class="dryitem">
      <div><button class="btn btn-danger" @click="$router.go(-1)">返回</button></div>
      <div>
          <div><img :src="drylist.pic" alt=""></div>
          <p>{{drylist.title}}</p>
          <p style="color:red">￥{{drylist.price}}</p>
          <button class="btn btn-danger" style="width:100%">加入购物车</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id: "",
      drylist: []
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getdrylist();
  },
  methods: {
    getdrylist() {
      this.$axios.get("/static/goods.json").then(res => {
        console.log(res.result);
        let list = res.result;
        let arr = list.filter(item => {
          return item._id == this.id;
        });
        this.drylist = arr[0];
      });
    }
  }
};
</script>

<style scoped>
.dryitem {
  width: 100%;
  border: #dddddd 1px solid;
  padding: 10px;
}
.dryitem img {
  width: 100%;
}
</style>
