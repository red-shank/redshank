import React from 'react';
import { StyleSheet, View } from 'react-native';
import { InputScrollView, Title, Radio } from '@redshank/native';

const RadioScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Radio</Title>
          <Radio label="No Select" value="hi" />
          <Radio isActive={true} label="Select" value="hi" />
        </View>

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
            textError="Error description"
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
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
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

export default RadioScreen;
