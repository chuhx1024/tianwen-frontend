<template>
    <div class="index-container">
        <RouterView />
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.index-container {
    height: calc(100vh - 46px);
    box-sizing: border-box;
    padding: 10px 15px;
}
</style>
