<template>
<div
ref="$tags"
v-contextmenu:tagscontextmenu
class="tags"
@mousewheel="scroll">
    <div
    v-for="route in store.getters['route/visitedRoutes']"
    :key="route.view.name"
    class="tag"
    :class="{ 'tag--active': store.getters['route/currentRoute']?.path === route.path }"
    @click="click(route.path)"
    v-contextmenu:tagcontextmenu
    @contextmenu.stop.prevent="">
        {{ route.view.title.startsWith('message.') ? $t(route.view.title) : route.view.title }}
        <el-icon :size="12" class="tag__close" @click.stop="closeTag(route.path)">
            <close />
        </el-icon>
    </div>
    <v-contextmenu ref="tagcontextmenu">
        <v-contextmenu-item @click="refresh">{{
            $t('message.tags.refresh')
        }}</v-contextmenu-item>
        <v-contextmenu-item @click="closeCurrent">{{
            $t('message.tags.close')
        }}</v-contextmenu-item>
        <v-contextmenu-item @click="closeOhters">{{
            $t('message.tags.closeOhters')
        }}</v-contextmenu-item>
        <v-contextmenu-item @click="closeAll">{{
            $t('message.tags.closeAll')
        }}</v-contextmenu-item>
    </v-contextmenu>
    <v-contextmenu ref="tagscontextmenu">
        <v-contextmenu-item @click="refresh">{{
            $t('message.tags.refresh')
        }}</v-contextmenu-item>
        <v-contextmenu-item @click="closeAll">{{
            $t('message.tags.closeAll')
        }}</v-contextmenu-item>
    </v-contextmenu>
</div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import store from '@/store';
import commonEmitter from '@/events/common';
import MTagView from '@/models/tagView';

const $router = useRouter();
const $route = useRoute();

const click = (path: string) => {
    $router.push(path);
};

const closeTag = (path: string) => {
    store.commit('route/removeVisitenRoute', path);

    const visitedRoutes = store.getters['route/visitedRoutes'];
    if (visitedRoutes.length === 0) {
        if ($route.name === 'dashboard') {
            store.commit('route/addVisitedRoute', {
                name: 'dashboard',
                path: '/dashboard',
            });
        } else {
            $router.push({ name: 'dashboard', });
        }
    } else if (visitedRoutes.length === 1) {
        $router.push(visitedRoutes[visitedRoutes.length - 1].path);
    } else {
        const currentRoute: MTagView | undefined = store.getters['route/currentRoute'];
        if (currentRoute !== undefined && currentRoute.path === path) {
            $router.push(visitedRoutes[visitedRoutes.length - 1].path);
        }
    }
};

const refresh = () => {
    commonEmitter.emit('refresh');
};

const closeCurrent = () => {
    const currentRoute: MTagView | undefined = store.getters['route/currentRoute'];
    if (currentRoute !== undefined) {
        closeTag(currentRoute.path);
    }
};

const closeOhters = () => {
    const currentRoute: MTagView | undefined = store.getters['route/currentRoute'];
    if (currentRoute !== undefined) {
        store.commit('route/removeOhterRoutes', currentRoute);
    }
};

const closeAll = () => {
    store.commit('route/removeAllRoutes');
    $router.push({ name: 'dashboard', });
};

const $tags = ref();

const scroll = (event: WheelEvent) => {
    const delta: number = 20;
    const $dom: HTMLElement = $tags.value;
    const current = $dom.scrollLeft;
    if (event.deltaY <= 0) {
        $dom.scrollTo(current - delta, 0);
    } else {
        $dom.scrollTo(current + delta, 0);
    }
};
</script>

<style lang="scss">
.tag {
    &s {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 35px;
        padding: 0 10px;
        overflow: hidden;
        border-bottom: 1px solid #eee;
        user-select: none;

        &::-webkit-scrollbar-track {
            border-radius: 0;
            background: transparent;
        }

        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: #eee;
            border-radius: 3px;
        }

        &:hover {
            overflow-x: overlay;
        }
    }

    $border-color: #eee !default;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 6px;
    font-size: 10px;
    border: 1px solid $border-color;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
        border-color: darken($color: $border-color, $amount: 5);
    }

    & + & {
        margin-left: 6px;
    }

    &--active {
        color: #fff;
        background-color: #42b983;
    }

    &__close {
        margin-left: 4px;
        border-radius: 50%;

        &:hover {
            color: #fff;
            background-color: #f56c6c;
        }
    }
}
</style>
