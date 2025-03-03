import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { SxProps } from './styleDictionary';
import { ThemeProps } from '../context/theme/types';
import { createStyleFromSx, extractRestProps, extractSxProps } from './utils';

export default function createSxStyle(
  {
    sx,
    showLog,
    style = {},
    ...otherProps
  }: SxProps & {
    sx?: SxProps;
    showLog?: boolean;
    style?: StyleProp<ViewStyle & TextStyle>;
    [key: string]: unknown;
  } = {},
  theme: ThemeProps
): StyleProp<any> {
  const sxPropExtracted = extractSxProps({
    sx,
    otherProps
  });
  const sxProps = createStyleFromSx({
    theme,
    sx: sxPropExtracted
  });

  if (showLog) {
    console.log({ sxPropExtracted, sxProps });
  }

  return StyleSheet.flatten([style, sxProps]);
}

export function getSxStyleAndProps(
  {
    sx,
    style = {},
    ...otherProps
  }: Partial<SxProps> & {
    sx?: SxProps;
    showLog?: boolean;
    style?: StyleProp<ViewStyle & TextStyle>;
    [key: string]: unknown;
  } = {},
  theme: ThemeProps
) {
  const sxProps = createSxStyle(
    {
      sx,
      style,
      ...otherProps
    },
    theme
  );

  const restProps = extractRestProps(otherProps);

  return {
    props: restProps,
    style: sxProps
  };
}
