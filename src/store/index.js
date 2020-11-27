import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: [],
        // vue4
        list: [],
        shopList: [],
        checkAll: false
    },
    mutations: {
        getList(state, list) {
            state.cartList = list
        },
        // 添加购物车
        addCart(state, index) {
            state.cartList[index].isShow = true
        },
        // 自增自减
        jj(state, obj) {
            console.log(obj);
            if (obj.e == "+") {
                state.cartList[obj.index].count++
            } else {
                state.cartList[obj.index].count--
                    if (state.cartList[obj.index].count <= 1) {
                        state.cartList[obj.index].count = 1
                        state.cartList[obj.index].isShow = false
                        return false
                    }
            }
        },
        // 删除
        del(state, index) {
            state.cartList[index].isShow = false
            state.cartList[index].count = 1
        },
        // 清空购物车
        clear(state) {
            state.cartList.isShow = false
            state.cartList.count = 1
        },
        // vue4

        // 获取列表
        getList(state, res) {
            state.list = res
        },
        addShop(state, obj) {
            let index = state.shopList.findIndex(item => {
                return item.id == obj.id
            })
            console.log(index);
            console.log(state.shopList);

            if (index == -1) {
                state.shopList.push(obj)
            } else {
                state.shopList[index].num++
            }
        },
        // 加减数量
        jjFn({ shopList }, obj) {
            if (obj.e == '-') {
                shopList[obj.index].num--;
                if (shopList[obj.index].num <= 0) {
                    shopList.splice(obj.index, 1)
                }
            } else {
                shopList[obj.index].num++
            }
        },
        changeCk(state) {
            state.checkAll = !state.checkAll
            state.shopList.map(item => {
                return item.checked = state.checkAll
            })
        }

    },
    getters: {
        sum(state) {
            let count = 0
            state.cartList.forEach(item => {
                if (item.isShow == true) {
                    count += item.count
                }

            })
            return count
        },
        total(state) {
            let num = 0
            state.cartList.forEach(item => {
                if (item.isShow == true) {
                    num += item.count * item.price
                }
            })
            return num
        },
        // vue4
        vue4Total({ shopList }) {
            let num = 0
            shopList.forEach(item => {
                if (item.checked) {
                    num += item.num * item.price
                }
            })
            return num
        },
        vue4Sum({ shopList }) {
            let count = 0
            shopList.forEach(item => {
                if (item.checked) {
                    count++
                }
            })
            return count
        }


    },
    actions: {

    },
    modules: {

    }
})




// 定义容器，一个项目只能有一个（唯一的）
// const store = new Vuex.Store({
//     // state 是状态（数据）
//     state: {
//       value: '默认值',
//       dataList: [
//         {
//           'name': '熊大'
//         },
//         {
//           'name': '熊二'
//         },
//         {
//           'name': '光头强'
//         }
//       ]
//     },
//     mutations: {
//       // 改变状态的唯一方式
//       changeVal (state, payLoad) {
//         /*
//         * state:  是我们上面定义的state里面的数据
//         * payLoad: 是commit传递过来的数据
//         * */
//         // 用commit提交mutation传递过来的新状态，覆盖我们state中的旧状态就可以改变状态了
//         state.value = payLoad.name
//       }
//     }
//   })
//   export default store
  