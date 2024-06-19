import React from 'react';
import { Center, ScrollView, Text } from '@redshank/native';

const CenterScreen = () => {
  return (
    <ScrollView>
      <Center>
        <Text>Center</Text>
      </Center>
    </ScrollView>
  );
};

export default React.memo(CenterScreen);
