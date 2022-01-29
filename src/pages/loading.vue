<template>
<div>
    <el-button @click="startTableLoading">{{ $t('message.loading.tableLoading') }}</el-button>
    <el-button @click="startFullscreenLoading">{{ $t('message.loading.fullscreenLoading') }}</el-button>
    <div style="height: 15px"></div>
    <el-table v-loading="tableLoading" :data="[]" border>
        <el-table-column
        prop="id"
        :label="$t('message.table.id')"
        align="center" />
        <el-table-column
        prop="name"
        :label="$t('message.table.name')"
        align="center" />
        <el-table-column
        prop="gender"
        :label="$t('message.table.gender')"
        align="center" />
    </el-table>
</div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';

const tableLoading = ref(false);

const startTableLoading = () => {
    tableLoading.value = true;
    setTimeout(() => {
        tableLoading.value = false;
    }, 2000);
};

const startFullscreenLoading = () => {
    const loading = ElLoading.service({
        lock: true,
        text: i18n.global.t('message.common.loading'),
        background: 'rgba(0, 0, 0, 0.7)',
    });
    setTimeout(() => {
        loading.close();
    }, 2000);
};
</script>

<style lang="scss"></style>
