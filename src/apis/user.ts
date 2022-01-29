import request from '@/network';

export const login = (account: string, password: string, remember: boolean) => {
    return request({
        url: '/tokens',
        method: 'POST',
        data: {
            account,
            password,
            remember,
        },
    });
};

export const getInfo = () => {
    return request({
        url: `/users/`,
        method: 'GET',
    });
};

export const logout = () => {
    return request({
        url: 'tokens',
        method: 'DELETE',
    });
};
