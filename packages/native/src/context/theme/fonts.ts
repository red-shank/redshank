import { Platform } from 'react-native';
import { FontSizesProps, TitleFontSizesProps } from './types';

const isIOS = Platform.OS === 'ios';

export const fonts = {
  thin: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif-thin',
    fontWeight: '100'
  },
  light: {
    fontFamily: isIOS ? 'Helvetica-Light' : 'sans-serif-light',
    fontWeight: '200'
  },
  regular: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'normal'
  },
  medium: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif-medium',
    fontWeight: '600'
  },
  bold: {
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'bold'
  },
  black: {
    // note(brentvatne): sans-serif-black is only supported on Android 5+,
    // we can detect that here and use it in that case at some point.
    fontFamily: isIOS ? 'Helvetica' : 'sans-serif',
    fontWeight: 'bold'
  }
};

export const fontSizes: FontSizesProps = {
  tiny: 6,
  xxs: 9,
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 22,
  xl: 27,
  xxl: 32
};

export const titleFontSizes: TitleFontSizesProps = {
  level1: 32,
  level2: 28,
  level3: 24,
  level4: 22,
  level5: 18,
  level6: 16
};
