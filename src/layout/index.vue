<template>
<div class="layout">
    <sidebar
    :collapse="!store.getters['app/showSidebar']"
    class="layout-sidebar"
    :class="{
        'layout-sidebar--hide': store.getters['app/size'] <= MSize.Md
    }" />
    <drawer
    v-if="store.getters['app/size'] <= MSize.Md"
    v-model="drawer" />
    <div class="layout-main">
        <navbar @menu="handleMenu" />
        <tags />

        <router-view :key="routerKey" v-slot="{ Component }" class="layout-page">
            <keep-alive>
                <component v-if="$route.meta.keepAlive === true" :is="Component" />
            </keep-alive>
            <component v-if="$route.meta.keepAlive !== true" :is="Component" />
        </router-view>
    </div>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Sidebar from './sidebar.vue';
import Drawer from './drawer.vue';
import Navbar from './navbar.vue';
import Tags from './tags.vue';
import store from '@/store';
import sizeEmitter from '@/events/size';
import commonEmitter from '@/events/common';
import { Size as MSize } from '@/models/app';

const routerKey = ref(0);

onBeforeMount(() => {
    sizeEmitter.on('size', ({ oldSize, newSize, }) => {
        if (oldSize === MSize.Sm && newSize === MSize.Md) {
            setTimeout(() => {
                store.commit('app/setSidebar', true);
            });
        }
    });

    commonEmitter.on('refresh', () => {
        routerKey.value++;
    });
});

onBeforeUnmount(() => {
    sizeEmitter.off('size');
    commonEmitter.off('refresh');
});

const drawer = ref(false);

const handleMenu = () => {
    if (store.getters['app/size'] > MSize.Md) {
        store.commit('app/toggleSidebar');
    } else {
        drawer.value = !drawer.value;
    }
};

const $route = useRoute();
watch($route, () => {
    if (store.getters['app/size'] <= MSize.Md && drawer.value) {
        drawer.value = false;
    }
});
</script>

<style lang="scss">
.layout {
    display: flex;
    flex-direction: row;
    height: 100%;

    &-sidebar {
        &--hide {
            width: 0 !important;
            overflow: hidden;
            transition: width 0.2s ease-out;
        }
    }

    &-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    &-page {
        flex: 1;
        padding: 15px;
        overflow-y: auto;
    }
}
</style>
