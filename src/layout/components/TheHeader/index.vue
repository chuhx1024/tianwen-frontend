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
    height: 46px;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(5, 5, 5, 0.06);
    background-color: #d8d8d8;
}
</style>
