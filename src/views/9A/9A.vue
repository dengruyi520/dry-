<template>
  <div class="box">
    <div class="item">
      <el-container class="container">
      
        <el-form ref="form" :model="user" :rules="rules">
          <!--  :rules="rules"  -->
          <el-form-item label prop="username">
            <h4>UNI-ADMIN</h4>
            <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="user.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="dryLogin()">立即登录</el-button>
          </el-form-item>
        </el-form>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      user: {
        username: "admin",
        password: "123456"
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
  computed: {},
  methods: {
    // 当我们点击登录按钮的时候判断一下用户输入的内容是否为空   如果为空错误提示
    // 如果内容不为空 请求登录接口，axios{username:'',password:''}
    // 接口请求成功后返回数据，如果status状态为200，登录成功，否则登录失败
    // 登录成功，先把登录用户的token存到本地存储，然后跳转到管理后台首页
    // 挂你后台点击登录退出，退出登录，伸出本地存储的数据，然后跳转到登录页面



    // 登录http://ceshi5.dishait.cn/admin/login
    dryLogin() {
    // alert("4")
      if(this.user.username==""||this.user.password==""){
        this.$message.error("用户名或密码不能为空！");
        return false;
      }
      //请求登录的接口
      this.$axios.post(`https://www.liulongbin.top:8888/api/private/v1/login`,{
        username:this.user.username,
        password:this.user.password,
      })
      .then(res=>{
        console.log(res)
        // 判断用户的登录状态
        if(res.meta.status == 200){
          this.$message.success(res.meta.msg);
          // 登录成功的信息，存到本地存储中去
          localStorage.setItem("user",JSON.stringify(res.data));
          // 跳转到管理后台首页
          this.$router.push("/dry9Ahome")
          
        }else{
          // 登录失败
          this.$message.error(res.meta.msg)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  min-height: 860px;
  padding-top: 300px;
  .item {
    width: 500px;
    height: 300px;
    background: white;
    margin: 0 auto;
    padding-top: 50px;
  }
  .container {
    width: 380px;
    height: 250px;
    border: #eee 1px solid;
    h4 {
      width: 380px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-bottom: #eee 1px solid;
    }
  }
  .el-input {
    width: 90%;
  }
}
</style>
