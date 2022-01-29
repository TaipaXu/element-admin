import routes from './zh/routes';
import common from './zh/common';
import network from './zh/network';
const layout = import.meta.globEager('./zh/layout/*.ts');
const pages = import.meta.globEager('./zh/pages/*.ts');

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
