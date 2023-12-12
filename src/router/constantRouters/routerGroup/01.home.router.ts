import BasicLayout from '@/layout/BasicLayout.vue'
export default [
    {
        path: '/home',
        component: BasicLayout,
        meta: {
            title: '模块',
            icon: 'ILU-yongdiannaodengru',
        },
        children: [
            {
                path: '/home/evaluate',
                name: 'Evaluate',
                meta: {
                    title: '训练',
                    icon: 'ILU-yongdiannaodengru',
                },
                component: () =>
                    import(/* webpackChunkName: "Home" */ '@/views/Home/EvaluateView/index.vue'),
            },
            {
                path: '/home/trainView',
                name: 'TrainView',
                meta: {
                    title: '评估',
                    icon: 'ILU-yongdiannaodengru',
                },
                component: () =>
                    import(/* webpackChunkName: "Home" */ '@/views/Home/TrainView/index.vue'),
            },
        ],
    },
]
