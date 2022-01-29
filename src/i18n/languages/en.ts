import routes from './en/routes';
import common from './en/common';
import network from './en/network';
const layout = import.meta.globEager('./en/layout/*.ts');
const pages = import.meta.globEager('./en/pages/*.ts');

const items = { ...layout, ...pages, };
let modules: any = {};
Object.keys(items).forEach((c: string) => {
    const module = items[c].default;
    const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2');
    modules[moduleName] = module;
});

export default {
    message: {
        routes,
        common,
        network,
        ...modules,
    },
};
