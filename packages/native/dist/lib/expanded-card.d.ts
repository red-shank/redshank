export default class CardModal extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        pressedStyle: {};
        org_width: number;
        org_height: number;
        top_width: Animated.Value;
        top_height: Animated.Value;
        bottom_width: Animated.Value;
        bottom_height: Animated.Value;
        content_height: Animated.Value;
        top_pan: Animated.ValueXY;
        bottom_pan: Animated.ValueXY;
        content_pan: Animated.ValueXY;
        content_opac: Animated.Value;
        button_opac: Animated.Value;
        back_opac: Animated.Value;
        plus: Animated.Value;
        TopBorderRadius: number;
        BottomBorderRadius: number;
        activate: string;
        activated: boolean;
        offset: number;
        pressed: boolean;
    };
    _onPress(): void;
    calculateOffset(): void;
    activate(): void;
    grow(): void;
    shrink(): void;
    renderTop(): React.JSX.Element;
    renderBottom(): React.JSX.Element;
    renderContent(): React.JSX.Element;
    render(): React.JSX.Element;
}
import React from "react";
import { Animated } from "react-native/Libraries/Animated/Animated";
