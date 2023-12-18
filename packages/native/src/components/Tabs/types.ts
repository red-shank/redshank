import { ReactNode } from 'react';
import { SizeType } from '../../@types/input';
import { ColorType } from '../../context/theme/types';
import { SxProps } from '../../lib/styleDictionary';

export type NumberStringValue = string | number;

export interface TabItemProps {
  backgroundColors?: {
    activeColor?: ColorType;
    inactiveColor?: ColorType;
  };
  labelColors?: {
    activeColor?: ColorType;
    inactiveColor?: ColorType;
  };
  isActive?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onPress?: () => void;
  size?: SizeType;
  borderRadius?: SxProps['borderRadius'];
  sx?: SxProps;
  label: string;
  key: NumberStringValue;
  children?: ReactNode;
}

export type TabsProps = Partial<
  Pick<TabItemProps, 'backgroundColors' | 'labelColors' | 'size' | 'sx'>
> & {
  items: Pick<
    TabItemProps,
    'key' | 'children' | 'label' | 'startAdornment' | 'endAdornment'
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
  error?: boolean;
  onChange?: (item: TabsProps['items'][0]) => void;
  textError?: string;
  itemSx?: SxProps;
  wrapperSx?: SxProps;
  containerSx?: SxProps;
};
