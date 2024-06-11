import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, InputScrollView, Controller } from '@redshank/native';

const ControllerScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={1}>Controller</Title>
          <Title level={3}>Basic</Title>
          <Controller />
        </View>

        <View>
          <Title level={3}>With limits</Title>
          <Controller
            min={0}
            max={3}
            minOverflow={() => alert('This min value')}
            maxOverflow={() => alert('max value')}
          />
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

export default ControllerScreen;
