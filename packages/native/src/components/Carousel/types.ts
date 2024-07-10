import { PropsWithChildren, ReactNode } from 'react';
import { DimensionValue, ScrollViewProps } from 'react-native';

export type CarouselVariant = 'ios' | 'default';

export type CarouselProps = PropsWithChildren<{
  scrollViewProps?: Omit<ScrollViewProps, 'children'>;
  showScroll?: boolean;
  widthChild?: DimensionValue;
  variant?: CarouselVariant;
  maxWidth?: number;
  renderDots?: (props: {
    activeIndex: number;
    totalItems: number;
  }) => ReactNode;
}>;
