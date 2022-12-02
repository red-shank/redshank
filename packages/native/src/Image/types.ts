import { ReactElement, ReactNode, Component } from 'react';
import { ImageProps as RNImageProps, StyleProp, ViewStyle } from 'react-native';
import { ImageSrcType } from '../@types/image';
import { BaseProperties } from '../@types/utilities';

export type ImageProps = Omit<RNImageProps, 'source'> &
  BaseProperties & {
    Component?: typeof Component;
    ImageComponent?: typeof Component;
    children?: ReactNode;
    childrenContainerStyle?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    height: number | string;
    placeholderContent?: ReactElement;
    placeholderStyle?: StyleProp<ViewStyle>;
    source: ImageSrcType;
    transition?: boolean;
    transitionDuration?: number;
    width?: number | string;
  };
