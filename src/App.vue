<template>
<el-config-provider :locale="language">
    <router-view />
</el-config-provider>
</template>

<script setup lang="ts">
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import enLocale from 'element-plus/lib/locale/lang/en';
import zhcnLocale from 'element-plus/lib/locale/lang/zh-cn';
import store from '@/store';
import sizeEmitter from '@/events/size';
import { Size as MSize, getSize as MGetSize } from '@/models/app';
import MLanguage from '@/models/language';

const setSize = () => {
    const currentSize: MSize = store.getters['app/size'];
    const size: MSize = MGetSize(window.innerWidth);
    if (currentSize !== size) {
        store.commit('app/setSize', size);
        sizeEmitter.emit('size', {
            oldSize: currentSize,
            newSize: size,
        });
    }
};

onBeforeMount(() => {
    setSize();
    window.addEventListener('resize', setSize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', setSize);
});

const $route = useRoute();

watch(
    $route,
    (newValue: RouteLocationNormalizedLoaded, oldValue: RouteLocationNormalizedLoaded) => {
        store.commit('route/setCurrentRoute', {name: newValue.name, path: $route.path,});
        store.commit('route/addVisitedRoute', {name: newValue.name, path: $route.path,});
    }
);

const language = computed(() => {
    if (store.getters['app/language'] == MLanguage.Zh) {
        return zhcnLocale;
    }
    return enLocale;
});
</script>

<style>
#app {
    width: 100%;
    height: 100%;
}
</style>
