<template>
<div class="screenshot-page">
    <el-button @click="screenshot">{{ $t('message.screenshot.screenshot') }}</el-button>
    <el-button @click="domScreenshot">{{ $t('message.screenshot.dom') }}</el-button>

    <img class="screenshot-result" :src="imgSrc">
</div>
</template>

<script setup lang="ts">
import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";
import html2canvas from 'html2canvas';

let imgSrc = ref('');

const screenshot = () => {
    if (checkIfBrowserSupported()) {
        takeScreenshot().then((screenshot: string) => {
            imgSrc.value = screenshot;
        });
    }
};

const domScreenshot = () => {
    html2canvas(document.querySelector('#app')!).then(canvas => {
        imgSrc.value = canvas.toDataURL();
    });
};
</script>

<style lang="scss">
.screenshot {
    &-result {
        margin-top: 10px;
    }
}
</style>
