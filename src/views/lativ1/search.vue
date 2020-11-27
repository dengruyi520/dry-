<template>
  <div>
    <!-- 头部搜索 -->
    <van-nav-bar left-text="搜索" left-arrow @click-left="$router.go(-1)" />
    <form action="/">
      <van-search v-model="yy_keyword" show-action placeholder="输入关键词" @search="onSearch" />
    </form>
    <ul id="yy_titleList">
      <li v-for="(item,index) in yy_search" :key="index">{{ item.title }}</li>
    </ul>
    <div id="yy_histroy">
      <span>历史记录</span>
      <span @click="yy_remove">
        <van-icon name="delete" />
      </span>
    </div>
    <ul id="yy_histroyList">
      <li v-for="(item,index) in yy_histroyList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yy_keyword: "",
      yy_histroyList: [],
      yy_titleList: []
    };
  },
  computed: {
    // 模糊搜索
    yy_search() {
      if (this.yy_keyword != "") {
        return this.yy_titleList.filter(item => {
          return item.title.includes(this.yy_keyword);
        });
      }
    }
  },
  created() {},
  mounted() {
    this.yy_getList();
    this.yy_title();
  },
  watch: {},
  methods: {
    // 添加历史记录
    onSearch(val) {
      if (val == "") {
        this.$toast.fail("请输入搜索内容");
        return false;
      }
      this.yy_histroyList.unshift(val);
      if (this.yy_histroyList.length > 6) {
        this.yy_histroyList.pop();
      }
      window.localStorage.setItem(
        "histroy_list",
        JSON.stringify(this.yy_histroyList)
      );
      this.yy_keyword = "";
    },
    // 获取历史记录
    yy_getList() {
      let yy_data = window.localStorage.getItem("histroy_list");
      if (yy_data) {
        this.yy_histroyList = JSON.parse(yy_data);
      } else {
        this.yy_histroyList = [];
      }
    },
    // 删除历史记录
    yy_remove() {
      window.localStorage.removeItem("histroy_list");
      this.yy_getList();
    },
    // 获取关键字列表
    yy_title() {
      this.$axios.get("/static/json/lativ/list1.json").then(res => {
        console.log(res);

        this.yy_titleList = res.result;
      });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#yy_histroy {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
#yy_histroyList {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #959595;
  li {
    width: 20%;
    padding: 10px;
    background: #f5f5f5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 5%;
    margin: 2%;
  }
}
#yy_titleList {
  width: 96%;
  margin: 2%;
  margin-top: 0;
  li {
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #d4d4d4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-indent: 1em;
  }
}
</style>
