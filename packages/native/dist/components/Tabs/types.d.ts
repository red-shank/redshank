import { ReactNode } from 'react';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
import { TextProps } from '../Text';
export declare type NumberStringValue = string | number;
export interface TabItemProps {
    isActive?: boolean;
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
    onPress?: () => void;
    size?: SizeType;
    borderRadius?: SxProps['borderRadius'];
    sx?: SxProps;
    backgroundColors?: {
        activeColor?: ColorType;
        inactiveColor?: ColorType;
    };
    labelColors?: {
        activeColor?: ColorType;
        inactiveColor?: ColorType;
    };
    label: string;
    labelProps?: Partial<Omit<TextProps, 'children'>>;
    key: NumberStringValue;
    children?: ReactNode;
}
export declare type TabsVariant = 'solid' | 'underlined' | 'bordered' | 'light';
export declare type TabsProps = Partial<Pick<TabItemProps, 'size' | 'sx'>> & SxProps & {
    items: Pick<TabItemProps, 'key' | 'children' | 'label' | 'startAdornment' | 'endAdornment' | 'backgroundColors' | 'labelColors'>[];
    renderTabItem?: (props: Pick<TabItemProps, 'key' | 'label' | 'startAdornment' | 'endAdornment' | 'isActive' | 'onPress'>) => ReactNode;
    activeKey?: NumberStringValue;
    defaultActiveKey?: NumberStringValue;
    error?: boolean;
    scrollable?: boolean;
    onChange?: (item: TabsProps['items'][0]) => void;
    textError?: string;
    itemSx?: SxProps;
    wrapperSx?: SxProps;
    containerSx?: SxProps;
    labelProps?: TabItemProps['labelProps'];
    variant?: TabsVariant;
    backgroundColors?: {
        borderColor?: ColorType;
        background?: ColorType;
    };
    styles?: {
        root?: SxProps;
        tab_container?: SxProps;
        tab_scroll_view?: SxProps;
        content?: SxProps;
        item?: SxProps;
    };
};
