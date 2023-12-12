import { createApp } from 'vue'
import piniaStore from './stores'

import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/styles/index.scss'
import '@/assets/styles/iconfont/index'

import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(piniaStore)
app.use(router)

app.mount('#app')
