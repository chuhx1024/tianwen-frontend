<template>
    <div class="Login-container">
        <a-button @click="onFinish"> 登录 </a-button>
    </div>
</template>
<script setup lang="ts">
import { setToken } from '@/utils/handleCookie'
import { useRouter } from 'vue-router'
const router = useRouter()
const onFinish = () => {
    setToken('123')
    router.push('/home/evaluate')
}
</script>
<style lang="scss" scoped>
.Login-container {
}
</style>
