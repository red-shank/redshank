import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { AlignType, GutterType, JustifyType, OrientationType } from '../../@types/utilities';
export interface SpaceProps {
    align?: AlignType;
    children?: ReactNode;
    gutter?: GutterType;
    justify?: JustifyType;
    orientation?: OrientationType;
    style?: ViewStyle;
}
export interface SpaceItemProps {
    children?: ReactNode;
    gutter: GutterType;
    orientation: OrientationType;
}
