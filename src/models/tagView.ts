import EffectiveView from './effectiveView';

interface Params {
    path: string;
    view: EffectiveView;
}

export default class TagView {
    public readonly path: string;
    public readonly view: EffectiveView;

    constructor(params: Params) {
        this.path = params.path;
        this.view = params.view;
    }
};
