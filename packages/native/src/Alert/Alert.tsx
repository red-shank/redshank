import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import { getOpacity } from '../utils';
import useTheme from '../Context/theme/useTheme';
import { Icon } from '../Icon';
import { Text } from '../Text';
import type { AlertProps, AlertType } from './types';

export const Alert: React.FC<AlertProps> = ({
  message,
  sizeIcon = 18,
  shadow = false,
  closable = false,
  type = 'warning',
  withIcon = true,
}) => {
  const { colors, borderRadius, isDark } = useTheme();
  const [show, setShow] = React.useState<boolean>(true);

  const onClose = React.useCallback(() => setShow(false), []);

  if (!show) {
    return null;
  }

  const internalColor = type === 'info' ? 'primary' : type;

  return (
    <View
      style={StyleSheet.flatten([
        styles.alert,
        {
          borderRadius: borderRadius.xxl,
          backgroundColor: getOpacity(colors[internalColor], 0.2),
        },
        shadow && {
          ...styles.shadow,
          shadowColor: colors[internalColor],
          shadowOpacity: isDark ? 0.9 : 0.5,
        },
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.content,
          { paddingRight: closable ? 35 : 0 },
        ])}
      >
        {withIcon && (
          <View style={styles.prefix}>
            <SelectIcon type={type} size={sizeIcon} />
          </View>
        )}
        <Text>{message}</Text>
      </View>

      {closable && (
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" type="antdesign" color="text" size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  prefix: {
    marginRight: 8,
  },
  shadow: {
    shadowOffset: Platform.select({
      default: {
        width: 0,
        height: 20,
      },
      web: {
        width: 0,
        height: 9,
      },
    }),
    shadowRadius: Platform.select({
      default: 12,
      web: 20,
    }),
  },
});

const SelectIcon = ({
  type,
  size = 18,
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
