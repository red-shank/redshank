import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, ScrollView, Image, Text } from '@redshank/native';

const ImageScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Default Image</Title>

          <Image
            source="https://storage.googleapis.com/pod_public/1300/167870.jpg"
            width={200}
            height={200}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Placeholder Image</Title>

          <Image
            placeholderContent={<Text align="center">Loading...</Text>}
            source="https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_1200m_africa_s_labeled.png"
            width={200}
            height={200}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>Error Image</Title>

          <Image
            placeholderContent={<Text align="center">Loading...</Text>}
            errorContent={<Text align="center">Error to fetch</Text>}
            source="https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/57603240_16x9_01p/BlackMarble_2016_1200m_africa_s_labeled.png"
            width={200}
            height={200}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Title level={3}>With transparency in Image</Title>
          <Image
            width={200}
            height={200}
            source="https://dev.getjogo.com/images/empty-state.png"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 32,
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

export default ImageScreen;
