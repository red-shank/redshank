import { ColorName, ColorSchema } from './color.type';

function flattenObject(colorKey: ColorName, colors: object): string {
  const keys = colorKey?.split?.('.');

  if (!keys) return null;
  return keys.reduce((acc, key, index) => {
    if (acc === undefined) {
      return undefined; // Si no se encontró la clave anteriormente, se devuelve undefined
    }

    if (index === keys.length - 1) {
      if (typeof acc[key] === 'object') {
        const value = acc?.[key];
        return typeof value === 'object' ? acc[key]?.main || '' : value;
      } else {
        return acc[key] || '';
      }
    } else {
      return typeof acc[key] === 'object' ? acc[key] : '';
    }
  }, colors as any);
}

export function getColorValue(colorName: ColorName, colors: ColorSchema) {
  const color = flattenObject(colorName, colors) || colorName;
  // if (colorName === 'input') {
  //   console.log({ color });
  // }

  return color;
}
