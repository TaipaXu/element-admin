<template>
<div>
    <el-calendar v-model="date" />
</div>
</template>

<script setup lang="ts">
const date = ref(new Date());
</script>

<style lang="scss"></style>
