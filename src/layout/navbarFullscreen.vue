<template>
<m-icon
:name="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
:size="20"
cursor
@click="toggleFullscreen" />
</template>

<script setup lang="ts">
import MIcon from '@/widgets/mIcon.vue';

const fullscreen = ref(false);

const requestFullscreen = () => {
    document.body.requestFullscreen();
};

const exitFullscreen = () => {
    document.exitFullscreen();
};

const toggleFullscreen = () => {
    fullscreen.value ? exitFullscreen() : requestFullscreen();
    fullscreen.value = !fullscreen.value;
};
</script>

<style lang="scss"></style>
