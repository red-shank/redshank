import React from 'react';
import { ThemeProvider as InternalThemeProvider } from './theme/context';
import { colorsDark, colorsLight, zIndices } from './theme/defaultValues';
import { ThemeContextProps } from './theme/types';
import { RuntimeProvider } from './runtime/runtime.context';

const ThemeProvider: React.FC<ThemeContextProps> = ({
  children,
  packs,
  ...rest
}) => {
  return (
    <RuntimeProvider packs={packs}>
      <InternalThemeProvider {...rest}>{children}</InternalThemeProvider>
    </RuntimeProvider>
  );
};

export * from './theme/types';
export * from './theme/color.type';
export * from './theme/defaultValues';
export { ThemeProvider, colorsDark, colorsLight, zIndices };
