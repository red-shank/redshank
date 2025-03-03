import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../@types/base';
import useTheme from '../context/theme/useTheme';
import { getSxStyleAndProps } from '../lib/sx';
import { ColorName } from '../context';

export function PlusIcon({
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
      width={sxResult?.style?.width}
      height={sxResult?.style?.height}
      viewBox="0 0 24 24"
      style={sxResult?.style}
    >
      <Path
        fill={theme.colors.get(fill)}
        d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
      />
    </Svg>
  );
}
