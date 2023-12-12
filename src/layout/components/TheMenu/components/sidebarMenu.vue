<template>
    <div class="sidebar-menu-container">
        <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="horizontal">
            <template v-for="item in routerStore.sidebarData" :key="item.key">
                <template v-if="item.children.length === 1">
                    <a-menu-item :key="item.path">
                        <template #icon>
                            <ilu-icons :name="item.meta.icon" />
                        </template>
                        <RouterLink :to="item.path">
                            {{ item.meta.title }}
                        </RouterLink>
                    </a-menu-item>
                </template>
                <template v-else>
                    <sub-menu :key="item.path" :menu-info="item" />
                </template>
            </template>
        </a-menu>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SubMenu from './subMenu.vue'
import { useRouterStore } from '@/stores/modules/router'

const routerStore = useRouterStore()

const selectedKeys = ref([''])
const openKeys = ref([])
</script>
<style lang="scss" scoped>
.sidebar-menu-container {
    :deep(.ant-menu) {
        transition: none;
        border-bottom: none;
        background-color: #d8d8d8;
    }
}
</style>
