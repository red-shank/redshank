import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ButtonProps } from '../Button';
import type {AlignType, TransformType} from '../../@types/typography';
import type { FontSizesProps } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
import { ReactNode } from 'react';

export interface TextProps extends SxProps {
  children?: ReactNode;
  lines?: number;
  transformText?: TransformType;
  readMore?: boolean;
  sx?: SxProps;
  textReadMore?: string;
  textReadLess?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  size?: keyof FontSizesProps | number;
  italic?: boolean;
  underline?: boolean;
  bold?: boolean;
  align?: AlignType;
  style?: StyleProp<TextStyle>;
  styles?: {
    root?: SxProps;
    text?: SxProps;
  };
  readMoreButtonProps?: Partial<ButtonProps>;

  [key: string]: unknown;
}
