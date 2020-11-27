<template>
  <div class="box">
    <custom_input :title="keydown" @int="int"/>
    <custom_list :dataList1="dataList1" @add ="add" :flag="flag" />
    <br />
    <custom_input :title="title" @int="int1" />
    <custom_list :dataList1="dataList2" @add="add1" :flag="flag1" />
  </div>
</template>
<script>
import custom_input from "./input";
import custom_list from "./list";
export default {
  data() {
    return {
      dataList1: ["JavaScript", "AngularJS", "Vue.js"],
      dataList2: ["8k-10k", "10k-12k", "12k-16k"],
      flag: false,
      flag1: false,
      keydown: "",
      title: "",
    };
  },
  created() {},
  computed: {},
  methods: {
    int(data) {
      this.flag = data;
    },
    int1(data) {
      this.flag1 = data;
    },
    add(data) {
      this.keydown = data;
    },
    add1(data) {
      this.title = data;
    },
  },
  components: {
    custom_input,
    custom_list,
  },
};
</script>
<style scoped>
.box {
  width: 300px;
  margin: 50px auto;
}
</style>
