import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorType } from '../../context/theme/types';

export type KeyType = string | number;
export type IconPosition = 'right' | 'left';

export type CollapseProps = {
  accordion?: boolean;
  borderColor?: ColorType;
  borderless?: boolean;
  children?: ReactNode;
  contentColor?: ColorType;
  defaultOpenKeys?: KeyType[];
  headerColor?: ColorType;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onChange?: (key: KeyType) => void;
  onStateChange?: (keys: KeyType[]) => void;
  openKeys?: KeyType[];
  showArrow?: boolean;
  style?: StyleProp<ViewStyle>;
};

export interface CollapseContextProps {
  borderColor: ColorType;
  borderless?: boolean;
  contentColor: ColorType;
  headerColor: ColorType;
  icon: ReactNode;
  iconPosition: IconPosition;
  onChange?: (key: KeyType) => void;
  openKeys: KeyType[];
  showArrow?: boolean;
}

export type CollapseItemProps = {
  children?: ReactNode;
  disabled?: boolean;
  id?: KeyType;
  styleContent?: StyleProp<ViewStyle>;
  styleHeader?: StyleProp<ViewStyle>;
  subTitle?: ReactNode;
  title: ReactNode;
};

export type CollapseInternalItemProps = CollapseItemProps & {
  isFirstElement?: boolean;
  isLastElement?: boolean;
};
