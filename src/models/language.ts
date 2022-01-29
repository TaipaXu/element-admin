enum Language {
    En,
    Zh
}

export default Language;

export const getLanguageStr = (language: Language): string => {
    switch (language) {
    case Language.En:
        return 'en';

    case Language.Zh:
        return 'zh';
    }
};
