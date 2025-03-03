import { StyleProp, ViewStyle } from 'react-native';
import type { ReactNode, PropsWithChildren } from 'react';
import { SxProps } from '../../lib/styleDictionary';

export type MenuItemProps<TData = unknown> = {
  item: TData;
  index: number;
};

export type MenuProps<TData = unknown> = Omit<SxProps, 'position'> & {
  children?: ReactNode;
  items?: TData[];
  onPressItem?: (p: MenuItemProps<TData>) => void | Promise<any>;
  renderStartContent?: (p: MenuItemProps<TData>) => ReactNode;
  renderEndContent?: (p: MenuItemProps<TData>) => ReactNode;
  renderContent: (p: MenuItemProps<TData>) => ReactNode;
  renderDivider?: () => ReactNode;
  sx?: SxProps & {
    root?: SxProps;
    list?: SxProps;
    container?: SxProps;
    item?: SxProps;
    divider?: SxProps;
  };
  styles?: {
    root?: StyleProp<ViewStyle>;
    list?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    item?: StyleProp<ViewStyle>;
    divider?: StyleProp<ViewStyle>;
  };
};

export type MenuDividerProps = PropsWithChildren<
  SxProps & {
    sx?: SxProps;
    style?: StyleProp<ViewStyle>;
  }
>;
