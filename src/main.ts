import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import contextmenu from 'v-contextmenu';
import 'v-contextmenu/dist/themes/default.css';
import 'nprogress/nprogress.css';
import { ElIconModules, changeIconName } from '@/utils/elIcon';
import 'material-icons/iconfont/material-icons.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/styles/index.scss';
import i18n from '@/i18n';
import bridgeInit from '@/bridge';
import RelatedLink from '@/widgets/relatedLink.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(contextmenu);
app.use(i18n);
app.use(ElementPlus);
for (let iconName in ElIconModules) {
    app.component(changeIconName(iconName), (ElIconModules as any)[iconName]);
}
app.component('RelatedLink', RelatedLink);
app.config.globalProperties.$domain = import.meta.env.VITE_PROJECT_DOMAIN;
app.mount('#app');

bridgeInit();
