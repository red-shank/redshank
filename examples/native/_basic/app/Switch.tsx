import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Switch,
  ScrollView,
  Title,
  Icon,
} from '@redshank/native';

const SwitchScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Switch</Title>
          <Switch size="small" />
          <Switch />
          <Switch size="large" />
        </View>

        <View>
          <Title level={3}>Custom Switch</Title>
          <Switch
            activeColor="secondary"
            deactiveColor="pink500"
            thumbActiveColor="primary"
            thumbDisabledColor="secondary"
          />
        </View>
        <View>
          <Title level={3}>Bordered</Title>
          <Switch bordered />
          <Switch bordered borderColor="warning" />
        </View>
        <View>
          <Title level={3}>With Icon</Title>
          <Switch
            icon={{
              false: <Icon name="sunny" type="ionicon" color="text" />,
              true: <Icon name="moon" type="ionicon" color="text" />,
            }}
          />
          <Switch
            thumbActiveColor="error"
            icon={{
              false: (
                <Icon name="microphone" type="font-awesome-5" color="error" />
              ),
              true: <Icon name="microphone-slash" type="font-awesome-5" />,
            }}
          />
        </View>
        <View>
          <Title level={3}>With Error</Title>
          <Switch error textError="This is a error" />
        </View>

        <View>
          <Title level={3}>Square Switch</Title>
          <Switch size="small" type="square" />
          <Switch type="square" />
          <Switch size="large" type="square" />
        </View>
      </View>
      <View style={{ height: 75 }} />
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

export default SwitchScreen;
