import { FlexAlignType } from 'react-native';

interface Justifies {
  [ket: string]: FlexAlignType;
}

export const justifies: Justifies = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};
