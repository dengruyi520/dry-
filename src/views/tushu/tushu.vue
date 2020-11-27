<template>
  <div class="container">
    <form class="form-inline" onsubmit="return false">
            <input type="text" class="form-control" placeholder="编号" v-model="id" />
            <input type="text" class="form-control" placeholder="名称" v-model="name" />
            <button class="btn btn-danger btn-sm" @click="addBook">添加图书</button>
            <input type="text" class="form-control" v-model="keyword" placeholder="输入搜索的书名">
        </form>
        <hr>
        <div>图书总数：<h3>{{bookNum}}</h3>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>时间</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in bookList1" :key="index">
                    <td>{{item.id}}</td>
                    <td>
                        <span v-show="item.isEdit==false">{{item.name}}</span>
                        <input type="text" class="form-control" v-model="item.name" v-show="item.isEdit==true"
                            @keyup.enter="submitUpdate(index)" />
                    </td>
                    <td>{{item.date}}</td>
                    <td>
                        <button class="btn btn-info btn-sm" @click="item.isEdit =true">修改</button>
                        <button class="btn btn-danger btn-sm" @click="remove(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      id: "",
      name: "",
      keyword: "", //搜索关键字
      bookList: [
        {
          id: 1,
          name: "dry",
          date: new Date(),
          isEdit: false
        }
      ]
    };
  },
  //挂载完成
  mounted() {
    this.getBook();
  },
  methods: {
    //从本地存储中获取图书列表
    getBook() {
      //获取本地存储中的数据
      let data = localStorage.getItem("book_list");

      //判断本地存储内容为空
      if (data == null) {
        this.bookList = [];
      } else {
        //否则使用本地存储
        this.bookList = JSON.parse(data);
      }
    },
    //添加图书,保存到本地存储
    addBook() {
      //判断数据是否为空
      if (this.id == "" || this.name == "") {
        alert("内容不能为空");
        return false;
      }

      this.bookList.push({
        id: this.id,
        name: this.name,
        date: this.formatDate(new Date()),
        isEdit: false
      });

      this.id = "";
      this.name = "";

      //添加到本地存储中去  stringify()json字符串
      localStorage.setItem("book_list", JSON.stringify(this.bookList));
      //获取列表
      this.getBook();
    },
    //删除的操作
    remove(index) {
      this.bookList.splice(index, 1);

      //添加到本地存储中去
      localStorage.setItem("book_list", JSON.stringify(this.bookList));
      //获取一些
      this.getBook();
    },
    //提交修改
    submitUpdate(index) {
      this.bookList[index].isEdit = false;
      this.bookList[index].date = this.formatDate(new Date());

      //添加到本地存储中去
      localStorage.setItem("book_list", JSON.stringify(this.bookList));
      //获取一些
      this.getBook();
    },
    //格式化日期对象
    formatDate(value) {
      //return value.toLocaleString();
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let day = value.getDate();

      let hour = value.getHours();
      let minutes = value.getMinutes();
      let seconds = value.getSeconds();

      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
  },
  computed: {
    bookNum() {
      return this.bookList.length;
    },
    //模糊搜索使用
    bookList1() {
      let arr = this.bookList;

      return arr.filter(item => {
        //匹配搜索关键字，并且返回即可
        return item.name.indexOf(this.keyword) > -1;
      });
    }
  }
  // filters: {
  //   //格式化日期对象
  //   formatDate1(value) {
  //     //return value.toLocaleString();
  //     let year = value.getFullYear();
  //     let month = value.getMonth() + 1;
  //     let day = value.getDate();

  //     let hour = value.getHours();
  //     let minutes = value.getMinutes();
  //     let seconds = value.getSeconds();

  //     return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  //   }
  // }
};
</script>

<style scoped>
</style>
