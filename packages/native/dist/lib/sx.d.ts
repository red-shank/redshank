import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SxProps } from './styleDictionary';
import { ThemeProps } from '../context/theme/types';
export default function createSxStyle({ sx, showLog, style, ...otherProps }: Partial<SxProps> & {
    sx?: SxProps;
    showLog?: boolean;
    style?: StyleProp<ViewStyle & TextStyle>;
    [key: string]: unknown;
}, theme: ThemeProps): {};
export declare function getSxStyleAndProps({ sx, style, ...otherProps }: Partial<SxProps> & {
    sx?: SxProps;
    showLog?: boolean;
    style?: StyleProp<ViewStyle & TextStyle>;
    [key: string]: unknown;
}, theme: ThemeProps): {
    props: object;
    style: {};
};
