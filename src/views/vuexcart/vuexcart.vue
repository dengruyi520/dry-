<template>
  <div class="container mt-3">
      <h3 class="text-center">商品信息</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">名称</th>
          <th scope="col">价格</th>
          <th scope="col">数量</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in this.$store.state.dryGoodsList" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
              <!-- 商品数量显示的条件是它的 是否加入山沟值  为false(没加入商品)隐藏 weitrue（加入商品 显示-->
              <span v-show="item.isShow==true">{{item.count}}</span>
          </td>
          <td>
            <button class="btn btn-info" v-show="item.isShow==false" @click="item.isShow=true">加入购物车</button>
            <span v-show="item.isShow==true">
                <button class="btn btn-info">+</button>
                <button class="btn btn-warning">-</button>
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="text-center">
          <td colspan="6">
            <!-- <button class="btn btn-danger">全部清空</button> -->
          </td>
        </tr>
      </tfoot>
    </table>
    <h3 class="text-center">购物车信息</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">名称</th>
          <th scope="col">价格</th>
          <th scope="col">数量</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in this.$store.state.dryGoodsList" :key="index" v-if="item.isShow==true">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
          <td>￥{{item.price*item.count}}元</td>
          <td>
            <button class="btn btn-danger">X</button>
            <button class="btn btn-info">+</button>
            <button class="btn btn-warning">-</button>
            
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="text-center">
          <td colspan="6">
              <span>总数：<b>{{getTotalNum}}</b></span><span>总价:<b>{{getTotal}}</b></span>
            <button class="btn btn-danger" @click="delAll()">全部清空</button>
          </td>
        </tr>
      </tfoot>
    </table>
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    //   +++++++++
    jia(index) {
      this.$store.commit("addProductNum", index);
    },
    // --------
    jian(index) {
      this.$store.commit("deProductNum", index);
    },
    getGoodsList() {
      this.$axios.get("/static/drydata.json").then(res => {
        console.log(res.result);
        this.$store.commit("adddryGoodsList", res.result);
      });
    },
    // 删除
    del(item){
        item.isShow = false;
        item.count = 1;
    },
    delAll(){
        this.$store.commit("delAllProduct");
    }
  },
  computed: {
    num() {
      return this.$store.state.productNum;
    },
    getTotal(){
        return this.$state.getters.total
    },
    getTotalNum(){
        return this.$state.getters.totalNum
    }
  }
};
</script>

<style scoped>
</style>
