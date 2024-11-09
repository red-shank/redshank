import type { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';

type PopConfirmType = 'default' | 'delete';

export type PopConfirmProps = {
  cancelText?: ReactNode;
  children?: ReactNode;
  extra?: ReactNode;
  okText?: ReactNode;
  onClose: () => void;
  onOk?: () => void;
  type?: PopConfirmType;
  visible?: boolean;
  actions?: Array<ButtonProps>;
};

export type PropHeaderProps = {
  description: ReactNode;
  image?: ReactNode;
  style?: StyleProp<ViewStyle>;
  title: ReactNode;
};

export type PropContentProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  withBorder?: boolean;
};

export type PropFooterProps = {
  children?: ReactNode;
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  withBorder?: boolean;
};
