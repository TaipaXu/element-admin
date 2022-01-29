import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'systemSettings',
        title: 'message.routes.systemSettings.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'settings',
        }),
        children: [
            new MInnerView({
                name: 'authSettings',
                title: 'message.routes.systemSettings.authSettings',
                path: 'authSettings',
                permission: 'admin',
                page: () => import('@/pages/auth.vue'),
            }),
        ],
    }),
];

export default routes;
