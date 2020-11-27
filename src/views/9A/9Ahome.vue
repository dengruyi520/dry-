<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <h4>UNI-ADMIN</h4>
            <!-- 头部导航栏 -->
            <div class="line"></div>
            <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/dry9Auser">首页</el-menu-item>
            <el-menu-item index="2">商品</el-menu-item>
            <el-menu-item index="3">订单</el-menu-item>
            <el-menu-item index="4">会员</el-menu-item>
            <el-menu-item index="5">设置</el-menu-item>
            </el-menu>
        <!-- 头部退出部分 -->
        <el-button type="info" size="medium" @click="quit">退出</el-button>
      </el-header>
      <!-- 页面主题区域 -->
       <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    // this.$axios.get(`menus`).then(res => {
    //   // console.log(res);
    //   this.menus = res.data;
    // });
  },
  watch: {},
  methods: {
    // 退出登录
    // 1删除本地存储数据
    // 2跳转到登录页面
    quit() {
      // element-ui里面的确认框
      this.$confirm("您确定要退出登录嘛？","提示",{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(res=>{//点击确定按钮触发
        this.$message.success("您已成功退出登录")
        //1.删除本地存储的数据
        localStorage.removeItem("user");
        // 2.跳转到登录页面
        this.$router.push("/dry9A")
      }).catch(()=>{//点击取消按钮触发
        this.$message.error("您已经取消退出登录")
      })
    }
  },
  components: {},
    //   路由守卫
  beforeRouteEnter(to, from, next) {
    let token = sessionStorage.getItem("user_token");
    if (token == null) {
      next("dry9A");
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  min-height: 700px;
  // background: pink;
  .el-aside {
    // background: #373d41;
    min-height: 500px;
  }
}
.el-header {
  background: #373d41;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line{
    width: 200px;
}
</style>
