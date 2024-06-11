export declare type AlertType = 'success' | 'warning' | 'error' | 'info';
export interface AlertProps {
    closable?: boolean;
    message: string;
    shadow?: boolean;
    sizeIcon?: number;
    type?: AlertType;
    withIcon?: boolean;
}
