import { SxProps } from '../lib/styleDictionary';

export type BaseProps = Partial<SxProps> & {
  sx?: SxProps;
};
