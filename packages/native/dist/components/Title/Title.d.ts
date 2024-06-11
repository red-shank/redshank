import React from 'react';
import type { FontType } from '../../context/theme/types';
import type { LevelType } from '../../@types/typography';
import { TextProps } from '../Text';
export declare type TitleProps = TextProps & {
    level?: LevelType;
    font?: FontType;
};
export declare const Title: React.FC<TitleProps>;
