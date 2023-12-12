<template>
    <RouterLink class="logo-container" to="/">
        <img class="logo-img" src="@/assets/imgs/layout/logo.png" alt="" />
    </RouterLink>
</template>
<script setup lang="ts">
// import arrowIcon from 'static/logo.png'
</script>
<style lang="scss" scoped>
.logo-container {
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 138px;
    height: 100%;

    .logo-img {
        height: 60%;
    }
}
</style>
