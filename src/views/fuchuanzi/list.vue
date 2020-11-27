<template>
  <div>
    <ul v-show="flag">
      <li v-for="(item,index) in dryL" :key="index" @click="sendMsg(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  // 2，接受父组件传递过来的数据，名字dryL
  props:["dryL","dryLk","flag"],
  data() {
    return {
    };
  },
  
  computed:{
  },
  methods: {
    // 1，子传父
    sendMsg(data){
      console.log(data);
      this.$emit("sendItem",data);
      this.$emit("dryFlag",false);
    }
  },
};
</script>

<style scoped>

</style>
