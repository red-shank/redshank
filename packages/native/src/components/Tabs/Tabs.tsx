import React from 'react';

import { Item } from './Item';
import { TabsProps, TabsVariant } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';
import { ScrollView } from '../ScrollView';

export function Tabs({
  items,
  activeKey,
  onChange,
  defaultActiveKey,
  backgroundColors,
  renderTabItem,
  sx,
  styles,
  scrollable = false,
  variant = 'solid',
  labelProps = {},
  size = 'middle',
  ...sxProps
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState<
    TabsProps['items'][0] | null
  >(null);

  const onInternalChange = (item: TabsProps['items'][0]) => {
    setInternalValue(item);
    onChange?.(item);
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
    typeof defaultActiveKey !== 'undefined' &&
      setInternalValue((prev) => {
        if (!prev) {
          return items.find((item) => item.key === defaultActiveKey) || null;
        }
        return prev;
      });
  }, [defaultActiveKey, items]);

  const variants = getVariantStyles({
    backgroundColors
  });

  return (
    <Box sx={sx?.root} style={styles?.root} {...sxProps}>
      <ScrollView
        horizontal
        bounces={scrollable}
        bouncesZoom={scrollable}
        showsHorizontalScrollIndicator={scrollable}
        sx={sx?.tab_scroll_view}
        style={styles?.tab_scroll_view}
        contentContainerStyle={styles?.tab_container}
        contentContainerSx={{
          gap: 0,
          p: 0.4,
          flexShrink: 0,
          overflow: 'hidden',
          borderWidth: 2,
          flexDirection: 'row',
          borderStyle: 'solid',
          flexWrap: 'nowrap',
          flex: scrollable ? undefined : 1,
          ...variants[variant],
          ...sx?.tab_container
        }}
      >
        {items.map((item) => {
          if (renderTabItem) {
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
              id={item.key}
              key={item.key}
              variant={variant}
              label={item.label}
              endAdornment={item?.endAdornment}
              startAdornment={item?.startAdornment}
              size={size}
              labelProps={labelProps}
              isActive={internalValue?.key === item.key}
              onPress={() => onInternalChange(item)}
              labelColors={item?.labelColors}
              backgroundColors={item?.backgroundColors}
              style={styles?.item}
              sx={{
                flex: 1 / (items?.length || 0),
                ...sx?.item
              }}
            />
          );
        })}
      </ScrollView>

      <Box pt={1} sx={sx?.content} style={styles?.content}>
        {internalValue?.children}
      </Box>
    </Box>
  );
}

const getVariantStyles: (
  props: Pick<TabsProps, 'backgroundColors'>
) => Record<TabsVariant, SxProps> = ({ backgroundColors }) => {
  return {
    solid: {
      borderRadius: 1.2,
      borderColor: backgroundColors?.borderColor || 'transparent',
      backgroundColor: backgroundColors?.background || 'card'
    },
    underlined: {
      borderColor: 'transparent'
    },
    bordered: {
      borderRadius: 1.2,
      borderColor: backgroundColors?.borderColor || 'border',
      backgroundColor: backgroundColors?.background || 'background'
    },
    light: {
      borderRadius: 1.2,
      borderColor: backgroundColors?.borderColor || 'transparent',
      backgroundColor: backgroundColors?.background || 'transparent'
    }
  };
};
