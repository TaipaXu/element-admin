<template>
<div class="zip-page">
    <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    :placeholder="i18n.global.t('message.zip.placeholder')" />

    <div style="height: 20px"></div>

    <el-button type="primary" @click="download">{{ $t('message.zip.download') }}</el-button>
</div>
</template>

<script setup lang="ts">
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import i18n from '@/i18n';

const textarea = ref('Hello world');

const download = async () => {
    const zip = new JSZip();
    zip.file('hello.txt', textarea.value);

    const content = await zip.generateAsync({ type: 'blob', });
    saveAs(content, 'download.zip');
};
</script>

<style lang="scss"></style>
