import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MInnerView from '@/models/innerView';

const routes: MBaseView[] = [
    new MGroupView({
        name: 'widget',
        title: 'message.routes.widgets.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.M,
            name: 'widgets',
        }),
        children: [
            new MInnerView({
                name: 'icons',
                title: 'message.routes.widgets.icons',
                path: 'icons',
                page: () => import('@/pages/icons.vue'),
            }),
            new MInnerView({
                name: 'contextMenu',
                title: 'message.routes.widgets.contextMenu',
                path: 'contextMenu',
                page: () => import('@/pages/contextMenu.vue'),
            }),
            new MInnerView({
                name: 'richText',
                title: 'message.routes.widgets.richText',
                path: 'richText',
                page: () => import('@/pages/richText.vue'),
            }),
            new MInnerView({
                name: 'markdown',
                title: 'message.routes.widgets.markdown',
                path: 'markdown',
                page: () => import('@/pages/markdown.vue'),
            }),
            new MInnerView({
                name: 'zip',
                title: 'message.routes.widgets.zip',
                path: 'zip',
                page: () => import('@/pages/zip.vue'),
            }),
            new MInnerView({
                name: 'calendar',
                title: 'message.routes.widgets.calendar',
                path: 'calendar',
                page: () => import('@/pages/calendar.vue'),
            }),
            new MInnerView({
                name: 'dialog',
                title: 'message.routes.widgets.dialog',
                path: 'dialog',
                page: () => import('@/pages/dialog.vue'),
            }),
            new MInnerView({
                name: 'drawer',
                title: 'message.routes.widgets.drawer',
                path: 'drawer',
                page: () => import('@/pages/drawer.vue'),
            }),
            new MInnerView({
                name: 'loading',
                title: 'message.routes.widgets.loading',
                path: 'loading',
                page: () => import('@/pages/loading.vue'),
            }),
            new MInnerView({
                name: 'messages',
                title: 'message.routes.widgets.messages',
                path: 'messages',
                page: () => import('@/pages/messages.vue'),
            }),
            new MInnerView({
                name: 'clipboard',
                title: 'message.routes.widgets.clipboard',
                path: 'clipboard',
                page: () => import('@/pages/clipboard.vue'),
            }),
            new MInnerView({
                name: 'video',
                title: 'message.routes.widgets.video',
                path: 'video',
                page: () => import('@/pages/video.vue'),
            }),
        ],
    }),
];

export default routes;
