import React from 'react';
import { NavigationContextProps } from './types';

const NavigationContext = React.createContext<
  NavigationContextProps | undefined
>(undefined);

export const NavigationProvider = ({
  children,
  defaultValue = { header: null },
}: {
  defaultValue?: Omit<NavigationContextProps, 'setValues'> | null;
  children?: React.ReactNode;
}) => {
  const [settings, setSettings] =
    React.useState<Omit<NavigationContextProps, 'setValues'>>(defaultValue);

  const setValues = React.useCallback(
    (value: Omit<NavigationContextProps, 'setValues'>) => {
      setSettings(value);
    },
    []
  );

  return (
    <NavigationContext.Provider value={{ ...settings, setValues }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return React.useContext(NavigationContext);
};
