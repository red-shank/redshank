import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, InputScrollView, Progress } from '@redshank/native';

const ProgressScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ gap: 10 }}>
          <Title level={3}>Progress</Title>
          <Progress
            style={{ width: '65%' }}
            current={10}
            count={100}
            size={2}
          />
          <Progress activeColor="success" current={50} count={75} />
          <Progress activeColor="error" current={10} count={45} />
        </View>
      </View>
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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

export default ProgressScreen;
