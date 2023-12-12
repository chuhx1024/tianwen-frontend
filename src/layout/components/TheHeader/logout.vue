<template>
    <div class="logout-container">
        <a-button @click="onOut()"> 退出 </a-button>
    </div>
</template>
<script setup lang="ts">
import { removeToken } from '@/utils/handleCookie'
import { useRouter } from 'vue-router'
const router = useRouter()
const onOut = () => {
    removeToken()
    router.push('/login')
}
</script>
<style lang="scss" scoped>
.logout-container {
    color: purple;
}
</style>
