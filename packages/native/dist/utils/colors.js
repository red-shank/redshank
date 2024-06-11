import Color from 'color';
import { Dimensions } from 'react-native';
export const width = Dimensions.get('screen').width;
export const isLight = (color, lumi = 0.7) => {
    const luminosity = Color(color).luminosity();
    return luminosity > lumi;
};
export const getDarken = (color, dark = 0.6) => {
    return Color(color).darken(dark).hex();
};
export const getLighting = (color, light = 0.6) => {
    return Color(color).lighten(light).hex();
};
export const getOpacity = (color, alpha = 0.1) => {
    const rgbaColor = Color(color).alpha(alpha).rgb();
    // @ts-ignore
    return `rgba(${rgbaColor?.color},${rgbaColor?.valpha})`;
};
export const getLighten = (color, light = 50) => {
    return Color(color).lightness(light).hex();
};
const arrHex = [0, 1, 2, 3, 4, 5];
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    arrHex.forEach(() => {
        color += letters[Math.floor(Math.random() * 16)];
    });
    return color;
};
export const getPlaceholderColor = (color) => {
    return Color(color).alpha(0.6);
};
export const getColorForBackground = (color) => {
    const isLightColor = isLight(color);
    return isLightColor ? 'black' : 'white';
};
export const isTablet = () => {
    return width > 600;
};
