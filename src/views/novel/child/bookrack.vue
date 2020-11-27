<template>
  <div>
    <header>
      <van-nav-bar title="书架" />
    </header>
    <div id="btn">
      <van-button type="info">添加图书</van-button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
header {
  .van-nav-bar {
    background: #0088dd;
  }
}
  .van-button{
    margin: 70% 0% 0% 40%;
  }
</style>
