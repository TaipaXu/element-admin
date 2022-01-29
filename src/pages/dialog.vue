<template>
<div>
    <el-button @click="click">{{ $t('message.dialog.dialog') }}</el-button>

    <el-dialog v-model="show" :title="$t('message.dialog.title')">
        <span>{{ $t('message.dialog.content') }}</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="show = false">{{ $t('message.common.cancel') }}</el-button>
                <el-button type="primary" @click="show = false">{{ $t('message.common.confirm') }}</el-button>
            </span>
        </template>
    </el-dialog>
</div>
</template>

<script setup lang="ts">
const show = ref(false);

const click = () => {
    show.value = true;
};
</script>

<style lang="scss"></style>
