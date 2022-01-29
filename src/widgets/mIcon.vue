<template>
<span class="material-icons m-icon">
    {{ name }}
</span>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 16,
    },
    cursor: {
        type: Boolean,
        default: false,
    },
});

const fontSize: String = `${props.size}px`;
const cursor: String = props.cursor ? 'pointer' : 'auto';
</script>

<style lang="scss">
.m-icon {
    font-size: v-bind(fontSize);
    cursor: v-bind(cursor);
}
</style>
