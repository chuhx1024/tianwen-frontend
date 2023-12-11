<template>
    <a-tabs class="Example-container">
        <a-tab-pane key="1" tab="svg-icons">
            <h2>一, iconFont使用方法:</h2>
            <h3>1. iconfont 项目上传图标</h3>
            <h3>
                2. 下载 iconfont.js iconfont.json 后拷贝到项目目录
                src/assets/styles/iconfont/iconfont.js src/assets/styles/iconfont/iconfont.json
            </h3>
            <h3>2. 使用 fontIcon(点击复制代码)</h3>
            <ilu-icons name="ILU-suanfaku" />
            <a
                href="https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=4153497&keyword=&project_type=&page="
                target="__blank"
            >
                IconFont项目地址
            </a>
            <div class="icon-container">
                <div
                    class="icon-item"
                    v-for="item in iconFontNames"
                    :key="item.font_class"
                    v-copy="`<ilu-icons name=&quot;ILU-${item.font_class}&quot;/>`"
                >
                    <ilu-icons :name="'ILU-' + item.font_class" />
                    <h5>{{ item.font_class.slice(0, 8) }}...</h5>
                </div>
            </div>
            <hr />
            <h2>二, svg图片使用方法:</h2>
            <h3>1. svg图片地址: src/assets/svg</h3>
            <h3>2. 使用 自定义SVG(点击复制代码)</h3>
            <h3><ilu-icons name="data" /></h3>

            <div class="icon-container">
                <div
                    class="icon-item"
                    v-for="item in iconNames"
                    :key="item"
                    v-copy="`<ilu-icons name=&quot;${item.slice(17, -4)}&quot;/>`"
                >
                    <ilu-icons :name="item.slice(17, -4)" />
                    <h5>{{ item.slice(17, -4) }}</h5>
                </div>
            </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

import vCopy from '@/directives/v-copy'

import jsonData from '@/assets/styles/iconfont/iconfont.json'
let iconNames = ref<any>([])
let iconFontNames = jsonData.glyphs

onMounted(() => {
    const files = import.meta.glob('@/assets/svgs/*.svg')
    iconNames.value = Object.keys(files)

    console.log(jsonData, 123)
})
</script>
<style lang="scss" scoped>
.Example-container {
    .icon-container {
        display: flex;
        flex-wrap: wrap;

        .icon-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            margin: 5px;
            border: 1px solid #ccc;
            cursor: pointer;

            &:hover {
                background-color: #b7cffb;
            }
        }
    }
}
</style>
