import MBaseView, { ViewIcon as MViewIcon } from '@/models/baseView';
import MGroupView from '@/models/groupView';
import MExtensionView from '@/models/extensionView';

const extensionHost = import.meta.env.VITE_EXTENSION_HOST;

const routes: MBaseView[] = [
    new MGroupView({
        name: 'extensions',
        title: 'message.routes.extensions.name',
        icon: new MViewIcon({
            type: MViewIcon.Type.E,
            name: 'position',
        }),
        children: [
            new MExtensionView({
                name: 'test',
                title: 'Test',
                path: 'test',
                page: `${extensionHost}iframe-bridge`,
            }),
        ],
    }),
];

export default routes;
