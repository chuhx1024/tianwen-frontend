<template>
    <div class="the-menu-container">
        <sidebar-menu> </sidebar-menu>
    </div>
</template>
<script setup lang="ts">
import SidebarMenu from './components/sidebarMenu.vue'
</script>
<style lang="scss" scoped>
.the-menu-container {
    flex: 1;
}
</style>
