import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import type { PopConfirmProps } from './types';
declare type ExportComponent = {
    Header: typeof Header;
    Content: typeof Content;
    Footer: typeof Footer;
};
export declare const PopConfirm: React.FC<PopConfirmProps> & ExportComponent;
export {};
