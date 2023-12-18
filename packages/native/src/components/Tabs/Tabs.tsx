import React from 'react';

import { Item } from './Item';
import type { TabsProps } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';

export function Tabs({
  items,
  activeKey,
  error,
  onChange,
  textError,
  defaultActiveKey,
  backgroundColors,
  labelColors,
  renderTabItem,
  borderRadius: borderRadiusProp,
  itemSx = {},
  wrapperSx = {},
  containerSx = {},
  size = 'middle',
  ...sxProps
}: TabsProps & SxProps) {
  const [internalValue, setInternalValue] = React.useState<
    TabsProps['items'][0] | null
  >(null);

  const onInternalChange = (item: TabsProps['items'][0]) => {
    setInternalValue(item);
    onChange && onChange(item);
  };

  React.useEffect(() => {
    setInternalValue((prev) => {
      if (prev?.key !== activeKey) {
        return items.find((item) => item.key === activeKey) || null;
      }
      return prev;
    });
  }, [activeKey, items]);

  React.useEffect(() => {
    defaultActiveKey &&
      setInternalValue((prev) => {
        if (!prev) {
          return items.find((item) => item.key === defaultActiveKey) || null;
        }
        return prev;
      });
  }, [defaultActiveKey]);

  return (
    <Box {...wrapperSx}>
      <Box
        gap={0}
        flexShrink={0}
        overflow="hidden"
        flexDirection="row"
        flexWrap="nowrap"
        borderRadius={borderRadiusProp}
        backgroundColor={backgroundColors?.inactiveColor}
        {...sxProps}
      >
        {items.map((item) => {
          if (!!renderTabItem) {
            return renderTabItem({
              key: item.key,
              label: item.label,
              onPress: () => onInternalChange(item),
              endAdornment: item?.endAdornment,
              startAdornment: item?.startAdornment,
              isActive: internalValue?.key === item.key
            });
          }
          return (
            <Item
              label={item.label}
              endAdornment={item?.endAdornment}
              startAdornment={item?.startAdornment}
              size={size}
              key={item.key}
              id={item.key}
              borderRadius={borderRadiusProp}
              isActive={internalValue?.key === item.key}
              onPress={() => onInternalChange(item)}
              sx={{
                flex: 1 / (items?.length || 0),
                ...itemSx
              }}
              backgroundColors={{
                activeColor:
                  backgroundColors?.activeColor ||
                  'radioButtonActiveBackground',
                inactiveColor: backgroundColors?.inactiveColor
              }}
              labelColors={{
                activeColor:
                  labelColors?.activeColor || 'radioButtonActiveText',
                inactiveColor:
                  labelColors?.inactiveColor || 'radioButtonInactiveLabel'
              }}
            />
          );
        })}
      </Box>

      <Box pt={3} {...containerSx}>
        {internalValue?.children}
      </Box>
    </Box>
  );
}
