import { PersistentStorage } from '../index';

export class Storage {
    private static key: string = 'Element-Admin-Token';

    static get(): string | undefined {
        const token: string | null = PersistentStorage.get(this.key);
        return token ?? undefined;
    }

    static set(token: string) {
        PersistentStorage.set(this.key, token);
    }

    static remove() {
        PersistentStorage.remove(this.key);
    }
}
