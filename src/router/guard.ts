import { Router, NavigationHookAfter, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

const beforeFunctions: ((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => Promise<void>)[] = [];
const afterFunctions: NavigationHookAfter[] = [];

interface Params {
    before?: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => Promise<void>,
    after?: NavigationHookAfter,
}

export const registerGuard = (params: Params) => {
    if (params.before !== undefined) {
        beforeFunctions.push(params.before);
    }
    if (params.after !== undefined) {
        afterFunctions.push(params.after);
    }
};

export const linkGuards = (router: Router)=> {
    router.beforeEach(async (to, from, next) => {
        for (const item of beforeFunctions) {
            await item(to, from, next);
        }
    });

    router.afterEach((to, from) => {
        for (const item of afterFunctions) {
            item(to, from);
        }
    });
};
