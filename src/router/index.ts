import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layout/BasicLayout.vue'
import Example from '@/views/Example.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: BasicLayout,
        },
        {
            path: '/eg',
            name: 'Eg',
            component: Example,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
    ],
})

export default router
