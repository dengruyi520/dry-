<template>
    <!-- 文本框组件 --> 
    <ul v-show="show">
        <li v-for="(item,index) in drylike" :key="index" @click="addMsg(item)">{{item}}</li>
    </ul>
</template>

<script>
export default {
  // 接受select父组件传过来的数据，直接使用  无需赋值
  props: ["drylike","show"],
  name: "",
  data() {
    return {};
  },
  computed: {},
  methods: {
    // 列表向父组件进行子传父
    addMsg(data){
      // 向父组件传递点击的内容
      this.$emit("sendMsg",data);
      this.$emit("cShow",false)

    }
  }
};
</script>

<style scoped>
</style>
\