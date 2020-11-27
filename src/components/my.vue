<template>
  <div>
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
  
    <el-col :span="12">
    <h5>默认颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </el-col>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
       value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  computed: {},
  created() {},
  mounted() {
  },
  watch : {},
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
  // ul{
  //   width: 444px;
  //   height: 44px;
  //   background: #0088dd;
  //   list-style: none;
  //   padding: 0;

  //   li{
  //     width: 25%;
  //     line-height: 44px;
  //     text-align: center;
  //     color: white;
  //     float: left;
  //   }
  //   li:hover{
  //     background: green;
  //   }
  // }
</style>

