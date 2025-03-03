import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../@types/base';
import useTheme from '../context/theme/useTheme';
import { getSxStyleAndProps } from '../lib/sx';
import { ColorName } from '../context';

export function ChevronLeftIcon({
  size,
  color = 'text',
  fill = color,
  ...props
}: BaseProps & { fill?: ColorName; size?: number }) {
  const theme = useTheme();

  const sxResult = getSxStyleAndProps(
    {
      ...props,
      width: props?.width ?? size ?? 24,
      height: props?.height ?? size ?? 24
    },
    theme
  );

  return (
    <Svg
      fill="none"
      {...sxResult.props}
      viewBox="0 0 24 24"
      style={sxResult?.style}
      width={sxResult?.style?.width}
      height={sxResult?.style?.height}
    >
      <Path
        fill={theme.colors.get(fill)}
        d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
      />
    </Svg>
  );
}
