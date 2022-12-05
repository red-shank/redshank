import { HeaderProps } from '../../Header/types';

export type NavigationContextProps = {
  header?: null | HeaderProps;
  setValues: (value: Omit<NavigationContextProps, 'setValues'>) => void;
};
