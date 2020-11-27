<template>
  <div class="dryapp">
      <!-- 面包屑导航 -->
      <!-- <el-container> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dryhomee' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
        <el-breadcrumb-item >角色列表</el-breadcrumb-item>
      </el-breadcrumb>
    <!-- </el-container> -->

    <!-- 卡片视图 -->
    <el-card class="box-card">
        <!-- 添加觉得按钮区域 -->
        <el-row>
            <el-col>
                <el-button type="primary" @click="addDialogVisible = true">添加角色</el-button>
            </el-col>
        </el-row>

        <!-- 角色列表区域 -->
        <el-table :data="rolelist" border stripe>
            <!-- 展开列 -->
            <el-table-column type="expand">
                <template slot-scope="scope">
                <el-row class="dryrow" v-for="(item1, i1) in scope.row.children" :key="item1.id">
                    <!-- 一级权限 -->
                    <el-col :span="5">
                        <el-tag> {{item1.authName}}</el-tag>
                        <i class="el-icon-caret-right"></i>
                    </el-col>
                    <!-- 二级权限和三级权限 -->
                    <el-col :span="19">
                        <!-- 通过for循环 嵌套渲染二级权限 -->
                        <el-row class="dryrow" v-for="(item2, i2) in item1.children" :key="item2.id">
                            <el-col :span="6">
                                <el-tag type="success">{{item2.authName}}</el-tag> 
                                <i class="el-icon-caret-right"></i>  
                            </el-col>            
                            <el-col :span="18">
                                <el-tag type="warning"  v-for="(item3, i3) in item1.children" :key="item3.id" closable 
                                @click="removeRightId(scope.row,item3.id)">{{item3.authName}}</el-tag>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <pre></pre>
                </template>
            </el-table-column>
            <!-- 索引列 -->
            <el-table-column type="index"></el-table-column>
            <el-table-column label="角色名称" prop="roleName"></el-table-column>
            <el-table-column label="角色描述" prop="roleDesc"></el-table-column>
            <el-table-column label="操作" width="400px">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" icon="el-icon-edit" @click="userEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click="del((scope.row.id))">删除</el-button>
                    <el-button size="mini" type="warning" icon="el-icon-setting">分配权限</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>


    <!-- 添加用户的对话框 -->
     <el-dialog title="添加角色" :visible.sync="addDialogVisible" width="50%"> 
      <!-- 内容主体区域 -->
      <!-- :model="addForm" :rules="addFormRules" ref="addFormRef" -->
      <el-form  label-width="70px">
        <el-form-item label="名称" prop="roleName">
          <el-input v-model="addForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="描述" type="roleDesc" prop="roleDesc">
          <el-input v-model="addForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <!-- 底部区域 -->
       <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary"  @click="addRoles">确 定</el-button>
      </span>
    </el-dialog> 



    <!-- 修改用户的对话框 -->
    <el-dialog title="修改用户" :visible.sync="userEditShow" width="50%" > 
      <!-- 修改内容主体区域 -->
      <el-form  label-width="60px">
        <el-form-item label="名称" prop="roleName" disabled>
          <el-input v-model="edits.roleName"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="roleDesc">
          <el-input v-model="edits.roleDesc"></el-input>
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
      // 所有数据列表的数据
      rolelist: [],
      // 控制添加用户对话框的显示与隐藏
      addDialogVisible: false,
      // 添加用户的表单数据
      addForm: {
        roleName: "",
        roleDesc: ""
      },
      // 用户编辑操作
      userEditShow: false, //修改用户弹框的标识符
      // 用户编辑操作
      userEditShow: false, //修改用户弹框的标识符
      edits: {
        id: 0,
        roleName: "",
        roleDesc: ""
      }
    };
  },
  mounted() {
    this.getRoleList();
  },
  computed: {},
  methods: {
    //   获取所有角色的列表
    getRoleList() {
      this.$axios.get(`roles`).then(res => {
        console.log(res);

        if (res.meta.status !== 200) {
          // 提示成功的信息
          this.$message.error("获取权限列表失败");
        }
        this.rolelist = res.data;
        console.log(this.rolelist);
      });
    },
    // 添加用户
    addRoles() {
      // 判断添加用户的用户名和密码不能为空
      if (this.addForm.roleName == "" || this.addForm.roleDesc == "") {
        this.$message.error("角色名和角色描述不能为空！");
        return false;
      }
      // 请求添加用户的接口，把数据传递过去
      this.$axios.post("roles", this.addForm).then(res => {
        console.log(res);
        // 判断用户是否添加成功
        if (res.meta.status == 201) {
          // 提示成功的信息
          this.$message.success(res.meta.msg);
          // 获取列表的数据
          this.getRoleList();
          this.addForm.roleName = "";
          this.addForm.roleDesc = "";
          // 隐藏添加用户的对话框 关闭对话框
          this.addDialogVisible = false;
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
          this.$axios.delete(`roles/${id}`).then(res => {
            console.log(res);
            if (res.meta.status == 200) {
              this.$message.success(res.meta.msg);
              this.getRoleList();
            } else {
              this.$message.error(res.meta.msg);
            }
          });
        })
        // 或则点击取消按钮触发
        .catch(() => {
          this.$message("您已经取消删除用户");
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
      if (this.edits.roleName == null || this.edits.roleDesc == null) {
        this.$message.error("名称或描述不能为空");
        return false;
      }
      this.$axios
        .put(`roles/${this.edits.id}`, {
          roleName: this.edits.roleName,
          roleDesc: this.edits.roleDesc
        })
        .then(res => {
          // 修改编辑成功以后出发的事件
          if (res.meta.status == 200) {
            this.getRoleList();
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
      this.$axios.put(`roles/${id}/state/${state}`).then(res => {
        console.log(res);
        if (res.meta.status == 200) {
          this.$message.success(res.meta.msg);
        } else {
          this.$message.error(res.meta.msg);
        }
      });
    },
    // 根据id删除对应的权限
    async removeRightId(role, id) {
      alert("!!!!!!!!")
      // 弹框提示用户是否要删除
      const confirmResult = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => err);
      //.catch 捕获用户的取下行为
      // 判断用户是否想要删除用户的权限
      if(confirmResult !== "confirm"){
        return this.$message.info("取消删除");
      }
      this.$axios.delete(`roles/${role.id}/rights/${id}`).then(res=>{
        console.log(res.data);
        if(res.meta.status !==200){
          this.$message.error("删除权限失败");
        }
        role.chidren = res.data;
        this.$message.success("删除权限成功！")
      })
    }
  }
};
</script>

<style scoped>
.dryapp {
  min-width: 1366px;
}
.el-breadcrumb {
  line-height: 3;
}
.el-tag {
  margin: 7px;
}
.dryrow {
  display: flex;
  align-items: center;
  border-top: 1px #eee solid;
}
</style>
