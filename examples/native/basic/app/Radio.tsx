import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Radio, Box, RadioButton, ScrollView } from '@redshank/native';

const RadioScreen = () => {
  return (
    <ScrollView>
      <Box gap={2} style={styles.container}>
        <Box gap={1}>
          <Title level={3}>Default Radio</Title>
          <Radio label="No Select" value="hi" />
          <Radio isActive label="Select" value="hi" />
          <Radio type="square" label="Select" value="hi" />
          <Radio type="rounded" label="Select" value="hi" />
          <Radio type="circle" isActive label="Select" value="hi" />
        </Box>

        <View>
          <Title level={3}>Group Radio</Title>
          <Radio.Group>
            <Radio label="No Select" value="no-selected" />
            <Radio label="Select" value="selected" />
          </Radio.Group>
        </View>

        <View>
          <Title level={3}>Vertical Align</Title>
          <Radio.Group align="vertical">
            <Radio label="No Select" value="no-selected" />
            <Radio label="Select" value="selected" />
          </Radio.Group>
        </View>

        <View>
          <Title level={3}>Group Radio</Title>
          <Radio.Group
            error
            helperText="Error description"
            defaultValue="no-selected"
          >
            <Radio label="No Select" value="no-selected" />
            <Radio label="Select" value="selected" />
          </Radio.Group>
        </View>

        <View>
          <Title level={3}>Small</Title>
          <Radio.Group size="small" defaultValue="no-selected">
            <Radio label="No Select" value="no-selected" />
            <Radio label="Select" value="selected" />
          </Radio.Group>
        </View>

        <View>
          <Title level={3}>Large</Title>
          <Radio.Group size="large" defaultValue="no-selected">
            <Radio label="No Select" value="no-selected" />
            <Radio label="Select" value="selected" />
          </Radio.Group>
        </View>

        <View>
          <Title level={3}>Radio Button</Title>
          <RadioButton
            defaultValue="opt-2"
            options={[
              {
                label: 'Option 1',
                value: 'opt-1'
              },
              {
                label: 'Option 2',
                value: 'opt-2'
              },
              {
                label: 'Option 3',
                value: 'opt-3'
              }
            ]}
          />
        </View>
      </Box>
      <View style={{ height: 75 }} />
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

export default RadioScreen;
