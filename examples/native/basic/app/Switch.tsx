import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch, ScrollView, Title, Icon, Box } from '@redshank/native';

const SwitchScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Switch</Title>
          <Box flexDirection="row" gap={1}>
            <Switch size="large" />
            <Switch />
            <Switch size="small" />
          </Box>
        </View>

        <View>
          <Title level={3}>Custom Switch</Title>
          <Switch
            activeColor="secondary"
            deactiveColor="pink.500"
            thumbActiveColor="primary"
            thumbDisabledColor="secondary"
          />
        </View>
        <View>
          <Title level={3}>Bordered</Title>
          <Box flexDirection="row" gap={1}>
            <Switch bordered />
            <Switch bordered borderColor="warning" />
          </Box>
        </View>
        <View>
          <Title level={3}>With Icon</Title>
          <Box flexDirection="row" gap={1}>
            <Switch
              icon={{
                false: <Icon name="sunny" type="ionicon" color="text" />,
                true: <Icon name="moon" type="ionicon" color="text" />
              }}
            />
            <Switch
              thumbActiveColor="error"
              icon={{
                false: (
                  <Icon name="microphone" type="font-awesome-5" color="error" />
                ),
                true: <Icon name="microphone-slash" type="font-awesome-5" />
              }}
            />
          </Box>
        </View>
        <View>
          <Title level={3}>With Error</Title>
          <Switch error textError="This is a error" />
        </View>

        <View>
          <Title level={3}>Rounded</Title>
          <Box flexDirection="row" gap={1}>
            <Switch size="large" type="square" />
            <Switch type="square" />
            <Switch size="small" type="square" />
          </Box>
          <Box flexDirection="row" gap={1}>
            <Switch size="large" type="rounded" />
            <Switch type="rounded" />
            <Switch size="small" type="rounded" />
          </Box>
          <Box flexDirection="row" gap={1}>
            <Switch size="large" type="circle" />
            <Switch type="circle" />
            <Switch size="small" type="circle" />
          </Box>
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

export default SwitchScreen;
