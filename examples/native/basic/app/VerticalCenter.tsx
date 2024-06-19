import React from 'react';
import { VerticalCenter, ScrollView, Text } from '@redshank/native';

const VerticalCenterScreen = () => {
  return (
    <ScrollView>
      <VerticalCenter>
        <Text>Vertical Center</Text>
      </VerticalCenter>
    </ScrollView>
  );
};

export default React.memo(VerticalCenterScreen);
