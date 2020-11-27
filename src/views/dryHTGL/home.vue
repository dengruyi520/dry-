<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <h4>管理后台</h4>
        <el-button type="info" size="medium" @click="quit">退出</el-button>
      </el-header>
      <!-- 页面主题区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside style="width:200px;">
          <!-- 侧边栏菜单区域 -->
          <el-menu
            default-active
            class="el-menu-vertical-demo"
            background-color="#373d41"
            text-color="#fff"
            router
          > 
            <el-submenu :index="item.id" v-for="(item,index) in menus" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item :index="it.path" v-for="(it,j) in item.children" :key="j">
                <span>{{ it.authName }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu> 
        </el-aside>
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
    this.$axios.get(`menus`).then(res => {
      // console.log(res);
      this.menus = res.data;
    });
  },
  watch: {},
  methods: {
    // 退出登录
    quit() {
      this.$router.push("/drylogin");
      window.sessionStorage.removeItem("ruleForm");
      window.sessionStorage.removeItem("ruleForm_token");
    }
  },
  components: {},
  // 路由守卫   
  beforeRouteEnter(to, from, next) {
    // 获取本地存储的token
    let token = sessionStorage.getItem("ruleForm_token");
    // 看看本地有没有token   如果没有跑到登录
    if (token == null) {
      next("/drylogin");
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
    background: #373d41;
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
</style>
