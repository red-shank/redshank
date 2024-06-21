import React from 'react';
import {
  Box,
  Center,
  HorizontalCenter,
  VerticalCenter,
  Text
} from '@redshank/native';

const AlignmentScreen = () => {
  return (
    <Box>
      <HorizontalCenter py={10} bg="secondary" mt={5}>
        <Text>Horizontal Center</Text>
      </HorizontalCenter>

      <VerticalCenter py={10} bg="primary">
        <Text>Vertical Center</Text>
      </VerticalCenter>

      <Center py={10} bg="success">
        <Text>Center</Text>
      </Center>
    </Box>
  );
};

export default AlignmentScreen;
