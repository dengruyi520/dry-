<template>
  <div>
    <el-container>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dryhomee' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/rights' }">权限管理</el-breadcrumb-item>
        <el-breadcrumb-item >权限列表</el-breadcrumb-item>
      </el-breadcrumb>
    </el-container>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <!-- 权限等级颜色 -->
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level ==='0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level ==='1'">二级</el-tag>
            <el-tag type="warning" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      rightsList: []
    };
  },
  mounted() {
    this.getRightsList();
  },
  computed: {},
  methods: {
    getRightsList() {
      this.$axios.get(`rights/list`).then(res => {
        console.log(res);

        if (res.meta.status !== 200) {
          // 提示成功的信息
          this.$message.error("获取权限列表失败");
        }
        this.rightsList = res.data;
        console.log(this.rightsList);
      });
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  line-height: 3;
}
</style>
