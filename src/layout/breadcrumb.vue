<template>
<el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item
    v-for="item in items"
    :key="item.name">
        {{ item.title.startsWith('message.') ? $t(item.title) : item.title }}
    </el-breadcrumb-item>
</el-breadcrumb>
</template>

<script setup lang="ts">
import store from '@/store';
import MBaseView from '@/models/baseView';

let items = computed(() => {
    const currentRoute: MBaseView | undefined = store.getters['route/currentRoute']?.view;
    const routes: MBaseView[] = [];
    if (currentRoute !== undefined) {
        const insertViews = (view: MBaseView) => {
            routes.unshift(view);
            if (view.parent !== undefined) {
                insertViews(view.parent);
            }
        };
        insertViews(currentRoute);
    }

    return routes;
});
</script>

<style lang="scss">
.breadcrumb {
    user-select: none;
}
</style>
