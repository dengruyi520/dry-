<template>
  <div>
      <input type="text" placeholder="你喜欢的类型？" @click="changeShow" v-model="title"/>
          <button>点点</button>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {
    };
  },
  props:['title'],
  computed:{
  },
  methods: {
    // 绑定事件   this.$emit传递自定义事件给父组件
    changeShow(){
      this.$emit("cShow",true)
    }
  },
};
</script>

<style scoped>

</style>
