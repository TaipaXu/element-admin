<template>
<div class="rich-text-page">
    <div class="rich-text-editor">
        <p>Hello World!</p>
    </div>
</div>
</template>

<script setup lang="ts">
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

onMounted(() => {
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike',],
        ['blockquote', 'code-block',],

        [{ header: 1, }, { header: 2, },],
        [{ list: 'ordered', }, { list: 'bullet', },],
        [{ script: 'sub', }, { script: 'super', },],
        [{ indent: '-1', }, { indent: '+1', },],
        [{ direction: 'rtl', },],

        [{ size: ['small', false, 'large', 'huge',], },],
        [{ header: [1, 2, 3, 4, 5, 6, false,], },],

        [{ color: [], }, { background: [], },],
        [{ font: [], },],
        [{ align: [], },],

        ['image', 'video',],

        ['clean',],
    ];
    const editor = new Quill('.rich-text-editor', {
        modules: {
            toolbar: toolbarOptions,
        },
        theme: 'snow',
    });

    editor.on('text-change', (delta, oldContents, source) => {
        console.log(editor.root.innerHTML);
    });
});
</script>

<style lang="scss">
.rich-text {
    &-page {
        display: flex;
        flex-direction: column;

        .ql-container {
            flex: 1;
            overflow: hidden;
        }
    }
}
</style>
