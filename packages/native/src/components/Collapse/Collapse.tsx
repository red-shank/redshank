import React from 'react';
import { Animated } from 'react-native';

import { useChildren } from '../../hooks/useChildren';

import { Icon } from '../Icon';
import { defaultContextCollapse, CollapseContext } from './Context';
import type {
  CollapseInternalItemProps,
  CollapseProps,
  CollapseContextProps,
  KeyType
} from './types';
import { Box } from '../Box';

export const Collapse: React.FC<CollapseProps> = ({
  style,
  children: _children,
  defaultOpenKeys,
  onChange,
  openKeys,
  onStateChange,
  borderless = false,
  borderColor = 'accents7',
  headerColor = 'card',
  contentColor = 'card',
  showArrow = true,
  icon = <Icon type="antdesign" name="right" color="text" />,
  accordion = true,
  iconPosition = 'right'
}) => {
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
        let newValue: CollapseContextProps;

        if (prev.openKeys.includes(key)) {
          newValue = {
            ...prev,
            openKeys: []
          };
        } else {
          newValue = {
            ...prev,
            openKeys: [key]
          };
        }
        onStateChange?.(newValue.openKeys);
        return newValue;
      });
    } else {
      setState((prev) => {
        let newValue: CollapseContextProps;
        if (prev.openKeys.includes(key)) {
          newValue = {
            ...prev,
            openKeys: prev.openKeys.filter((f) => f !== key)
          };
        } else {
          newValue = {
            ...prev,
            openKeys: [...prev.openKeys, key]
          };
        }
        onStateChange?.(newValue.openKeys);
        return newValue;
      });
    }
  };

  React.useEffect(() => {
    if (defaultOpenKeys) {
      setState((prev) => {
        if (!prev.openKeys.length) {
          return {
            ...prev,
            openKeys: [...prev.openKeys, ...defaultOpenKeys]
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
          openKeys: openKeys
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
        borderColor
      }}
    >
      <Box borderRadius={1} backgroundColor={contentColor} style={style}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <Animated.View>
                {React.cloneElement<CollapseInternalItemProps>(child as any, {
                  isFirstElement: index === 0,
                  isLastElement: index === children?.length - 1,
                  id: child?.props?.id ?? index
                })}
              </Animated.View>
            );
          }
          return null;
        })}
      </Box>
    </CollapseContext.Provider>
  );
};
