<template>
  <div>
      <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dryHH' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/dryuser' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item >用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      
    </el-container>
    <!-- 卡片视图 -->
    <el-card class="box-card">
    <template>
      <el-input placeholder="请输入搜索内容" style="width:25%" ></el-input>
      <!-- <el-button slot="append" icon="el-icon-search" @click="getList"></el-button> -->
      <el-button type="info" icon="el-icon-search"  >搜索</el-button>
      <el-button type="info" style="margin-left:20px"  @click="addDialogVisible = true" >添加用户</el-button>




      <el-table :data="drylist" border style="width: 100%;margin-top:20px;margin-bottom:20px;">
        <el-table-column prop="id" label="#" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column  label="状态">
          <template slot-scope="scope">
            <el-switch v-model="drylist.mg_state" 
            active-color="#13ce66" 
            inactive-color="#808080"
           
            ></el-switch>
            <!-- 修改用户的状态 -->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" type="success" @click="toDetail(list)">查看详情</el-button> -->
            <el-button type="primary" size="mini" icon="el-icon-edit" circle ></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="remove()"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template>
      <el-pagination
         @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[2, 5, 10]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </template>
</el-card>

        <!-- 添加用户的对话框 -->
     <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%"> 
      <!-- 内容主体区域 -->
      <!-- :model="addForm" :rules="addFormRules" ref="addFormRef" -->
      <el-form  label-width="70px">
          <el-form-item label="id" prop="id">
          <el-input v-model="addForm.id"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="角色" type="role_name" prop="role_name">
          <el-input v-model="addForm.role_name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
        <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary"  @click="addUser">确 定</el-button>
      </span>
    </el-dialog> 





        <!-- 修改用户的对话框 -->
    <!-- <el-dialog title="修改用户" :visible.sync="userEditShow" width="50%" >  -->
      <!-- 修改内容主体区域 -->
      <!-- <el-form  label-width="60px">
        <el-form-item label="用户名" prop="username" disabled>
          <el-input v-model="edits.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="edits.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="edits.mobile"></el-input>
        </el-form-item>
      </el-form> -->
      <!-- 底部区域 -->
       <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="userEditShow = false">取 消</el-button>
        <el-button type="primary"  @click="saveUser">确 定</el-button>
      </span>
    </el-dialog>  -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      pagenum: 1, //第几页
      pagesize: 2, //每页显示的数据条数
      total: 0, //总条数
      drylist: [],
      addDialogVisible: false,
      //   添加用户的表单数据
      addForm: {
        id: "",
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
    };
  },
  mounted() {
    //   调用方法
    this.getlist();
  },
  computed: {},
  methods: {
    // 改变每页显示条数的时候触发
    handleSizeChange(val) {
      // 改变pagesize的值，调用列表数据
      this.pagesize = val;
      this.getlist();
    },
    // 改变页码的时候触发时间
    handleCurrentChange(val) {
      // 改变当前页码数，调用列表数据
      this.pagenum = val;
      this.getlist();
    },
    // 获取列表数据
    getlist() {
      this.$axios.get("/static/userlist.json").then(res => {
        console.log(res.data.users);
        this.drylist = res.data.users;
      });
    },
    // 添加用户
    addUser() {
      if (this.addForm.username == "" || this.addForm.role_name == "") {
        this.$message.error("用户名和角色不能为空！");
        return false;
      }
      //   添加到列表
      this.drylist.push({
        id: this.addForm.id,
        username: this.addForm.username,
        role_name: this.addForm.role_name,
        email: this.addForm.email,
        mobile: this.addForm.mobile
      });
      //   清空添加列表数据
      this.addForm.id = "";
      this.addForm.username = "";
      this.addForm.role_name = "";
      this.addForm.email = "";
      this.addForm.mobile = "";
      //   隐藏添加用户的对话框   关闭对话框
      this.addDialogVisible = false;
      // 获取列表的数据
      //   this.getlist();
    },

    // 删除
    remove() {
      this.$confrim("您确定要删除用户吗？", "提示", {
        confrimButtonText: "确定",
        cancelButtonTextL: "取消",
        type: "warning"
      })
        // 确定删除
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功"
          });
        })
        .catch(() => {
          type: "info";
          message: "删除成功";
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
