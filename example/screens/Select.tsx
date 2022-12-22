import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title, Select, Space } from 'react-native-beauty-design';

const items = [
  {
    label: 'Uno',
    value: 'uno',
  },
  {
    label: 'Dos',
    value: 'dos',
  },
];

const SelectScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Space orientation="vertical">
          <Title>Default Select</Title>
          <Select size="small" placeholder="Select text" items={items} />
          <Select size="middle" placeholder="Select text" items={items} />
          <Select size="large" placeholder="Select text" items={items} />

          <Select
            error={true}
            items={items}
            size="middle"
            placeholder="Select item..."
            textError="This is error"
          />
        </Space>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default SelectScreen;
