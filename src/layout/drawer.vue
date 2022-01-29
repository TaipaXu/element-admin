<template>
<el-drawer
:model-value="value"
direction="ltr"
:with-header="false"
:size="200"
custom-class="drawer"
@close="close">
    <sidebar :collapse="false" class="drawer-sidebar" />
</el-drawer>
</template>

<script setup lang="ts">
import Sidebar from './sidebar.vue';

defineProps({
    value: {
        type: Boolean,
    },
});

const emits = defineEmits(['input',]);

const close = () => {
    emits('input', false);
};
</script>

<style lang="scss">
.drawer {
    .el-drawer__body {
        padding: 0;
    }
}
</style>
