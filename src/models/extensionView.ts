import EffectiveView from './effectiveView';
import { ViewIcon } from './baseView';

interface Params {
    name: string;
    title: string;
    icon?: ViewIcon;
    path: string;
    keepAlive?: boolean;
    permission?: string;
    hide?: boolean;
    page: string;
}

export default class ExtensionView extends EffectiveView {
    private _page: string;

    public get page(): string {
        return this._page;
    }

    constructor({
        name,
        title,
        icon,
        path,
        keepAlive = false,
        permission,
        hide = false,
        page,
    }: Params) {
        super({ name, title, icon, path, keepAlive, permission, hide, });
        this._page = page;
    }
}
