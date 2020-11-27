<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar left-text="搜索" left-arrow @click-left="$router.go(-1)" />
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="keyword"
        show-action
        placeholder="输入关键字"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul class="souList">
      <li v-for="(item,index) in sou" :key="index">{{ item.title }}</li>
    </ul>
    <hr />
    <div class="del">
      <span>历史记录</span>
      <van-icon name="delete" @click="remove" />
    </div>
    <ul class="ullist">
      <li v-for="(item,index) in historyList" :key="index">{{ item }}</li>
    </ul>
    <hr size="10" />
    <div class="del">
      <span>热门搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      historyList: [],
      list: []
    };
  },
  computed: {
    sou() {
      if (this.keyword == "") {
       
      } else {
        return this.list.filter(item => {
          return item.title.includes(this.keyword);
        });
      }
    }
  },
  created() {},
  mounted() {
    this.getData();
    if (this.keyword == "") {
      this.list = [];
    }
    this.$axios.get("/static/json/lativ/list1.json").then(res => {
      this.list = res.result;
    });
  },
  watch: {},
  methods: {
    //   获取本都储存的历史记录
    getData() {
      let data = window.localStorage.getItem("lativ_history");
      if (data == null) {
        this.historyList = [];
      } else {
        this.historyList = JSON.parse(data);
      }
    },
    //   点回车添加历史记录
    onSearch(val) {
      if (val == "") {
        this.$toast.fail("请输入搜索内容");
        return false;
      }
      this.historyList.unshift(val);
      if (this.historyList.length > 8) {
        this.historyList.pop();
      }
      window.localStorage.setItem(
        "lativ_history",
        JSON.stringify(this.historyList)
      );
      this.keyword = "";
    },
    onCancel() {
      //   Toast('取消');
    },
    // 删除历史记录
    remove() {
      window.localStorage.removeItem("lativ_history");
      this.getData();
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.del {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: centerl;
  box-sizing: border-box;
  padding: 10px;
  color: #929292;
}
.ullist {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  color: #929292;
  padding-left: 3%;
  li {
    width: 80px;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
    margin-left: 5px;
  }
}
.souList{
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 40px;
  li{
    width: 100%;
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #d4d4d4d4;
    text-indent: 1em;
  }
}
</style>
