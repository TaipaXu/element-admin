import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'nestedRoutes',
        title: 'message.routes.nestedRoutes.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'account_tree',
        }),
        children: [
            new MGroupView({
                name: 'nestedRoutesA',
                title: 'A',
                children: [
                    new MInnerView({
                        name: 'nestedRoutesAA',
                        title: 'AA',
                        path: 'nestedRoutesAA',
                        page: () => import('@/pages/hidden.vue'),
                    }),
                ],
            }),
            new MInnerView({
                name: 'nestedRoutesB',
                title: 'B',
                path: 'nestedRoutesB',
                hide: true,
                page: () => import('@/pages/hidden.vue'),
            }),
        ],
    }),
];

export default routes;
