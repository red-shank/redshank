import type {
  DimensionValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import type { ButtonProps } from '../Button';
import type { AlignType, TransformType } from '../../@types/typography';
import type { ColorType, FontSizesProps } from '../../context/theme/types';

export interface TextProps {
  children?: any;
  color?: ColorType;
  lines?: number;
  transform?: TransformType;
  margin?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  readMore?: boolean;
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
  lineHeight?: keyof FontSizesProps | number;
  italic?: boolean;
  underline?: boolean;
  bold?: boolean;
  align?: AlignType;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  readMoreButtonProps?: Partial<ButtonProps>;

  [key: string]: unknown;
}
