import { Animated } from 'react-native';
import { HeaderProps } from '../../Header/types';

type Header = HeaderProps | null;

export type NavigationContextProps = {
  header?: Header;
  scrollOffsetY: Animated.Value;
  scrollViewProps: {
    scrollEventThrottle: number;
    onScroll: () => void;
  };
  setValues: (value: Omit<Header, 'scrollOffsetY'>) => void;
};
