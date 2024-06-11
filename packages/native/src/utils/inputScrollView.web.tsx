import React from 'react';
import { ScrollView, ScrollViewProps } from '../components/ScrollView';

export const InputScrollView: React.FC<ScrollViewProps> = (props) => {
  return <ScrollView showsVerticalScrollIndicator={false} {...props} />;
};
