import { LanguageStorage } from '@/storage';
import { Size as MSize } from '@/models/app';
import MLanguage, { getLanguageStr as MGetLanguageStr } from '@/models/language';

interface State {
    showSidebar: boolean;
    size: MSize;
    language: MLanguage;
}

const state = (): State => ({
    showSidebar: true,
    size: MSize.Xs,
    language: LanguageStorage.get(),
});

const getters = {
    showSidebar(state: State) {
        return state.showSidebar;
    },

    size(state: State) {
        return state.size;
    },

    language(state: State) {
        return state.language;
    },

    languageStr(state: State) {
        return MGetLanguageStr(state.language);
    },
};

const mutations = {
    setSidebar(state: State, showSidebar: boolean) {
        state.showSidebar = showSidebar;
    },

    toggleSidebar(state: State) {
        state.showSidebar = !state.showSidebar;
    },

    setSize(state: State, size: MSize) {
        state.size = size;
    },

    setLanguage(state: State, language: MLanguage) {
        state.language = language;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
};
