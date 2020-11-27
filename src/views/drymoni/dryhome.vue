<template>
  <div>
      <!-- 内容部分 -->
        <router-view></router-view>
      <!-- 底部 -->
      <ul>
          <router-link to="dryindex" tag="li">首页</router-link>
          <router-link to="dryshop" tag="li">商品列表</router-link>
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
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    /* align-items: center; */
    text-align: center;
    background: #ffffff;
}
li{
    width: 25%;
}
li:hover{
    background: rgb(177, 243, 70);
    color: #ffffff;
}
</style>
