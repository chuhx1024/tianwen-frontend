<template>
    <div class="basic-layout-container">
        <the-header>
            <the-menu></the-menu>
        </the-header>
        <the-main-app></the-main-app>
    </div>
</template>

<script setup lang="ts">
import { TheHeader, TheMenu, TheMainApp } from './components'
// import { useAppStore } from '@/stores/modules/app'

// const counterStore = useAppStore()
</script>

<style lang="scss" scoped>
.basic-layout-container {
    width: 100%;
}
</style>
