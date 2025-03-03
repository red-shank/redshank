import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../@types/base';
import useTheme from '../context/theme/useTheme';
import { getSxStyleAndProps } from '../lib/sx';
import { ColorName } from '../context';

export function ChevronUpIcon({
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
        d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
      />
    </Svg>
  );
}
