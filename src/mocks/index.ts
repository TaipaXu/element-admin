import { AxiosStatic } from 'axios';
import MockAdapter from "axios-mock-adapter";
import { mockUser } from './modules/user';

export class Mock {
    private mock: MockAdapter;

    constructor(axios: AxiosStatic) {
        this.mock = new MockAdapter(axios);
    }

    use() {
        mockUser(this.mock);
    }
}
