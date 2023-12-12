import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/handleCookie'
import constantRouters from './constantRouters/index'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: () => import('@/layout/BasicLayout.vue'),
        },
        ...constantRouters,
    ],
})

// whiteList
const routerWhiteList = ['/login', '/eg']

router.beforeEach((to, from, next) => {
    const token = getToken()
    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (routerWhiteList.includes(to.path)) {
            next()
        } else {
            next({ name: 'Login' })
        }
    }
})

export default router
