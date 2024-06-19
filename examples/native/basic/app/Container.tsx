import React from 'react';
import { Container, ScrollView, Text } from '@redshank/native';

const CardScreen = () => {
  return (
    <ScrollView>
      <Container
        bg="secondary"
        sx={{
          root: {
            bg: 'primary'
          },
          container: {
            bg: 'secondary'
          }
        }}
      >
        <Text>Container</Text>
      </Container>
    </ScrollView>
  );
};

export default React.memo(CardScreen);
