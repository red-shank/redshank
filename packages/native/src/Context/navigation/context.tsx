import React, { useMemo } from 'react';
import { NavigationContextProps } from './types';
import { Animated } from 'react-native';

const NavigationContext = React.createContext<
  NavigationContextProps | undefined
>(undefined);

export type DefaultValueType = {
  header: null | NavigationContextProps['header'];
};

export const defaultNavigation: DefaultValueType = {
  header: null,
};

export const NavigationProvider = ({
  children,
  defaultValue = defaultNavigation,
}: {
  defaultValue?: DefaultValueType;
  children?: React.ReactNode;
}) => {
  let scrollOffsetY = React.useRef(new Animated.Value(0)).current;

  const [settings, setSettings] =
    React.useState<DefaultValueType>(defaultValue);

  const setValues = React.useCallback((value: DefaultValueType) => {
    setSettings(value);
  }, []);

  const onScroll = React.useMemo(
    () =>
      Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
        { useNativeDriver: false }
      ),
    [scrollOffsetY]
  );

  const output = useMemo<NavigationContextProps>(
    () => ({
      ...settings,
      scrollOffsetY,
      setValues,
      scrollViewProps: {
        onScroll,
        scrollEventThrottle: 16,
      },
    }),
    [onScroll, scrollOffsetY, setValues, settings]
  );

  return (
    <NavigationContext.Provider value={output}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return React.useContext(NavigationContext);
};
