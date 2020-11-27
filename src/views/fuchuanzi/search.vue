<template>
  <div>
      <!-- 在子组件绑定一个事件 -->
      <input type="text" placeholder="输入名字" v-model="keyword" @click="changeFlag"/>
      <button class="btn btn-danger">搜索</button>
  </div>
</template>

<script>
export default {
  name: "",
  //   接收select传过来的值，进行双向绑定
  props: ["keyword"], //父传子把search里面的值传过来
  data() {
    return {};
  },
  computed: {},
  methods: {
    //   调用子组件向父组件传递数据的方法
    // 1，在子组件中绑定一个事件，调用对应的方法，this.$emit("自定义事件名",data值)
    changeFlag() {
      console.log("调用方法");
      //   通过$emit方法向父组件进行数据传递
      this.$emit("dryFlag", true);
    }
  }
};
</script>

<style scoped>
</style>
