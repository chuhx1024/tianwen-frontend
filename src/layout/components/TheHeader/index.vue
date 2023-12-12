<template>
    <div class="header-container">
        <logo />
        <slot />
        <logout />
    </div>
</template>
<script setup lang="ts">
import Logo from './logo.vue'
import Logout from './logout.vue'
</script>
<style lang="scss" scoped>
.header-container {
    height: 60px;
    padding: 0 15px;
    background: red;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
