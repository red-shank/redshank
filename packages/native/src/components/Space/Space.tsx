import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';

import { justifies } from '../../utils/justifies';
import { SpaceProps, SpaceItemProps } from './types';

export const Space: React.FC<SpaceProps> = ({
  children,
  justify = 'start',
  align = 'start',
  orientation = 'horizontal',
  gutter = [10, 10],
  style,
}) => {
  const renderChildren = React.useMemo(() => {
    if (children) {
      return Children.map(children, (child) => (
        <SpaceItem orientation={orientation} gutter={gutter}>
          {child}
        </SpaceItem>
      ));
    }
    return children;
  }, [children, gutter, orientation]);

  return (
    <View
      // @ts-ignore
      style={StyleSheet.flatten([
        orientation === 'vertical' ? styles.vertical : styles.horizontal,
        {
          justifyContent: justifies[justify],
          alignItems: justifies[align],
        },
        style,
      ])}
    >
      {renderChildren}
    </View>
  );
};

const SpaceItem: React.FC<SpaceItemProps> = ({
  children,
  orientation,
  gutter,
}) => (
  <View
    style={StyleSheet.flatten({
      marginRight: gutter[0],
      marginBottom: gutter[1],
      width: orientation === 'vertical' ? '100%' : 'auto',
    })}
  >
    {children}
  </View>
);

export const styles = StyleSheet.create({
  vertical: {
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  horizontal: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
