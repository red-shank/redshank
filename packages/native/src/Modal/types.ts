import { StyleProp, ViewStyle } from 'react-native';
import type { ReactNode, Component, FunctionComponent } from 'react';
import type { IconProps } from '../Icon';

type PositionType = 'top' | 'bottom' | 'center';

export type ModalProps = {
  animationType?: 'fade' | 'slide' | 'none';
  buttonCloseStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  closable?: boolean;
  closeIconProps?: IconProps;
  contentContainerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  extra?: ReactNode;
  fullScreen?: boolean;
  hiddenBar?: boolean;
  maskClosable?: boolean;
  maskComponent?: typeof Component | FunctionComponent;
  maskStyle?: StyleProp<ViewStyle>;
  onClose?: () => void;
  position?: PositionType;
  scrollable?: boolean;
  visible?: boolean;
};
