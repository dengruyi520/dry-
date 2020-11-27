<template>
  <div>
    <ul v-show="flag">
      <li v-for="(item,index) in drylist" :key="index" @click="drysendtitle(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["drylist","flag"],
  computed: {},
  methods: {
    drysendtitle(data){
      this.$emit("drysendtitle",data)
    }
  }
};
</script>

<style scoped>
ul {
  width: 300px;
  padding: 0;
  margin: 0;
  background: #f0f0f0;
  list-style: none;
}
ul > li {
  line-height: 30px;
  font-size: 13px;
  text-indent: 5px;
}

ul > li:hover {
  background: rgb(221, 153, 241);
  color: #ffff;
}
</style>
