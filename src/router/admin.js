export default [
    
   
    // lativ 诚衣  渲染页面 分类 价格顺序 还有一个固定定位返回上面
    {
        path: '/lativ/index',
        name: 'lativ_index',
        component: () =>
            import ('@/views/lativ/index')
    },
    {
        path: '/lativ/search',
        name: 'lativ_search',
        component: () =>
            import ('@/views/lativ/search')
    },
    {
        path: '/lativ1/index',
        name: 'lativ1_index',
        component: () =>
            import ('@/views/lativ1/index')
    },
    {
        path: '/lativ1/search',
        name: 'lativ1_search',
        component: () =>
            import ('@/views/lativ1/search')
    },
    // novel  移动端页面 路由跳转  分类一页有渲染数据
    {
        path: '/novel/index',
        name: 'novel_index',
        component: () =>
            import ('@/views/novel/index'),
        children: [{
                path: '/novel/child/bookrack',
                name: 'novel_child_bookrack',
                component: () =>
                    import ('@/views/novel/child/bookrack')
            },
            {
                path: '/novel/child/ranking',
                name: 'novel_child_ranking',
                component: () =>
                    import ('@/views/novel/child/ranking')
            },
            {
                path: '/novel/child/classify',
                name: 'novel_child_classify',
                component: () =>
                    import ('@/views/novel/child/classify')
            },
            {
                path: '/novel/child/search',
                name: 'novel_child_search',
                component: () =>
                    import ('@/views/novel/child/search')
            },

        ]
    },
    // vue4 
    {
        path: '/vue4/home',
        name: 'vue4_home',
        component: () =>
            import ('../views/vue4/home'),
        children: [{
                path: '/vue4/child/my',
                name: 'vue4_child_my',
                component: () =>
                    import ('@/views/vue4/child/my')
            },
            {
                path: '/vue4/child/smjj',
                name: 'vue4_child_smjj',
                component: () =>
                    import ('@/views/vue4/child/smjj')
            },
            {
                path: '/vue4/child/sp',
                name: 'vue4_child_sp',
                component: () =>
                    import ('@/views/vue4/child/sp')
            },
            {
                path: '/vue4/child/xbsp',
                name: 'vue4_child_xbsp',
                component: () =>
                    import ('@/views/vue4/child/xbsp')
            },

        ]
    },
    {
        path: '/vue4/shop',
        name: 'vue4_shop',
        component: () =>
            import ('@/views/vue4/shop')
    },




    // vuexcart
    {
        path: '/dryvuexcart',
        name: 'vuexcart',
        component: () =>
            import ('@/views/vuexcart/vuexcart')
    },

    
]