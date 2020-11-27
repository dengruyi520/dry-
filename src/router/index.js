import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/dry'
import shop from '@/views/B/shop'
import admin from './admin'
// import dryindex from './dryindex'

Vue.use(Router)

export default new Router({
  routes: [{


      // dry 啥都没有的页面
      path: '/',
      name: 'Home',
      // redirect: '/',
      component: Home
    },


    // /B=>购物车shop ，需要在main.js改一下axios路径
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },



    // components/my
    {
      path: '/my',
      name: 'my',
      component: () => {
        return import('@/components/my')
      }
    },



    // 后台管理  需要把utils=>request里面的url加上 就可以运行  （功能全）
    {
      path: '/drylogin',
      name: 'drylogin',
      component: () => {
        return import('@/views/dryHTGL/drylogin')
      }
    },

    {
      path: '/dryhomee',
      name: 'dryhomee',
      component: () => {
        return import('@/views/dryHTGL/home')
      },
      children: [{
          path: '/users',
          name: 'users',
          component: () => {
            return import('@/views/dryHTGL/users')
          }
        },
        {
          path: '/roles',
          name: 'roles',
          component: () => {
            return import('@/views/dryHTGL/power/roles')
          }
        },
        {
          path: '/rights',
          name: 'rights',
          component: () => {
            return import('@/views/dryHTGL/power/rights')
          }
        }
      ]
    },







    // 9c 后台管理 本地json文件获取数据 添加数据没有本地存储 
    {
      path: '/dryHH',
      name: 'dryHH',
      component: () => {
        return import('@/views/09c/home')
      },
      children: [{
        path: '/dryuser',
        name: 'dryuser',
        component: () => {
          return import('@/views/09c/user')
        }
      }],
    },





    // 9A 后台管理 只有登录退出  没有别的功能 侧边栏一个页面
    {
      path: '/dry9A',
      name: 'dry9A',
      component: () => {
        return import('@/views/9A/9A')
      },
    },
    {
      path: '/dry9Ahome',
      name: 'dry9Ahome',
      component: () => {
        return import('@/views/9A/9Ahome')
      },
      children: [{
        path: '/dry9Auser',
        name: 'dry9Auser',
        component: () => {
          return import('@/views/9A/9Auser')
        }
      }],
    },

    // 熊大熊二 点击input框显示下面的ul框 点击熊大熊二隐藏ul框
    {
      path: '/xiongda',
      name: 'xiongda',
      component: () => {
        return import('@/views/fuchuanzi/select')
      }
    },
    // 熊大熊二第二遍 点击input框显示下面的ul框 点击熊大熊二隐藏ul框
    {
      path: '/dryxiong',
      name: 'dryxiong',
      component: () => {
        return import('@/views/xiongda/select')
      }
    },

    // axios移动端 渲染 有删除
    {
      path: '/dryaxios',
      name: 'dryaxios',
      component: () => {
        return import('@/views/dryaxios/index')
      }
    },
    // 期中B卷 点击input框显示ul框  选中添加到input框  甜甜版 代码清晰
    {
      path: '/dryB',
      name: 'dryB',
      component: () => {
        return import('@/views/module/father')
      }
    },

    // 移动端底部切换 点击进详情页 带删除按钮 线上接口图片
    {
      path: '/dryA/dryhome',
      name: 'dryA_home',
      // redirect:'@/views/dryA/dryindex',
      component: () => {
        return import('@/views/dryA/dryhome')
      },
      children: [{
          path: '/dryA/dryindex',
          name: 'dryA_Index',
          component: () => {
            return import('@/views/dryA/dryindex')
          }
        },
        {
          path: '/dryA/dryshop',
          name: 'dryA_Shop',
          component: () => {
            return import('@/views/dryA/dryshop')
          }
        },
        {
          path: '/dryA/drycart',
          name: 'dryA_Cart',
          component: () => {
            return import('@/views/dryA/drycart')
          }
        },
        {
          path: '/dryA/drymine',
          name: 'dryA_Mine',
          component: () => {
            return import('@/views/dryA/drymine')
          }
        },
        {
          path: '/dryA/drydetail/:id',
          name: 'dryA_detail',
          component: () => {
            return import('@/views/dryA/drydetail')
          }
        },
      ]
    },




    // 严选商品  数据渲染 点击进入详情页
    {
      path: '/dryyanxuan',
      name: 'dryyanxuan',
      component: () => {
        return import('@/views/yanxuan/dryindex')
      },
    },
    {
      path: '/drydetail/:id',
      name: 'drydetail',
      component: () => {
        return import('@/views/yanxuan/drydetail')
      }
    },





    // 拆分组件购物车 功能不是很全 全选 删除 ++  --
    {
      path: '/dryshop',
      name: 'dryshop',
      component: () => {
        return import('@/views/drycartX/dryshop')
      }
    },
    // 





    // 移动端底部切换 点击进详情页 加删除
    {
      path: '/drymoni/dryhome',
      name: 'drymoni_home',
      // redirect:'@/views/dryA/dryindex',
      component: () => {
        return import('@/views/drymoni/dryhome')
      },
      children: [{
          path: '/drymoni/dryindex',
          name: 'drymoni_Index',
          component: () => {
            return import('@/views/drymoni/dryindex')
          }
        },
        {
          path: '/drymoni/dryshop',
          name: 'drymoni_Shop',
          component: () => {
            return import('@/views/drymoni/dryshop')
          }
        },
        {
          path: '/drymoni/drycart',
          name: 'drymoni_Cart',
          component: () => {
            return import('@/views/drymoni/drycart')
          }
        },
        {
          path: '/drymoni/drymine',
          name: 'drymoni_Mine',
          component: () => {
            return import('@/views/drymoni/drymine')
          }
        },
        {
          path: '/drymoni/drydetail/:id',
          name: 'drymoni_detail',
          component: () => {
            return import('@/views/drymoni/drydetail')
          }
        },
      ]
    },

    // 期中B卷拆分组件 8k-10k  灰灰版
    {
      path: '/dryfather',
      name: 'dryfather',
      component: () => {
        return import('@/views/drymobule/dryfather')
      }
    },

    // todolist 功能全 单页面
    {
      path: '/drytodolist',
      name: 'drytodolist',
      component: () => {
        return import('@/views/tushu/drytodolist')
      }
    },


    // todolist 2002b期中考试b卷 拆分组件 添加删除 几个未完成
    {
      path: '/drytodo',
      name: 'drytodo',
      component: () => {
        return import('@/views/todolist/drytodo')
      }
    },


    // todolist第二遍 拆分组件 添加删除 几个未完成
    {
      path: '/dryT',
      name: 'dryT',
      component: () => {
        return import('@/views/drytodo/drytodolist')
      }
    },


    //  图书管理 功能全 单页面
    {
      path: '/tushu',
      name: 'tushu',
      component: () =>
        import('@/views/tushu/tushu')
    },
    ...admin,
    // ...dryindex

  ]
})
