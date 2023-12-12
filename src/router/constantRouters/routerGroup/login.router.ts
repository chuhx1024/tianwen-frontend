import LoginLayout from '@/layout/LoginLayout.vue'
export default [
    {
        path: '/login',
        hidden: true,
        component: LoginLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                meta: {
                    title: 'Dataset',
                    icon: 'ILU-shujuzhongxin1',
                },
                component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
            },
        ],
    },
]