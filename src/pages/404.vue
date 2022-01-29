<template>
<div class="not-fount-page">
    <h1 class="not-fount__title">{{ $t('message.404.title') }}</h1>
    <h2 class="not-fount__subtitle">{{ $t('message.404.subtitle') }}</h2>
</div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.not-fount {
    &-page {
        padding: 10px;
    }

    &__title {
        font-size: 30px;
    }
}
</style>
