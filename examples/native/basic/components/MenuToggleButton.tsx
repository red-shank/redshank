import { PlatformPressable } from '@react-navigation/elements';
import {
  DrawerActions,
  ParamListBase,
  useNavigation
} from '@react-navigation/native';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Icon, useTheme } from '@redshank/native';
import createSxStyle from '@redshank/native/dist/lib/sx';

type Props = {
  accessibilityLabel?: string;
  pressColor?: string;
  pressOpacity?: number;
  tintColor?: string;
};

export default function MenuToggleButton({ tintColor, ...rest }: Props) {
  const theme = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  return (
    <PlatformPressable
      {...rest}
      accessible
      accessibilityRole="button"
      android_ripple={{ borderless: true }}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.touchable}
      hitSlop={Platform.select({
        ios: undefined,
        default: { top: 16, right: 16, bottom: 16, left: 16 }
      })}
    >
      <Icon
        name="menu-fold"
        type="antdesign"
        style={createSxStyle(
          {
            style: styles.icon,
            tintColor
          },
          theme
        )}
      />
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    margin: 3,
    resizeMode: 'contain'
  },
  touchable: {
    marginHorizontal: 11
  }
});
