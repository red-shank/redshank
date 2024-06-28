import {
  useSafeAreaFrame,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { getDefaultHeaderHeight } from '../utils/header';
import { Platform } from 'react-native';

export default function useHeaderHeight(defaultHeight?: number) {
  try {
    const frame = useSafeAreaFrame();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const insets = useSafeAreaInsets();

    if (!!defaultHeight || typeof defaultHeight === 'number') {
      return defaultHeight;
    }

    return getDefaultHeaderHeight(frame, false, insets.top);
  } catch (e) {
    console.warn(
      'We recommend integrating the SafeAreaProvider to better calculate the height of the statusBar'
    );

    if (!!defaultHeight || typeof defaultHeight === 'number') {
      return defaultHeight;
    }

    return Platform.select({
      android: 70,
      default: 50
    });
  }
}
