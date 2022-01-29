export enum Size {
    Xs,
    Sm,
    Md,
    Lg,
    Xl,
    Xxl
}

const breakpointXs: number = 0;
const breakpointSm: number = 576;
const breakpointMd: number = 768;
const breakpointLg: number = 992;
const breakpointXl: number = 1200;
const breakpointXxl: number = 1400;

export const getSize = (width: number): Size => {
    if (width < breakpointSm) {
        return Size.Xs;
    } else if (width < breakpointMd) {
        return Size.Sm;
    } else if (width < breakpointLg) {
        return Size.Md;
    } else if (width < breakpointXl) {
        return Size.Lg;
    } else if (width < breakpointXxl) {
        return Size.Xl;
    } else {
        return Size.Xxl;
    }
};
