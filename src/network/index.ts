import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '@/store';
import { Mock } from '@/mocks';
import i18n from '@/i18n';

if (import.meta.env.VITE_MOCK) {
    new Mock(axios).use();
}

const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASR_API as string,
    timeout: 5000,
});

request.interceptors.request.use(
    (config: AxiosRequestConfig<any>) => {
        const token: string | undefined = store.getters.token;
        if (token !== undefined) {
            config.headers!['token'] = token;
        }
        config.headers!.language = store.getters['app/languageStr'];
        return config;
    },
    (error) => {
        console.log('request error');
    }
);

request.interceptors.response.use(
    (response: AxiosResponse) => {
        const data = response.data;
        return data;
    },
    (error) => {
        console.log('error', error);
        if (error.response.status === 500) {
            ElMessage.error(i18n.global.t('message.network.serviceError'));
        } else {
            ElMessage.error(error.response.data.message);
        }
    }
);

export default request;
