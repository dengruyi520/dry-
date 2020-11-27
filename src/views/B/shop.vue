<template>
  <div class="container mt-3">
    <h3 class="text-center">购物车</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">
            全选
            <input type="checkbox" v-model="dry_checkAll" @change="dry_qx" />
          </th>
          <th scope="col">名称</th>
          <th scope="col">单价</th>
          <th scope="col">数量(500g)</th>
          <th scope="col">总价(元)</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dry_fruitsList" :key="index">
          <th scope="row">
            <input type="checkbox" v-model="item.dry_checked" />
          </th>
          <td>{{item.dry_name}}</td>
          <td>{{item.dry_price}}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="dry_count(index,'-')">-</button>
            {{ item.dry_num }}
            <button
              class="btn btn-info btn-sm"
              @click="dry_count(index,'+')"
            >+</button>
          </td>
          <td>{{ item.dry_num * item.dry_price }}</td>
          <td>
            <button :disabled="item.dry_delFlag"  class="btn btn-danger" @click="dry_del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="text-center">
          <td colspan="6">
            <button class="btn btn-danger" :disabled="!dry_checkAll" @click="dry_clear">全部清空</button>
          </td>
        </tr>
        <tr>
          <td colspan="2">邮费(满88包邮) : {{ dry_postAge }}</td>
          <td colspan="2">总价 : {{ dry_sum }}</td>
          <td colspan="2">总数量 : {{dry_total}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import bootstrap from "@/assets/bootstrap.css"
export default {
  data() {
    return {
      // 全选标志位
      dry_checkAll: false,
      dry_fruitsList: [],
      dry_postAge:15
    };
  },
 
  computed: {
    // 计算总价4
    dry_sum(){
      let dry_count = 0
      this.dry_fruitsList.forEach(item=>{
        if(item.dry_checked){
          dry_count += item.dry_price * item.dry_num
        }
      })
      if(dry_count>=88){
        this.dry_postAge = 0
      }else{
        this.dry_postAge = 15
      }
      return dry_count
    },
    dry_total(){
      let dry_totals = 0
      this.dry_fruitsList.forEach(item=>{
        if(item.dry_checked){
          dry_totals += item.dry_num
        }
      })
      return dry_totals
    }
  },
  created() {},
  mounted() {
    this.dry_getList();
    this.dry_fruitsList.forEach(item => {
      if (item.dry_num < 1) {
        item.dry_delFlag = true;
      }
    });
  },
  watch: {
    dry_fruitsList: {
      handler(val) {
        val.forEach(item => {
          if (item.dry_num < 1) {
            item.dry_delFlag = true;
          } else {
            item.dry_delFlag = false;
          }
        });
       this.dry_checkAll =  val.every(item=>{
          return item.dry_checked == true
        })

        if(val.length == 0){
        this.dry_checkAll = false
      }
      },
      deep: true
    }
  },
  methods: {
    // 获取JSON数据
    async dry_getList() {
      let { data: res } = await this.$axios.get("/static/json/b.json");
      console.log(res.drylist)
      this.dry_fruitsList = res.drylist;
    },
    // 加减数量
    dry_count(i, e) {
      if (e == "-") {
        this.dry_fruitsList[i].dry_num--;
        if (this.dry_fruitsList[i].dry_num < 0) {
          this.dry_fruitsList[i].dry_num = 0;
          alert("删不了了");
          return false;
        }
      } else {
        this.dry_fruitsList[i].dry_num++;
      }
    },
    // 全选
    dry_qx() {
      this.dry_fruitsList.forEach(item => {
        return (item.dry_checked = this.dry_checkAll);
      });
    },
    // 删除
    dry_del(i){
      this.dry_fruitsList.splice(i,1)
    },
    // 全部清除
    dry_clear(){
      this.dry_fruitsList = []
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
