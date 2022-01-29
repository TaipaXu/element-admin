<template>
<el-link
type="primary"
:href="link"
target="_blank"
class="related-link">{{ name }}</el-link>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss">
.related-link {
    margin-bottom: 10px;
}
</style>
