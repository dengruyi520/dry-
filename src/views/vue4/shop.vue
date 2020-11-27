<template>
  <div>
    <!-- 头部标题 -->
    <nav>
      <van-nav-bar title="购物清单" />
    </nav>
    <!-- 商品列表 -->
    <div class="list">
      <div class="item" v-for="(item,index) in shopList" :key="index">
        <div>
          <input type="checkbox" v-model="item.checked" />
        </div>
        <dir class="img">
          <img :src="item.pic" alt />
        </dir>
        <div>
          <p>{{item.title}}</p>
          <p>￥{{item.price}}</p>
          <p>库存12件</p>
        </div>
        <div>
          <button @click="jjFn({index,e:'+'})">+</button>
          <span>{{item.num}}</span>
          <button @click="jjFn({index,e:'-'})">-</button>
        </div>
      </div>
      <!-- 底部结算 -->
      <van-submit-bar :price="vue4Total" button-text="去结算">
        <input type="checkbox" :checked="checkAll"  @click="changeCk" >全选
        <span style="margin-left:20px;">已选中({{ vue4Sum }})</span>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["shopList","checkAll"]),
    ...mapGetters(['vue4Total','vue4Sum'])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    jjFn(obj) {
      this.$store.commit("jjFn", obj);
    },
   changeCk(){
       this.$store.commit('changeCk')
   }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  .item {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #d4d4d4;
    margin-top: 10px;
    div.img {
      img {
        width: 50px;
        height: 50px;
      }
    }
    button {
      border: 0;
    }
  }
}
</style>
