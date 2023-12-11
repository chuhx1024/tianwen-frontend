<template>
    <svg
        aria-hidden="true"
        class="svg-icon"
        :style="width === '' ? { width: '1.1em', height: '1.1em' } : {}"
        :width="width"
        :height="height"
    >
        <use :xlink:href="symbolId" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    width: {
        type: String,
        default: '',
    },
    height: {
        type: String,
        default: '',
    },
})
const symbolId = computed(() =>
    props.name.startsWith('ILU-') ? `#${props.name}` : `#${props.prefix}-${props.name}`,
)
</script>
<style scoped lang="scss">
.svg-icon {
    overflow: hidden;
    color: #c4c4c4;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>
