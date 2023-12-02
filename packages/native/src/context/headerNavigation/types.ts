import { Animated } from 'react-native';
import { HeaderProps } from '../../components/Header/types';

export type SettingsHeaderProps = HeaderProps | null;

export type NavigationContextProps = {
  settings?: SettingsHeaderProps;
  scrollOffsetY: Animated.Value;
  scrollViewProps: {
    scrollEventThrottle: number;
    onScroll: () => void;
  };
  setValues: (value: Omit<SettingsHeaderProps, 'scrollOffsetY'>) => void;
};
