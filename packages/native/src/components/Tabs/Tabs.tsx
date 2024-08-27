import React from 'react';

import { Item } from './Item';
import { TabsProps, TabsVariant } from './types';
import { SxProps } from '../../lib/styleDictionary';
import { Box } from '../Box';
import { ScrollView } from '../ScrollView';
import Content from './Content';
import useTheme from '../../context/theme/useTheme';

export function Tabs({
  items,
  activeKey,
  onChange,
  defaultActiveKey,
  backgroundColors,
  renderTabItem,
  sx,
  styles,
  itemLabelColors,
  itemBackgroundColors,
  scrollable = false,
  variant = 'solid',
  labelProps = {},
  size = 'middle',
  ...sxProps
}: TabsProps) {
  const theme = useTheme();
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

  const isUnderline = variant === 'underlined';

  return (
    <Box sx={sx?.root} style={styles?.root} {...sxProps}>
      <Box
        rounded={!isUnderline && theme.borderRadius.tab}
        overflow="hidden"
        width="100%"
      >
        {variant === 'underlined' && (
          <Box
            left={0}
            bottom={0}
            zIndex={1}
            height={1}
            width="100%"
            position="absolute"
            flexDirection="row"
          >
            <Box height={1} width={1} bg="transparent" />
            <Box
              height={1}
              flex={1}
              bg={
                sx?.tab_container?.borderBottomColor ||
                sx?.tab_container?.borderColor ||
                sx?.tab_container?.borderBlockColor ||
                sx?.tab_container?.borderBlockEndColor ||
                'border'
              }
            />
            <Box height={1} width={1} bg="transparent" />
          </Box>
        )}
        <ScrollView
          horizontal
          bounces={scrollable}
          bouncesZoom={scrollable}
          showsHorizontalScrollIndicator={scrollable}
          sx={{
            ...sx?.tab_scroll_view,
            zIndex: 2
          }}
          style={styles?.tab_scroll_view}
          contentContainerStyle={styles?.tab_container}
          contentContainerSx={{
            gap: 0,
            p: !isUnderline && 0.65,
            flexShrink: 0,
            overflow: 'hidden',
            borderWidth: 1,
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
                labelColors={item?.labelColors || itemLabelColors}
                backgroundColors={
                  item?.backgroundColors || itemBackgroundColors
                }
                style={styles?.item}
                sx={{
                  flex: 1 / (items?.length || 0),
                  ...sx?.item
                }}
              />
            );
          })}
        </ScrollView>
      </Box>

      {internalValue?.children && (
        <Content
          pt={1}
          sx={sx?.content}
          style={styles?.content}
          key={internalValue?.key}
        >
          {internalValue?.children}
        </Content>
      )}
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
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'border'
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
