import { ComponentClass, FunctionComponent } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
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
  imageProps?: Partial<ImageProps>;
  showCountText?: number | 'all';
  size?: number;
  src?: ImageSrcType;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textColor?: ColorType;
  type?: 'circle' | 'square';
}
