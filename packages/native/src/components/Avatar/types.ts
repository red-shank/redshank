import { ComponentClass, FunctionComponent } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconObject } from '../Icon';
import { ImageProps } from '../Image';
import { ImageSrcType } from '../../@types/image';
import { BaseProperties } from '../../@types/utilities';
import { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type AvatarIcon = Omit<IconObject, 'iconStyle'>;

export interface AvatarProps extends BaseProperties {
  Component?: FunctionComponent | ComponentClass;
  ImageComponent?: ComponentClass;
  icon?: AvatarIcon;
  bordered?: boolean;
  imageProps?: Partial<ImageProps>;
  showCountText?: number | 'all';
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  innerBorderColor?: ColorType;
  size?: number;
  src?: ImageSrcType;
  style?: StyleProp<ViewStyle>;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    icon?: SxProps;
    text?: SxProps;
    image?: SxProps;
  };
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
    | 'backgroundColor'
    | 'borderColor'
    | 'bordered'
    | 'innerBorderColor'
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
  moreProps?: Partial<AvatarProps>;
}
