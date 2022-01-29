<template>
<div class="extension-page">
    <iframe ref="$iframe" :src="url" frameborder="0" class="extension-iframe"></iframe>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import store from '@/store';

const $iframe = ref();
const $route = useRoute();
const src: string = $route.params.url as string;
const token: string = store.getters['user/token'];
const permissions: string[] = store.getters['user/user'].permissions;
const url: string = `${src}?token=${token}&permissions=${JSON.stringify(permissions)}&t=${new Date()}`;
const origin: string = new URL(src).origin;

let t: NodeJS.Timeout;

onMounted(() => {
    t = setInterval(() => {
        ($iframe.value as any).contentWindow.postMessage(
            {
                type: 'bridge',
                message: `Hell from parent. ${Date()}`,
            },
            origin
        );
    }, 1000);
});

onUnmounted(() => {
    clearInterval(t);
});
</script>

<style lang="scss">
.extension {
    &-page {
        display: flex;
        flex-direction: column;
        padding: 0 !important;
    }

    &-iframe {
        width: 100%;
        flex: 1;
    }
}
</style>
