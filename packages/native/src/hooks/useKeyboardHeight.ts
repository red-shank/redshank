import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      function onKeyboardDidShow(e: KeyboardEvent) {
        setKeyboardHeight(e.endCoordinates.height);
      }

      function onKeyboardDidHide() {
        setKeyboardHeight(0);
      }

      const showSubscription = Keyboard.addListener(
        'keyboardWillShow',
        onKeyboardDidShow
      );
      const hideSubscription = Keyboard.addListener(
        'keyboardWillHide',
        onKeyboardDidHide
      );
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }
    return null;
  }, []);

  return keyboardHeight;
};
