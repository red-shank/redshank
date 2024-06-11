import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Space,
  Alert,
} from '@redshank/native';

const AlertScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Alert</Title>
          <Space orientation="vertical">
            <Alert type="success" message="This is an alert" />
            <Alert type="warning" message="This is an alert" />
            <Alert type="error" message="This is an alert" />
            <Alert type="info" message="This is an alert" />
          </Space>
        </View>

        <View>
          <Title level={3}>With shadow</Title>
          <Space orientation="vertical">
            <Alert type="success" message="This is an alert" shadow />
            <Alert type="warning" message="This is an alert" shadow />
            <Alert type="error" message="This is an alert" shadow />
            <Alert type="info" message="This is an alert" shadow />
          </Space>
        </View>

        <View>
          <Title level={3}>Alert closable</Title>
          <Space orientation="vertical">
            <Alert
              type="success"
              message="This is an alert This is an alert This is an alert This is an alert This is an alert This is an alert"
              closable
            />
            <Alert type="warning" message="This is an alert" closable />
            <Alert type="error" message="This is an alert" closable />
            <Alert type="info" message="This is an alert" closable />
          </Space>
        </View>
        {/* END */}
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

export default AlertScreen;
