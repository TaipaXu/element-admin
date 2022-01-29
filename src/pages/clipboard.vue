<!-- Test in localhost -->
<template>
<div class="clipboard-page">
    <el-input
    v-model="textarea"
    :placeholder="$t('message.clipboard.placeholder')"
    type="textarea"
    :rows="15" />
    <div class="clipboard-buttons">
        <el-button type="success" @click="read">{{ $t('message.clipboard.read') }}</el-button>
        <el-button type="success" @click="write">{{ $t('message.clipboard.write') }}</el-button>
    </div>
</div>
</template>

<script setup lang="ts">
import i18n from '@/i18n';

const textarea = ref('value');

const read = async () => {
    try {
        const str: string = await navigator.clipboard.readText();
        textarea.value = str;
        ElMessage({
            message: i18n.global.t('message.clipboard.success'),
            type: 'success',
        });
    } catch (error) {
        ElMessage({
            message: i18n.global.t('message.clipboard.error'),
            type: 'error',
        });
    }
};

const write = async () => {
    try {
        navigator.clipboard.writeText(textarea.value).then(
            () => {
                ElMessage({
                    message: i18n.global.t('message.clipboard.success'),
                    type: 'success',
                });
            },
            () => {
                ElMessage({
                    message: i18n.global.t('message.clipboard.error'),
                    type: 'error',
                });
            }
        );
    } catch (error) {
        ElMessage({
            message: i18n.global.t('message.clipboard.error'),
            type: 'error',
        });
    }
};
</script>

<style lang="scss">
.clipboard {
    &-buttons {
        margin-top: 12px;
    }
}
</style>
