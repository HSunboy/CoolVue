import App from '../app'

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/bill', //登录
                meta: { auth: false },
                component: resolve => require(['../pages/login/'], resolve)
            },
            {
                path: '/person', //退出
                component: resolve => require(['../pages/signout/'], resolve)
            },
            {
                path: '/free', //个人主页
                component: resolve => require(['../pages/home/'], resolve)
            },
            {
                path: '/index', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/'], resolve)
            },
            {
                path: '/test', //首页
                meta: { auth: false },
                component: resolve => require(['../pages/index/in.vue'], resolve)
            },
            {
                path:'*', //其他页面，强制跳转到登录页面
                redirect:'/index'
            }
        ]
    }
]