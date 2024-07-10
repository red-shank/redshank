import { PropsWithChildren, ReactNode } from 'react';
import { DimensionValue } from 'react-native';
import { ScrollViewProps } from '../ScrollView';
import { SxProps } from '../../lib/styleDictionary';

export type CarouselVariant = 'ios' | 'default';

export type CarouselProps = PropsWithChildren<
  SxProps & {
    scrollViewProps?: Omit<ScrollViewProps, 'children'>;
    showScroll?: boolean;
    widthChild?: DimensionValue;
    variant?: CarouselVariant;
    maxWidth?: number;
    withDots?: boolean;
    renderDots?: (props: {
      activeIndex: number;
      totalItems: number;
    }) => ReactNode;
  }
>;
