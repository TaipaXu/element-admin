<template>
<aside
class="sidebar"
:class="{
    'sidebar--collapse': props.collapse
}">
    <header class="sidebar__header">
        <h1 class="sidebar__title">
            <a :href="$domain" target="_blank">Element<b> Admin</b></a>
        </h1>
    </header>
    <el-scrollbar>
        <el-menu
        :default-active="$route.name as string | undefined"
        active-text-color="#ffd04b"
        background-color="#343a40"
        text-color="#eee"
        :collapse="props.collapse"
        :collapse-transition="false"
        class="sidebar__menu">
            <template v-for="route in routes" :key="route.name">
                <sidebar-item :value="route" />
            </template>
        </el-menu>
    </el-scrollbar>
</aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import SidebarItem from './sidebarItem.vue';
import { routes } from '@/router';

const props = defineProps({
    collapse: {
        type: Boolean,
        required: true,
    },
});

const $route = useRoute();
</script>

<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200px;
    height: 100%;
    background-color: #343a40;
    transition: width 0.2s linear;
    user-select: none;

    &--collapse {
        width: 68px;
    }

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 60px;
        color: white;
        font-size: 22px;
        background-color: transparent;
        border-bottom: 1px solid #4b545c;
    }

    &__title {
        font-size: 12px;
        font-weight: normal;
        text-align: center;
    }

    &__menu {
        width: 100% !important;
        flex: 1;
        border-right: none;
    }
}
</style>
