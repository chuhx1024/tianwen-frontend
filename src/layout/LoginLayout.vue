<template>
    <main class="loign-layout-container">
        <RouterView />
    </main>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.loign-layout-container {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>
