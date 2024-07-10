import React from 'react';
import { StyleSheet } from 'react-native';
import { Carousel, Title, Image, Box, useTheme } from '@redshank/native';

const items = [
  {
    key: '1',
    image:
      'https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg'
  },
  {
    key: '2',
    image:
      'https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg'
  },
  {
    key: '3',
    image: 'https://www.fotonostra.com/fotografia/fotos/fotografiarpaisajes.jpg'
  }
];

const CarouselScreen = () => {
  const theme = useTheme();

  return (
    <Box p={2}>
      <Title level={1}>Carousel</Title>
      <Carousel maxWidth={theme.width - theme.spacing * 4}>
        {items.map(({ key, image }) => (
          <Box key={key} height={200}>
            <Image source={image} style={styles.image} />
          </Box>
        ))}
      </Carousel>

      <Carousel variant="ios" maxWidth={theme.width - theme.spacing * 2}>
        {items.map(({ key, image }) => (
          <Box key={key} height={200} borderRadius={3}>
            <Image source={image} style={styles.image} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12
  }
});

export default CarouselScreen;
