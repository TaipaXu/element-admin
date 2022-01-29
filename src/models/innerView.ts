import EffectiveView from './effectiveView';
import BaseView, { ViewIcon } from './baseView';
import { Component } from 'vue';

interface Params {
    name: string;
    title: string;
    icon?: ViewIcon;
    path: string;
    keepAlive?: boolean;
    permission?: string;
    hide?: boolean;
    page: Component;
}

export default class InnerView extends EffectiveView {
    public readonly page: Component;

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
        this.page = page;
    }
}
