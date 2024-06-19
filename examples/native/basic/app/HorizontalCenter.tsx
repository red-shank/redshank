import React from 'react';
import { HorizontalCenter, ScrollView, Text } from '@redshank/native';

const HorizontalCenterScreen = () => {
  return (
    <ScrollView>
      <HorizontalCenter>
        <Text>Horizontal Center</Text>
      </HorizontalCenter>
    </ScrollView>
  );
};

export default React.memo(HorizontalCenterScreen);
