import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Carousel, Title, Image } from '@redshank/native';

const items = [
  {
    key: '1',
    image:
      'https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg',
  },
  {
    key: '2',
    image:
      'https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg',
  },
  {
    key: '3',
    image:
      'https://www.fotonostra.com/fotografia/fotos/fotografiarpaisajes.jpg',
  },
];

const CarouselScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Title level={1}>Carousel</Title>
        <Carousel>
          {items.map(({ key, image }) => (
            <View key={key} style={styles.item}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </Carousel>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  item: {
    height: 200,
    backgroundColor: 'red',
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default CarouselScreen;
