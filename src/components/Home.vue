<template>
  <div class="container">
    <!-- 表单 -->
    <form class="form">
        用户名：<br>
        <input type="text" placeholder="请输入你的姓名" v-model="name"><br>
        您的用户名为 : {{ name }} <br/>
        年龄 : {{ age }} <br/>
        <input type="text" placeholder="请输入你的年龄" v-model="age"> <br>
        你喜欢爸爸还是妈妈：
        爸爸<input type="radio" value="father" v-model="fumu">
        妈妈 <input type="radio" value="mather" v-model="fumu">
        已选：{{ fumu }} <br/>
        你喜欢的动物有：
        猴子<input type="checkbox" value="猴子" v-model="dongwu">  
        大象<input type="checkbox" value="大象" v-model="dongwu"> 
        小狗<input type="checkbox" value="小狗" v-model="dongwu"> 
        已选 : {{ dongwu.join('|') }} <br/>
        你喜欢什么类型的异性 : (多选一)
        <select name="" id="" v-model="duixiang">
              <option value=""></option>
            <option value="成熟">成熟</option>
            <option value="稳重">稳重</option>
            <option value="清新">清新</option>
        </select>
        已选 : {{ duixiang }} <br/>
        简单介绍一下你自己(20个文字内) <textarea maxlength="20" id="" v-model="content" @keyup="numFn"></textarea>
        你还可以输入{{ num }}个字 <br/>

        <button class="btn btn-info" @click="addUser">添加</button>
        <button class="btn btn-danger" type="reset" @click="res">重置</button>
    </form>
    <!-- 表格数据 -->
    <hr style="color:#dddddd;" />
    <h3 class="text-center" style="color:#0088dd">用户信息表</h3>
    <table class="table text-center mt-3" border="1px">
      <thead>
        <tr>
          <th>序号</th>
          <th>名字</th>
          <th>年龄</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="index" v-show="flag==true">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.name }}</td>
          <td>
            <button class="btn btn-outline-danger" @click="delUser(index)">删除</button>
          </td>
        </tr>
        <tr v-show="flag==false">
          <td colspan="4">
            {{ text }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import '../assets/bootstrap.css'
export default {
  data() {
    return {
      name:'',
      age:'',
      fumu:'',
      dongwu:[],
      duixiang:'',
      content:'',
      list:[],
      text:"暂无数据....",
      flag:false,
      num:20
    };
  },
  computed: {
    
  },
  created() {},
  mounted() {},
  watch: {
  },
  methods: {
    // 添加用户信息
    addUser(){
      if(this.name == '' || this.age==''){
        alert('请填写用户信息再提交')
        return false
      }
      this.flag = true
      let user = {}
      user.name = this.name
      user.age = this.age
      this.list.push(user)
    },
    // 删除用户信息
    delUser(i){
      this.list.splice(i,1)
      if(this.list==0){
        this.flag = false
      }
    },
    // 计算还可以输入
    numFn(){
      this.num = 20 - this.content.length
    },
    // 
    res(){
      this.duixiang = ''
    }
  },
  components: {}
};
</script>

<style scoped>
form{
  line-height: 30px;
}
input{
  border-radius: 5px;
  border: 1px solid #dddddd;
}
table{
  border: 1px solid #dddddd;
}
</style>
