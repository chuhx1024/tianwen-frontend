<template>
    <div class="the-menu-container">
        <sidebar-menu> </sidebar-menu>
    </div>
</template>
<script setup lang="ts">
import { useRouterStore } from '@/stores/modules/router'
const routerStore = useRouterStore()
console.log(routerStore.sidebarData)
import SidebarMenu from './components/sidebarMenu.vue'
</script>
<style lang="scss" scoped>
.the-menu-container {
    flex: 1;
}
</style>
