import MockAdapter from "axios-mock-adapter";

export const mockUser = (mock: MockAdapter) => {
    mock.onPost('/tokens').reply((config) => {
        const data = JSON.parse(config.data);
        if (data.account === 'admin' && data.password === '123456') {
            return [
                200, {
                    token: 'adminToken',
                    info: {
                        code: 'admin',
                        name: 'Admin',
                        department: 'Admin',
                        permissions: ['admin',],
                    },
                },
            ];
        }
        return [
            401, {
                message: config.headers!.language === 'en' ? 'Incorrect account or password' : '帐号或密码错误',
            },
        ];
    });

    mock.onGet('/users/').reply(200, {
        code: 'admin',
        name: 'Admin',
        department: 'Admin',
        permissions: ['admin',],
    });
};
