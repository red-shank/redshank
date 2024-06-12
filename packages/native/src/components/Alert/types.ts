import { SxProps } from '../../lib/styleDictionary';

export type AlertType = 'success' | 'warning' | 'error' | 'info';

export interface AlertProps extends SxProps {
  closable?: boolean;
  message: string;
  shadow?: boolean;
  sizeIcon?: number;
  type?: AlertType;
  withIcon?: boolean;
  sx?: SxProps & {
    root?: SxProps;
    container?: SxProps;
    icon?: SxProps;
    text?: SxProps;
    button?: SxProps;
  };
}
