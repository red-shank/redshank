import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
import { IconButtonProps, IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';
import { ColorType } from '../../context/theme/types';
export declare type IconType = 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo' | 'antdesign' | 'font-awesome-5' | 'font-awesome-6' | string;
export declare type IconObject = {
    name: string;
    color?: ColorType;
    size?: number;
    type?: IconType;
    iconStyle?: StyleProp<TextStyle>;
};
export declare type IconProps = Omit<IconButtonProps, 'color'> & {
    type?: IconType;
    Component?: typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    iconProps?: Partial<VectorIconProps>;
    reverseColor?: string;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
    color?: ColorType;
};
export declare const Icon: React.FC<IconProps>;
