import BaseView, { ViewIcon } from './baseView';
import { Component } from 'vue';

interface Params {
    name: string;
    title: string;
    icon?: ViewIcon;
    path: string;
    keepAlive: boolean;
    permission?: string;
    hide: boolean;
}

export default abstract class EffectiveView extends BaseView {
    public readonly path: string;
    public readonly keepAlive: boolean;
    public readonly permission?: string;
    public readonly hide: boolean;
    public static readonly views: EffectiveView[] = [];

    constructor({ name, title, icon, path, keepAlive = false, permission, hide = false, }: Params) {
        super({ name, title, icon, });
        this.path = path;
        this.keepAlive = keepAlive;
        this.permission = permission;
        this.hide = hide;

        EffectiveView.views.push(this);
    }
}
