<template>
    <div class="the-menu-container">导航</div>
</template>
<script setup lang="ts">
import { useRouterStore } from '@/stores/modules/router'
const routerStore = useRouterStore()
console.log(routerStore.sidebarData)
</script>
<style lang="scss" scoped>
.the-menu-container {
    flex: 1;
}
</style>
