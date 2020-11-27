<template>
  <tbody>
              <tr v-for="(item,index) in drygoods" :key="index">
                  <td>
                      <input type="checkbox" v-model="item.checked">
                  </td>
                  <td>{{item.productName}}</td>
                  <td>{{item.salePrice}}</td>
                  <td>
                      <button class="btn btn-danger" @click="drynum(index,'jian')">-</button>
                      <input type="text" style="width:50px" v-model="item.num">
                      <button class="btn btn-danger" @click="drynum(index,'jia')">+</button>
                  </td>
                  <td></td>
                  <td>
                      <button class="btn btn-danger" @click="del(index )">删除</button>
                      <button class="btn btn-info" >查看</button>
                  </td>
              </tr>
          </tbody>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  props:["drygoods"],
  computed:{
  },
  methods: {
    //   删除
    del(index){
        this.$emit("delete",index)
    },
    drynum(index,type){
        // 计算数量加减
        this.$emit("drynum",[index,type])
    }
  },
};
</script>

<style scoped>

</style>
