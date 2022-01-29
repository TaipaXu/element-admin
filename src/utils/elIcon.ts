import * as ElIconModules from '@element-plus/icons-vue';

export const changeIconName = (iconName: string): string => {
    return iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()).replace('-', '');
};

export { ElIconModules };
