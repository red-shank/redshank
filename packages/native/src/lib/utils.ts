import { DimensionValue } from 'react-native';
import { ThemeProps } from '../context/theme/types';
import styleDictionary, { SxProps } from './styleDictionary';

export function extractSxProps({
  otherProps,
  sx
}: {
  sx: SxProps;
  otherProps: Partial<SxProps>;
}) {
  const extractedSx = Object.entries(otherProps).reduce((acc, [key, value]) => {
    if (
      styleDictionary.properties[key] &&
      value !== '' &&
      (typeof value === 'string' ||
        typeof value === 'object' ||
        typeof value === 'symbol' ||
        typeof value === 'number' ||
        typeof value === 'function' ||
        typeof value === 'bigint' ||
        value === null)
    ) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return {
    ...extractedSx,
    ...(sx || {})
  };
}

export function extractRestProps(props: object): object {
  return Object.entries(props).reduce((acc, [key, value]) => {
    if (!styleDictionary.properties[key]) {
      acc[key] = value;
    }
    return acc;
  }, {});
}

export function createStyleFromSx({
  sx,
  theme
}: {
  theme: ThemeProps;
  sx: SxProps;
}) {
  return Object.entries(sx).reduce((acc, [key, value]) => {
    const propertyDictionary = styleDictionary.properties[key];
    if (!propertyDictionary) return acc;

    if (!propertyDictionary?.resolve) {
      propertyDictionary.resolve = (_value: DimensionValue) => _value;
    }

    const newValue = propertyDictionary.resolve(value, acc, theme);
    newValue !== undefined && (acc[key] = newValue);

    return acc;
  }, {});
}
