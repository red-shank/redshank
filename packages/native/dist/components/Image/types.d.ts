import { ReactElement, ReactNode, Component } from 'react';
import { DimensionValue, ImageProps as RNImageProps, StyleProp, ViewStyle } from 'react-native';
import { ImageSrcType } from '../../@types/image';
import { BaseProperties } from '../../@types/utilities';
export declare type ImageProps = Omit<RNImageProps, 'source' | 'width' | 'height'> & BaseProperties & {
    Component?: typeof Component;
    ImageComponent?: typeof Component;
    children?: ReactNode;
    childrenContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    height?: DimensionValue;
    width?: DimensionValue;
    placeholderContent?: ReactElement;
    placeholderStyle?: StyleProp<ViewStyle>;
    source: ImageSrcType;
    transition?: boolean;
    transitionDuration?: number;
};
