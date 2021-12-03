/**
 * 屏幕工具类 以及一些常用的工具类封装
 */
import { PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';

export const screenW = Dimensions.get('window').width;
export const screenH = Dimensions.get('window').height;
export const screenAllH = Dimensions.get('screen').height;
export const fontScale = PixelRatio.getFontScale();
export const pixelRatio = PixelRatio.get();
export const contentPadding =
    Platform.OS === 'android' ? StatusBar.currentHeight : isIphoneX() ? 44 : 20;
export const bottomPadding = isIphoneX() ? 22 : 0;
export const statusBarHeight = StatusBar.currentHeight;

const defaultPixel = 3.5;
const defaultWidth = 1440;
const defaultHeight = 2560;

const w2 = defaultWidth / defaultPixel;
const h2 = defaultHeight / defaultPixel;
const scale = Math.min(screenH / h2, screenW / w2); //获取缩放比例

/**
 * 屏幕适配,缩放size
 * @param size
 * @returns {Number}
 */
export function scaleSize(size: number) {
    let number = size * defaultPixel;
    let newSize = Math.round(number * scale + 0.5);
    return newSize / defaultPixel;
}

/**
 * 设置字体的size（单位px）
 * @param size 传入设计稿上的px
 * @returns {Number} 返回实际sp
 */
export function setSpText(size: number) {
    let number = size * defaultPixel;
    let newSize = Math.round(number * scale + 0.5);
    return newSize / defaultPixel;
}

/**
 * 判断是否是ipX系列
 * @returns {boolean}
 */
export function isIphoneX() {
    const dimension = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (dimension.height === 812 ||
            dimension.width === 812 ||
            dimension.height === 896 ||
            dimension.width === 896)
    );
}
