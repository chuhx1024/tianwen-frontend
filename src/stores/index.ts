import { createPinia } from 'pinia';
import { useAppStore } from './modules/app/index'
import { useUserStore } from './modules/user/index'
import { useRouterStore } from './modules/router/index'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useAppStore, useRouterStore, useUserStore }
export default pinia