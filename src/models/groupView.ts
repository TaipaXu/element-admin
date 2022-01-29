import BaseView, { ViewIcon } from './baseView';

interface Params {
    name: string;
    title: string;
    icon?: ViewIcon;
    children: BaseView[];
}

export default class GroupView extends BaseView {
    public readonly children: BaseView[];

    constructor({ name, title, icon, children, }: Params) {
        super({ name, title, icon, });
        this.children = children;
        for (const child of children) {
            child.parent = this;
        }
    }
}
