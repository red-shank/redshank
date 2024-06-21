import React from 'react';
import {
  ScrollView as NScrollView,
  ScrollViewProps as RNScrollViewProps
} from 'react-native';
import { SxProps } from '../../lib/styleDictionary';
import createSxStyle from '../../lib/sx';
import useTheme from '../../context/theme/useTheme';

export type ScrollViewProps = RNScrollViewProps & {
  sx?: SxProps;
  contentContainerSx?: SxProps;
};

export const ScrollView = React.forwardRef<NScrollView, ScrollViewProps>(
  ({ sx, contentContainerSx, contentContainerStyle, style, ...props }, ref) => {
    const theme = useTheme();

    return (
      <NScrollView
        {...props}
        ref={ref}
        style={createSxStyle(
          {
            sx,
            style
          },
          theme
        )}
        contentContainerStyle={createSxStyle(
          {
            sx: contentContainerSx,
            style: contentContainerStyle
          },
          theme
        )}
      />
    );
  }
);
