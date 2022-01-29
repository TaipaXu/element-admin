<template>
<article class="navbar-alert">
    <header class="navbar-alert__header">
        <m-icon :name="name" :size="15" class="navbar-alert__icon" />
        <span class="navbar-alert__datetime">{{ value.datetime }}</span>
    </header>
    <main class="navbar-alert__content">
        {{ value.content }}
    </main>
</article>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import MIcon from '@/widgets/mIcon.vue';
import MAlert from '@/models/alert';

const props = defineProps({
    value: {
        type: Object as PropType<MAlert>,
        required: true,
    },
});

const name: string = {
    news: 'newspaper',
    notice: 'notifications',
}[props.value.type];
</script>

<style lang="scss">
.navbar-alert {
    padding: 8px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    &:hover {
        background-color: darken($color: #fff, $amount: 10);
    }

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__datetime {
        font-size: 12px;
    }

    &__content {
        margin-top: 2px;
    }
}
</style>
