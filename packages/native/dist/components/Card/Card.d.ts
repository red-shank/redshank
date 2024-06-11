import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';
import type { CardProps } from './types';
interface ComponentExport {
    Header: typeof Header;
    Divider: typeof Divider;
    Body: typeof Body;
    Footer: typeof Footer;
}
export declare const Card: React.FC<CardProps> & ComponentExport;
export {};
