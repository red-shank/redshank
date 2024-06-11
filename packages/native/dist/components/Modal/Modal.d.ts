import React from 'react';
import { UseModalType } from '../../hooks/useModal';
import type { ModalProps } from './types';
declare type ExportComponent = {
    useModal: (initial?: boolean) => UseModalType;
};
export declare const MIN_PADDING_VERTICAL = 20;
export declare const Modal: React.FC<ModalProps> & ExportComponent;
export {};
