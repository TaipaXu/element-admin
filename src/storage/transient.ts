import AbstractStorage from './abstractStorage';

export default class Transient extends AbstractStorage {
    constructor() {
        super();
        this.storage = sessionStorage;
    }
}
