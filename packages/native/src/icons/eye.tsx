import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../@types/base';
import useTheme from '../context/theme/useTheme';
import { getSxStyleAndProps } from '../lib/sx';
import { ColorName } from '../context';

export function EyeIcon({
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
        d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
      />
    </Svg>
  );
}
