/// <reference types="react" />
import { TextProps } from '../../../Text';
interface CellProps {
    content: string | number;
    textColor?: TextProps['color'];
    fontSize?: TextProps['size'];
    selected?: boolean;
    isNow?: boolean;
    disabledRipple?: boolean;
    onPress?: () => void;
    isLabel?: boolean;
    style?: TextProps['style'];
}
export default function Cell({ selected, content, fontSize, isNow, disabledRipple, textColor, onPress, isLabel, style }: CellProps): import("react").JSX.Element;
export {};
