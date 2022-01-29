import { ActionContext } from 'vuex';
import { TokenStorage } from '@/storage';
import MUser from '@/models/user';
import { login as RLogin, getInfo as RGetInfo, logout as RLogout } from '@/apis/user';

interface State {
    token?: string;
    user?: MUser;
}

const state = (): State => ({
    token: TokenStorage.get(),
    user: <MUser>{
        code: '',
        name: '',
        department: '',
        permissions: [],
    },
});

const getters = {
    token(state: State) {
        return state.token;
    },

    user(state: State) {
        return state.user;
    },
};

const mutations = {
    setToken(state: State, token: string) {
        state.token = token;
    },

    removeToken(state: State) {
        state.token = undefined;
    },

    setUser(state: State, user: MUser) {
        state.user = user;
    },

    removeUser(state: State) {
        state.user = <MUser>{
            code: '',
            name: '',
            department: '',
            permissions: [],
        };
    },
};

const actions = {
    async login(
        { commit, dispatch, }: ActionContext<State, State>,
        { account, password, remember, }: { account: string; password: string, remember: boolean }
    ) {
        const data: any = await RLogin(account, password, remember);
        commit('setToken', data.token);
        TokenStorage.set(data.token);
        const userInfo: any = data.info;
        commit('setUser', {
            code: userInfo.code,
            name: userInfo.name,
            department: userInfo.department,
            permissions: userInfo.permissions,
        });
        // throw Error('');
        // return Promise.reject();
    },

    async getInfo({ commit, }: ActionContext<State, State>, params: any) {
        try {
            const data: any = await RGetInfo();
            commit('setUser', {
                code: data.code,
                name: data.name,
                department: data.department,
                permissions: data.permissions,
            });
        } catch (error) {

        }
    },

    async logout({ commit, }: ActionContext<State, State>) {
        try {
            await RLogout();
        } catch (error) {

        }
        commit('removeToken');
        TokenStorage.remove();
        commit('removeUser');
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
