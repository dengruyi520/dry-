<template>
  <div>
    <!-- 头部标题 -->
    <nav>
      <van-nav-bar title="商品列表" />
    </nav>
    <!-- 标签页 -->
    <ul class="ul">
      <li
        :class="activeIndex==index?'active':''"
        v-for="(item,index) in tabArr"
        :key="index"
        @click="tabChange({index,api:item.type})"
      >{{ item.name }}</li>
    </ul>
    <ul class="ul" style="background:#efefef;border:1px solid #efefef">
      <li
        @click="sort(index)"
        v-for="(item,index) in sortArr"
        :key="index"
        :style="{color:sortIndex==index?'green':'#000'}"
      >{{ item }}</li>
    </ul>
    <!-- <router-view></router-view> -->
    <!-- 列表页面 -->
    <div class="list">
      <van-card
        v-for="(item,index) in list"
        :key="index"
        num
        :price="item.price"
        desc="描述信息"
        :title="item.title"
        :thumb="item.pic"
      >
        <template #num>
          <van-button size="normal" round @click="addShop(item)">+</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
      sortIndex: -1,
      tabArr: [
        {
          name: "推荐",
          type: "/vue4/child/tj"
        },
        {
          name: "母婴",
          type: "/vue4/child/my"
        },
        {
          name: "鞋包饰品",
          type: "/vue4/child/xbsp"
        },
        {
          name: "食品",
          type: "/vue4/child/sp"
        },
        {
          name: "数码家具",
          type: "/vue4/child/smjj"
        }
      ],
      sortArr: ["综合排序", "销量优先", "价格"]
    };
  },
  computed: {
    ...mapState(["list"])
  },
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    // 获取数据
    getData() {
      this.$axios.get("/static/json/vue4.json").then(res => {
        console.log(res);
        this.$store.commit("getList",res.result);
      });
    },
    // 添加到购物车
    addShop(obj) {
      this.$router.push('/vue4/shop')
      this.$store.commit('addShop',obj)
    },
    tabChange(obj){
      this.activeIndex = obj.index
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  background: pink;
  li {
    flex: 1;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  li.active {
    background: green;
    color: white;
  }
}
</style>
