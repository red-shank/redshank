import React, { useEffect, useMemo } from 'react';
import { NavigationContextProps } from './types';
import { Animated, View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { HeaderProps } from '../../components/Header/types';

const NavigationContext = React.createContext<
  NavigationContextProps | undefined
>(undefined);

export type DefaultValueType = Omit<HeaderProps, 'scrollOffsetY'> | null;

export const defaultNavigation: DefaultValueType = null;

export const HeaderNavigationProvider = ({
  children,
  showHeader = true,
  defaultValue = defaultNavigation,
}: {
  defaultValue?: DefaultValueType;
  showHeader?: boolean;
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

  useEffect(() => {
    setSettings((prev) => {
      if (!prev) {
        return defaultValue;
      }

      return prev;
    });
  }, [defaultValue]);

  const output = useMemo<NavigationContextProps>(
    () => ({
      settings: {
        ...settings,
        scrollOffsetY,
      },
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
      {showHeader ? (
        <View
          style={{
            flex: 1,
          }}
        >
          {settings && (
            <Header
              scrollOffsetY={scrollOffsetY}
              background={settings?.background}
              backgroundSticky={settings?.backgroundSticky}
              heightDynamic={settings?.heightDynamic}
              leftIcon={settings?.leftIcon}
              rightIcon={settings?.rightIcon}
              title={settings?.title}
              titleOnScroll={settings?.titleOnScroll}
              titleOnScrollPosition={settings?.titleOnScrollPosition}
              titlePosition={settings?.titlePosition}
            />
          )}
          {children}
        </View>
      ) : (
        <>{children}</>
      )}
    </NavigationContext.Provider>
  );
};

export const useHeaderNavigation = () => {
  return React.useContext(NavigationContext);
};
