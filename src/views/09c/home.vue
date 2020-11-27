<template>
  <div class="el-container">
      <el-container class="el-container">
        <el-header>
            <h4>公司名称Dry 后台管理</h4>
            <el-button>退出</el-button>
        </el-header>
        <el-container>
            <!-- 侧边栏 -->
             <el-aside>
          <el-menu
            default-active
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="skyblue"
            router
          >
            <!-- 导航1-->
            <el-submenu >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item>
                <el-menu-item index="/dryuser">用户列表</el-menu-item>
              </el-menu-item>
              
            </el-submenu>
            <!-- 导航2 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              
            </el-submenu>
            <!-- 导航3 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
             
            </el-submenu>
            <!-- 导航4 -->
           <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
             
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
  name: "",
  data() {
    return {
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
// .drybox{
//     min-width: 1366px;
// }

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
