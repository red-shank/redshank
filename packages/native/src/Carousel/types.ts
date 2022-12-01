import { ScrollViewProps } from 'react-native';

export interface CarouselProps {
  children?: JSX.Element[] | JSX.Element;
  scrollViewProps?: Omit<ScrollViewProps, 'children'>;
  showScroll?: boolean;
  widthChild?: number | string;
}
