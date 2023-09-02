import { ComponentClass, FunctionComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconObject } from '../Icon';
import { ImageProps } from '../Image';
import { ImageSrcType } from '../@types/image';
import { BaseProperties } from '../@types/utilities';
import { ColorType } from '../Context/theme/types';

export type AvatarIcon = Omit<IconObject, 'iconStyle'>;

export interface AvatarProps extends BaseProperties {
  Component?: FunctionComponent | ComponentClass;
  ImageComponent?: ComponentClass;
  color?: ColorType;
  icon?: AvatarIcon;
  bordered?: boolean;
  imageProps?: Partial<ImageProps>;
  showCountText?: number | 'all';
  size?: number;
  src?: ImageSrcType;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textColor?: ColorType;
  textStyle?: StyleProp<TextStyle>;
  type?: 'circle' | 'square';
}

export interface AvatarGroupProps
  extends Pick<
    AvatarProps,
    | 'size'
    | 'type'
    | 'textColor'
    | 'color'
    | 'showCountText'
    | 'imageProps'
    | 'textStyle'
  > {
  separatePercentage?: number;
  max?: number;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  items: AvatarProps[];
  onMoreItems?: () => void | Promise<any>;
}
