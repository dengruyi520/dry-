<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar title="lativ诚衣" left-text left-arrow />
    <!-- 搜索栏 -->
    <van-search
      v-model="keyword"
      shape="round"
      background="#fff"
      placeholder="搜索商品"
      @click="$router.push('/lativ/search')"
    />
    <!-- 标签页 -->
    <van-tabs color="#505050" line-height="2px" @click="onClick">
      <van-tab v-for="(item,index) in fenlei" :name="item._id" :title="item.title" :key="index"></van-tab>
    </van-tabs>
    <!--  -->

    <ul id="ul">
      <li>综合</li>
      <li>销量</li>
      <li>新品</li>
      <li @click="changNum">价格</li>
    </ul>
    <!-- 页面list -->
    <ul class="list">
      <li v-for="(item,index) in changeSort" :key="index">
        <img :src="item.pic" alt />
        <p>{{ item.title }}</p>
        <p>
          <span>￥{{ item.price }}</span>
          <van-icon name="cart-o" />
        </p>
      </li>
    </ul>
    <!-- 底部tabbar -->
    <van-tabbar v-model="active1">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="17">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
    </van-tabbar>
    <!--返回顶部 -->
    <div class="top" v-show="flag" @click="top">
      <van-icon name="arrow-up" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索关键字
      keyword: "",
      active: 0,
      active1: 0,
      sortNum: 0,
      list: [],
      fenlei: [],
      cid: 0,
      flag: false
    };
  },
  computed: {
    changeSort() {
      let data = this.list;
      data.sort((a, b) => {
        if (this.sortNum == 1) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      //分类筛选
      if (this.cid != 0) {
        data = data.filter(item => {
          return item.cid == this.cid;
        });
      }

      return data;
    }
  },
  created() {},
  mounted() {
    this.getList();
    this.getFenlei();
    window.addEventListener("scroll", () => {
      let html = document.documentElement || document.body;
      if (html.scrollTop > html.clientHeight) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    });
  },
  watch: {},
  methods: {
    getList() {
      this.$axios.get("/static/json/lativ/list1.json").then(res => {
        this.list = res.result;
      });
    },
    getFenlei() {
      this.$axios.get("/static/json/lativ/fenlei.json").then(res => {
        console.log(res);

        this.fenlei = res.result;
      });
    },
    //
    onClick(name) {
      this.cid = name;
    },
    changNum() {
      if (this.sortNum == 0 || this.sortNum == 2) {
        this.sortNum = 1;
      } else {
        this.sortNum = 2;
      }
    },
    top(){
      let html = document.documentElement || document.body;
      let timer = setInterval(()=>{
        html.scrollTop -= 20
        if(html.scrollTop ==0){
            clearInterval(timer)
        }
      })
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #f8f8f8;
  padding-bottom: 44px;
  li {
    width: 46%;
    background: #ffffff;
    margin-top: 10px;

    img {
      width: 100%;
      height: 200px;
    }
    p:nth-of-type(1) {
      font-size: 16px;
    }
    p:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span {
        color: red;
      }
    }
  }
}
#ul {
  width: 100%;
  height: 50px;
  display: flex;
  li {
    padding: 10px;
    text-align: center;
    line-height: 50px;
  }
  li:nth-child(4) {
    color: #ff0000;
  }
}
.top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 80px;
  right: 10px;
  // border: 1px solid #d4d4d4;
  text-align: center;
  line-height: 50px;
  background: #d4d4d4;
}
</style>
