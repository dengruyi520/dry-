<template>
  <div>
      <!-- 切换的内容 -->
      <div class="box">
          <router-view></router-view>
      </div>
      <!-- 底部tabbar -->
      <ul>
          <router-link to="dryindex" tag="li">首页</router-link>
          <router-link to="dryshop" tag="li">分类</router-link>
          <router-link to="drycart" tag="li">购物车</router-link>
          <router-link to="drymine" tag="li">我的</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  methods: {},
};
</script>

<style scoped>
ul{
    margin: 0;
    padding: 0;
    list-style:none;
    background: rgb(237, 195, 250);
    display: flex;
    height: 44px;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
