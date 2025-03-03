import React from 'react';
import { FlatList } from 'react-native';

import useTheme from '../../context/theme/useTheme';

import type { MenuProps } from './types';
import { Box } from '../Box';
import { Ripple } from '../Ripple/Ripple';
import createSxStyle from '../../lib/sx';
import { Divider } from './Divider';
// import { Icon } from '../Icon';
// import { Button } from '../Button';

export function Menu<TValue = unknown>({
  items,
  styles,
  renderStartContent,
  renderContent,
  renderDivider,
  renderEndContent,
  onPressItem,
  ...rest
}: MenuProps<TValue>) {
  const theme = useTheme();

  const Component = onPressItem ? Ripple : Box;

  return (
    <Box
      style={createSxStyle(
        {
          ...rest,
          ...rest?.sx,
          sx: rest?.sx?.root,
          style: styles?.root
        },
        theme
      )}
    >
      <FlatList<MenuProps<TValue>['items'][0]>
        data={items}
        style={createSxStyle(
          {
            sx: rest?.sx?.list,
            style: styles?.list
          },
          theme
        )}
        ItemSeparatorComponent={() => {
          return renderDivider ? renderDivider() : <Divider />;
        }}
        contentContainerStyle={createSxStyle(
          {
            sx: rest?.sx?.container,
            style: styles?.container
          },
          theme
        )}
        renderItem={({ item, index }) => {
          return (
            <Component
              py={2}
              key={index}
              flexDirection="row"
              alignItems="center"
              sx={createSxStyle(
                {
                  sx: rest?.sx?.item,
                  style: styles?.item
                },
                theme
              )}
              onPress={() =>
                onPressItem?.({
                  item,
                  index
                })
              }
            >
              {renderStartContent && (
                <Box>{renderStartContent({ item, index })}</Box>
              )}
              {renderContent && renderContent({ item, index })}
              {renderEndContent && (
                <Box>{renderEndContent({ item, index })}</Box>
              )}
            </Component>
          );
        }}
        {...rest}
      />
    </Box>
  );
}
