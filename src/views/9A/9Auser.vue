<template>
  <div>
      <el-container>
      <!-- 侧边栏 -->
             <el-aside>
          <el-menu
            efault-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <!-- 导航1-->
            <el-submenu >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>首台首页</span>
              </template>
            </el-submenu>
            <!-- 导航2 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>相册管理</span>
              </template>
            </el-submenu>
            <!-- 导航3 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品列表</span>
              </template>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 内容部分 -->
        <el-main>

        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
