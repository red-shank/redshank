import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { getOpacity } from '../../utils';
import useTheme from '../../context/theme/useTheme';
import { Icon } from '../Icon';
import { Text } from '../Text';
import type { AlertProps, AlertType } from './types';
import { Box } from '../Box';
import createSxStyle, { getSxStyleAndProps } from '../../lib/sx';

export const Alert: React.FC<AlertProps> = ({
  message,
  sx,
  styles,
  sizeIcon = 18,
  shadow = false,
  closable = false,
  type = 'warning',
  withIcon = true,
  ...restProps
}) => {
  const theme = useTheme();
  const { colors, isDark } = useTheme();
  const [show, setShow] = React.useState<boolean>(true);

  const onClose = React.useCallback(() => setShow(false), []);

  if (!show) {
    return null;
  }

  const internalColor = type === 'info' ? 'primary' : type;

  const resolveProps = getSxStyleAndProps(
    { ...sx, sx: styles?.root, ...restProps },
    theme
  );

  return (
    <Box
      p={16}
      borderRadius={2}
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor={getOpacity(colors[internalColor], 0.2)}
      style={StyleSheet.flatten([
        shadow && {
          ..._styles.shadow,
          shadowColor: colors[internalColor],
          shadowOpacity: Platform.select({
            default: isDark ? 0.9 : 0.5,
            web: 0.4
          })
        },
        resolveProps.style
      ])}
      {...resolveProps.props}
    >
      <Box
        flexDirection="row"
        flex={1}
        p={closable ? 8 : 0}
        sx={styles?.container}
      >
        {withIcon && (
          <Box mr={1} sx={styles?.icon}>
            <SelectIcon type={type} size={sizeIcon} />
          </Box>
        )}
        <Text
          styles={{
            root: {
              width: '100%'
            }
          }}
          sx={styles?.text}
          testID="RN_TEXT_MESSAGE"
        >
          {message}
        </Text>
      </Box>

      {closable && (
        <TouchableOpacity
          onPress={onClose}
          style={createSxStyle(
            {
              sx: styles?.button
            },
            theme
          )}
        >
          <Icon name="close" type="antdesign" color="text" size={18} />
        </TouchableOpacity>
      )}
    </Box>
  );
};

const _styles = StyleSheet.create({
  shadow: {
    shadowOffset: Platform.select({
      default: {
        width: 0,
        height: 20
      },
      web: {
        width: 0,
        height: 9
      }
    }),
    shadowRadius: Platform.select({
      default: 12,
      web: 20
    })
  }
});

const SelectIcon = ({
  type,
  size = 18
}: {
  type: AlertType;
  size?: number;
}) => {
  switch (type) {
    case 'success':
      return (
        <Icon name="checkcircle" type="antdesign" color={type} size={size} />
      );
    case 'info':
      return (
        <Icon name="infocirlce" type="antdesign" color="primary" size={size} />
      );
    case 'error':
      return (
        <Icon name="closecircle" type="antdesign" color={type} size={size} />
      );
    case 'warning':
      return (
        <Icon
          name="exclamationcircle"
          type="antdesign"
          color={type}
          size={size}
        />
      );
    default:
      return (
        <Icon
          name="exclamationcircle"
          type="antdesign"
          color={type}
          size={size}
        />
      );
  }
};
