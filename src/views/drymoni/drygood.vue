<template>
  <div class="drymain">
      <div class="dryitem"  v-for="(item,index) in drygoods" :key="index">
          <div><img :src="item.pic" alt=""  @click="$router.push(`/drymoni/drydetail/${item._id}`)"></div>
          <p>{{item.title}}</p>
          <p style="color:red">￥{{item.price}}</p>
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
