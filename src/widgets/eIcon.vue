<template>
<el-icon :size="size" class="e-icon">
    <Component :is="name" />
</el-icon>
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
.e-icon {
    // Fix bug
    width: v-bind(fontSize);
    height: v-bind(fontSize);
    cursor: v-bind(cursor);

    svg {
        width: v-bind(fontSize);
        height: v-bind(fontSize);
    }
}
</style>
