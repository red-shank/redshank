import { SxProps } from '../lib/styleDictionary';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type BaseProps = Partial<SxProps> & {
  sx?: SxProps;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
};
