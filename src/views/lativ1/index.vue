<template>
  <div>
    <!-- 头部搜索 -->
    <van-nav-bar title="lativ诚衣" />
    <van-search shape="round" @click="$router.push('/lativ1/search')" />
    <!-- nav标签栏 -->
    <van-tabs color="#505050" line-height="2px" @click="yy_changeTab">
      <van-tab v-for="(item,index) in yy_nav" :name="item._id" :title="item.title" :key="index"></van-tab>
    </van-tabs>
    <!-- 功能nav -->
    <ul id="yy_nav">
      <li>综合</li>
      <li>销量</li>
      <li>新品</li>
      <li @click="yy_changeSort">价格</li>
    </ul>
    <!-- 商品列表 -->
    <ul id="yy_goods">
      <li v-for="(item,index) in yy_goodsSort" :key="index">
        <img :src="item.pic" alt />
        <p>{{item.title}}</p>
        <p>
          <span>￥{{item.price}}</span>
          <span @click="yy_detail(item)">
            <van-icon name="cart-o" />
          </span>
        </p>
      </li>
    </ul>
    <!-- tabbar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
    </van-tabbar>
    <!-- 返回顶部 -->
    <div id="yy_top" v-if="yy_topFlag" @click="yy_backTop">
      <van-icon name="arrow-up" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      yy_nav: [],
      yy_goods: [],
      yy_cid: 0,
      yy_flag: 0,
      yy_topFlag: false
    };
  },
  computed: {
    //
    yy_goodsSort() {
      let yy_data = this.yy_goods;

      if (this.yy_cid != 0) {
        yy_data = yy_data.filter(item => {
          return item.cid == this.yy_cid;
        });
      }
      yy_data.sort((a, b) => {
        if (this.yy_flag == 1) {
          return a.price - b.price;
        } else if (this.yy_flag == 2) {
          return b.price - a.price;
        }
      });
      return yy_data;
    }
  },
  created() {},
  mounted() {
    this.yy_getNavList();
    this.yy_getGoodsList();
    window.addEventListener("scroll", () => {
      let html = document.documentElement || document.body;
      if (html.scrollTop > html.clientHeight) {
        this.yy_topFlag = true;
      }else{
        this.yy_topFlag = false;
      }
    });
  },
  watch: {},
  methods: {
    //   获取nav数据
    async yy_getNavList() {
      let { result: yy_res } = await this.$axios.get(
        "/static/json/lativ/fenlei.json"
      );
      console.log(yy_res);
      this.yy_nav = yy_res;
    },
    // 获取列表数据
    async yy_getGoodsList() {
      let { result: yy_res } = await this.$axios.get(
        "/static/json/lativ/list1.json"
      );
      console.log(yy_res);
      this.yy_goods = yy_res;
    },
    // 点击获取tab的id
    yy_changeTab(name) {
      this.yy_cid = name;
    },
    // 改变排序的状态
    yy_changeSort() {
      if (this.yy_flag == 0 || this.yy_flag == 2) {
        this.yy_flag = 1;
      } else {
        this.yy_flag = 2;
      }
    },
    // 详情页面
    yy_detail(el) {
      console.log(`商品名称 : ${el.title} 价格 : ${el.price}`);
    },
    // 返回顶部
    yy_backTop(){
      
      let html = document.documentElement || document.body;
      let timer = setInterval(()=>{
        html.scrollTop -= 20
        if(html.scrollTop == 0){
          clearInterval(timer)
        }
      })
        
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#yy_nav {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  li {
    padding: 10px;
  }
  li:nth-child(4) {
    color: red;
  }
}
// 列表样式
#yy_goods {
  width: 100%;
  padding: 0 5% 50px 5%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 48%;
    background: #f5f5f5;
    margin-left: 6px;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
    }
    img {
      width: 100%;
      height: 200px;
    }
  }
}
// 返回顶部
#yy_top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 60px;
  right: 5%;
  background: #d4d4d4;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
}
</style>
