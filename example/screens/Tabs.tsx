import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tabs, Title, Text, useTheme } from '@redshank/native';

const MyCustomTab = ({ label }: { label: string }) => <Text>{label}</Text>;

const tabs = [
  {
    key: 'tab-1',
    label: 'Tab 1',
    children: <Text>Tab 1</Text>,
  },
  {
    key: 'tab-2',
    label: 'Tab 2',
    children: <Text>Tab 2</Text>,
  },
  {
    key: 'tab-3',
    label: 'Tab 3',
    children: <MyCustomTab label="Tab 3" />,
  },
];

const TabScreen = () => {
  const { isDark, colors } = useTheme();
  return (
    <View style={styles.container}>
      <View>
        <Title level={1}>Tabs Menu</Title>
        <Tabs defaultActiveKey={tabs[0].key} items={tabs} />

        <Title level={1}>With prefix</Title>
        <Tabs
          defaultActiveKey={tabs[0].key}
          prefix={<Text>This is a prefix</Text>}
          items={tabs}
        />

        <Title level={1}>With suffix</Title>
        <Tabs
          defaultActiveKey={tabs[0].key}
          suffix={<Text>This is a suffix</Text>}
          items={tabs}
        />

        <Title level={1}>Tabs Custom Render</Title>
        <Tabs
          defaultActiveKey={tabs[0].key}
          items={tabs}
          renderTabItem={({ key, label, onPress, isActive }) => (
            <TouchableOpacity
              key={key}
              style={StyleSheet.flatten([
                styles.card,
                {
                  backgroundColor: isActive
                    ? colors.primary
                    : 'rgba(100, 100, 100, .3)',
                },
              ])}
              onPress={onPress}
            >
              <Text
                align="center"
                style={styles.cardTitle}
                color={isDark ? 'opacityBlackText' : 'opacityWhiteText'}
              >
                {label}
              </Text>
              <Text align="center" style={styles.cardValue}>
                {key}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  card: {
    padding: 10,
    backgroundColor: 'rgba(100, 100, 100, .3)',
    marginRight: 10,
    borderRadius: 16,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  cardValue: {
    padding: 5,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default React.memo(TabScreen);
