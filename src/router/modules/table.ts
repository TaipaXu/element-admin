import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'table',
        title: 'message.routes.table.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'table_chart',
        }),
        children: [
            new MInnerView({
                name: 'normalTable',
                title: 'message.routes.table.normalTable',
                path: 'normalTable',
                page: () => import('@/pages/normalTable.vue'),
            }),
            new MInnerView({
                name: 'fixedTable',
                title: 'message.routes.table.fixedTable',
                path: 'fixedTable',
                page: () => import('@/pages/fixedTable.vue'),
            }),
            new MInnerView({
                name: 'functionalTable',
                title: 'message.routes.table.functionalTable',
                path: 'functionalTable',
                page: () => import('@/pages/functionalTable.vue'),
            }),
            new MInnerView({
                name: 'custom',
                title: 'message.routes.table.custom',
                path: 'customs/:id',
                hide: true,
                page: () => import('@/pages/custom.vue'),
            }),
        ],
    }),
];

export default routes;
