<template>
<el-dropdown>
    <m-icon name="language" :size="20" cursor />
    <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item
            :disabled="store.getters['app/language'] === MLanguage.En"
            @click="setLanguage(MLanguage.En)">English</el-dropdown-item>
            <el-dropdown-item
            :disabled="store.getters['app/language'] === MLanguage.Zh"
            @click="setLanguage(MLanguage.Zh)">中文</el-dropdown-item>
        </el-dropdown-menu>
    </template>
</el-dropdown>
</template>

<script setup lang="ts">
import { getCurrentInstance, ComponentInternalInstance } from 'vue';
import { useStore } from 'vuex';
import MIcon from '@/widgets/mIcon.vue';
import { LanguageStorage } from '@/storage';
import MLanguage from '@/models/language';

const { proxy, } = getCurrentInstance() as ComponentInternalInstance;
const store = useStore();
const setLanguage = (language: MLanguage) => {
    proxy!.$i18n.locale = language === MLanguage.En ? 'en' : 'zh';
    store.commit('app/setLanguage', language);
    LanguageStorage.set(language);
};
</script>

<style lang="scss"></style>
