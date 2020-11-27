<template>
  <div>
      <div>
      <!-- 文本框组件的引入 -->
      <drysearch @cShow="dryShow" :title="title"/>
      <!-- 列表组件的引入 -->
      <drylist :drylike="like" :show="show" @sendMsg="drysendMsg" @cShow="dryShow"/>
      </div>
  </div>
</template>

<script>
// 导入子组件
import drylist from "./list";
import drysearch from "./search";

// import drybus from "@/utils/eventBus.js";
export default {
  name: "",
  data() {
    return {
      // 定义的内容
      like: ["小狼狗", "小奶狗", "zkl", "dry", "霸道总裁"],
      show:false,//控制子组件中list的列表显示隐藏 v-show
      title:""//给input组件的关键字
    };
  },
  // 注册组件
  components:{
    drylist,
    drysearch
  },
  created(){

  },
  computed: {
  },
  methods: {
    // 改变它的显示状态
    // 父组件绑定的方法，用来改变show的值，控制列表显示 data就是传递过来的参数
    dryShow(data){
      this.show=data
    },
    drysendMsg(data){
      this.title=data;
    }
  }
};
</script>

<style scoped>
</style>
