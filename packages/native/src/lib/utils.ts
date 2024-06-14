import { DimensionValue } from 'react-native';
import { ThemeProps } from '../context/theme/types';
import styleDictionary, {
  resolverDictionaryKey,
  SxProps
} from './styleDictionary';

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
  const { colors, fontSizes, spacing, fonts, zIndices } = theme;

  return Object.entries(sx).reduce((acc, [keyProp, value]) => {
    const key = resolverDictionaryKey[keyProp] ?? keyProp;
    const propertyDictionary = styleDictionary.properties[keyProp];
    if (!propertyDictionary) return acc;

    if (!propertyDictionary?.resolve) {
      propertyDictionary.resolve = (_value: DimensionValue) => _value;
    }

    if (propertyDictionary.type === 'color') {
      const newValue = colors[value as keyof typeof colors] || value;
      acc[key] = propertyDictionary.resolve(newValue, acc);
    } else if (propertyDictionary.type === 'number') {
      let newValue = value;
      if (key === 'zIndex') {
        newValue = zIndices[value as keyof typeof zIndices];
      } else if (!isNaN(Number(value))) {
        newValue = Number(value) * spacing;
      }
      acc[key] = propertyDictionary.resolve(newValue, acc);
    } else if (propertyDictionary.type === 'string') {
      let newValue: any = value;
      if (key === 'fontFamily') {
        newValue = fonts[value as keyof typeof fonts];
      } else if (key === 'fontSize') {
        newValue = fontSizes[value as keyof typeof fontSizes];
      }
      acc[key] = propertyDictionary.resolve(newValue, acc);
    } else {
      acc[key] = propertyDictionary.resolve(value, acc);
    }

    return acc;
  }, {});
}
