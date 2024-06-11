/**
 * Created by ggoma on 2016. 11. 22..
 */
import React, { ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes';
export declare type ExpandedCardRender = {
    expanded: boolean;
};
export declare function CardModal({ content, onPress, trigger, onExpandedChange, heightAnimation }: {
    heightAnimation: {
        from: number;
        to: number;
    };
    content?: (props: ExpandedCardRender) => ReactNode;
    trigger: (props: ExpandedCardRender) => ReactNode;
    onExpandedChange?: (expanded: boolean) => void;
    onPress?: (event: GestureResponderEvent) => void;
}): React.JSX.Element;
