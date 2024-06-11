import Color from 'color';
import { Dimensions } from 'react-native';

export const width = Dimensions.get('screen').width;

export const isLight = (color: string, lumi = 0.7) => {
  const luminosity = Color(color).luminosity();
  return luminosity > lumi;
};

export const getDarken = (color: string, dark: number = 0.6) => {
  return Color(color).darken(dark).hex();
};

export const getLighting = (color: string, light: number = 0.6) => {
  return Color(color).lighten(light).hex();
};

export const getOpacity = (color: string, alpha: number = 0.1) => {
  const rgbaColor = Color(color).alpha(alpha).rgb();
  // @ts-ignore
  return `rgba(${rgbaColor?.color},${rgbaColor?.valpha})`;
};

export const getLighten = (color: string, light: number = 50) => {
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

export const getPlaceholderColor = (color: string) => {
  return Color(color).alpha(0.6);
};

export const getColorForBackground = (color: string) => {
  const isLightColor = isLight(color);
  return isLightColor ? 'black' : 'white';
};

export const isTablet = () => {
  return width > 600;
};
