<template>
<div class="screenshot-page">
    <el-button @click="click">{{ $t('message.screenshot.take') }}</el-button>

    <img class="screenshot-result" :src="imgSrc">
</div>
</template>

<script setup lang="ts">
import { takeScreenshot, checkIfBrowserSupported } from "@xata.io/screenshot";

let imgSrc = ref('');

const click = () => {
    if (checkIfBrowserSupported()) {
        takeScreenshot().then((screenshot: string) => {
            imgSrc.value = screenshot;
        });
    }
}
</script>

<style lang="scss">
.screenshot {
    &-result {
        margin-top: 10px;
    }
}
</style>
