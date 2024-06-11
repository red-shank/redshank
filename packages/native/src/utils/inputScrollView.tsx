import React from 'react';
import ScrollView, {
  InputScrollViewProps,
} from 'react-native-input-scroll-view';

export const InputScrollView: React.FC<InputScrollViewProps> = ({
  keyboardOffset = 100,
  ...rest
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardOffset={keyboardOffset}
      {...rest}
    />
  );
};
