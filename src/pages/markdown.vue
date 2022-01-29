<template>
<div class="markdown-page">
    <div ref="editor" class="markdown-editor"></div>

    <el-button
    type="primary"
    class="markdown-download"
    @click="download">{{ $t('message.markdown.download') }}</el-button>
</div>
</template>

<script setup lang="ts">
import { Editor } from '@toast-ui/editor';
import { saveAs } from 'file-saver';

let editor: Editor;

onMounted(() => {
    editor = new Editor({
        el: document.querySelector('.markdown-editor')!,
        previewStyle: 'vertical',
        height: '500px',
        initialValue: '# Hello',
    });
});

const download = () => {
    const markdown: string = editor.getMarkdown();
    const blob: Blob = new Blob([markdown,], { type: 'text/plain;charset=utf-8', });
    saveAs(blob, 'markdown.md');
};
</script>

<style lang="scss">
.markdown {
    &-download {
        margin-top: 20px;
    }
}
</style>
