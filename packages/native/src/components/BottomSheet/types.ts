import type { ReactNode } from 'react';
import { ModalProps } from '../Modal';
import { SxProps } from '../../lib/styleDictionary';

export type BottomSheetProps = Pick<
  ModalProps,
  'sx' | 'scrollable' | 'styles' | 'style'
> &
  Omit<SxProps, 'position'> & {
    animationType?: 'fade' | 'slide' | 'none';
    children?: ReactNode;
    fullScreen?: boolean;
    hiddenBar?: boolean;
    onClose?: () => void;
    visible?: boolean;
    containerSx?: SxProps;
    containerStyle?: ModalProps['style'];
    contentSx?: SxProps;
    contentStyle?: ModalProps['style'];
    headerPan?: ReactNode;
  };
