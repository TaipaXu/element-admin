import NProgress from 'nprogress';
import store from '@/store';
import { TokenStorage } from '@/storage';
import i18n from '@/i18n';
import { registerGuard, linkGuards } from "@/router/guard";
import { Router } from 'vue-router';


const registerGuards = () => {
    NProgress.configure({
        showSpinner: false,
    });

    let index: number = 0;
    const step: number = 4;

    registerGuard({
        async before(to, from, next) {
            NProgress.start();
        },
    });

    registerGuard({
        async before(to, from, next) {
            if (to.name === 'login') {
                next();
                return;
            }

            const token: string | undefined = TokenStorage.get();
            if (token !== undefined) {
                if (index++ % step === 0) {
                    try {
                        await store.dispatch('user/getInfo');
                    } catch (error) {

                    }
                }

                const permissions: string[] = store.getters['user/user'].permissions;
                const permission: string | undefined = to.meta.permission as string | undefined;

                if (
                    permission === undefined ||
                permissions.includes(permission) ||
                permissions.includes('admin')
                ) {
                    next();
                } else {
                    next('/404');
                }
            } else {
                store.commit('user/removeUser');
                next('/login');
            }
        },
    });

    registerGuard({
        async before(to, from, next) {
            const title: string = to.meta.title as string;
            if (title !== undefined) {
                if (title.startsWith('message.')) {
                    document.title = i18n.global.t(title);
                } else {
                    document.title = title;
                }
            } else {
                document.title = 'ADMIN';
            }
        },
    });

    registerGuard({
        after() {
            NProgress.done();
        },
    });
};



export const guard = (router: Router) => {
    registerGuards();
    linkGuards(router);
};
