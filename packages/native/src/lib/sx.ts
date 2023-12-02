import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { SxProps } from './styleDictionary';
import { ThemeProps } from '../context/theme/types';
import { createStyleFromSx, extractSxProps } from './utils';

export default function createSxStyle(
  {
    style,
    sx,
    ...otherProps
  }: Partial<SxProps> & {
    sx?: SxProps;
    style?: StyleProp<ViewStyle & TextStyle>;
    [key: string]: unknown;
  },
  theme: ThemeProps
) {
  const sxPropExtracted = extractSxProps({
    sx,
    otherProps
  });

  const sxProps = createStyleFromSx({
    theme,
    sx: sxPropExtracted
  });

  return StyleSheet.flatten([style, sxProps]);
}
