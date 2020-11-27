<template>
  <div>
      <!-- <input type="text" placeholder="输入名字"/>
      <button class="btn btn-danger">搜索</button> -->
      <search v-on:dryFlag="dryFlagz" :keyword="keyword"/>
      <drylist :dryL="dryL" :flag="flag" @sendItem="setItem" @dryFlag="dryFlagz"/>
      <hr>
      <drylist :dryL="dryLk"/>
  </div>
</template>

<script>
import drylist from "./list";
import search from "./search";
export default {
  name: "",
  data() {
    return {
      dryL: ["熊大", "熊二", "光头强"],
      dryLk: ["1218", "dry", "zkl"],
      flag: false,
      keyword: "" //设置关键字 search
    };
  },
  components: {
    drylist,
    search
  },
  computed: {},
  methods: {
    //   2，在父组件的子组件标签上，绑定自定义事件，调用方法，接受传递过来的参数 search
    dryFlagz(data) {
      console.log(data);
      this.flag = data;
    },
    //   接收list子组件传递过来的内容数据
    setItem(data) {
      console.log(data);
      //  设置keyword 的值即可
      this.keyword = data;
    }
  }
};
</script>

<style scoped>
</style>
