import React from 'react';

type BaseProps = {
  Component: any;
  children: React.ReactNode;
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
