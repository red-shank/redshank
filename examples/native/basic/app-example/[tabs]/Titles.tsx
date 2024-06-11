import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title, Space, Button } from '@redshank/native';

type AlignType = 'left' | 'right' | 'center';
type Transform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

const TitleScreen = () => {
  const [align, setAlign] = useState<AlignType>('left');
  const [transform, setTransform] = useState<Transform>('none');
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={1}>Best And The Chuck Norris Effect.</Title>
          <Title level={2}>Best And The Chuck Norris Effect.</Title>
          <Title level={3}>Best And The Chuck Norris Effect.</Title>
          <Title level={4}>Best And The Chuck Norris Effect.</Title>
          <Title level={5}>Best And The Chuck Norris Effect.</Title>
          <Title level={6}>Best And The Chuck Norris Effect.</Title>

          <Title level={2} align={align}>
            Align {align}
          </Title>
          <Space>
            <Button onPress={() => setAlign('left')}>Left</Button>
            <Button color="black" onPress={() => setAlign('center')}>
              Center
            </Button>
            <Button onPress={() => setAlign('right')}>Right</Button>
          </Space>
          <View style={{ height: 30 }} />
          <Title level={2} transform={transform}>
            Transform {transform}
          </Title>
          <Space>
            <Button onPress={() => setTransform('none')}>None</Button>
            <Button onPress={() => setTransform('capitalize')}>
              Capitalize
            </Button>
            <Button onPress={() => setTransform('uppercase')}>Uppercase</Button>
            <Button onPress={() => setTransform('lowercase')}>Lowercase</Button>
          </Space>
        </View>
        <View style={{ height: 75 }} />
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

export default TitleScreen;
