import type { ReactNode } from 'react';
import { SxProps } from '../../lib/styleDictionary';

export type BottomSheetProps = {
  animationType?: 'fade' | 'slide' | 'none';
  children?: ReactNode;
  fullScreen?: boolean;
  hiddenBar?: boolean;
  onClose?: () => void;
  visible?: boolean;
};
