import { Animated } from 'react-native';
import { HeaderProps } from '../../Header/types';

export type NavigationContextProps = {
  header?: null | HeaderProps;
  scrollOffsetY: Animated.Value;
  scrollViewProps: {
    scrollEventThrottle: number;
    onScroll: () => void;
  };
  setValues: (value: Pick<NavigationContextProps, 'header'>) => void;
};
