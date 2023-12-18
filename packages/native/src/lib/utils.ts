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
    if (styleDictionary.properties[key]) {
      acc[key] = value;
    }
    return acc;
  }, {});

  return {
    ...(sx || {}),
    ...extractedSx
  };
}

const radiusKeys = [
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius'
];

export function createStyleFromSx({
  sx,
  theme
}: {
  theme: ThemeProps;
  sx: SxProps;
}) {
  const { colors, borderRadius, fontSizes, spacing, fonts, zIndices } = theme;

  return Object.entries(sx).reduce((acc, [keyProp, value]) => {
    const key = resolverDictionaryKey[keyProp] ?? keyProp;
    const styleType = styleDictionary.properties[keyProp];

    if (styleType.type === 'color') {
      acc[key] = colors[value as keyof typeof colors];
    } else if (styleType.type === 'number') {
      if (radiusKeys.includes(key)) {
        acc[key] = borderRadius[value as keyof typeof borderRadius];
      } else if (key === 'zIndex') {
        acc[key] = zIndices[value as keyof typeof zIndices];
      } else if (!isNaN(Number(value))) {
        acc[key] = Number(value) * spacing;
      }
    } else if (styleType.type === 'string') {
      if (key === 'fontFamily') {
        acc[key] = fonts[value as keyof typeof fonts];
      } else if (key === 'fontSize') {
        acc[key] = fontSizes[value as keyof typeof fontSizes];
      } else {
        acc[key] = value;
      }
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}
