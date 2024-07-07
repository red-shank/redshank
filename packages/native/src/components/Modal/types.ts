import { StyleProp, ViewStyle, ModalProps as RModalProps } from 'react-native';
import type { ReactNode, PropsWithChildren, ComponentType, Ref } from 'react';
import { SxProps } from '../../lib/styleDictionary';

export type PositionType = 'top' | 'bottom' | 'center';

export type ModalHandle = {
  onClose: () => void;
};

export type ModalProps = RModalProps &
  Omit<SxProps, 'position'> & {
    animationType?: 'fade' | 'slide' | 'none';
    children?: ReactNode;
    closable?: boolean;
    closeIcon?: ReactNode;
    extra?: ReactNode;
    ref?: Ref<ModalHandle>;
    fullScreen?: boolean;
    hiddenBar?: boolean;
    maskClosable?: boolean;
    maskComponent?: ComponentType<any>;
    onClose?: () => void;
    position?: PositionType;
    statusHeight?: number;
    scrollable?: boolean;
    visible?: boolean;
    sx?: SxProps & {
      root?: SxProps;
      mask?: SxProps;
      container?: SxProps;
      content?: SxProps;
      contentScroll?: SxProps;
      buttonClose?: SxProps;
      closeIcon?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      mask?: StyleProp<ViewStyle>;
      container?: StyleProp<ViewStyle>;
      content?: StyleProp<ViewStyle>;
      contentScroll?: StyleProp<ViewStyle>;
      buttonClose?: StyleProp<ViewStyle>;
      closeIcon?: StyleProp<ViewStyle>;
    };
  };

export type ModalHeaderProps = PropsWithChildren<
  SxProps & {
    sx?: SxProps;
    style?: StyleProp<ViewStyle>;
  }
>;

export type ModalFooterProps = PropsWithChildren<
  SxProps & {
    sx?: SxProps;
    style?: StyleProp<ViewStyle>;
  }
>;

export type ModalContentProps = PropsWithChildren<
  SxProps & {
    Component?: ComponentType;
    style?: StyleProp<ViewStyle>;
    sx?: SxProps;
  }
>;
