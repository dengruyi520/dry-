<template>
  <div>
    <ul v-show="flag">
      <li v-for="(item, index) in dataList1" :key="index" @click="addMsg(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["dataList1","flag"],
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
     addMsg(data){
        this.$emit('add',data)
     }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  background: lightgrey;
  width: 300px;
  text-align: left;
}
ul li {
  line-height: 40px;
  height: 40px;
  padding-left: 14px;
  color: #fff;
}
li:hover {
  background: orange;
}
</style>
