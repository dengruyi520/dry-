<template>
  <div class="drymain">
      <div class="dryitem"   v-for="(item,index) in dryz" :key="index">
          <div><img :src="`/static/img/${item.productImage}`" ></div>
          <p>{{item.productName}}</p>
          <button class="btn btn-danger btn-sm" @click="del(index)">删除</button>
      </div>
  </div>
</template>

<script>
export default {
  props:["dryz","index"],
  name: "",
  data() {
    return {
      list: []
    };
  },
  computed: {},
 
  methods: {
   del(data){
     this.$emit('delete',data)
   }
  }
};
</script>

<style scoped>
.drymain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.drymain > .dryitem {
  width: 48%;
  /* height: 500px; */
  margin: 1%;
  border: #dddddd 1px solid;
  box-sizing: border-box;
  padding: 10px;
}
.dryitem img {
  width: 100%;
}
.dryitem>p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
