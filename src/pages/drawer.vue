<template>
<div>
    <el-button @click="click">{{ $t('message.drawer.drawer') }}</el-button>

    <el-drawer v-model="show" :title="$t('message.drawer.title')">
        <span>{{ $t('message.drawer.content') }}</span>
    </el-drawer>
</div>
</template>

<script setup lang="ts">
const show = ref(false);
const click = () => {
    show.value = true;
};
</script>

<style lang="scss"></style>
