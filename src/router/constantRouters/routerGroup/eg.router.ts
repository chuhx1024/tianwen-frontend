
import BasicLayout from '@/layout/BasicLayout.vue'
export default [
    {
        path: '/eg',
        name: 'Example',
        // component: () => import(/* webpackChunkName: "example" */ '@/views/Example'),
        hidden: true,
        component: BasicLayout,
        children: [
            {
                path: '/eg',
                name: 'Example1',
                meta: {
                    title: 'Dataset',
                    icon: 'ILU-shujuzhongxin1',
                },
                component: (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'mock') ? () => import(/* webpackChunkName: "example" */ '@/views/Example.vue') : null,
                // component: () => import(/* webpackChunkName: "example" */ '@/views/Example.vue'),
            },
        ],

    },
]
