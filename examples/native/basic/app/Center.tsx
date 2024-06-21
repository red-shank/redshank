import React from 'react';
import { Center, Container, Text } from '@redshank/native';

const CenterScreen = () => {
  return (
    <Container>
      <Center>
        <Text>Center</Text>
      </Center>
    </Container>
  );
};

export default React.memo(CenterScreen);
