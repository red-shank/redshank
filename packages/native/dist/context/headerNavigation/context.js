import React, { useEffect, useMemo } from 'react';
import { Animated, View } from 'react-native';
import { Header } from '../../components/Header/Header';
const NavigationContext = React.createContext(undefined);
export const defaultNavigation = null;
export const HeaderNavigationProvider = ({ children, showHeader = true, defaultValue = defaultNavigation, header: HeaderComponent = Header }) => {
    let scrollOffsetY = React.useRef(new Animated.Value(0)).current;
    const [settings, setSettings] = React.useState(defaultValue);
    const setValues = React.useCallback((value) => {
        setSettings(value);
    }, []);
    const onScroll = React.useMemo(() => Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], { useNativeDriver: false }), [scrollOffsetY]);
    useEffect(() => {
        setSettings((prev) => {
            if (!prev) {
                return defaultValue;
            }
            return prev;
        });
    }, [defaultValue]);
    const output = useMemo(() => ({
        settings: {
            ...settings,
            scrollOffsetY
        },
        scrollOffsetY,
        setValues,
        scrollViewProps: {
            onScroll,
            scrollEventThrottle: 16
        }
    }), [onScroll, scrollOffsetY, setValues, settings]);
    return (<NavigationContext.Provider value={output}>
      {showHeader ? (<View style={{
                flex: 1
            }}>
          {settings && (<HeaderComponent scrollOffsetY={scrollOffsetY} background={settings?.background} backgroundSticky={settings?.backgroundSticky} heightDynamic={settings?.heightDynamic} leftIcon={settings?.leftIcon} rightIcon={settings?.rightIcon} title={settings?.title} titleOnScroll={settings?.titleOnScroll} titleOnScrollPosition={settings?.titleOnScrollPosition} titlePosition={settings?.titlePosition}/>)}
          {children}
        </View>) : (<>{children}</>)}
    </NavigationContext.Provider>);
};
export const useHeaderNavigation = () => {
    const context = React.useContext(NavigationContext);
    if (!context) {
        throw new Error('useHeaderNavigation must be used within a HeaderNavigationProvider');
    }
    return context;
};
