import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { BaseProps } from '../@types/base';
import useTheme from '../context/theme/useTheme';
import { getSxStyleAndProps } from '../lib/sx';
import { ColorName } from '../context';

export function WarningOutlineIcon({
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
        d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
      />
    </Svg>
  );
}
