import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type BaseProps = {
  Component: any;
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
  activeOpacity: number;
  onPress?: (e?: any) => void;
  [key: string]: any;
};

const BaseComponent: React.FC<BaseProps> = ({
  Component,
  activeOpacity,
  onPress,
  style,
  children,
  ...restProps
}) => {
  return (
    <Component
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={style}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default React.memo(BaseComponent);
