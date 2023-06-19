import { Animated } from 'react-native';
import { HeaderProps } from '../../Header/types';

export type NavigationContextProps = {
  header?: null | HeaderProps;
  scrollOffsetY: Animated.Value;
  scrollViewProps: {
    scrollEventThrottle: number;
    onScroll: () => void;
  };
  setValues: (value: Omit<NavigationContextProps, 'setValues'>) => void;
};
