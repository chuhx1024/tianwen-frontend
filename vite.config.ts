import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import pluginEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
        createSvgIconsPlugin({
            // 图标文件夹为src/assets/svgs
            iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
        }),
        pluginEslint({
            include: ['src/*.tsx', 'src/**/*.tsx', 'src/*.ts', 'src/**/*.ts'],
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
