import path from "path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';
import copy from "rollup-plugin-copy";

const resolve = (dir: string) => {
    return path.resolve(__dirname, ".", dir);
};

const typesDir = resolve('src/@types');

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove();
                            }
                        },
                    },
                },
            ],
        },
    },
    base: './',
    build: {
        minify: true,
        chunkSizeWarningLimit: 2000,
    },
    plugins: [
        vue(),

        AutoImport({
            imports: ['vue',],

            resolvers: [ElementPlusResolver(),],

            dts: path.resolve(typesDir, 'auto-imports.d.ts'),
        }),

        copy({
            targets: [
                { src: "extensions", dest: "dist", },
            ],
            hook: "writeBundle",
        }),

        Inspect(),
    ],
    resolve: {
        alias: {
            "@": resolve("src"),
            "~": resolve("node_modules"),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            '/extension': {
                target: 'http://127.0.0.1:4000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/extension/, ''),
            },
        },
    },
});
