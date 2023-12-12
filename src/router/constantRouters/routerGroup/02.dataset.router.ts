import BasicLayout from '@/layout/BasicLayout.vue'
export default [
    {
        path: '/dataset',
        component: BasicLayout,
        meta: {
            title: '数据集',
            fullTitle: '数据集管理',
            icon: 'ILU-database-full',
        },
        children: [
            {
                path: '/dataset',
                name: 'Dataset',
                component: () =>
                    import(/* webpackChunkName: "DataSet" */ '@/views/Dataset/index.vue'),
            },
        ],
    },
]
