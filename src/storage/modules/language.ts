import MLanguage from '@/models/language';
import { PersistentStorage } from '../index';

export class Storage {
    private static key: string = 'language';

    static get(): MLanguage {
        const language: MLanguage | null = PersistentStorage.get(this.key);
        return language === null ? MLanguage.En : language;
    }

    static set(language: MLanguage) {
        PersistentStorage.set(this.key, language);
    }
}
