import { defineStore } from 'pinia'
import piniaStore from '@/stores/index'

import _ from 'lodash'

import constantRouters from '@/router/constantRouters'



const forFilter = (router: any) => {
    return router.filter((item:any) => {
        if (item.children) {
            item.children = forFilter(item.children)
        }
        return item.hidden !== true
    })
}
// 递归过滤掉 hidden: true 的路由项
const getAllSidebar = (arr:any) => {
    const temp = _.cloneDeep(arr)
    return forFilter(temp)
}

export const useRouterStore = defineStore(
    // 唯一ID
    'router',
    {
        state: () => ({
            staticRouters: getAllSidebar(constantRouters),
            permissRouters: [],
        }),
        getters: {
            sidebarData: (state) => [...state.staticRouters, ...state.permissRouters],
        },
        actions: {
  
        },
        persist: true,
    },
)
export function useRouterOutsideStore() {
    return useRouterStore(piniaStore);
}