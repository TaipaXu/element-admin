import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'charts',
        title: 'message.routes.charts.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'edit_note',
        }),
        children: [
            new MInnerView({
                name: 'lineChart',
                title: 'message.routes.charts.lineChart',
                path: 'lineChart',
                page: () => import('@/pages/lineChart.vue'),
            }),
            new MInnerView({
                name: 'barChart',
                title: 'message.routes.charts.barChart',
                path: 'barChart',
                page: () => import('@/pages/barChart.vue'),
            }),
        ],
    }),
];

export default routes;
