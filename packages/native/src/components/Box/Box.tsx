import { View } from 'react-native';
import { PropsWithChildren } from 'react';

import { BaseProps } from '../../@types/base';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export type BoxProps = PropsWithChildren<BaseProps>;

export function Box({
  children,
  ...rest
}: BoxProps) {
  const theme = useTheme();
  return <View style={createSxStyle(rest, theme)}>{children}</View>;
}
