enum Type {
    E,
    M
}

interface ViewIconParams {
    type: Type;
    name: string;
}

export class ViewIcon {
    public static readonly Type = Type;
    public readonly type: Type;
    public readonly name: string;

    constructor({ type, name, }: ViewIconParams) {
        this.type = type;
        this.name = name;
    }
}

interface Params {
    name: string;
    title: string;
    icon?: ViewIcon;
}

export default abstract class BaseView {
    private _name: string;
    private _title: string;
    private _icon?: ViewIcon;
    private _parent?: BaseView;

    public get name(): string {
        return this._name;
    }

    public get title(): string {
        return this._title;
    }

    public get icon(): ViewIcon | undefined {
        return this._icon;
    }

    public get parent(): BaseView | undefined {
        return this._parent;
    }

    public set parent(view: BaseView | undefined) {
        this._parent = view;
    }

    // protected setParent(view: BaseView) {
    //     this._parent = view;
    // }

    constructor({ name, title, icon, }: Params) {
        this._name = name;
        this._title = title;
        this._icon = icon;
    }
}
