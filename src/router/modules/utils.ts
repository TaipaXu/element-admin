import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'utils',
        title: 'message.routes.utils.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'table_chart',
        }),
        children: [
            new MInnerView({
                name: 'screenshot',
                title: 'message.routes.utils.screenshot',
                path: 'screenshot',
                page: () => import('@/pages/screenshot.vue'),
            }),
        ],
    }),
];

export default routes;
