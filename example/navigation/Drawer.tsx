// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Title, useTheme } from 'react-native-beauty-design';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={Styles.header}>
        <Image
          style={Styles.image}
          source={{
            uri: 'https://www.beauty-design.app/favicon.png',
          }}
        />
        <Title style={Styles.title} level={4}>
          Beauty Design
        </Title>
      </View>
      <DrawerItemList {...props} />
      <View style={Styles.footer} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

type RootDrawerType = {
  items: { name: string; component: any; options?: any }[];
};

function RootDrawer({ items }: RootDrawerType) {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerStyle: {
          paddingRight: 12,
          paddingLeft: 12,
        },
        headerTintColor: colors.text,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#4a8cff',
      }}
    >
      {items.map(({ name, component, options }, i) => (
        <Drawer.Screen
          name={name}
          key={`key-${i}`}
          component={component}
          options={options}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default RootDrawer;

const Styles = StyleSheet.create({
  header: {
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(100, 100, 100, .3)',
  },
  image: {
    width: 45,
    height: 45,
  },
  title: {
    marginLeft: 12,
  },
  footer: {
    marginBottom: 100,
  },
});
