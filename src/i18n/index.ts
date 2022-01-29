import { createI18n } from 'vue-i18n';
import en from './languages/en';
import zh from './languages/zh';
import { LanguageStorage } from '@/storage';

const language = (navigator.language || 'en').toLowerCase();

const i18n = createI18n({
    fallbackLocale: 'en',
    globalInjection: true,
    legacy: false,
    locale: ['en', 'zh',][LanguageStorage.get()],
    messages: {
        en,
        zh,
    },
});

export default i18n;
