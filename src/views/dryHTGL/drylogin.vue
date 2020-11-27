<template>
  <div class="box">
      <div class="item">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <!--   验证 -->
             <!-- 用户名 -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入用户名" ></el-input>
                </el-form-item>
                <!-- 密码 -->
            <el-form-item label="密码" prop="password">
                <!-- <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input> -->
                <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          //   trigger 鼠标失去焦点时触发
          { min: 1, max: 12, message: "长度在 1 到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      //   this.$refs[formName].validate(valid => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      if (this.ruleForm.username == "" || this.ruleForm.password == "") {
        this.$message({
          type: "error",
          message: "用户名或密码不能为空"
        });
        return false;
      }
      // 请求登录接口
      this.$axios.post("login", this.ruleForm).then(res => {
        console.log(res);
        if (res.meta.status == 200) {
          this.$message({
            type: "success",
            message: res.meta.msg
          });
          sessionStorage.setItem("ruleForm", JSON.stringify(res.data));
          sessionStorage.setItem("ruleForm_token", res.data.token);
          this.$router.push("/dryhomee");
        } else {
          this.$message({
            type: "error",
            message: res.meta.msg
          });
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      console.log(this);
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  min-height: 860px;
  background: #e4c4f7;
  padding-top: 300px;
  .item {
    width: 500px;
    height: 300px;
    background: white;
    margin: 0 auto;
    padding-top: 50px;
  }
  .el-input__inner {
    width: 20%;
  }
  .el-input {
    width: 80%;
  }
}
</style>
