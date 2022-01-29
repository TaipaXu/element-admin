<template>
<el-sub-menu
v-if="value instanceof MGroupView"
class="sidebar-item"
:index="value.name">
    <template #title>
        <div class="sidebar-item__icon">
            <e-icon
            v-if="value.icon?.type === MViewIcon.Type.E"
            :name="value.icon.name"
            :size="20" />
            <m-icon
            v-if="value.icon?.type === MViewIcon.Type.M"
            :name="value.icon.name"
            :size="20" />
        </div>
        <span
        class="sidebar-item__name">{{ value.title.startsWith('message.') ? $t(value.title) : value.title }}</span>
    </template>
    <sidebar-item
    v-for="item in value.children"
    :key="item.name"
    :value="item" />
</el-sub-menu>

<el-menu-item
v-else-if="value instanceof MEffectiveView && !value.hide && hasPermission(value)"
:index="value.name"
class="sidebar-item"
@click="click">
    <div class="sidebar-item__icon">
        <e-icon
        v-if="value.icon?.type === MViewIcon.Type.E"
        :name="value.icon.name"
        :size="20" />
        <m-icon
        v-if="value.icon?.type === MViewIcon.Type.M"
        :name="value.icon.name"
        :size="20" />
    </div>
    <template #title>
        <span
        class="sidebar-item__name">{{ value.title.startsWith('message.') ? $t(value.title) : value.title }}</span>
    </template>
</el-menu-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useRouter } from 'vue-router';
import MIcon from '@/widgets/mIcon.vue';
import EIcon from '@/widgets/eIcon.vue';
import store from '@/store';
import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MEffectiveView from '@/models/effectiveView';
import MInnerView from '@/models/innerView';
import MExtensionView from '@/models/extensionView';

const props = defineProps({
    value: {
        type: Object as PropType<MBaseView>,
        required: true,
    },
});

const $router = useRouter();
const click = () => {
    if (props.value instanceof MInnerView) {
        $router.push({ name: props.value.name, });
    } else if (props.value instanceof MExtensionView) {
        $router.push({
            name: props.value.name,
            params: {
                url: props.value.page,
            },
        });
    }
};

const hasPermission = (view: MEffectiveView): boolean => {
    if (store.getters['user/user'].permissions.includes('admin')) {
        return true;
    } else if (view.permission === undefined) {
        return true;
    } else if (store.getters['user/user'].permissions.includes(view.permission)) {
        return true;
    }
    return false;
};
</script>

<style lang="scss">
.sidebar-item {
    // background-color: #343a40;

    &__title {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &__icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
    }

    &__name {
        margin-left: 8px;
    }
}
</style>
