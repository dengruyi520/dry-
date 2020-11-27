<template>
  <div>
      <table class="table table-bordered">
          <!-- 表格的头部 -->
          <dryhead @checkAll="checkAll"/>
          <!-- 中间部分 -->
          <drybody :drygoods="drygoods" 
          @delete="(index)=>{drygoods.splice(index,1 )}"
          @drynum="drynum"/>
          <!-- 表格的底部信息 -->
         <dryfoot :drytotals="drytotals"/>
      </table>
  </div>
</template>

<script>
import "@/assets/bootstrap.css"  //加@ 局部引入 后面不能用@ 要一个一个往上找
import dryhead from "./dryhead"
import drybody from "./drybody"
import dryfoot from "./dryfoot"
export default {
  name: '',
  data() {
    return {
        drygoods:[]
    };
  },
  mounted(){
      this.getdrygoods();
  },
  components:{
      dryhead,dryfoot,drybody
  },
  methods: {
    //   获取商品列表
    getdrygoods(){
        this.$axios.get("/static/data2.json").then(res=>{
            console.log(res);
            this.drygoods=res.result.list;
            this.drygoods.map(item=>{
                item.checked = false;
                item.num =parseInt(Math.random()*5)+1
            })
        })
    },
    // 全选
    checkAll(status){
        // 复选框列表中复选框的状态
        this.drygoods.map(item=>{
            item.checked = status;
        })
    },
    // 改变数量
    drynum(data){
        let index = data[0]  //获取点击的索引值
        // data[1] == "jia" ? this.drygoods[index].num++ :this.drygoods[index].num--;  //不做判断可以用这个
        if(data[1] == "jia"){
            this.drygoods[index].num++;
        }else{
            if(this.drygoods[index].num<=1){
                alert("不能少于1");
                return false;
            }
            this.drygoods[index].num--;
        }
    }
  },
  computed:{
      drytotals(){
        //   计算总价格
          let amounts = 0;
          this.drygoods.forEach(item=>{
              if(item.checked == true){
                  amounts += item.salePrice*item.num;
              }
          })
        return amounts;
      }
  }
};
</script>

<style scoped>

</style>
