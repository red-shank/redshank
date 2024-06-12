import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import {
  AlignType,
  GutterType,
  JustifyType,
  OrientationType
} from '../../@types/utilities';
import { SxProps } from '../../lib/styleDictionary';

export interface SpaceProps {
  align?: AlignType;
  children?: ReactNode;
  gutter?: GutterType;
  justify?: JustifyType;
  orientation?: OrientationType;
  style?: ViewStyle;
  sx?: SxProps;
}

export interface SpaceItemProps {
  children?: ReactNode;
  gutter: GutterType;
  orientation: OrientationType;
}
