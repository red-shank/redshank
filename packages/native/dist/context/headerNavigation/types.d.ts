import { Animated } from 'react-native';
import { StickyHeaderProps } from '../../components/StickyHeader/types';
export declare type SettingsHeaderProps = Omit<StickyHeaderProps, 'children'> | null;
export declare type NavigationContextProps = {
    settings?: SettingsHeaderProps;
    scrollOffsetY: Animated.Value;
    scrollViewProps: {
        scrollEventThrottle: number;
        onScroll: () => void;
    };
    setValues: (value: Omit<SettingsHeaderProps, 'scrollOffsetY'>) => void;
};
