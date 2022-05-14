import { createRouter, createWebHashHistory, RouteRecordRaw, NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';
import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';
import MExtensionView from '@/models/extensionView';
import systemSettingsRoutes from './modules/systemSettings';
import widgetsRoutes from './modules/widgets';
import tableRoutes from './modules/table';
import formsRoutes from './modules/forms';
import chartsRoutes from './modules/charts';
import utilsRoutes from './modules/utils';
import nestedRoutes from './modules/nestedRoutes';
import extensionRoutes from './modules/extension';
import { guard } from "./guards";

const staticRoutes: Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/login.vue'),
    },
    {
        name: '404',
        path: '/404',
        component: () => import('@/pages/404.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes,
});

const routes: MBaseView[] = [
    new MInnerView({
        name: 'dashboard',
        title: 'message.routes.dashboard',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'desktop_windows',
        }),
        path: 'dashboard',
        page: () => import('@/pages/dashboard.vue'),
    }),
    ...systemSettingsRoutes,
    ...widgetsRoutes,
    ...tableRoutes,
    ...formsRoutes,
    ...chartsRoutes,
    ...utilsRoutes,
    ...nestedRoutes,
    ...extensionRoutes,
];

const layoutRoutes: Array<RouteRecordRaw> = [];

const addRoutes = (routes: MBaseView[]) => {
    for (const route of routes) {
        if (route instanceof MGroupView) {
            addRoutes(route.children as MBaseView[]);
        } else if (route instanceof MInnerView) {
            layoutRoutes.push({
                name: route.name,
                path:
                    route.parent === undefined ? route.path : `${route.parent.name}/${route.path}`,
                component: route.page,
                meta: {
                    title: route.title,
                    keepAlive: route.keepAlive,
                    hidden: route.hide,
                    permission: route.permission,
                },
            });
        } else if (route instanceof MExtensionView) {
            layoutRoutes.push({
                name: route.name,
                path: `${route.path}/:url`,
                component: () => import('@/pages/iframe.vue'),
                meta: {
                    title: route.title,
                    keepAlive: route.keepAlive,
                    hidden: route.hide,
                    permission: route.permission,
                },
            });
        }
    }
};
addRoutes(routes);

router.addRoute({
    path: '',
    component: () => import('@/layout/index.vue'),
    redirect: 'dashboard',
    children: [
        ...layoutRoutes,
    ],
});

guard(router);

export default router;
export { routes };
