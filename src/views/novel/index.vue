<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="$router.push('/novel/child/bookrack')">书架</van-tabbar-item>
      <van-tabbar-item icon="search" @click="$router.push('/novel/child/classify')">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="$router.push('/novel/child/ranking')">排行</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="$router.push('/novel/child/search')">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>
