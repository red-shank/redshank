import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import Panel from './Panel';
import { useChildren } from '../../hooks/useChildren';

import { Icon } from '../Icon';
import useTheme from '../../context/theme/useTheme';
import { defaultContextCollapse, CollapseContext } from './Context';
import type {
  CollapseInternalItemProps,
  CollapseProps,
  CollapseContextProps,
  KeyType,
} from './types';

interface ComponentExport {
  Panel: typeof Panel;
}

export const Collapse: React.FC<CollapseProps> & ComponentExport = ({
  style,
  children: _children,
  defaultOpenKeys,
  onChange,
  openKeys,
  borderless = false,
  borderColor = 'accents7',
  headerColor = 'card',
  contentColor = 'card',
  showArrow = true,
  icon = <Icon type="antdesign" name="right" color="text" />,
  accordion = true,
  iconPosition = 'right',
}) => {
  const { colors, borderRadius } = useTheme();
  const [state, setState] = React.useState<CollapseContextProps>(
    defaultContextCollapse
  );

  const children = useChildren(_children);

  const onInternalChange = (key: KeyType) => {
    onChange && onChange(key);
    if (openKeys) {
      return;
    }
    if (accordion) {
      setState((prev) => {
        if (prev.openKeys.includes(key)) {
          return {
            ...prev,
            openKeys: [],
          };
        }
        return {
          ...prev,
          openKeys: [key],
        };
      });
    } else {
      setState((prev) => {
        if (prev.openKeys.includes(key)) {
          return {
            ...prev,
            openKeys: prev.openKeys.filter((f) => f !== key),
          };
        }
        return {
          ...prev,
          openKeys: [...prev.openKeys, key],
        };
      });
    }
  };

  React.useEffect(() => {
    if (defaultOpenKeys) {
      setState((prev) => {
        if (!prev.openKeys.length) {
          return {
            ...prev,
            openKeys: [...prev.openKeys, ...defaultOpenKeys],
          };
        }
        return prev;
      });
    }
  }, [defaultOpenKeys]);

  React.useEffect(() => {
    if (openKeys) {
      setState((prev) => {
        return {
          ...prev,
          openKeys: openKeys,
        };
      });
    }
  }, [openKeys]);

  return (
    <CollapseContext.Provider
      value={{
        icon,
        showArrow,
        headerColor,
        borderless,
        contentColor,
        onChange: onInternalChange,
        iconPosition: iconPosition,
        openKeys: state.openKeys,
        borderColor,
      }}
    >
      <View
        style={StyleSheet.flatten([
          {
            borderRadius: borderRadius.card,
            backgroundColor: colors[contentColor] || contentColor,
          },
          style,
        ])}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <Animated.View>
                {React.cloneElement<CollapseInternalItemProps>(child as any, {
                  isFirstElement: index === 0,
                  isLastElement: index === children?.length - 1,
                  id: child?.props?.id ?? index,
                })}
              </Animated.View>
            );
          }
          return null;
        })}
      </View>
    </CollapseContext.Provider>
  );
};

Collapse.Panel = Panel;
