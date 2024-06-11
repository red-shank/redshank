import { StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';
export interface DatePickerProps {
    background?: ColorType;
    borderInputColor?: ColorType;
    color?: ColorType;
    defaultValue?: Date | string;
    locale?: string;
    mode?: 'date' | 'time' | 'datetime';
    error?: boolean;
    format?: string;
    onChange?: (date: Date, dateText: string) => void;
    placeholder?: string;
    prefix?: JSX.Element;
    size?: SizeType;
    style?: StyleProp<ViewStyle>;
    suffix?: JSX.Element | null | false;
    textError?: string;
    value?: Date | string;
}
