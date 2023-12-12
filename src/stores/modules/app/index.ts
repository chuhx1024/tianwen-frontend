import { defineStore } from 'pinia';
import piniaStore from '@/stores/index';
import type { AppState } from './types';

export const useAppStore = defineStore(
    // 唯一ID
    'app',
    {
        state: (): AppState => ({
            menuCollapse: true,
            userType: 'ldap', // local
        }),
        getters: {},
        actions: {
            updateSettings(partial: Partial<AppState>) {
                this.$patch(partial)
            },
  
            toggleMenuCollapse() {
                this.menuCollapse = !this.menuCollapse
            },

            setUserType (val: string) {
                this.userType = val
            },


        },
        // persist: true,
        persist: [
            {
                paths: ['menuCollapse'],
                storage: sessionStorage,
            },
        ],
    },
)
export function useAppOutsideStore() {
    return useAppStore(piniaStore);
}