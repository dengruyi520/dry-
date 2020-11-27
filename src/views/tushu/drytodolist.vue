<template>
    <div>
<div id="app" class="container">
        <h1>TODOLIST</h1>
        <input type="text" placeholder="输入任务名称" class="form-control" v-model="list" @keyup.enter="addlist">
        <div class="undo">
            <h3>进行中({{undos}})</h3>
            <hr>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item,index) in drytodo" :key="index" v-show="item.isDone == false">
                    <input type="checkbox" class="chk" v-model="item.isDone">
                    <span v-show="item.isEdit==false" @dblclick="item.isEdit = true">{{item.title}}</span>
                    <input type="text" v-model="item.title" v-show="item.isEdit==true" @blur="item.isEdit = false" />
                    <!-- @blur="item.isEdit = false"    失去焦点时候修改数据     @keyup.enter="item.isEdit = false"  回车键修改数据-->
                    <button class="btn btn-danger del" @click="drytodo.splice(index,1)">X</button>
                </li>
            </ul>
        </div>
        <div class="done">
            <h3>进行中({{drytodo.length-undos}})</h3>
            <hr>
            <ul class="list-group">
                <li class="list-group-item" v-for="(item,index) in drytodo" :key="index"  v-show="item.isDone == true">
                    <input type="checkbox" class="chk" v-model="item.isDone">
                    <span>{{item.title}}</span>
                    <button class="btn btn-danger del">X</button>
                </li>
            </ul>
            <button class="btn btn-warning" @click="drytodo=[]">清空</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: "", //任务名称
      drytodo: [
        {
          title: "dry减肥计划",
          isDone: true,
          isEdit: false
        },
        {
          title: "dry学习计划",
          isDone: false,
          isEdit: false
        },
        {
          title: "dry升班计划",
          isDone: false,
          isEdit: false
        }
      ]
    };
  },
  methods: {
    // 添加任务
    addlist() {
      if (this.list == "") {
        alert("内容不能为空！");
        return false;
      }
      // 执行添加的操作
      this.drytodo.unshift({
        title: this.list,
        isDone: false,
        isEdit: false
      });
      // 清空文本框的内容
      this.list = "";
    }
  },

  mounted() {
    // 获取本地存储
    let data = localStorage.getItem("dry_drytodo");
    // 本地存储的值不为空的时候，直接对data中的值赋值
    if (data != null) {
      this.drytodo = JSON.parse(data);
    }
  },
  computed: {
    // 计算未完成的数量
    undos() {

      // 第二种方法
      let undo = this.drytodo.filter(item => {
        return item.isDone == false;
      });
      return undo.length;
    }
  },
  // 监听器
  watch: {
    // 深度监听  handler  deep：true
    drytodo: {
      handler(drytodos) {
        // 监听drytodos的值
        console.log(drytodos);
        // 添加到本存储中去
        localStorage.setItem("dry_drytodo", JSON.stringify(drytodos));
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.done li {
  background: #f8f8f8;
  text-decoration: line-through;
  color: #afacac;
}

.del {
  float: right;
}
</style>
