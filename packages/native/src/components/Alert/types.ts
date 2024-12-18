import type { Component, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { SxProps } from '../../lib/styleDictionary';
import { TranslateYTransform } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type AlertType = 'default' | 'success' | 'warning' | 'error' | 'info';

export type FuncRenderIcon = (onClose: () => void) => ReactNode;

export interface AlertProps extends SxProps {
  Component?: typeof Component;
  content:
    | ReactNode
    | {
        title?: ReactNode;
        description?: ReactNode;
      };
  startContent?: ReactNode | FuncRenderIcon;
  endContent?: ReactNode | FuncRenderIcon;
  type?: AlertType;
  onPress?: (event: any) => void;
  closable?: boolean;
  closeText?: ReactNode;
  withInternalClose?: boolean;
  closeOnPress?: boolean;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<ViewStyle>;
  withBoxShadow?: boolean;
  withIcon?: boolean;
  opacity?: ViewStyle['opacity'];
  translateYAnimation?: TranslateYTransform['translateY'];
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    text?: SxProps;
    button?: SxProps;
  };
}
