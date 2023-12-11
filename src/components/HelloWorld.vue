<template>
    <div class="HelloWorld-container">HelloWorld</div>
</template>
<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>
<style lang="scss" scoped>
.HelloWorld-container {
    color: purple;
}
</style>
