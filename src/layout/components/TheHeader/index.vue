<template>
    <div class="header-container">
        <logo />
        <slot />
    </div>
</template>
<script setup lang="ts">
import Logo from './logo.vue'
</script>
<style lang="scss" scoped>
.header-container {
    height: 60px;
    background: red;
    width: 100%;
    display: flex;
}
</style>
