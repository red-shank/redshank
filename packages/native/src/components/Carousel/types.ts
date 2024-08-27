import { PropsWithChildren, ReactNode } from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { ScrollViewProps } from '../ScrollView';
import { SxProps } from '../../lib/styleDictionary';
import { ColorName } from '../../context';

export type CarouselVariant = 'ios' | 'default';

export type CarouselProps = PropsWithChildren<
  SxProps & {
    scrollViewProps?: Omit<ScrollViewProps, 'children'>;
    showScroll?: boolean;
    widthChild?: DimensionValue;
    variant?: CarouselVariant;
    maxWidth?: number;
    withDots?: boolean;
    dotsBackground?: {
      active?: ColorName;
      inactive?: ColorName;
    };
    renderDots?: (props: {
      isActive: boolean;
      index: number;
      totalItems: number;
      onPress: (index: number) => void;
    }) => ReactNode;
    sx?: SxProps & {
      root?: SxProps;
      item?: SxProps;
      scrollView?: SxProps;
      scrollViewContent?: SxProps;
      dotWrapper?: SxProps;
      dot?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      item?: StyleProp<ViewStyle>;
      scrollView?: StyleProp<ViewStyle>;
      scrollViewContent?: StyleProp<ViewStyle>;
      dotWrapper?: StyleProp<ViewStyle>;
      dot?: StyleProp<ViewStyle>;
    };
  }
>;
