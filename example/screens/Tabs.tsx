import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tabs, Title, Text, useUIProvider } from '@redshank/native';

const tabs = [
  {
    key: 'tab-1',
    name: '123 calificaciones',
    value: '4.7',
    summary: 'estrellas',
  },
  {
    key: 'tab-2',
    name: 'edad',
    value: '14+',
    summary: 'años',
  },
  {
    key: 'tab-3',
    name: 'lugar',
    value: '#14',
    summary: 'rompecabezas',
  },
  {
    key: 'tab-4',
    name: 'idioma',
    value: 'ES',
    summary: 'y 10 mas',
  },
  {
    key: 'tab-6',
    name: 'text',
    value: 'Text',
    summary: 'y 10 mas',
  },
  {
    key: 'tab-5',
    name: 'tamaño',
    value: '100',
    summary: 'MB',
  },
];

const TabScreen = () => {
  const { isDark } = useUIProvider();
  return (
    <View style={styles.container}>
      <View>
        <Title level={1}>Tabs Menu</Title>
        <Tabs items={tabs} onChange={(key: string) => alert(key)} />

        <Title level={1}>With prefix</Title>
        <Tabs
          prefix={<Text>This is a prefix</Text>}
          items={tabs}
          onChange={(key: string) => alert(key)}
        />

        <Title level={1}>With suffix</Title>
        <Tabs
          suffix={<Text>This is a suffix</Text>}
          items={tabs}
          onChange={(key: string) => alert(key)}
        />

        <Title level={1}>Tabs Custom Render</Title>
        <Tabs
          noBorder
          items={tabs}
          render={({ value, key, name, summary }) => (
            <TouchableOpacity
              key={key}
              style={styles.card}
              onPress={() => alert(`${name}: ${value}`)}
            >
              <Text
                color={isDark ? 'opaityBlackText' : 'opaityWhiteText'}
                align="center"
                style={styles.cardTitle}
              >
                {name}
              </Text>
              <Text align="center" style={styles.cardValue}>
                {value}
              </Text>
              <Text
                color={isDark ? 'opaityBlackText' : 'opaityWhiteText'}
                align="center"
                style={styles.cardSubTitle}
              >
                {summary}
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
