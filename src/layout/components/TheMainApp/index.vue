<template>
    <div class="index-container">
        主区域
        <ilu-icons name="ILU-user" width="100px" height="100px" />
        <ilu-icons name="dashboard" width="100px" height="100px" />
        <RouterView />
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.index-container {
    height: calc(100vh - 60px);
}
</style>
