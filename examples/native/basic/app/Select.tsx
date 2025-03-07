import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title, Select, Box } from '@redshank/native';

const items = [
  {
    label: 'Uno',
    value: 'uno'
  },
  {
    label: 'Dos',
    value: 'dos'
  },
  {
    label: 'Tres',
    value: 'Tres'
  },
  {
    label: 'Cuatro',
    value: 'Cuatro'
  },
  {
    label: 'Cinco',
    value: 'Cinco'
  },
  {
    label: 'Seis',
    value: 'Seis'
  },
  {
    label: 'Siete',
    value: 'Siete'
  },
  {
    label: 'Ocho',
    value: 'Ocho'
  }
];

const SelectScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Box gap={1}>
          <Title>Default Select</Title>
          <Select size="small" placeholder="Select text" items={items} />
          <Select size="middle" placeholder="Select text" items={items} />
          <Select size="large" placeholder="Select text" items={items} />

          <Select
            error={true}
            items={items}
            size="middle"
            placeholder="Select item..."
            helperText="This is error"
          />
        </Box>

        <Box gap={1}>
          <Title>Shape Select</Title>
          <Select shape="square" placeholder="Select text" items={items} />
          <Select shape="rounded" placeholder="Select text" items={items} />
          <Select shape="circle" placeholder="Select text" items={items} />
        </Box>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%'
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)'
  },
  space: {
    marginTop: 50
  }
});

export default SelectScreen;
