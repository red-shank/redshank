import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export declare type OverlayComponentProps = PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
}>;
export declare type LoadingComponentProps = PropsWithChildren<{
    onVisible: () => void;
    onHidden: () => void;
    isOpen: boolean;
}>;
export declare type ScreenLoadingProps = {
    isOpen: boolean;
    onVisible: () => void;
    onHidden: () => void;
    OverlayComponent: FunctionComponent<OverlayComponentProps>;
    LoadingComponent: FunctionComponent<LoadingComponentProps>;
};
export declare type ScreenLoadingProviderProps = Partial<Pick<ScreenLoadingProps, 'LoadingComponent' | 'OverlayComponent'>> & {
    initialIsOpen?: boolean;
};
export declare function ScreenLoadingProvider({ children, initialIsOpen, OverlayComponent, LoadingComponent }: PropsWithChildren<ScreenLoadingProviderProps>): React.JSX.Element;
export declare function useScreenLoading(): Pick<ScreenLoadingProps, "isOpen" | "onHidden" | "onVisible">;
