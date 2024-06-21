import {
  useSafeAreaFrame,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { getDefaultHeaderHeight } from '../utils/header';
import { Platform } from 'react-native';

export default function useHeaderHeight() {
  try {
    const frame = useSafeAreaFrame();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const insets = useSafeAreaInsets();

    return getDefaultHeaderHeight(frame, false, insets.top);
  } catch (e) {
    console.warn(
      'We recommend integrating the ThemeProvider to better calculate the height of the statusBar'
    );

    return Platform.select({
      android: 70,
      default: 50
    });
  }
}
