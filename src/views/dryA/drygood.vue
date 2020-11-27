<template>
<div class="drymain">
  <div class="dryitem" v-for="(item,index) in drygoods" :key="index" 
            >
          <div><img :src="item.pic" @click="$router.push(`/dryA/drydetail/${item.id}`)"></div>
          <p>{{item.name}}</p>
          <p style="color:red">￥{{item.originalPrice}}</p>
          <button class="btn btn-danger" style="width:100%" @click="del(index)">删除</button>
          </div>
</div>
  
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["drygoods"],
  computed: {},
  methods: {
    del(index) {
      this.$emit("delete", index);
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
  margin: 1%;
  border: #dddddd 1px solid;
  box-sizing: border-box;
  padding: 10px;
}
.dryitem img {
  width: 100%;
  height: 200px;
}
.dryitem>p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
