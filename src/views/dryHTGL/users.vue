<template>
  <div>
   <el-container>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dryhomee' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/users' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item >用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      
    </el-container>
    <!-- 卡片视图 -->
    <el-card class="box-card">
    <template>
      <el-input placeholder="请输入搜索内容" style="width:25%" v-model="query" ></el-input>
      <!-- <el-button slot="append" icon="el-icon-search" @click="getList"></el-button> -->
      <el-button type="info" icon="el-icon-search"  @click="getList">搜索</el-button>
      <el-button type="info" style="margin-left:20px"   @click="addDialogVisible = true">添加用户</el-button>




      <el-table :data="list" border style="width: 100%;margin-top:20px;margin-bottom:20px;">
        <el-table-column prop="id" label="#" width="50"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="role_name" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" 
            active-color="#13ce66" 
            inactive-color="#808080"
            @change="updateUserState(scope.row.id,scope.row.mg_state)"
            ></el-switch>
            <!-- 修改用户的状态 -->
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!-- <el-button size="mini" type="success" @click="toDetail(list)">查看详情</el-button> -->
            <el-button type="primary" size="mini" icon="el-icon-edit" circle @click="userEdit(scope.row)"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" circle @click="del(scope.row.id)"></el-button>
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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" type="password" prop="password">
          <el-input v-model="addForm.password"></el-input>
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
    <el-dialog title="修改用户" :visible.sync="userEditShow" width="50%" > 
      <!-- 修改内容主体区域 -->
      <el-form  label-width="60px">
        <el-form-item label="用户名" prop="username" disabled>
          <el-input v-model="edits.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="edits.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="edits.mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
       <span slot="footer" class="dialog-footer">
        <el-button @click="userEditShow = false">取 消</el-button>
        <el-button type="primary"  @click="saveUser">确 定</el-button>
      </span>
    </el-dialog> 
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
      list: [], //获取用户列表
      query: "",
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,

      // 添加用户的表单数据
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      // 用户编辑操作
      userEditShow: false, //修改用户弹框的标识符
      edits: {
        id: 0,
        username: "",
        email: "",
        mobile: ""
      }
      //  addFormRules: {
      //   username: [
      //     { required: true, message: "请输入用户名", trigger: "blur" },
      //     {
      //       min: 3,
      //       max: 10,
      //       message: "用户名的长度在3~10个字符之间",
      //       trigger: "blur"
      //     }
      //   ],
      //   password: [
      //     { required: true, message: "请输入密码", trigger: "blur" },
      //     {
      //       min: 6,
      //       max: 15,
      //       message: "用户名的长度在6~15个字符之间",
      //       trigger: "blur"
      //     }
      //   ],
      //   email: [
      //     { required: true, message: "请输入邮箱", trigger: "blur" },
      //     { validator: checkEmail, trigger: "blur" }
      //   ],
        // mobile: [
        //   { required: true, message: "请输入手机号", trigger: "blur" },
        //   { validator: checkMobile, trigger: "blur" }
        // ]
      // }
    };
  },
  mounted() {
    this.getList();
  },
  computed: {},
  methods: {
    // 改变每页显示条数的时候触发
    handleSizeChange(val) {
      // 改变pagesize的值，调用列表数据
      this.pagesize = val;
      this.getList();
    },
    // 改变页码的时候触发时间
    handleCurrentChange(val) {
      // 改变当前页码数，调用列表数据
      this.pagenum = val;
      this.getList();
    },
    // 获取列表数据
    getList() {
      this.$axios
        .get(`users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`)
        .then(res => {
          console.log(res);

          if (res.meta.status == 200) {
            this.list = res.data.users;
            this.total = res.data.total; //用户的总条数
            console.log(this.list);
          }
        });
    },
    // 添加用户
    addUser() {
      // 判断添加用户的用户名和密码不能为空
      if (this.addForm.username == "" || this.addForm.password == "") {
        this.$message.error("用户名和密码不能为空！");
        return false;
      }
      // 请求添加用户的接口，把数据传递过去
      this.$axios.post("users", this.addForm).then(res => {
        console.log(res);
        // 判断用户是否添加成功
        if (res.meta.status == 201) {
          // 提示成功的信息
          this.$message.success(res.meta.msg);
          // 获取列表的数据
          this.getList();
          this.addForm.username="";
          this.addForm.password="";
          this.addForm.email="";
          this.addForm.mobile="";
          // 隐藏添加用户的对话框 关闭对话框
          this.addDialogVisible = false;
        } else {
          this.$message.error(res.meta.msg);
        }
      });
    },
    // 修改用户的基本信息
    userEdit(row) {
      console.log(row);
      // 控制编辑弹框显示
      this.userEditShow = true;
      //  把当前选中的用户的信息赋值给edits
      this.edits = row;
    },
    // 修改用户的信息
    saveUser() {
      if (this.edits.email == null || this.edits.mobile == null) {
        this.$message.error("邮箱或手机号不能为空");
        return false;
      }
      this.$axios
        .put(`users/${this.edits.id}`, {
          email: this.edits.email,
          mobile: this.edits.mobile
        })
        .then(res => {
          // 修改编辑成功以后出发的事件
          if (res.meta.status == 200) {
            this.getList();
            this.$message.success(res.meta.msg);
            // 控制编辑弹框的显示
            this.userEditShow = false;
          } else {
            this.$message.error(res.meta.msg);
          }
        });
    },
    // 修改用户的状态 userod用户的id  status要修改的状态
    updateUserState(id, state) {
      console.log(id, state);
      // 调用接口修改用户的状态
      this.$axios.put(`users/${id}/state/${state}`).then(res => {
        console.log(res);
        if (res.meta.status == 200) {
          this.$message.success(res.meta.msg);
        } else {
          this.$message.error(res.meta.msg);
        }
      });
    },
    // 删除
    del(id) {
      // console.log(id);
      // 调用接口修改用户的状态
      this.$confirm("您确定要删除用户吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
      // 确认删除
        .then(() => {
          this.$axios.delete(`users/${id}`).then((res) => {
            console.log(res);
            if (res.meta.status == 200) {
              this.$message.success(res.meta.msg);
              this.getList();
            } else{
              this.$message.error(res.meta.msg);
            }
          });
        })
        // 或则点击取消按钮触发
        .catch(() => {
          this.$message("您已经取消删除用户");
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
