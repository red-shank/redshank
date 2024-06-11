import * as React from 'react';
import { View, Text, ScrollView as NativeScrollView, FlatList as NativeFlatList, FlatListProps, Pressable } from 'react-native';
import type { ComponentProps, ReactNode, RefObject } from 'react';
declare type Unpromisify<T> = T extends Promise<infer R> ? R : T;
/**
 * The following is taken/edited from `useScrollToTop` from `@react-navigation/native`
 */
declare type ScrollOptions = {
    y?: number;
    animated?: boolean;
};
declare type ScrollableView = {
    scrollToTop(): void;
} | {
    scrollTo(options: ScrollOptions): void;
} | {
    scrollToOffset(options: {
        offset?: number;
        animated?: boolean;
    }): void;
} | {
    scrollResponderScrollTo(options: ScrollOptions): void;
};
declare type ScrollableWrapper = {
    getScrollResponder(): ReactNode;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
/**
 * End of react-navigation code.
 */
declare type ScrollToOptions = {
    animated?: boolean;
    /**
     * A number that determines how far from the content you want to scroll.
     *
     * Default: `-10`, which means it scrolls to 10 pixels before the content.
     */
    offset?: number;
};
export interface Anchors {
}
export declare type AnchorsRef = {
    scrollTo: (name: Anchor, options?: ScrollToOptions) => Promise<{
        success: true;
    } | {
        success: false;
        message: string;
    }>;
};
/**
 * If you need to control a `ScrollView` or `FlatList` from outside of their scope:
 *
 * ```jsx
 * import React from 'react'
 * import { useAnchors, ScrollView } from '@nandorojo/anchor'
 *
 * export default function App() {
 *  const anchors = useAnchors()
 *
 *  const onPress = () => {
 *    anchors.current?.scrollTo('list')
 *  }
 *
 *  return (
 *    <ScrollView anchors={anchors}>
 *      <Target name="list" />
 *    </ScrollView>
 *  )
 * }
 * ```
 */
declare const useAnchors: () => React.MutableRefObject<AnchorsRef>;
declare type Anchor = Anchors['anchor'] extends string ? Anchors['anchor'] : string;
declare type AnchorsContext = {
    targetRefs: RefObject<Record<Anchor, View | Text>>;
    scrollRef: RefObject<ScrollableWrapper>;
    registerTargetRef: (name: Anchor, ref: View | Text) => void;
    registerScrollRef: (ref: ScrollableWrapper | null) => void;
    horizontal: ComponentProps<typeof NativeScrollView>['horizontal'];
    scrollTo: AnchorsRef['scrollTo'];
};
declare const AnchorsContext: React.Context<AnchorsContext>;
declare function useRegisterTarget(): {
    register: (name: Anchor) => (ref: View) => void;
};
declare function useScrollTo(): {
    scrollTo: (name: any, options?: ScrollToOptions) => Promise<{
        success: true;
    } | {
        success: false;
        message: string;
    }>;
};
declare function useRegisterScroller(): {
    registerScrollRef: (ref: ScrollableWrapper) => void;
};
declare function AnchorProvider({ children, horizontal, anchors }: {
    children: ReactNode;
    anchors?: RefObject<AnchorsRef>;
} & Pick<AnchorsContext, 'horizontal'>): React.JSX.Element;
/**
 * Identical to the normal React Native `ScrollView`, except that it allows scrolling to anchor links.
 *
 * If you use this component, you don't need to use the `AnchorProvider`. It implements it for you.
 */
declare const ScrollView: React.ForwardRefExoticComponent<import("react-native").ScrollViewProps & {
    children?: ReactNode;
} & Pick<{
    children: ReactNode;
    anchors?: RefObject<AnchorsRef>;
} & Pick<AnchorsContext, "horizontal">, "anchors"> & React.RefAttributes<NativeScrollView>>;
/**
 * Identical to the normal React Native flatlist, except that it allows scrolling to anchor links.
 *
 * If you use this component, you don't need to use the `AnchorProvider`.
 *
 * One important difference: if you want to use the `ref`, pass it to `flatListRef` instead of `ref`.
 */
declare function FlatList<T = any>({ flatListRef, horizontal, anchors, ...props }: FlatListProps<T> & {
    flatListRef?: RefObject<NativeFlatList>;
} & Pick<ComponentProps<typeof AnchorProvider>, 'anchors'>): React.JSX.Element;
declare function ScrollTo({ target, onPress, options, onRequestScrollTo, ...props }: {
    children?: ReactNode;
    target: Anchor;
    options?: ScrollToOptions;
    onRequestScrollTo?: (props: Unpromisify<ReturnType<ReturnType<typeof useScrollTo>['scrollTo']>>) => void;
} & ComponentProps<typeof Pressable>): React.JSX.Element;
declare const Target: React.ForwardRefExoticComponent<{
    name: Anchor;
    children?: ReactNode;
} & import("react-native").ViewProps & React.RefAttributes<View>>;
declare const AnchorsConsumer: React.Consumer<AnchorsContext>;
export { AnchorProvider, ScrollView, FlatList, useRegisterTarget, useScrollTo, ScrollTo, Target, ScrollTo as Anchor, useRegisterScroller, useAnchors, AnchorsConsumer };
