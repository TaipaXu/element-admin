import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'forms',
        title: 'message.routes.forms.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'edit_note',
        }),
        children: [
            new MInnerView({
                name: 'normal_form',
                title: 'message.routes.forms.normalForm',
                path: 'normalForm',
                page: () => import('@/pages/normalForm.vue'),
            }),
            new MInnerView({
                name: 'validateForm',
                title: 'message.routes.forms.validateForm',
                path: 'validateForm',
                page: () => import('@/pages/validateForm.vue'),
            }),
        ],
    }),
];

export default routes;
