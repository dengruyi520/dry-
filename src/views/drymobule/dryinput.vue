<template>
  <div>
     <input class="inp" placeholder="请输入你de选择" type="text" 
     v-model="drytitle"
     @click="changeFlag">
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  props:["drytitle"],
  computed:{
  },
  methods: {
    changeFlag(){
      this.$emit("changeFlag",true)
    }
  },
};
</script>

<style scoped>
.inp {
  width: 300px;
  height: 30px;
  border: #dddddd 1px solid;
  margin: 0 auto;
}
</style>
