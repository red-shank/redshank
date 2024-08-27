import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SizeType } from '../../@types/input';
import { ColorName } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';
import { TextProps } from '../Text';

export type NumberStringValue = string | number;

export interface TabItemProps {
  isActive?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onPress?: () => void;
  size?: SizeType;
  borderRadius?: SxProps['borderRadius'];
  sx?: SxProps;
  style?: StyleProp<ViewStyle>;
  backgroundColors?: {
    activeColor?: ColorName;
    inactiveColor?: ColorName;
  };
  labelColors?: {
    activeColor?: ColorName;
    inactiveColor?: ColorName;
  };
  label: string;
  labelProps?: Partial<Omit<TextProps, 'children'>>;
  key: NumberStringValue;
  children?: ReactNode;
}

export type TabsVariant = 'solid' | 'underlined' | 'bordered' | 'light';

export type TabsProps = Partial<Pick<TabItemProps, 'size' | 'sx'>> &
  SxProps & {
    items: Pick<
      TabItemProps,
      | 'key'
      | 'children'
      | 'label'
      | 'startAdornment'
      | 'endAdornment'
      | 'backgroundColors'
      | 'labelColors'
    >[];
    renderTabItem?: (
      props: Pick<
        TabItemProps,
        | 'key'
        | 'label'
        | 'startAdornment'
        | 'endAdornment'
        | 'isActive'
        | 'onPress'
      >
    ) => ReactNode;
    activeKey?: NumberStringValue;
    defaultActiveKey?: NumberStringValue;
    scrollable?: boolean;
    onChange?: (item: TabsProps['items'][0]) => void;
    labelProps?: TabItemProps['labelProps'];
    variant?: TabsVariant;
    itemLabelColors?: TabItemProps['labelColors'];
    itemBackgroundColors?: TabItemProps['backgroundColors'];
    backgroundColors?: {
      borderColor?: ColorName;
      background?: ColorName;
    };
    sx?: {
      root?: SxProps;
      tab_container?: SxProps;
      tab_scroll_view?: SxProps;
      content?: SxProps;
      item?: SxProps;
    };
    styles?: {
      root?: StyleProp<ViewStyle>;
      tab_container?: StyleProp<ViewStyle>;
      tab_scroll_view?: StyleProp<ViewStyle>;
      content?: StyleProp<ViewStyle>;
      item?: StyleProp<ViewStyle>;
    };
  };
