import React from 'react';
import {
  Box,
  Center,
  HorizontalCenter,
  VerticalCenter,
  Text,
} from '@redshank/native';

const AlignmentScreen = () => {
  return (
    <Box>
      <HorizontalCenter py={10} backgroundColor="secondary" mt={5}>
        <Text>Horizontal Center</Text>
      </HorizontalCenter>

      <VerticalCenter py={10}>
        <Text>Vertical Center</Text>
      </VerticalCenter>

      <Center py={10}>
        <Text>Center</Text>
      </Center>
    </Box>
  );
};

export default AlignmentScreen;
