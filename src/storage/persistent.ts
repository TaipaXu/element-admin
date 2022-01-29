import AbstractStorage from './abstractStorage';

export default class Persistent extends AbstractStorage {
    constructor() {
        super();
        this.storage = localStorage;
    }
}
