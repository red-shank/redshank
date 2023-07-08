import React, { useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import {
  useTheme,
  Header,
  Title,
  Button,
  useHeaderNavigation,
  HeaderProps,
  HeaderNavigationProvider,
} from '@redshank/native';
import { useTheme as useNavigationTheme } from '@react-navigation/native';
import DrawerToggleButton from '@react-navigation/drawer/src/views/DrawerToggleButton';

const heightDynamic = Platform.select({
  ios: 50,
  android: 70,
  default: 70,
});

const defaultValues = (color) =>
  ({
    title: 'Hello',
    heightDynamic,
    titleOnScroll: 'Header',
    titlePosition: 'left',
    leftIcon: <DrawerToggleButton tintColor={color} />,
  } as HeaderProps);

const HeaderRender = () => {
  const { colors } = useTheme();
  const { setValues, scrollViewProps } = useHeaderNavigation();
  const navigationTheme = useNavigationTheme();

  useEffect(() => {
    setValues(defaultValues(colors.text));
  }, [colors.text, setValues]);

  const onDefaultValues = () => {
    setValues(defaultValues(colors.text));
  };

  const onWithRightIcon = () => {
    setValues({
      title: 'Right header',
      heightDynamic,
      titleOnScroll: 'Left scroll',
      titlePosition: 'right',
      titleOnScrollPosition: 'left',
      rightIcon: <DrawerToggleButton tintColor={colors.text} />,
    });
  };

  const onWithCustomBackground = () => {
    setValues({
      title: 'Custom',
      heightDynamic: heightDynamic,
      titleOnScroll: 'Header custom',
      titlePosition: 'center',
      backgroundSticky: colors.yellow500,
      background: colors.primary,
      leftIcon: <DrawerToggleButton tintColor={colors.text} />,
    });
  };

  return (
    <View style={styles.header}>
      <ScrollView
        {...scrollViewProps}
        contentContainerStyle={styles.wrapperScroll}
      >
        <View style={styles.container}>
          <Title level={2}>Header</Title>
        </View>

        <View
          style={[
            styles.headContent,
            styles.marginTop,
            { backgroundColor: navigationTheme.colors.card },
          ]}
        >
          <Title level={4}>Default Header</Title>
          <Button onPress={onDefaultValues}>Restore</Button>
        </View>

        <View
          style={[
            styles.headContent,
            styles.marginTop,
            { backgroundColor: navigationTheme.colors.card },
          ]}
        >
          <Title level={4}>With Right Icon</Title>
          <Button onPress={onWithRightIcon}>Try</Button>
        </View>

        <View
          style={[
            styles.headContent,
            styles.marginTop,
            { backgroundColor: navigationTheme.colors.card },
          ]}
        >
          <Title level={4}>Header with custom backgrounds</Title>
          <Button onPress={onWithCustomBackground}>Try</Button>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: {
    paddingTop: 70,
    paddingBottom: 10,
  },
  marginTop: {
    marginTop: 0,
  },
  headContent: {
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(100, 100, 100, .8)',
  },
  space: {
    marginTop: 50,
  },
});

export default function HeaderScreen() {
  return (
    <HeaderNavigationProvider>
      <HeaderRender />
    </HeaderNavigationProvider>
  );
}
