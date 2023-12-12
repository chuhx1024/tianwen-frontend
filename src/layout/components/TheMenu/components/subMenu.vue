<template>
    <a-sub-menu :key="menuInfo.path">
        <template #icon>
            <ilu-icons :name="menuInfo.meta.icon" />
        </template>
        <template #title>{{ menuInfo.meta.title }}</template>
        <template v-for="item in menuInfo.children" :key="item.key">
            <template v-if="!item.children">
                <RouterLink :to="item.path">
                    <a-menu-item :key="item.path">
                        {{ item.meta.title }}
                    </a-menu-item>
                </RouterLink>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.path" />
            </template>
        </template>
    </a-sub-menu>
</template>
<script setup lang="ts" name="SubMenu">
defineProps({
    menuInfo: {
        type: Object,
        default: () => {},
    },
})
</script>
