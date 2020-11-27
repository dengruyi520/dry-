import Vue from 'vue'
import Vuex from 'vuex'
//持久化配置
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // 全局状态
  state: {
    //商品数量
    productNum: 1,
    dryGoodsList: [], //商品列表
  },
  //操作state中的数据   同步方法集合
  mutations: {
    //商品数量自增
    addProductNum(state, index) {
      state.dryGoodsList[index].count++;
    },
    //商品数量自减
    deProductNum(state, index) {
      if (state.dryGoodsList[index].count <= 1) {
        state.dryGoodsList[index].is_cart = false
        return false
      }
      state.dryGoodsList[index].count--
    }, 
    // 添加商品数据 从组件内部调用
    adddryGoodsList(state, data) {
      state.dryGoodsList = data;
    },
    //全部清空
    delAllProduct(state){
      // 遍历循环dryGoodsList数组 将每一项的is_cart值设为false
      state.dryGoodsList.forEach(item=>{
        item.is_cart = false
      })
    }
  },
  getters: {
    //计算总价
    total(state){
      let money = 0;
      state.dryGoodsList.map(item=>{
        // 进行判断  加入购物车才能算入总价格
        if(item.is_cart == true){
        money += item.price * item.count
        }
      })
      return money
    },
    //计算总数量
    totalNum(state){
      let num = 0;
      state.dryGoodsList.map(item=>{
        //进行判断  加入购物车才能算入总数量
        if(item.is_cart == true){
          num += item.count
        }
      })
      return num
    }
  },
  //操作mutations中方法 异步操作
  actions: {

  },
  //把vue进行模块处理
  modules: {

  },


  //数据持久化
  // plugins: [createPersistedState()]
})
