interface Type {
    fromJson: Function;
    toJson: Function;
}

export default abstract class AbstractStorage {
    protected storage?: Storage;

    constructor() {}

    get(key: string) {
        const json: string | null = this.storage!.getItem(key);
        return json === null ? null : JSON.parse(json);
    }

    set(key: string, value: any) {
        this.storage!.setItem(key, JSON.stringify(value));
    }

    remove(key: string) {
        this.storage!.removeItem(key);
    }

    clear() {
        this.storage!.clear();
    }
}
